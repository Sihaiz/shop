/* ============================================================
   FINDLY — 国家 / 地区数据表（零依赖）
   ------------------------------------------------------------
   字段说明：
     c  ISO 3166-1 alpha-2 国家码
     n  英文国名（兜底用；现代浏览器优先走 Intl.DisplayNames 本地化）
     l  该国默认语言（必须存在于 i18n.js 的 LANGS 清单中）
     r  区域分组：americas / europe / asia / mena / oceania
     z  运费分区 id（仅 4 个真实分区显式写出；其余由国家表 + 区域推导）

   国旗不存图片：由 ISO 码现场生成 Unicode 区域指示符 🇺🇸
   ============================================================ */

window.COUNTRIES = [
  /* ---------------- 美洲 ---------------- */
  { c: 'US', n: 'United States',        l: 'en', r: 'americas', z: 'US' },
  { c: 'CA', n: 'Canada',               l: 'en', r: 'americas', z: 'CA' },
  { c: 'MX', n: 'Mexico',               l: 'es', r: 'americas' },
  { c: 'GT', n: 'Guatemala',            l: 'es', r: 'americas' },
  { c: 'BZ', n: 'Belize',               l: 'en', r: 'americas' },
  { c: 'SV', n: 'El Salvador',          l: 'es', r: 'americas' },
  { c: 'HN', n: 'Honduras',             l: 'es', r: 'americas' },
  { c: 'NI', n: 'Nicaragua',            l: 'es', r: 'americas' },
  { c: 'CR', n: 'Costa Rica',           l: 'es', r: 'americas' },
  { c: 'PA', n: 'Panama',               l: 'es', r: 'americas' },
  { c: 'CU', n: 'Cuba',                 l: 'es', r: 'americas' },
  { c: 'DO', n: 'Dominican Republic',   l: 'es', r: 'americas' },
  { c: 'PR', n: 'Puerto Rico',          l: 'es', r: 'americas' },
  { c: 'HT', n: 'Haiti',                l: 'fr', r: 'americas' },
  { c: 'JM', n: 'Jamaica',              l: 'en', r: 'americas' },
  { c: 'TT', n: 'Trinidad & Tobago',    l: 'en', r: 'americas' },
  { c: 'BB', n: 'Barbados',             l: 'en', r: 'americas' },
  { c: 'BS', n: 'Bahamas',              l: 'en', r: 'americas' },
  { c: 'AG', n: 'Antigua & Barbuda',    l: 'en', r: 'americas' },
  { c: 'DM', n: 'Dominica',             l: 'en', r: 'americas' },
  { c: 'GD', n: 'Grenada',              l: 'en', r: 'americas' },
  { c: 'KN', n: 'St Kitts & Nevis',     l: 'en', r: 'americas' },
  { c: 'LC', n: 'St Lucia',             l: 'en', r: 'americas' },
  { c: 'VC', n: 'St Vincent',           l: 'en', r: 'americas' },
  { c: 'BR', n: 'Brazil',               l: 'pt', r: 'americas' },
  { c: 'AR', n: 'Argentina',            l: 'es', r: 'americas' },
  { c: 'CL', n: 'Chile',                l: 'es', r: 'americas' },
  { c: 'CO', n: 'Colombia',             l: 'es', r: 'americas' },
  { c: 'PE', n: 'Peru',                 l: 'es', r: 'americas' },
  { c: 'VE', n: 'Venezuela',            l: 'es', r: 'americas' },
  { c: 'EC', n: 'Ecuador',              l: 'es', r: 'americas' },
  { c: 'BO', n: 'Bolivia',              l: 'es', r: 'americas' },
  { c: 'PY', n: 'Paraguay',             l: 'es', r: 'americas' },
  { c: 'UY', n: 'Uruguay',              l: 'es', r: 'americas' },
  { c: 'GY', n: 'Guyana',               l: 'en', r: 'americas' },
  { c: 'SR', n: 'Suriname',             l: 'nl', r: 'americas' },
  { c: 'GF', n: 'French Guiana',        l: 'fr', r: 'americas' },
  { c: 'BQ', n: 'Caribbean Netherlands',l: 'nl', r: 'americas' },
  { c: 'CW', n: 'Curaçao',              l: 'nl', r: 'americas' },
  { c: 'AW', n: 'Aruba',                l: 'nl', r: 'americas' },
  { c: 'SX', n: 'Sint Maarten',         l: 'nl', r: 'americas' },
  { c: 'GP', n: 'Guadeloupe',           l: 'fr', r: 'americas' },
  { c: 'MQ', n: 'Martinique',           l: 'fr', r: 'americas' },
  { c: 'BL', n: 'St Barthélemy',        l: 'fr', r: 'americas' },
  { c: 'MF', n: 'St Martin',            l: 'fr', r: 'americas' },
  { c: 'PM', n: 'St Pierre & Miquelon', l: 'fr', r: 'americas' },

  /* ---------------- 欧洲 ---------------- */
  { c: 'GB', n: 'United Kingdom',       l: 'en', r: 'europe', z: 'UK' },
  { c: 'IE', n: 'Ireland',              l: 'en', r: 'europe' },
  { c: 'FR', n: 'France',               l: 'fr', r: 'europe' },
  { c: 'DE', n: 'Germany',              l: 'de', r: 'europe' },
  { c: 'IT', n: 'Italy',                l: 'it', r: 'europe' },
  { c: 'ES', n: 'Spain',                l: 'es', r: 'europe' },
  { c: 'PT', n: 'Portugal',             l: 'pt', r: 'europe' },
  { c: 'NL', n: 'Netherlands',          l: 'nl', r: 'europe' },
  { c: 'BE', n: 'Belgium',              l: 'nl', r: 'europe' },
  { c: 'LU', n: 'Luxembourg',           l: 'fr', r: 'europe' },
  { c: 'CH', n: 'Switzerland',          l: 'de', r: 'europe' },
  { c: 'AT', n: 'Austria',              l: 'de', r: 'europe' },
  { c: 'LI', n: 'Liechtenstein',        l: 'de', r: 'europe' },
  { c: 'MC', n: 'Monaco',               l: 'fr', r: 'europe' },
  { c: 'AD', n: 'Andorra',              l: 'ca', r: 'europe' },
  { c: 'SM', n: 'San Marino',           l: 'it', r: 'europe' },
  { c: 'VA', n: 'Vatican City',         l: 'it', r: 'europe' },
  { c: 'MT', n: 'Malta',                l: 'en', r: 'europe' },
  { c: 'GI', n: 'Gibraltar',            l: 'en', r: 'europe' },
  { c: 'DK', n: 'Denmark',              l: 'da', r: 'europe' },
  { c: 'NO', n: 'Norway',               l: 'nb', r: 'europe' },
  { c: 'SE', n: 'Sweden',               l: 'sv', r: 'europe' },
  { c: 'FI', n: 'Finland',              l: 'fi', r: 'europe' },
  { c: 'IS', n: 'Iceland',              l: 'is', r: 'europe' },
  { c: 'FO', n: 'Faroe Islands',        l: 'da', r: 'europe' },
  { c: 'GL', n: 'Greenland',            l: 'da', r: 'americas' },
  { c: 'EE', n: 'Estonia',              l: 'et', r: 'europe' },
  { c: 'LV', n: 'Latvia',               l: 'lv', r: 'europe' },
  { c: 'LT', n: 'Lithuania',            l: 'lt', r: 'europe' },
  { c: 'PL', n: 'Poland',               l: 'pl', r: 'europe' },
  { c: 'CZ', n: 'Czechia',              l: 'cs', r: 'europe' },
  { c: 'SK', n: 'Slovakia',             l: 'sk', r: 'europe' },
  { c: 'HU', n: 'Hungary',              l: 'hu', r: 'europe' },
  { c: 'RO', n: 'Romania',              l: 'ro', r: 'europe' },
  { c: 'BG', n: 'Bulgaria',             l: 'bg', r: 'europe' },
  { c: 'GR', n: 'Greece',               l: 'el', r: 'europe' },
  { c: 'CY', n: 'Cyprus',               l: 'el', r: 'europe' },
  { c: 'HR', n: 'Croatia',              l: 'hr', r: 'europe' },
  { c: 'SI', n: 'Slovenia',             l: 'sl', r: 'europe' },
  { c: 'RS', n: 'Serbia',               l: 'sr', r: 'europe' },
  { c: 'BA', n: 'Bosnia & Herzegovina', l: 'sr', r: 'europe' },
  { c: 'ME', n: 'Montenegro',           l: 'sr', r: 'europe' },
  { c: 'MK', n: 'North Macedonia',      l: 'sr', r: 'europe' },
  { c: 'XK', n: 'Kosovo',               l: 'sr', r: 'europe' },
  { c: 'AL', n: 'Albania',              l: 'en', r: 'europe' },
  { c: 'MD', n: 'Moldova',              l: 'ro', r: 'europe' },
  { c: 'UA', n: 'Ukraine',              l: 'uk', r: 'europe' },
  { c: 'BY', n: 'Belarus',              l: 'ru', r: 'europe' },
  { c: 'RU', n: 'Russia',               l: 'ru', r: 'europe' },
  { c: 'TR', n: 'Türkiye',              l: 'tr', r: 'europe' },
  { c: 'GE', n: 'Georgia',              l: 'en', r: 'europe' },
  { c: 'AM', n: 'Armenia',              l: 'ru', r: 'europe' },
  { c: 'AZ', n: 'Azerbaijan',           l: 'tr', r: 'europe' },

  /* ---------------- 亚洲 ---------------- */
  { c: 'CN', n: 'China',                l: 'zh', r: 'asia' },
  { c: 'TW', n: 'Taiwan, China',        l: 'zh-TW', r: 'asia' },
  { c: 'HK', n: 'Hong Kong, China',     l: 'zh-TW', r: 'asia' },
  { c: 'MO', n: 'Macao, China',         l: 'zh-TW', r: 'asia' },
  { c: 'JP', n: 'Japan',                l: 'ja', r: 'asia' },
  { c: 'KR', n: 'South Korea',          l: 'ko', r: 'asia' },
  { c: 'KP', n: 'North Korea',          l: 'ko', r: 'asia' },
  { c: 'MN', n: 'Mongolia',             l: 'en', r: 'asia' },
  { c: 'IN', n: 'India',                l: 'hi', r: 'asia' },
  { c: 'PK', n: 'Pakistan',             l: 'ur', r: 'asia' },
  { c: 'BD', n: 'Bangladesh',           l: 'bn', r: 'asia' },
  { c: 'LK', n: 'Sri Lanka',            l: 'si', r: 'asia' },
  { c: 'NP', n: 'Nepal',                l: 'ne', r: 'asia' },
  { c: 'BT', n: 'Bhutan',               l: 'ne', r: 'asia' },
  { c: 'MM', n: 'Myanmar',              l: 'my', r: 'asia' },
  { c: 'TH', n: 'Thailand',             l: 'th', r: 'asia' },
  { c: 'LA', n: 'Laos',                 l: 'lo', r: 'asia' },
  { c: 'KH', n: 'Cambodia',             l: 'km', r: 'asia' },
  { c: 'VN', n: 'Vietnam',              l: 'vi', r: 'asia' },
  { c: 'MY', n: 'Malaysia',             l: 'ms', r: 'asia' },
  { c: 'SG', n: 'Singapore',            l: 'en', r: 'asia' },
  { c: 'ID', n: 'Indonesia',            l: 'id', r: 'asia' },
  { c: 'PH', n: 'Philippines',          l: 'tl', r: 'asia' },
  { c: 'BN', n: 'Brunei',               l: 'ms', r: 'asia' },
  { c: 'TL', n: 'Timor-Leste',          l: 'pt', r: 'asia' },
  { c: 'MV', n: 'Maldives',             l: 'en', r: 'asia' },
  { c: 'KZ', n: 'Kazakhstan',           l: 'ru', r: 'asia' },
  { c: 'UZ', n: 'Uzbekistan',           l: 'ru', r: 'asia' },
  { c: 'KG', n: 'Kyrgyzstan',           l: 'ru', r: 'asia' },
  { c: 'TJ', n: 'Tajikistan',           l: 'ru', r: 'asia' },
  { c: 'TM', n: 'Turkmenistan',         l: 'tr', r: 'asia' },
  { c: 'AF', n: 'Afghanistan',          l: 'fa', r: 'asia' },

  /* ---------------- 中东 & 非洲 ---------------- */
  { c: 'IL', n: 'Israel',               l: 'he', r: 'mena' },
  { c: 'PS', n: 'Palestine',            l: 'ar', r: 'mena' },
  { c: 'SA', n: 'Saudi Arabia',         l: 'ar', r: 'mena' },
  { c: 'AE', n: 'United Arab Emirates', l: 'ar', r: 'mena' },
  { c: 'QA', n: 'Qatar',                l: 'ar', r: 'mena' },
  { c: 'KW', n: 'Kuwait',               l: 'ar', r: 'mena' },
  { c: 'BH', n: 'Bahrain',              l: 'ar', r: 'mena' },
  { c: 'OM', n: 'Oman',                 l: 'ar', r: 'mena' },
  { c: 'YE', n: 'Yemen',                l: 'ar', r: 'mena' },
  { c: 'JO', n: 'Jordan',               l: 'ar', r: 'mena' },
  { c: 'LB', n: 'Lebanon',              l: 'ar', r: 'mena' },
  { c: 'SY', n: 'Syria',                l: 'ar', r: 'mena' },
  { c: 'IQ', n: 'Iraq',                 l: 'ar', r: 'mena' },
  { c: 'IR', n: 'Iran',                 l: 'fa', r: 'mena' },
  { c: 'EG', n: 'Egypt',                l: 'ar', r: 'mena' },
  { c: 'MA', n: 'Morocco',              l: 'ar', r: 'mena' },
  { c: 'DZ', n: 'Algeria',              l: 'ar', r: 'mena' },
  { c: 'TN', n: 'Tunisia',              l: 'ar', r: 'mena' },
  { c: 'LY', n: 'Libya',                l: 'ar', r: 'mena' },
  { c: 'SD', n: 'Sudan',                l: 'ar', r: 'mena' },
  { c: 'EH', n: 'Western Sahara',       l: 'ar', r: 'mena' },
  { c: 'MR', n: 'Mauritania',           l: 'ar', r: 'mena' },
  { c: 'KM', n: 'Comoros',              l: 'ar', r: 'mena' },
  { c: 'DJ', n: 'Djibouti',             l: 'fr', r: 'mena' },
  { c: 'ER', n: 'Eritrea',              l: 'ar', r: 'mena' },
  { c: 'NG', n: 'Nigeria',              l: 'en', r: 'mena' },
  { c: 'GH', n: 'Ghana',                l: 'en', r: 'mena' },
  { c: 'GM', n: 'Gambia',               l: 'en', r: 'mena' },
  { c: 'SL', n: 'Sierra Leone',         l: 'en', r: 'mena' },
  { c: 'LR', n: 'Liberia',              l: 'en', r: 'mena' },
  { c: 'KE', n: 'Kenya',                l: 'sw', r: 'mena' },
  { c: 'TZ', n: 'Tanzania',             l: 'sw', r: 'mena' },
  { c: 'UG', n: 'Uganda',               l: 'sw', r: 'mena' },
  { c: 'RW', n: 'Rwanda',               l: 'sw', r: 'mena' },
  { c: 'BI', n: 'Burundi',              l: 'sw', r: 'mena' },
  { c: 'ET', n: 'Ethiopia',             l: 'en', r: 'mena' },
  { c: 'SO', n: 'Somalia',              l: 'sw', r: 'mena' },
  { c: 'SS', n: 'South Sudan',          l: 'en', r: 'mena' },
  { c: 'ZA', n: 'South Africa',         l: 'af', r: 'mena' },
  { c: 'ZW', n: 'Zimbabwe',             l: 'en', r: 'mena' },
  { c: 'ZM', n: 'Zambia',               l: 'en', r: 'mena' },
  { c: 'MW', n: 'Malawi',               l: 'en', r: 'mena' },
  { c: 'NA', n: 'Namibia',              l: 'en', r: 'mena' },
  { c: 'BW', n: 'Botswana',             l: 'en', r: 'mena' },
  { c: 'LS', n: 'Lesotho',              l: 'en', r: 'mena' },
  { c: 'SZ', n: 'Eswatini',             l: 'en', r: 'mena' },
  { c: 'MZ', n: 'Mozambique',           l: 'pt', r: 'mena' },
  { c: 'AO', n: 'Angola',               l: 'pt', r: 'mena' },
  { c: 'CV', n: 'Cape Verde',           l: 'pt', r: 'mena' },
  { c: 'GW', n: 'Guinea-Bissau',        l: 'pt', r: 'mena' },
  { c: 'ST', n: 'São Tomé & Príncipe',  l: 'pt', r: 'mena' },
  { c: 'SN', n: 'Senegal',              l: 'fr', r: 'mena' },
  { c: 'ML', n: 'Mali',                 l: 'fr', r: 'mena' },
  { c: 'CI', n: "Côte d'Ivoire",        l: 'fr', r: 'mena' },
  { c: 'BF', n: 'Burkina Faso',         l: 'fr', r: 'mena' },
  { c: 'NE', n: 'Niger',                l: 'fr', r: 'mena' },
  { c: 'TG', n: 'Togo',                 l: 'fr', r: 'mena' },
  { c: 'BJ', n: 'Benin',                l: 'fr', r: 'mena' },
  { c: 'GN', n: 'Guinea',               l: 'fr', r: 'mena' },
  { c: 'CM', n: 'Cameroon',             l: 'fr', r: 'mena' },
  { c: 'CF', n: 'Central African Rep.', l: 'fr', r: 'mena' },
  { c: 'TD', n: 'Chad',                 l: 'fr', r: 'mena' },
  { c: 'CG', n: 'Congo',                l: 'fr', r: 'mena' },
  { c: 'CD', n: 'DR Congo',             l: 'fr', r: 'mena' },
  { c: 'GA', n: 'Gabon',                l: 'fr', r: 'mena' },
  { c: 'MG', n: 'Madagascar',           l: 'fr', r: 'mena' },
  { c: 'MU', n: 'Mauritius',            l: 'en', r: 'mena' },
  { c: 'SC', n: 'Seychelles',           l: 'en', r: 'mena' },
  { c: 'RE', n: 'Réunion',              l: 'fr', r: 'mena' },
  { c: 'YT', n: 'Mayotte',              l: 'fr', r: 'mena' },
  { c: 'SH', n: 'St Helena',            l: 'en', r: 'mena' },

  /* ---------------- 大洋洲 ---------------- */
  { c: 'AU', n: 'Australia',            l: 'en', r: 'oceania', z: 'AU' },
  { c: 'NZ', n: 'New Zealand',          l: 'en', r: 'oceania' },
  { c: 'PG', n: 'Papua New Guinea',     l: 'en', r: 'oceania' },
  { c: 'FJ', n: 'Fiji',                 l: 'en', r: 'oceania' },
  { c: 'SB', n: 'Solomon Islands',      l: 'en', r: 'oceania' },
  { c: 'VU', n: 'Vanuatu',              l: 'en', r: 'oceania' },
  { c: 'WS', n: 'Samoa',                l: 'en', r: 'oceania' },
  { c: 'TO', n: 'Tonga',                l: 'en', r: 'oceania' },
  { c: 'KI', n: 'Kiribati',             l: 'en', r: 'oceania' },
  { c: 'NR', n: 'Nauru',                l: 'en', r: 'oceania' },
  { c: 'TV', n: 'Tuvalu',               l: 'en', r: 'oceania' },
  { c: 'PW', n: 'Palau',                l: 'en', r: 'oceania' },
  { c: 'FM', n: 'Micronesia',           l: 'en', r: 'oceania' },
  { c: 'MH', n: 'Marshall Islands',     l: 'en', r: 'oceania' },
  { c: 'NC', n: 'New Caledonia',        l: 'fr', r: 'oceania' },
  { c: 'PF', n: 'French Polynesia',     l: 'fr', r: 'oceania' },
  { c: 'WF', n: 'Wallis & Futuna',      l: 'fr', r: 'oceania' },
  { c: 'GU', n: 'Guam',                 l: 'en', r: 'oceania' },
  { c: 'MP', n: 'Northern Mariana Is.', l: 'en', r: 'oceania' },
  { c: 'AS', n: 'American Samoa',       l: 'en', r: 'oceania' },
  { c: 'CK', n: 'Cook Islands',         l: 'en', r: 'oceania' },
  { c: 'NU', n: 'Niue',                 l: 'en', r: 'oceania' },
  { c: 'TK', n: 'Tokelau',              l: 'en', r: 'oceania' }
];

