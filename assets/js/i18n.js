/* ============================================================
   FINDLY i18n 引擎（零依赖）
   ------------------------------------------------------------
   语言判定优先级：
     1) URL ?lang=xx        —— 分享链接用，最高优先
     2) localStorage        —— 用户手动选过就记住（findly_lang / findly_country）
     3) navigator.languages —— 浏览器语言（最贴近用户真实习惯）
     4) en                  —— 兜底

   字典：assets/i18n/<code>.js，文件内容形如
     window.I18N_DICTS.es = { ui:{...}, cats:{...}, tags:{...},
                              optNames:{...}, optValues:{...}, products:{...} }

   en 为基准语言，任何缺失的键自动回退到 en。

   国家数据：assets/js/countries.js（~200 个国家/地区 + 国旗 + 本地化国名）

   用法：
     I18N.ready(function () { ...渲染页面... });   // 字典就绪后执行
     I18N.t('cart.total')                           // 取界面文案
     I18N.t('cart.items_line', { n: 3, m: 2 })      // {占位符} 插值
     I18N.product(p, 'title'|'blurb'|'features')    // 商品文案
     I18N.cat('pet') / I18N.tag('New') / I18N.optName('Colour') / I18N.optValue('Sage')
     I18N.zone('US')                                // 运费分区名
     I18N.country('GB')                             // 本地化国家名
     I18N.geoSwitcherHTML()                         // 国家 / 语言选择器 HTML
     I18N.setCountry('DE')                          // 选国家 → 自动切语言（重载页面）
     I18N.setLang('de')                             // 只切语言
     I18N.applyStatic()                             // 替换 data-i18n / data-i18n-ph
   ============================================================ */

