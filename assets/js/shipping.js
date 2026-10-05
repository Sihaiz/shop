/* ============================================================
   运费计算引擎
   ------------------------------------------------------------
   规则：
     实际重量 = Σ(单品重量 × 数量) + 外包装重量
     体积重   = Σ(单品体积 × 数量) × 空隙系数 ÷ 体积除数 × 1000
     计费重   = max(实际重量, 体积重)，且不低于最低计费重
     运费     = 分区阶梯价(计费重) + 超大件附加费
     免运     = 商品小计 ≥ 门槛 且 计费重 ≤ 免运上限

   体积重这行的意义：轻但占地方的货（收纳盒、枕头、猫窝）
   会被按体积收费，运费可能远超其实际重量对应的价格。
   这就是为什么选品必须看「体积 ÷ 重量」比。
   ============================================================ */

(function () {
  'use strict';

  function zoneById(id) {
    var zones = window.CONFIG.shipping.zones;
    return zones.find(function (z) { return z.id === id; }) || zones[0];
  }

  /* 按国家 + 州推断分区。
     真实分区只有 US / US-AKHI / CA / UK / AU 五个；
     其余国家由国家表（countries.js）按区域就近映射：
       美洲 → US ・ 欧洲 & 中东非洲 → UK ・ 亚洲 & 大洋洲 → AU
     ⚠️ 上线前需替换成承运商真实分区报价，否则运费会算错。 */
  window.zoneForAddress = function (country, state) {
    var c = String(country || '').toUpperCase();
    if (c === 'US') {
      var s = String(state || '').trim().toUpperCase();
      if (s === 'AK' || s === 'HI') return 'US-AKHI';
      return 'US';
    }
    if (typeof window.zoneForCountry === 'function') return window.zoneForCountry(c);
    if (c === 'CA') return 'CA';
    if (c === 'GB') return 'UK';
    if (c === 'AU') return 'AU';
    return 'US';
  };

  /* 阶梯查价 */
  function tierPrice(zone, billableG) {
    var tiers = zone.tiers;
    for (var i = 0; i < tiers.length; i++) {
      if (billableG <= tiers[i].maxG) return tiers[i].price;
    }
    var last = tiers[tiers.length - 1];
    var over = Math.ceil((billableG - last.maxG) / 1000);
    return Math.round((last.price + over * zone.extraPerKg) * 100) / 100;
  }

  function g2kg(g) { return Math.round(g) / 1000; }

  /* ============================================================
     主计算函数
     lines   购物车行：[{ product, variant, qty }]
     zoneId  分区 id
     subtotal 商品小计（用于免运判定）
     ============================================================ */
  window.computeQuote = function (lines, zoneId, subtotal) {
    var cfg = window.CONFIG.shipping;
    var zone = zoneById(zoneId);

    var actualG = 0;
    var volumeCm3 = 0;
    var oversize = false;
    var items = [];

    lines.forEach(function (line) {
      var v = line.variant;
      var q = line.qty;
      actualG += v.weight * q;
      volumeCm3 += v.volumeCm3 * q;
      if (v.dims.l > cfg.oversize.maxSideCm ||
          v.dims.w > cfg.oversize.maxSideCm ||
          v.dims.h > cfg.oversize.maxSideCm) {
        oversize = true;
      }
      items.push({
        sku: v.sku,
        label: v.label,
        qty: q,
        unitWeightG: v.weight,
        unitVolumeCm3: v.volumeCm3,
        lineWeightG: v.weight * q,
        lineVolumeCm3: v.volumeCm3 * q
      });
    });

    var packedWeightG = actualG + (lines.length ? cfg.packing.weightG : 0);
    var packedVolumeCm3 = volumeCm3 * (lines.length ? cfg.packing.volumeFactor : 1);

    var volumetricG = packedVolumeCm3 / cfg.volumetricDivisor * 1000;

    /* 计费重口径 */
    var basis = cfg.weightBasis || 'max';
    var rawBillable;
    if (basis === 'actual') rawBillable = packedWeightG;
    else if (basis === 'volumetric') rawBillable = volumetricG;
    else rawBillable = Math.max(packedWeightG, volumetricG);

    var billableG = Math.max(rawBillable, lines.length ? cfg.minBillableG : 0);
    billableG = Math.round(billableG);

    var baseRate = lines.length ? tierPrice(zone, billableG) : 0;
    var surcharge = (lines.length && oversize) ? cfg.oversize.surcharge : 0;

    var overFreeCap = billableG > cfg.freeMaxBillableG;
    var meetsThreshold = subtotal >= cfg.freeThreshold;
    var freeApplied = lines.length > 0 && meetsThreshold && !overFreeCap;

    var shipping = freeApplied ? 0 : Math.round((baseRate + surcharge) * 100) / 100;

    /* 体积重占比：判断是否被体积重支配 */
    var volumetricShare = billableG > 0 && volumetricG > packedWeightG
      ? Math.round(volumetricG / billableG * 100)
      : 0;

    return {
      zone: zone,
      zoneId: zone.id,
      weightBasis: basis,

      actualWeightG: Math.round(actualG),
      packedWeightG: Math.round(packedWeightG),
      volumeCm3: Math.round(packedVolumeCm3),
      volumetricWeightG: Math.round(volumetricG),
      billableWeightG: billableG,
      billableKg: g2kg(billableG),

      volumetricDominates: volumetricG > packedWeightG,
      volumetricShare: volumetricShare,

      oversize: oversize,
      oversizeSurcharge: surcharge,

      baseRate: baseRate,
      shipping: shipping,

      freeThreshold: cfg.freeThreshold,
      freeMaxBillableG: cfg.freeMaxBillableG,
      meetsThreshold: meetsThreshold,
      overFreeCap: overFreeCap,
      freeApplied: freeApplied,
      remainingForFree: Math.max(0, Math.round((cfg.freeThreshold - subtotal) * 100) / 100),

      items: items
    };
  };

  /* 单件商品的计费重估算（详情页用来提示「这一件单独寄要多少钱」） */
  window.quoteSingle = function (product, variant) {
    return window.computeQuote(
      [{ product: product, variant: variant, qty: 1 }],
      window.CONFIG.shipping.defaultZone,
      variant.price
    );
  };

  /* 展示辅助 */
  window.fmtG = function (g) {
    if (g >= 1000) return (g / 1000).toFixed(2).replace(/\.?0+$/, '') + ' kg';
    return Math.round(g) + ' g';
  };

})();