/* ---------- 工具函数 ---------- */

/* ISO 码 → 国旗 emoji（区域指示符，无需图片资源） */
window.flagOf = function (code) {
  if (!code || code.length !== 2) return '';
  var cc = code.toUpperCase();
  try {
    return String.fromCodePoint(
      0x1F1E6 + cc.charCodeAt(0) - 65,
      0x1F1E6 + cc.charCodeAt(1) - 65
    );
  } catch (e) { return ''; }
};

/* 中文语境下的规范表述（必须遵循一个中国原则，覆盖浏览器 CLDR 默认值） */
window.CN_NAME_OVERRIDES = {
  TW: '中国台湾',
  HK: '中国香港',
  MO: '中国澳门'
};

/* 本地化国家名：中文语境走规范表述 → 浏览器 Intl.DisplayNames → 英文名兜底 */
window.countryName = function (code, lang) {
  var rec = window.COUNTRY_BY_CODE && window.COUNTRY_BY_CODE[code];
  var fallback = rec ? rec.n : code;
  var l = String(lang || '');
  if (l.indexOf('zh') === 0 && window.CN_NAME_OVERRIDES[code]) {
    return window.CN_NAME_OVERRIDES[code];
  }
  if (typeof Intl === 'undefined' || !Intl.DisplayNames) return fallback;
  try {
    var dn = new Intl.DisplayNames([l], { type: 'region' });
    var v = dn.of(code);
    return (v && v !== code) ? v : fallback;
  } catch (e) { return fallback; }
};

/* 区域显示顺序 */
window.REGION_ORDER = ['americas', 'europe', 'asia', 'mena', 'oceania'];

/* 索引 + 该国默认运费分区（未显式声明时按区域就近推导） */
window.COUNTRY_BY_CODE = (function () {
  var map = {};
  var zoneByRegion = {
    americas: 'US',
    europe: 'UK',
    asia: 'AU',
    mena: 'UK',
    oceania: 'AU'
  };
  window.COUNTRIES.forEach(function (rec) {
    rec.zone = rec.z || zoneByRegion[rec.r] || 'US';
    map[rec.c] = rec;
  });
  return map;
})();

window.zoneForCountry = function (code) {
  var rec = window.COUNTRY_BY_CODE[code];
  return rec ? rec.zone : 'US';
};