window.I18N = (function () {
  'use strict';

  var LANG_KEY = 'findly_lang';
  var COUNTRY_KEY = 'findly_country';

  /* 支持的语言清单（59 种）。
     native = 语言自称（界面展示）；en = 英文名（仅用于搜索匹配）
     flag = 代表国家（按钮小旗）；dir = 书写方向 */
  var LANGS = [
    /* 欧洲 */
    { code: 'en', native: 'English',    en: 'English',    flag: 'US', dir: 'ltr' },
    { code: 'es', native: 'Español',    en: 'Spanish',    flag: 'ES', dir: 'ltr' },
    { code: 'pt', native: 'Português',  en: 'Portuguese', flag: 'BR', dir: 'ltr' },
    { code: 'fr', native: 'Français',   en: 'French',     flag: 'FR', dir: 'ltr' },
    { code: 'de', native: 'Deutsch',    en: 'German',     flag: 'DE', dir: 'ltr' },
    { code: 'it', native: 'Italiano',   en: 'Italian',    flag: 'IT', dir: 'ltr' },
    { code: 'nl', native: 'Nederlands', en: 'Dutch',      flag: 'NL', dir: 'ltr' },
    { code: 'sv', native: 'Svenska',    en: 'Swedish',    flag: 'SE', dir: 'ltr' },
    { code: 'da', native: 'Dansk',      en: 'Danish',     flag: 'DK', dir: 'ltr' },
    { code: 'nb', native: 'Norsk',      en: 'Norwegian',  flag: 'NO', dir: 'ltr' },
    { code: 'fi', native: 'Suomi',      en: 'Finnish',    flag: 'FI', dir: 'ltr' },
    { code: 'is', native: 'Íslenska',   en: 'Icelandic',  flag: 'IS', dir: 'ltr' },
    { code: 'pl', native: 'Polski',     en: 'Polish',     flag: 'PL', dir: 'ltr' },
    { code: 'cs', native: 'Čeština',    en: 'Czech',      flag: 'CZ', dir: 'ltr' },
    { code: 'sk', native: 'Slovenčina', en: 'Slovak',     flag: 'SK', dir: 'ltr' },
    { code: 'hu', native: 'Magyar',     en: 'Hungarian',  flag: 'HU', dir: 'ltr' },
    { code: 'ro', native: 'Română',     en: 'Romanian',   flag: 'RO', dir: 'ltr' },
    { code: 'bg', native: 'Български',  en: 'Bulgarian',  flag: 'BG', dir: 'ltr' },
    { code: 'hr', native: 'Hrvatski',   en: 'Croatian',   flag: 'HR', dir: 'ltr' },
    { code: 'sr', native: 'Српски',     en: 'Serbian',    flag: 'RS', dir: 'ltr' },
    { code: 'sl', native: 'Slovenščina',en: 'Slovenian',  flag: 'SI', dir: 'ltr' },
    { code: 'lt', native: 'Lietuvių',   en: 'Lithuanian', flag: 'LT', dir: 'ltr' },
    { code: 'lv', native: 'Latviešu',   en: 'Latvian',    flag: 'LV', dir: 'ltr' },
    { code: 'et', native: 'Eesti',      en: 'Estonian',   flag: 'EE', dir: 'ltr' },
    { code: 'el', native: 'Ελληνικά',   en: 'Greek',      flag: 'GR', dir: 'ltr' },
    { code: 'ru', native: 'Русский',    en: 'Russian',    flag: 'RU', dir: 'ltr' },
    { code: 'uk', native: 'Українська', en: 'Ukrainian',  flag: 'UA', dir: 'ltr' },
    { code: 'tr', native: 'Türkçe',     en: 'Turkish',    flag: 'TR', dir: 'ltr' },
    { code: 'ca', native: 'Català',     en: 'Catalan',    flag: 'AD', dir: 'ltr' },
    { code: 'ga', native: 'Gaeilge',    en: 'Irish',      flag: 'IE', dir: 'ltr' },
    { code: 'cy', native: 'Cymraeg',    en: 'Welsh',      flag: 'GB', dir: 'ltr' },
    { code: 'af', native: 'Afrikaans',  en: 'Afrikaans',  flag: 'ZA', dir: 'ltr' },

    /* 中东 & 非洲 */
    { code: 'ar', native: 'العربية',    en: 'Arabic',     flag: 'SA', dir: 'rtl' },
    { code: 'he', native: 'עברית',      en: 'Hebrew',     flag: 'IL', dir: 'rtl' },
    { code: 'fa', native: 'فارسی',      en: 'Persian',    flag: 'IR', dir: 'rtl' },
    { code: 'ur', native: 'اردو',       en: 'Urdu',       flag: 'PK', dir: 'rtl' },
    { code: 'sw', native: 'Kiswahili',  en: 'Swahili',    flag: 'KE', dir: 'ltr' },

    /* 南亚 */
    { code: 'hi', native: 'हिन्दी',       en: 'Hindi',      flag: 'IN', dir: 'ltr' },
    { code: 'bn', native: 'বাংলা',       en: 'Bengali',    flag: 'BD', dir: 'ltr' },
    { code: 'mr', native: 'मराठी',       en: 'Marathi',    flag: 'IN', dir: 'ltr' },
    { code: 'gu', native: 'ગુજરાતી',     en: 'Gujarati',   flag: 'IN', dir: 'ltr' },
    { code: 'ta', native: 'தமிழ்',       en: 'Tamil',      flag: 'IN', dir: 'ltr' },
    { code: 'te', native: 'తెలుగు',       en: 'Telugu',     flag: 'IN', dir: 'ltr' },
    { code: 'kn', native: 'ಕನ್ನಡ',       en: 'Kannada',    flag: 'IN', dir: 'ltr' },
    { code: 'ml', native: 'മലയാളം',      en: 'Malayalam',  flag: 'IN', dir: 'ltr' },
    { code: 'ne', native: 'नेपाली',       en: 'Nepali',     flag: 'NP', dir: 'ltr' },
    { code: 'si', native: 'සිංහල',        en: 'Sinhala',    flag: 'LK', dir: 'ltr' },

    /* 东南亚 */
    { code: 'th', native: 'ไทย',        en: 'Thai',       flag: 'TH', dir: 'ltr' },
    { code: 'lo', native: 'ລາວ',         en: 'Lao',        flag: 'LA', dir: 'ltr' },
    { code: 'km', native: 'ភាសាខ្មែរ',     en: 'Khmer',      flag: 'KH', dir: 'ltr' },
    { code: 'my', native: 'မြန်မာ',       en: 'Burmese',    flag: 'MM', dir: 'ltr' },
    { code: 'vi', native: 'Tiếng Việt', en: 'Vietnamese', flag: 'VN', dir: 'ltr' },
    { code: 'id', native: 'Bahasa Indonesia', en: 'Indonesian', flag: 'ID', dir: 'ltr' },
    { code: 'ms', native: 'Bahasa Melayu',    en: 'Malay',      flag: 'MY', dir: 'ltr' },
    { code: 'tl', native: 'Filipino',   en: 'Filipino',   flag: 'PH', dir: 'ltr' },

    /* 东亚 */
    { code: 'zh', native: '简体中文',    en: 'Chinese (Simplified)',  flag: 'CN', dir: 'ltr' },
    { code: 'zh-TW', native: '繁體中文', en: 'Chinese (Traditional)', flag: 'TW', dir: 'ltr' },
    { code: 'ja', native: '日本語',      en: 'Japanese',   flag: 'JP', dir: 'ltr' },
    { code: 'ko', native: '한국어',      en: 'Korean',     flag: 'KR', dir: 'ltr' }
  ];

  window.I18N_DICTS = window.I18N_DICTS || {};

  var current = null;      // 当前语言 code
  var currentCountry = null; /* 当前国家 code（可能为 null） */
  var dict = null;         // 当前语言字典
  var base = null;         // 英文基准字典（兜底）
  var queue = [];          // ready 回调
  var isReady = false;
  var listBuilt = false;   // 国家列表是否已渲染

  function meta(code) {
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) return LANGS[i];
    return null;
  }
  function isSupported(code) { return !!meta(code); }

  /* ---------- 国家数据（countries.js 未加载时优雅降级） ---------- */

  function countries() { return window.COUNTRIES || []; }
  function countryRec(code) {
    return (window.COUNTRY_BY_CODE && window.COUNTRY_BY_CODE[code]) || null;
  }

  /* ---------- 语言判定 ---------- */

  /* 'zh-tw' / 'zh-Hant' → 'zh-TW'；其余取主语言码 */
  function normalize(code) {
    if (!code) return null;
    var raw = String(code).toLowerCase();
    if (raw === 'zh-tw' || raw === 'zh-hk' || raw === 'zh-mo' || raw === 'zh-hant') return 'zh-TW';
    if (raw.indexOf('zh') === 0) return 'zh';
    if (raw.indexOf('he') === 0 || raw.indexOf('iw') === 0) return 'he';
    if (raw.indexOf('nb') === 0 || raw.indexOf('no') === 0 || raw.indexOf('nn') === 0) return 'nb';
    if (raw.indexOf('in') === 0) return 'id';          /* 旧版印尼语码 */
    if (raw.indexOf('tl') === 0 || raw.indexOf('fil') === 0) return 'tl';
    var first = raw.split('-')[0];
    return isSupported(first) ? first : null;
  }

  function normCountry(code) {
    if (!code) return null;
    var up = String(code).toUpperCase();
    return countryRec(up) ? up : null;
  }

  function fromQuery() {
    try {
      var sp = new URLSearchParams(location.search);
      return { lang: sp.get('lang'), country: sp.get('country') };
    } catch (e) { return {}; }
  }

  function fromStore(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function fromNavigator() {
    var list = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var n = normalize(list[i]);
      if (n) return n;
    }
    return null;
  }

  /* 浏览器地区 → 国家（navigator.language 的次标签，如 en-CA → CA） */
  function navigatorCountry() {
    var list = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language || ''];
    for (var i = 0; i < list.length; i++) {
      var parts = String(list[i]).split('-');
      if (parts.length > 1) {
        var c = normCountry(parts[parts.length - 1]);
        if (c) return c;
      }
    }
    return null;
  }

  function detect() {
    var q = fromQuery();
    var qc = normCountry(q.country);
    var ql = normalize(q.lang);
    var sc = normCountry(fromStore(COUNTRY_KEY));
    var sl = normalize(fromStore(LANG_KEY));
    var nc = navigatorCountry();
    var nl = fromNavigator();

    if (ql) return { lang: ql, country: qc || sc || null };
    if (ql === null && q.lang) { /* 给了语言但字典没有 → 继续往下判 */ }
    if (sl) return { lang: sl, country: qc || sc || null };
    if (sc) {
      var rec = countryRec(sc);
      if (rec && isSupported(rec.l)) return { lang: rec.l, country: sc };
    }
    if (nc) {
      var rec2 = countryRec(nc);
      if (rec2 && isSupported(rec2.l)) return { lang: rec2.l, country: nc };
    }
    if (nl) return { lang: nl, country: nc || null };
    return { lang: 'en', country: nc || null };
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

  /* 本地化国家名：Intl.DisplayNames 优先 → 字典 countries 段 → 英文名 → ISO 码 */
  function country(code) {
    if (!code) return '';
    if (typeof window.countryName === 'function') {
      var n = window.countryName(code, current);
      if (n) return n;
    }
    var v = lookup(current, 'countries.' + code);
    if (typeof v === 'string') return v;
    v = lookup('en', 'countries.' + code);
    if (typeof v === 'string') return v;
    var rec = countryRec(code);
    return rec ? rec.n : code;
  }

  /* ---------- 静态标记替换 ---------- */

  function applyStatic(root) {
    var scope = root || document;
    Array.prototype.forEach.call(scope.querySelectorAll('[data-i18n]'), function (el) {
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
    var m = meta(code) || LANGS[0];
    document.documentElement.setAttribute('lang', code);
    document.documentElement.setAttribute('dir', m.dir);
  }

  function remember(key, val) {
    try { if (val) localStorage.setItem(key, val); else localStorage.removeItem(key); } catch (e) {}
  }

  /* 切语言（重载页面），可选同时记住国家 */
  function apply(code, countryCode) {
    if (!isSupported(code)) return false;
    remember(LANG_KEY, code);
    remember(COUNTRY_KEY, countryCode || null);
    /* 清掉 URL 里的 ?lang= / ?country=，否则刷新后又被它盖回去 */
    try {
      var url = new URL(location.href);
      var dirty = false;
      ['lang', 'country'].forEach(function (k) {
        if (url.searchParams.has(k)) { url.searchParams.delete(k); dirty = true; }
      });
      if (dirty) {
        var qs = url.searchParams.toString();
        history.replaceState(null, '', url.pathname + (qs ? '?' + qs : '') + url.hash);
      }
    } catch (e) {}
    location.reload();
    return true;
  }

  function setLang(code) { return apply(code, null); }

  /* 选国家 → 自动切到该国语言 */
  function setCountry(code) {
    var rec = countryRec(code);
    if (!rec) return false;
    return apply(rec.l, rec.c);
  }

  /* ---------- 国家 / 语言选择器 HTML ---------- */

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function flagOf(code) {
    return (typeof window.flagOf === 'function') ? window.flagOf(code) : '';
  }

  function langNative(code) {
    var m = meta(code);
    return m ? m.native : code;
  }

  /* 去音标，便于搜索（Köln → koln） */
  function deaccent(s) {
    s = String(s).toLowerCase();
    if (s.normalize) {
      try { return s.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); } catch (e) {}
    }
    return s;
  }

  /* 每个国家在「当前语言」下的搜索索引（含中英文名 + 语言名 + ISO 码） */
  function indexOfRec(rec) {
    return deaccent([
      rec.c,
      rec.n,
      country(rec.c),
      langNative(rec.l),
      (meta(rec.l) || {}).en || '',
      rec.l
    ].join(' '));
  }

  /* 语言行的搜索索引 */
  function indexOfLang(m) {
    return deaccent([m.code, m.en, m.native].join(' '));
  }

  function itemHTML(rec) {
    var on = (currentCountry === rec.c) ||
             (!currentCountry && rec.l === current && rec.c === (meta(current) || {}).flag);
    return '<button type="button" class="geo-item' + (on ? ' is-on' : '') +
      '" data-c="' + rec.c + '" data-l="' + rec.l + '"' +
      ' data-idx="' + esc(indexOfRec(rec)) + '">' +
      '<span class="geo-flag" aria-hidden="true">' + flagOf(rec.c) + '</span>' +
      '<span class="geo-name">' + esc(country(rec.c)) + '</span>' +
      '<span class="geo-lang">' + esc(langNative(rec.l)) + '</span>' +
      '</button>';
  }

  /* 语言行：给「一个国家多个语言」用（印度各邦语、爱尔兰语、威尔士语等），
     保证引擎里每种语言都有入口，不依赖国家表 */
  function langItemHTML(m) {
    var on = !currentCountry && m.code === current;
    return '<button type="button" class="geo-item geo-lang-item' + (on ? ' is-on' : '') +
      '" data-l="' + m.code + '"' +
      ' data-idx="' + esc(indexOfLang(m)) + '">' +
      '<span class="geo-flag" aria-hidden="true">' + flagOf(m.flag) + '</span>' +
      '<span class="geo-name">' + esc(m.native) + '</span>' +
      '<span class="geo-lang">' + esc(m.code.toUpperCase()) + '</span>' +
      '</button>';
  }

  function buildList() {
    var host = document.getElementById('geoList');
    if (!host) return;
    var order = window.REGION_ORDER || ['americas', 'europe', 'asia', 'mena', 'oceania'];
    var all = countries();
    var html = '';
    order.forEach(function (region) {
      var items = all.filter(function (r) { return r.r === region; });
      if (!items.length) return;
      html += '<div class="geo-group" data-region="' + region + '">' +
        '<p class="geo-group-h">' + esc(t('geo.region.' + region)) + '</p>' +
        items.map(itemHTML).join('') +
        '</div>';
    });
    /* 兜底：区域字段异常的国家也列进「其他」 */
    var known = {}; order.forEach(function (r) { known[r] = 1; });
    var rest = all.filter(function (r) { return !known[r.r]; });
    if (rest.length) {
      html += '<div class="geo-group" data-region="other">' +
        '<p class="geo-group-h">' + esc(t('geo.region.other')) + '</p>' +
        rest.map(itemHTML).join('') +
        '</div>';
    }
    /* 语言分组：59 种语言直接可选（复用已有的 lang.label 键，不必新增字典条目） */
    if (LANGS.length) {
      html += '<div class="geo-group" data-region="languages">' +
        '<p class="geo-group-h">' + esc(t('lang.label')) + '</p>' +
        LANGS.map(langItemHTML).join('') +
        '</div>';
    }
    host.innerHTML = html;
    listBuilt = true;
    updateCount();
  }

  function totalItems() { return countries().length + LANGS.length; }

  function visibleCount() {
    var host = document.getElementById('geoList');
    if (!host) return 0;
    return host.querySelectorAll('.geo-item:not([hidden])').length;
  }

  function updateCount() {
    var foot = document.getElementById('geoFoot');
    if (!foot) return;
    var n = visibleCount();
    foot.textContent = n === totalItems()
      ? t('geo.note')
      : t('geo.results', { n: n });
    foot.classList.toggle('is-empty', n === 0);
  }

  function filterList(q) {
    var host = document.getElementById('geoList');
    if (!host) return;
    if (!listBuilt && q) buildList();
    var needle = deaccent(q).trim().replace(/\s+/g, ' ');
    var items = host.querySelectorAll('.geo-item');
    for (var i = 0; i < items.length; i++) {
      var idx = items[i].getAttribute('data-idx') || '';
      items[i].hidden = !!needle && idx.indexOf(needle) < 0;
    }
    var groups = host.querySelectorAll('.geo-group');
    for (var g = 0; g < groups.length; g++) {
      groups[g].hidden = !groups[g].querySelector('.geo-item:not([hidden])');
    }
    /* 无结果提示 */
    var none = host.querySelector('.geo-none');
    if (visibleCount() === 0) {
      if (!none) {
        none = document.createElement('p');
        none.className = 'geo-none';
        host.appendChild(none);
      }
      none.hidden = false;
      none.textContent = t('geo.none');
    } else if (none) {
      none.hidden = true;
    }
    updateCount();
  }

  function buttonHTML() {
    var flag, label;
    if (currentCountry) {
      flag = flagOf(currentCountry);
      label = country(currentCountry);
    } else {
      flag = flagOf((meta(current) || {}).flag);
      label = langNative(current);
    }
    return '<button type="button" class="geo-btn" id="geoBtn" aria-haspopup="listbox" aria-expanded="false" aria-label="' +
      esc(t('geo.title')) + '">' +
      '<span class="geo-flag" aria-hidden="true">' + flag + '</span>' +
      '<span class="geo-cur">' + esc(label) + '</span>' +
      '<span class="geo-caret" aria-hidden="true">▾</span>' +
      '</button>';
  }

  function geoSwitcherHTML() {
    return '<div class="geo-switch" id="geoSwitch">' +
      buttonHTML() +
      '<div class="geo-menu" id="geoMenu" hidden>' +
        '<div class="geo-menu-head">' +
          '<span class="geo-menu-title">' + esc(t('geo.title')) + '</span>' +
          '<button type="button" class="geo-close" id="geoClose" aria-label="Close">✕</button>' +
        '</div>' +
        '<div class="geo-search-wrap">' +
          '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">' +
            '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>' +
          '</svg>' +
          '<input type="text" class="geo-search" id="geoSearch" autocomplete="off" spellcheck="false" placeholder="' +
            esc(t('geo.search_ph')) + '" aria-label="' + esc(t('geo.search_ph')) + '">' +
        '</div>' +
        '<div class="geo-list" id="geoList" role="listbox">' +
          '<p class="geo-loading">' + esc(t('cart.loading')) + '</p>' +
        '</div>' +
        '<div class="geo-foot" id="geoFoot"></div>' +
      '</div>' +
    '</div>';
  }

  /* 兼容旧调用名 */
  function switcherHTML() { return geoSwitcherHTML(); }

  function openMenu(open) {
    var menu = document.getElementById('geoMenu');
    var btn = document.getElementById('geoBtn');
    if (!menu) return;
    if (open && !listBuilt) buildList();
    menu.hidden = !open;
    if (btn) btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      var input = document.getElementById('geoSearch');
      if (input) { input.value = ''; filterList(''); setTimeout(function () { input.focus(); }, 40); }
      var on = menu.querySelector('.geo-item.is-on');
      if (on && on.scrollIntoView) {
        try { on.scrollIntoView({ block: 'center' }); } catch (e) { on.scrollIntoView(); }
      }
    }
  }

  /* ---------- 事件（全局委托） ---------- */

  document.addEventListener('click', function (e) {
    var el = e.target;

    /* 选国家（自动切语言）或直接选语言 */
    var item = el.closest && el.closest('.geo-item');
    if (item) {
      var c = item.getAttribute('data-c');
      if (c) setCountry(c); else setLang(item.getAttribute('data-l'));
      return;
    }
    /* 开合按钮 */
    if (el.closest && el.closest('#geoBtn')) {
      var menu = document.getElementById('geoMenu');
      openMenu(menu && menu.hidden);
      return;
    }
    /* 关闭按钮 */
    if (el.closest && el.closest('#geoClose')) { openMenu(false); return; }
    /* 点空白处关闭 */
    if (el.closest && !el.closest('.geo-switch')) {
      var m2 = document.getElementById('geoMenu');
      if (m2 && !m2.hidden) openMenu(false);
    }
  });

  document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'geoSearch') filterList(e.target.value);
  });

  document.addEventListener('keydown', function (e) {
    var menu = document.getElementById('geoMenu');
    if (!menu || menu.hidden) return;
    if (e.key === 'Escape') { openMenu(false); return; }
    if (e.key === 'Enter') {
      var first = menu.querySelector('.geo-item:not([hidden])');
      if (first) { e.preventDefault(); setCountry(first.getAttribute('data-c')); }
    }
  });

  /* ---------- 启动 ---------- */

  (function boot() {
    var d = detect();
    current = d.lang;
    currentCountry = d.country;
    /* 语言来自浏览器判定（非用户手选）时，不写 localStorage，保持「没选过」的状态 */
    applyLangAttrs(current);

    loadDict('en').then(function (enDict) {
      base = enDict;
      if (current === 'en') { dict = enDict; return null; }
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
  })();

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
    country: country,
    applyStatic: applyStatic,
    switcherHTML: switcherHTML,
    geoSwitcherHTML: geoSwitcherHTML,
    current: function () { return current; },
    currentCountry: function () { return currentCountry; },
    dir: function () { return (meta(current) || LANGS[0]).dir; },
    langNative: langNative,
    flagOf: flagOf,
    normalize: normalize,
    setLang: setLang,
    setCountry: setCountry,
    _missing: missing
  };
})();
