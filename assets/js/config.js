/* ============================================================
   FINDLY — demo placeholder brand name.
   ⚠️ 上线前必须替换品牌名，并在 USPTO 查出无冲突后才可使用。
   ============================================================ */
window.CONFIG = {
  brand: 'FINDLY',
  tagline: 'Everyday finds under $20',
  currency: 'USD',
  locale: 'en-US',

  /* ---------------- 运费引擎参数 ----------------
     计费重 = max(实际重量, 体积重)
     体积重(g) = 总体积(cm³) × 体积系数 ÷ 体积除数 × 1000

     体积除数怎么选（这决定运费高低，直接问承运商）：
       8000  → 轻小件专线（本 demo 默认，跨境小包最常见）
       6000  → 商业快递（DHL/UPS 类）
       5000  → 空运快递（最贵，全按体积说话）
  ------------------------------------------------ */
  shipping: {
    /* 计费重口径 —— 这一项决定运费是「还行」还是「贵到卖不动」：
       'max'        = max(实际重量, 体积重) → 商业快递 / 空运专线（DHL、云途专线）
       'actual'     = 只按实际重量         → 邮政挂号小包（有尺寸上限，超限拒收）
       'volumetric' = 只按体积重           → 极端抛货专用，一般不用
       低价轻小件业务请优先谈「按实际重量」的挂号小包渠道。 */
    weightBasis: 'max',

    freeThreshold: 29,       // 商品小计门槛：满 $29 免运
    freeMaxBillableG: 1500,  // 免运仅限计费重 ≤ 1.5kg，超了照收
    volumetricDivisor: 8000, // 体积除数
    minBillableG: 50,        // 最低计费重

    // 每单外包装增量
    packing: {
      weightG: 40,           // 纸箱/气泡袋/填充物重量
      volumeFactor: 1.12     // 装箱空隙系数（体积放大 12%）
    },

    // 超大件附加费（任一边超长）
    oversize: {
      maxSideCm: 60,
      surcharge: 6.00
    },

    defaultZone: 'US',

    /* 分区运费表：按计费重阶梯计价
       extraPerKg = 超过最高档后，每增加 1kg 追加的运费 */
    zones: [
      {
        id: 'US',
        label: 'United States — mainland',
        tiers: [
          { maxG: 100,  price: 3.20 },
          { maxG: 250,  price: 4.60 },
          { maxG: 500,  price: 6.20 },
          { maxG: 1000, price: 8.90 },
          { maxG: 2000, price: 14.50 },
          { maxG: 5000, price: 26.00 }
        ],
        extraPerKg: 4.20
      },
      {
        id: 'US-AKHI',
        label: 'United States — Alaska / Hawaii',
        tiers: [
          { maxG: 100,  price: 5.20 },
          { maxG: 250,  price: 7.20 },
          { maxG: 500,  price: 9.60 },
          { maxG: 1000, price: 13.50 },
          { maxG: 2000, price: 21.50 },
          { maxG: 5000, price: 38.00 }
        ],
        extraPerKg: 6.20
      },
      {
        id: 'CA',
        label: 'Canada',
        tiers: [
          { maxG: 100,  price: 4.20 },
          { maxG: 250,  price: 6.00 },
          { maxG: 500,  price: 7.90 },
          { maxG: 1000, price: 11.20 },
          { maxG: 2000, price: 18.00 },
          { maxG: 5000, price: 32.00 }
        ],
        extraPerKg: 5.20
      },
      {
        id: 'UK',
        label: 'United Kingdom',
        tiers: [
          { maxG: 100,  price: 4.60 },
          { maxG: 250,  price: 6.60 },
          { maxG: 500,  price: 8.60 },
          { maxG: 1000, price: 12.20 },
          { maxG: 2000, price: 19.60 },
          { maxG: 5000, price: 34.00 }
        ],
        extraPerKg: 5.40
      },
      {
        id: 'AU',
        label: 'Australia',
        tiers: [
          { maxG: 100,  price: 4.90 },
          { maxG: 250,  price: 6.90 },
          { maxG: 500,  price: 9.00 },
          { maxG: 1000, price: 12.80 },
          { maxG: 2000, price: 20.80 },
          { maxG: 5000, price: 36.00 }
        ],
        extraPerKg: 5.80
      }
    ]
  },

  // ---- 支付接入：三种模式，改这里即可切换 ----
  // 'demo'         本地演示，提交订单只弹提示，不产生真实交易
  // 'payment_link' 直接跳支付商收款链接（零后端，最快上线）
  // 'endpoint'     调用自建 serverless 端点创建支付会话（可动态算价，正式方案）
  payment: {
    mode: 'demo',
    stripePaymentLink: '',
    checkoutEndpoint: '/api/checkout'
  },

  supportEmail: 'hello@example.com',
  tiktokHandle: '@yourbrand',
  showDemoNotice: true
};
