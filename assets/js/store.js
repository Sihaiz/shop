/* ============================================================
   站点公共逻辑：购物车（款式级）、格式化、共享组件
   零依赖，全部原生 JS

   购物车行结构：{ pid: 商品ID, sel: {Finish:'Frosted'}, qty: 2 }
   行唯一键 = pid::选项值按顺序拼接
   → 同一商品的不同款式算作两行，可同时结算
   ============================================================ */

(function () {
  'use strict';

  var CART_KEY = 'findly_cart_v2';
  var ZONE_KEY = 'findly_zone';

  /* ---------- 工具 ---------- */

  window.$ = function (sel, root) { return (root || document).querySelector(sel); };
  window.$$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };

  window.money = function (n) {
    var v = Number(n) || 0;
    return '$' + v.toFixed(2);
  };

  window.escapeHTML = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  /* ---------- 占位图（内联 SVG，零外部资源） ---------- */

  var ICONS = {
    box:  '<rect x="7" y="12" width="26" height="20" rx="3"/><path d="M7 20h26"/><path d="M15 12V7h10v5"/>',
    pot:  '<path d="M8 18h24v10a5 5 0 0 1-5 5H13a5 5 0 0 1-5-5z"/><path d="M6 18h28"/><path d="M20 12v6"/>',
    paw:  '<circle cx="14" cy="16" r="3.2"/><circle cx="26" cy="16" r="3.2"/><circle cx="9" cy="24" r="2.8"/><circle cx="31" cy="24" r="2.8"/><path d="M20 26c-5 0-8 3.4-8 6.6 0 2.6 2 4.4 4.6 4.4 1.4 0 2.4-.6 3.4-.6s2 .6 3.4.6c2.6 0 4.6-1.8 4.6-4.4C28 29.4 25 26 20 26z"/>',
    leaf: '<path d="M31 9c0 12-6.5 19-14 19a7 7 0 0 1-7-7C10 13.6 18 9 31 9z"/><path d="M10 31c4-8 10-13 16-16"/>',
    gem:  '<path d="M20 7l9 7-9 19-9-19z"/><path d="M11 14h18"/><path d="M20 7l-4 7 4 19 4-19z"/>',
    gift: '<rect x="7" y="15" width="26" height="18" rx="2.5"/><path d="M7 22h26"/><path d="M20 15v18"/><path d="M20 15c-4 0-7-2-7-4.5S15 7 17 8.5 20 15 20 15zm0 0c4 0 7-2 7-4.5S25 7 23 8.5 20 15 20 15z"/>'
  };

  window.thumbSVG = function (product, opt) {
    opt = opt || {};
    var st = window.CATEGORY_STYLE[product.category] || window.CATEGORY_STYLE.organization;
    var icon = ICONS[st.icon] || ICONS.box;
    return '<svg class="thumb-svg" viewBox="0 0 40 40" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
      '<g fill="none" stroke="' + st.ink + '" stroke-width="1.6" stroke-linecap="round" ' +
      'stroke-linejoin="round" opacity="0.85">' + icon + '</g></svg>';
  };

  window.thumbStyle = function (product) {
    var st = window.CATEGORY_STYLE[product.category] || window.CATEGORY_STYLE.organization;
    return 'background:' + st.c1 + ';';
  };

  /* ---------- 购物车 ---------- */

  function readCart() {
    try {
      var raw = localStorage.getItem(CART_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
  }

  function writeCart(items) {
    try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch (e) {}
    document.dispatchEvent(new CustomEvent('cart:change'));
  }

  function keyOf(item) {
    return window.lineKey(item.pid, (item.sel || []).join('|'));
  }

  window.cart = {
    raw: readCart,

    /* 加购：pid + 选项选择对象 + 数量 */
    add: function (pid, selection, qty) {
      qty = Math.max(1, parseInt(qty, 10) || 1);
      var p = window.findProduct(pid);
      if (!p) return null;
      var variant = window.resolveVariant(p, selection);
      var selArr = Object.keys(variant.selection).map(function (k) { return variant.selection[k]; });

      var items = readCart();
      var hit = items.find(function (i) {
        return i.pid === pid && (i.sel || []).join('|') === selArr.join('|');
      });
      if (hit) { hit.qty += qty; } else { items.push({ pid: pid, sel: selArr, qty: qty }); }
      writeCart(items);
      return variant;
    },

    setQty: function (lineKeyValue, qty) {
      qty = Math.max(0, Math.floor(qty));
      var items = readCart();
      if (qty === 0) {
        items = items.filter(function (i) { return keyOf(i) !== lineKeyValue; });
      } else {
        var hit = items.find(function (i) { return keyOf(i) === lineKeyValue; });
        if (hit) hit.qty = qty;
      }
      writeCart(items);
    },

    remove: function (lineKeyValue) { window.cart.setQty(lineKeyValue, 0); },
    clear: function () { writeCart([]); },

    count: function () {
      return readCart().reduce(function (s, i) { return s + i.qty; }, 0);
    },

    /* 展开成可渲染的行：解析款式、算单价与行小计 */
    detailed: function () {
      return readCart().map(function (i) {
        var p = window.findProduct(i.pid);
        if (!p) return null;
        var sel = {};
        (p.options || []).forEach(function (g, idx) { sel[g.name] = (i.sel || [])[idx]; });
        var variant = window.resolveVariant(p, sel);
        return {
          key: window.lineKey(i.pid, variant.key),
          product: p,
          variant: variant,
          qty: i.qty,
          line: Math.round(variant.price * i.qty * 100) / 100
        };
      }).filter(Boolean);
    },

    subtotal: function () {
      return Math.round(window.cart.detailed()
        .reduce(function (s, r) { return s + r.line; }, 0) * 100) / 100;
    },

    /* 当前分区（用户可能在购物车里切过） */
    zone: function () {
      try { return localStorage.getItem(ZONE_KEY) || window.CONFIG.shipping.defaultZone; }
      catch (e) { return window.CONFIG.shipping.defaultZone; }
    },
    setZone: function (id) {
      try { localStorage.setItem(ZONE_KEY, id); } catch (e) {}
      document.dispatchEvent(new CustomEvent('cart:change'));
    },

    /* 完整运费试算 */
    quote: function (zoneId) {
      var lines = window.cart.detailed();
      return window.computeQuote(lines, zoneId || window.cart.zone(), window.cart.subtotal());
    },

    shipping: function (zoneId) { return window.cart.quote(zoneId).shipping; },

    total: function (zoneId) {
      return Math.round((window.cart.subtotal() + window.cart.shipping(zoneId)) * 100) / 100;
    }
  };

  /* ---------- 顶部提示 ---------- */

  window.toast = function (msg) {
    var el = document.getElementById('toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'toast';
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('is-on');
    clearTimeout(el._t);
    el._t = setTimeout(function () { el.classList.remove('is-on'); }, 2400);
  };

  /* ---------- Header ---------- */

  function headerHTML() {
    var cfg = window.CONFIG;
    var here = location.pathname.split('/').pop() || 'index.html';
    function nav(href, label) {
      var active = (here === href) ? ' class="is-active"' : '';
      return '<a href="' + href + '"' + active + '>' + label + '</a>';
    }
    var notice = cfg.showDemoNotice
      ? '<div class="demo-bar">Demo build &middot; 品牌名、价格与图片均为占位，上线前必须替换</div>'
      : '';
    return notice +
      '<div class="ship-bar">Free shipping over ' + money(cfg.shipping.freeThreshold) +
        ' &middot; <span>New finds every Wednesday</span></div>' +
      '<header class="site-header">' +
        '<div class="wrap header-inner">' +
          '<a class="logo" href="index.html">' + escapeHTML(cfg.brand) + '</a>' +
          '<nav class="main-nav">' +
            nav('index.html', 'Shop all') +
            nav('product.html?id=bundle-treasure-box', 'Treasure Box') +
            nav('cart.html', 'Cart') +
          '</nav>' +
          '<a class="cart-btn" href="cart.html" aria-label="Cart">' +
            '<span class="cart-label">Cart</span>' +
            '<span class="cart-count" id="cartCount">0</span>' +
          '</a>' +
        '</div>' +
      '</header>';
  }

  /* ---------- Footer ---------- */

  function footerHTML() {
    var cfg = window.CONFIG;
    return '<footer class="site-footer">' +
      '<div class="wrap footer-inner">' +
        '<div class="f-col">' +
          '<p class="f-brand">' + escapeHTML(cfg.brand) + '</p>' +
          '<p class="f-note">' + escapeHTML(cfg.tagline) +
            '. Small, useful things at prices that do not need justifying.</p>' +
        '</div>' +
        '<div class="f-col">' +
          '<p class="f-h">Shop</p>' +
          '<a href="index.html">All finds</a>' +
          '<a href="product.html?id=bundle-treasure-box">Treasure Box</a>' +
          '<a href="index.html?cat=pet">Pet</a>' +
          '<a href="index.html?cat=organization">Storage &amp; Home</a>' +
        '</div>' +
        '<div class="f-col">' +
          '<p class="f-h">Help</p>' +
          '<a href="mailto:' + escapeHTML(cfg.supportEmail) + '">Contact</a>' +
          '<a href="#">Shipping &amp; returns</a>' +
          '<a href="#">Track order</a>' +
        '</div>' +
        '<div class="f-col">' +
          '<p class="f-h">Follow</p>' +
          '<a href="#">TikTok ' + escapeHTML(cfg.tiktokHandle) + '</a>' +
          '<a href="#">Instagram</a>' +
        '</div>' +
      '</div>' +
      '<div class="wrap f-bottom">' +
        '<span>&copy; ' + new Date().getFullYear() + ' ' + escapeHTML(cfg.brand) + '. All rights reserved.</span>' +
        '<span class="f-pay">Secure checkout</span>' +
      '</div>' +
    '</footer>';
  }

  /* ---------- 商品卡 ---------- */

  window.productCardHTML = function (p) {
    var save = p.compareAt ? Math.round((1 - p.price / p.compareAt) * 100) : 0;
    var badge = p.tag
      ? '<span class="badge' + (p.tag.indexOf('Under') === 0 ? ' badge-deal' : '') + '">' + escapeHTML(p.tag) + '</span>'
      : '';
    var optHint = '';
    if (p.options && p.options.length) {
      var g = p.options[0];
      optHint = '<span class="p-opt">' + g.values.length +
        (g.name === 'Colour' ? ' colours' : ' options') + '</span>';
    }
    return '<a class="p-card" href="product.html?id=' + encodeURIComponent(p.id) + '">' +
      '<div class="p-thumb" style="' + thumbStyle(p) + '">' +
        badge +
        thumbSVG(p) +
        (save >= 30 ? '<span class="save-badge">Save ' + save + '%</span>' : '') +
      '</div>' +
      '<div class="p-body">' +
        '<p class="p-title">' + escapeHTML(p.title) + '</p>' +
        '<div class="p-meta">' +
          '<span class="p-rating">&#9733; ' + p.rating.toFixed(1) + '</span>' +
          '<span class="p-reviews">(' + p.reviews + ')</span>' +
          optHint +
        '</div>' +
        '<div class="p-price">' +
          '<span class="p-now">' + money(p.price) + '</span>' +
          (p.compareAt ? '<span class="p-was">' + money(p.compareAt) + '</span>' : '') +
        '</div>' +
      '</div>' +
    '</a>';
  };

  /* ---------- 公共初始化 ---------- */

  window.mountChrome = function () {
    var h = document.getElementById('site-header');
    if (h) h.innerHTML = headerHTML();
    var f = document.getElementById('site-footer');
    if (f) f.innerHTML = footerHTML();
    window.refreshCartCount();
    document.addEventListener('cart:change', window.refreshCartCount);
  };

  window.refreshCartCount = function () {
    var el = document.getElementById('cartCount');
    if (!el) return;
    var n = window.cart.count();
    el.textContent = n;
    el.classList.toggle('is-empty', n === 0);
  };

})();
