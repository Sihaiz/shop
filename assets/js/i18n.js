/* ============================================================
   FINDLY i18n 引擎（零依赖）
   ------------------------------------------------------------
   语言判定优先级：
     1) URL ?lang=xx        —— 分享链接用，最高优先
     2) localStorage        —— 用户手动选过就记住
     3) navigator.languages —— 浏览器语言（最贴近用户真实习惯）
     4) en                  —— 兜底

   字典：assets/i18n/<code>.js，文件内容形如
     window.I18N_DICTS.es = { ui:{...}, cats:{...}, tags:{...},
                              optNames:{...}, optValues:{...}, products:{...} }

   en 为基准语言，任何缺失的键自动回退到 en。

   用法：
     I18N.ready(function () { ...渲染页面... });   // 字典就绪后执行
     I18N.t('cart.total')                           // 取界面文案
     I18N.t('cart.items_line', { n: 3, m: 2 })      // {占位符} 插值
     I18N.product(p, 'title'|'blurb'|'features')    // 商品文案
     I18N.cat('pet') / I18N.tag('New') / I18N.optName('Colour') / I18N.optValue('Sage')
     I18N.zone('US')                                // 运费分区名
     I18N.country('GB')                             // 国家名
     I18N.setLang('es')                             // 切换语言（重载页面）
     I18N.applyStatic()                             // 替换 data-i18n / data-i18n-ph
   ============================================================ */

window.I18N = (function () {
  'use strict';

  var STORE_KEY = 'findly_lang';

  /* 支持的语言清单（顺序 = 切换器展示顺序） */
  var LANGS = [
    { code: 'en', native: 'English',    dir: 'ltr' },
    { code: 'es', native: 'Español',    dir: 'ltr' },
    { code: 'pt', native: 'Português',  dir: 'ltr' },
    { code: 'fr', native: 'Français',   dir: 'ltr' },
    { code: 'de', native: 'Deutsch',    dir: 'ltr' },
    { code: 'it', native: 'Italiano',   dir: 'ltr' },
    { code: 'ru', native: 'Русский',    dir: 'ltr' },
    { code: 'ar', native: 'العربية',    dir: 'rtl' },
    { code: 'ja', native: '日本語',      dir: 'ltr' },
    { code: 'ko', native: '한국어',      dir: 'ltr' },
    { code: 'zh', native: '中文',        dir: 'ltr' }
  ];

  window.I18N_DICTS = window.I18N_DICTS || {};

  var current = null;      // 当前语言 code
  var dict = null;         // 当前语言字典
  var base = null;         // 英文基准字典（兜底）
  var queue = [];          // ready 回调
  var isReady = false;

  /* ---------- 语言判定 ---------- */

  function isSupported(code) {
    return LANGS.some(function (l) { return l.code === code; });
  }

  function fromQuery() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      return q ? String(q).toLowerCase().split('-')[0] : null;
    } catch (e) { return null; }
  }

  function fromStore() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }

  function fromNavigator() {
    var list = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var base = String(list[i]).toLowerCase().split('-')[0];
      if (isSupported(base)) return base;
    }
    return null;
  }

  function detect() {
    var q = fromQuery();      if (q && isSupported(q)) return q;
    var s = fromStore();      if (s && isSupported(s)) return s;
    var n = fromNavigator();  if (n) return n;
    return 'en';
  }

  /* ---------- 字典加载 ---------- */

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('dict load failed: ' + src)); };
      document.head.appendChild(s);
    });
  }

  function loadDict(code) {
    if (window.I18N_DICTS[code]) return Promise.resolve(window.I18N_DICTS[code]);
    return loadScript('assets/i18n/' + code + '.js').then(function () {
      return window.I18N_DICTS[code] || null;
    });
  }

  /* ---------- 取值 ---------- */

  function lookup(code, path) {
    var d = window.I18N_DICTS[code];
    if (!d) return undefined;
    var parts = path.split('.');
    var node = d;
    for (var i = 0; i < parts.length; i++) {
      if (node == null) return undefined;
      node = node[parts[i]];
    }
    return node;
  }

  function interpolate(str, vars) {
    if (!vars) return str;
    return String(str).replace(/\{(\w+)\}/g, function (m, k) {
      return (vars[k] !== undefined && vars[k] !== null) ? String(vars[k]) : m;
    });
  }

  var missing = {};

  /* ui 段是扁平键（'nav.shop_all' 整串是一个 key），不能按 . 拆层级 */
  function uiGet(code, path) {
    var d = window.I18N_DICTS[code];
    if (!d || !d.ui) return undefined;
    var v = d.ui[path];
    return typeof v === 'string' ? v : undefined;
  }

  function t(path, vars) {
    var v = uiGet(current, path);
    if (v === undefined) v = uiGet('en', path);
    if (v === undefined) {
      if (!missing[path]) { missing[path] = 1; }
      return path;
    }
    return interpolate(v, vars);
  }

  /* 通用回退取值（分类 / 标签 / 选项 / 分区） */
  function pick(section, key, fallback) {
    if (key == null) return fallback;
    var v = lookup(current, section + '.' + key);
    if (typeof v !== 'string') v = lookup('en', section + '.' + key);
    return typeof v === 'string' ? v : (fallback !== undefined ? fallback : key);
  }

  /* ---------- 快捷取值 ---------- */

  function product(p, field) {
    if (!p) return '';
    var rec = lookup(current, 'products.' + p.id);
    if (rec && rec[field] !== undefined && rec[field] !== null) return rec[field];
    var en = lookup('en', 'products.' + p.id);
    if (en && en[field] !== undefined && en[field] !== null) return en[field];
    if (field === 'features') return p.features || [];
    return p[field] || '';
  }

  /* ---------- 静态标记替换 ---------- */

  function applyStatic(root) {
    var scope = root || document;
    var nodes = scope.querySelectorAll('[data-i18n]');
    Array.prototype.forEach.call(nodes, function (el) {
      var vars;
      var av = el.getAttribute('data-i18n-args');
      if (av) { try { vars = JSON.parse(av); } catch (e) {} }
      el.textContent = t(el.getAttribute('data-i18n'), vars);
    });
    Array.prototype.forEach.call(scope.querySelectorAll('[data-i18n-html]'), function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    Array.prototype.forEach.call(scope.querySelectorAll('[data-i18n-ph]'), function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });
  }

  /* ---------- 就绪与切换 ---------- */

  function ready(cb) {
    if (isReady) { cb(current); return; }
    queue.push(cb);
  }

  function flush() {
    isReady = true;
    var cbs = queue.slice();
    queue.length = 0;
    cbs.forEach(function (cb) { try { cb(current); } catch (e) { console.error(e); } });
  }

  function applyLangAttrs(code) {
    var meta = LANGS.find(function (l) { return l.code === code; }) || LANGS[0];
    document.documentElement.setAttribute('lang', code);
    document.documentElement.setAttribute('dir', meta.dir);
  }

  function setLang(code) {
    if (!isSupported(code)) return;
    try { localStorage.setItem(STORE_KEY, code); } catch (e) {}
    /* 清掉 URL 里的 ?lang=，否则刷新后又被它盖回去 */
    try {
      var url = new URL(location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.delete('lang');
        history.replaceState(null, '', url.pathname + (url.searchParams.toString() ? '?' + url.searchParams : '') + url.hash);
      }
    } catch (e) {}
    location.reload();
  }

  /* ---------- 语言切换器 HTML ---------- */

  function switcherHTML() {
    var items = LANGS.map(function (l) {
      return '<button type="button" class="lang-item' + (l.code === current ? ' is-on' : '') +
        '" data-lang="' + l.code + '">' +
        '<span class="lang-native">' + l.native + '</span>' +
        '<span class="lang-code">' + l.code.toUpperCase() + '</span>' +
        '</button>';
    }).join('');
    return '<div class="lang-switch" id="langSwitch">' +
      '<button type="button" class="lang-btn" id="langBtn" aria-haspopup="true" aria-expanded="false">' +
        '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">' +
          '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.6 3.9 6 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-6-3.9-9S9.4 5.6 12 3z"/>' +
        '</svg>' +
        '<span class="lang-cur">' + currentMeta().native + '</span>' +
        '<span class="lang-caret">▾</span>' +
      '</button>' +
      '<div class="lang-menu" id="langMenu" hidden>' + items + '</div>' +
    '</div>';
  }

  function currentMeta() {
    return LANGS.find(function (l) { return l.code === current; }) || LANGS[0];
  }

  /* 全局委托：切换器按钮 */
  document.addEventListener('click', function (e) {
    var item = e.target.closest && e.target.closest('.lang-item');
    if (item) { setLang(item.getAttribute('data-lang')); return; }
    var btn = e.target.closest && e.target.closest('#langBtn');
    var menu = document.getElementById('langMenu');
    if (btn && menu) {
      menu.hidden = !menu.hidden;
      btn.setAttribute('aria-expanded', menu.hidden ? 'false' : 'true');
      e.stopPropagation();
      return;
    }
    if (menu && !menu.hidden && !e.target.closest('.lang-switch')) {
      menu.hidden = true;
      var b = document.getElementById('langBtn');
      if (b) b.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------- 启动 ---------- */

  current = detect();
  applyLangAttrs(current);

  /* 先加载 en 基准，再加载当前语言（非 en 时），全部就绪后 flush */
  loadDict('en').then(function (d) {
    base = d;
    if (current === 'en') { dict = d; return null; }
    return loadDict(current).catch(function () {
      /* 目标语言字典不可用 → 退回英文，但界面仍可正常浏览 */
      current = 'en';
      applyLangAttrs('en');
      dict = window.I18N_DICTS.en;
      return null;
    }).then(function () {
      if (!dict) dict = window.I18N_DICTS[current] || window.I18N_DICTS.en;
    });
  }).catch(function (err) {
    /* 连英文都加载失败（极罕见）→ 仍放行，让页面用原始 HTML 英文渲染 */
    console.error('[i18n]', err);
  }).then(flush);

  return {
    LANGS: LANGS,
    ready: ready,
    t: t,
    pick: pick,
    product: product,
    cat: function (id) { return pick('cats', id, id); },
    tag: function (s) { return pick('tags', s, s); },
    optName: function (n) { return pick('optNames', n, n); },
    optValue: function (v) { return pick('optValues', v, v); },
    zone: function (id) { return pick('zone', id, id); },
    country: function (code) { return pick('countries', code, code); },
    applyStatic: applyStatic,
    switcherHTML: switcherHTML,
    currentMeta: currentMeta,
    current: function () { return current; },
    dir: function () { return currentMeta().dir; },
    setLang: setLang,
    _missing: missing
  };
})();
