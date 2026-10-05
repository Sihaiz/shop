/* ============================================================
   商品数据层
   ------------------------------------------------------------
   字段说明：
     price      基准售价（美元）
     compareAt  划线价
     weight     单品净重（g，含零售包装）
     dims       单品包装尺寸（cm）→ 用于计算体积重
     options    款式/规格选项，可为空数组
                 每个值可带 price / weight / dims 增量（dims 为覆盖式）

   款式组合由 options 笛卡尔积生成，无需手工枚举。
   SKU 自动拼装：商品ID前缀 + 各选项前3位大写。

   上架前自查（与选品红线一致）：
     非电动 / 非电池 / 非电子；无品牌与 IP 侵权；重量与尺寸如实填写
     ← dims 填错会直接算错运费，必须按实际包装量
   ============================================================ */

window.CATEGORIES = [
  { id: 'all',          label: 'All finds' },
  { id: 'organization', label: 'Storage & Home' },
  { id: 'kitchen',      label: 'Kitchen' },
  { id: 'pet',          label: 'Pet' },
  { id: 'fragrance',    label: 'Home Scent' },
  { id: 'jewelry',      label: 'Accessories' },
  { id: 'bundle',       label: 'Treasure Box' }
];

window.CATEGORY_STYLE = {
  organization: { c1: '#E1F5EE', c2: '#9FE1CB', ink: '#0F6E56', icon: 'box'   },
  kitchen:      { c1: '#FAECE7', c2: '#F5C4B3', ink: '#993C1D', icon: 'pot'   },
  pet:          { c1: '#FAEEDA', c2: '#FAC775', ink: '#854F0B', icon: 'paw'   },
  fragrance:    { c1: '#EEEDFE', c2: '#CECBF6', ink: '#534AB7', icon: 'leaf'  },
  jewelry:      { c1: '#FBEAF0', c2: '#F4C0D1', ink: '#993556', icon: 'gem'   },
  bundle:       { c1: '#E6F1FB', c2: '#B5D4F4', ink: '#185FA5', icon: 'gift'  }
};

window.PRODUCTS = [
  {
    id: 'org-drawer-3pk',
    title: 'Stackable Drawer Organizer, 3-Pack',
    cn: '可叠放抽屉收纳盒三件套',
    category: 'organization',
    price: 19.99,
    compareAt: 32.99,
    weight: 340,
    dims: { l: 26, w: 18, h: 10 },
    tag: 'Bestseller',
    rating: 4.8,
    reviews: 214,
    stock: 180,
    options: [
      { name: 'Finish', values: [
        { label: 'Frosted',  hex: '#DCE9E4' },
        { label: 'Clear',    hex: '#EDF3F6' },
        { label: 'Charcoal', hex: '#4A4A48' }
      ]}
    ],
    blurb: 'Clean up a messy drawer in under a minute. Three nesting sizes that lock together and slide, so nothing rattles.',
    features: [
      'Three sizes stack or sit side by side',
      'Non-slip feet — stays put when you open the drawer',
      'Fits standard 12" vanity and desk drawers',
      'Wipe-clean finish, no sharp edges'
    ]
  },
  {
    id: 'org-cable-box',
    title: 'Desktop Cable & Cord Organizer Box',
    cn: '桌面理线收纳盒',
    category: 'organization',
    price: 12.99,
    compareAt: 19.99,
    weight: 210,
    dims: { l: 33, w: 14, h: 13 },
    tag: 'New',
    rating: 4.7,
    reviews: 96,
    stock: 240,
    options: [
      { name: 'Colour', values: [
        { label: 'White',  hex: '#F2F0EA' },
        { label: 'Black',  hex: '#3A3A38' },
        { label: 'Oak',    hex: '#D8C3A5' }
      ]}
    ],
    blurb: 'Hides the power strip nobody wants to look at. Ventilated lid keeps things cool while cables exit through the side slots.',
    features: [
      'Fits most 6-outlet power strips',
      'Ventilated lid, no heat build-up',
      'Cable exits on both ends',
      'Matte finish that does not show dust'
    ]
  },
  {
    id: 'org-vacuum-bags',
    title: 'Vacuum Storage Bags',
    cn: '真空压缩收纳袋',
    category: 'organization',
    price: 12.99,
    compareAt: 22.99,
    weight: 280,
    dims: { l: 30, w: 22, h: 6 },
    tag: '',
    rating: 4.6,
    reviews: 341,
    stock: 320,
    options: [
      { name: 'Set', values: [
        { label: '3 Large + 2 Medium', price: 0 },
        { label: '5 Large',            price: 1.50 }
      ]}
    ],
    blurb: 'Squeezes a whole winter of bedding down to a stack of pancakes. Works with any vacuum, no pump needed.',
    features: [
      'Double-zip seal plus one-way valve',
      'Reusable — flatten, re-seal, repeat',
      'Cuts closet volume by about 70%',
      'Works with any standard vacuum hose'
    ]
  },
  {
    id: 'org-fridge-4pk',
    title: 'Stackable Fridge Bin Set, 4-Pack',
    cn: '冰箱收纳盒四件套',
    category: 'kitchen',
    price: 19.99,
    compareAt: 34.99,
    weight: 420,
    dims: { l: 32, w: 24, h: 12 },
    tag: 'Bestseller',
    rating: 4.8,
    reviews: 178,
    stock: 150,
    options: [],
    blurb: 'The answer to the fridge that eats your leftovers. Clear sides so you actually see what is about to go off.',
    features: [
      'Two sizes, stackable to save shelf height',
      'Clear walls, easy-grip handles',
      'Pull-out design — no unstacking to reach the back',
      'BPA-free, fridge and freezer safe'
    ]
  },
  {
    id: 'kit-silicone-6pk',
    title: 'Silicone Kitchen Utensil Set, 6-Piece',
    cn: '硅胶厨具六件套',
    category: 'kitchen',
    price: 12.99,
    compareAt: 24.99,
    weight: 290,
    dims: { l: 34, w: 12, h: 8 },
    tag: '',
    rating: 4.7,
    reviews: 402,
    stock: 260,
    options: [
      { name: 'Colour', values: [
        { label: 'Sage',     hex: '#9FE1CB' },
        { label: 'Cream',    hex: '#F0E7D8' },
        { label: 'Charcoal', hex: '#4A4A48' },
        { label: 'Terracotta', hex: '#D0855F' }
      ]}
    ],
    blurb: 'Heat-safe to 480°F, so you can stir without scratching the pan you spent money on. Dishwasher safe, no melting handles.',
    features: [
      'Six pieces: spatula, turner, ladle, spoon, slotted spoon, whisk',
      'Food-grade silicone, no BPA',
      'Will not scratch non-stick coatings',
      'Dishwasher safe, no melting handles'
    ]
  },
  {
    id: 'pet-lint-roller',
    title: 'Reusable Pet Hair Remover Roller',
    cn: '宠物去毛滚筒（可重复使用）',
    category: 'pet',
    price: 7.99,
    compareAt: 14.99,
    weight: 150,
    dims: { l: 20, w: 8, h: 8 },
    tag: 'Under $10',
    rating: 4.6,
    reviews: 528,
    stock: 380,
    options: [],
    blurb: 'No sticky sheets, no refills to buy ever again. Roll, empty the chamber, go again.',
    features: [
      'Reusable — nothing disposable to re-buy',
      'One-handed back-and-forth motion',
      'Open chamber empties straight into the bin',
      'Works on couches, bedding and car seats'
    ]
  },
  {
    id: 'pet-slow-bowl',
    title: 'Slow Feeder Pet Bowl',
    cn: '宠物慢食碗',
    category: 'pet',
    price: 12.99,
    compareAt: 21.99,
    weight: 260,
    dims: { l: 22, w: 22, h: 6 },
    tag: '',
    rating: 4.7,
    reviews: 163,
    stock: 210,
    options: [
      { name: 'Size', values: [
        { label: 'Small (up to 15 lb)', weight: 0 },
        { label: 'Large (15–50 lb)',    weight: 180, price: 2.00,
          dims: { l: 28, w: 28, h: 8 } }
      ]}
    ],
    blurb: 'The maze pattern stretches a ten-second meal into ten minutes, which cuts down on bloat and the mess after.',
    features: [
      'Maze ridges slow eating, reduce bloat risk',
      'Non-slip base — does not slide across the floor',
      'BPA-free, dishwasher safe',
      'Suits small and medium breeds'
    ]
  },
  {
    id: 'pet-groom-glove',
    title: 'Pet Grooming Deshedding Glove',
    cn: '宠物去浮毛手套',
    category: 'pet',
    price: 7.99,
    compareAt: 13.99,
    weight: 120,
    dims: { l: 24, w: 16, h: 4 },
    tag: 'Under $10',
    rating: 4.5,
    reviews: 287,
    stock: 300,
    options: [
      { name: 'Hand', values: [
        { label: 'Left',       weight: 0 },
        { label: 'Right',      weight: 0 },
        { label: 'Pair',       weight: 110, price: 3.00,
          dims: { l: 24, w: 16, h: 7 } }
      ]}
    ],
    blurb: 'Most pets prefer being stroked to being brushed. The soft nubs lift loose fur while you pet, so it never hits the couch.',
    features: [
      'Soft rubber nubs, comfortable for nervous pets',
      'Peel off the collected fur in one sheet',
      'Adjustable wrist strap, either hand',
      'Works on short and long coats'
    ]
  },
  {
    id: 'fra-sachet-6pk',
    title: 'Dried Flower Scent Sachets, 6-Pack',
    cn: '干花香氛袋六件装',
    category: 'fragrance',
    price: 7.99,
    compareAt: 15.99,
    weight: 130,
    dims: { l: 20, w: 15, h: 5 },
    tag: 'Under $10',
    rating: 4.6,
    reviews: 149,
    stock: 330,
    options: [
      { name: 'Scent', values: [
        { label: 'Lavender' },
        { label: 'Rose' },
        { label: 'Citrus' }
      ]}
    ],
    blurb: 'Tuck one in a drawer, a shoe, a gym bag. Fabric pouch, all-natural dried botanicals, no open flame and nothing to plug in.',
    features: [
      'Six pouches per set, sachet bags included',
      'All-natural dried botanicals, long lasting',
      'No flame, no batteries, nothing to plug in',
      'Ideal for drawers, closets and luggage'
    ]
  },
  {
    id: 'fra-reed-diffuser',
    title: 'Reed Diffuser Set with Ceramic Vase',
    cn: '陶瓷瓶无火香薰藤条套装',
    category: 'fragrance',
    price: 19.99,
    compareAt: 32.99,
    weight: 380,
    dims: { l: 26, w: 14, h: 12 },
    tag: 'Bestseller',
    rating: 4.8,
    reviews: 121,
    stock: 140,
    options: [
      { name: 'Scent', values: [
        { label: 'Linen' },
        { label: 'Sandalwood' },
        { label: 'Fig' }
      ]}
    ],
    blurb: 'Looks like something from a boutique, costs like something from a supermarket. Scent runs about eight weeks, no flame involved.',
    features: [
      'Glazed ceramic vase, reusable',
      '8 rattan reeds for steady diffusion',
      'Approximately 8 weeks of fragrance',
      'Flame-free — safe around kids and pets'
    ]
  },
  {
    id: 'fra-gel-clips',
    title: 'Scented Gel Air Freshener Clips, 4-Pack',
    cn: '香氛凝胶夹四件装',
    category: 'fragrance',
    price: 12.99,
    compareAt: 19.99,
    weight: 180,
    dims: { l: 16, w: 12, h: 6 },
    tag: '',
    rating: 4.4,
    reviews: 88,
    stock: 220,
    options: [
      { name: 'Scent', values: [
        { label: 'Ocean' },
        { label: 'Vanilla' },
        { label: 'Pine' }
      ]}
    ],
    blurb: 'Clips onto an air vent and turns the whole car around in about a minute. Lasts roughly thirty days each.',
    features: [
      'Four clips, four scents per set',
      'Clips to vent blades, no adhesive',
      'About 30 days of scent per clip',
      'Adjustable open/close vent for intensity'
    ]
  },
  {
    id: 'jwl-earring-case',
    title: 'Velvet Earring & Ring Storage Case',
    cn: '绒面耳饰戒指收纳盒',
    category: 'jewelry',
    price: 12.99,
    compareAt: 21.99,
    weight: 190,
    dims: { l: 18, w: 13, h: 6 },
    tag: '',
    rating: 4.8,
    reviews: 206,
    stock: 250,
    options: [
      { name: 'Colour', values: [
        { label: 'Blush',    hex: '#F4C0D1' },
        { label: 'Cream',    hex: '#F0E7D8' },
        { label: 'Charcoal', hex: '#4A4A48' }
      ]}
    ],
    blurb: 'Two zip layers, no tangling, no lost backs. The kind of thing you buy to fix a drawer that has been a problem for years.',
    features: [
      'Two zip layers with stud and ring panels',
      'Soft velvet lining, nothing scratches',
      'Holds roughly 40 earrings plus 20 rings',
      'Fits in a carry-on or a handbag'
    ]
  },
  {
    id: 'jwl-ring-set',
    title: 'Adjustable Stainless Steel Ring Set, 5-Pack',
    cn: '可调节不锈钢戒指五件套',
    category: 'jewelry',
    price: 19.99,
    compareAt: 29.99,
    weight: 60,
    dims: { l: 12, w: 9, h: 3 },
    tag: 'Gift pick',
    rating: 4.6,
    reviews: 174,
    stock: 200,
    options: [
      { name: 'Size', values: [
        { label: 'US 5–7' },
        { label: 'US 8–10' }
      ]}
    ],
    blurb: 'Opens and closes to fit almost any finger, so there is no size to guess wrong on. Steel core, tarnish-resistant finish.',
    features: [
      'Five rings, adjustable band',
      'Hypoallergenic stainless steel core',
      'Tarnish-resistant finish, no green fingers',
      'Open-back design fits most finger sizes'
    ]
  },
  {
    id: 'bundle-treasure-box',
    title: 'The Treasure Box — 3 Random Finds',
    cn: '淘货盲盒（随机 3 件）',
    category: 'bundle',
    price: 19.99,
    compareAt: 39.99,
    weight: 500,
    dims: { l: 28, w: 20, h: 12 },
    tag: 'Limited',
    rating: 4.9,
    reviews: 63,
    stock: 60,
    options: [],
    blurb: 'The whole point of this store in one box. We pack three picks from the current shelf, always worth more than you paid.',
    features: [
      'Three items, always over $39 in retail value',
      'Every box is packed differently',
      'Ships in 1 business day',
      'Sizes and colors vary — that is the fun part'
    ]
  }
];

/* ============================================================
   款式（variant）解析
   ============================================================ */

window.findProduct = function (id) {
  return window.PRODUCTS.find(function (p) { return p.id === id; }) || null;
};

/* 默认选中：每个选项组取第一个值 */
window.defaultSelection = function (product) {
  var sel = {};
  (product.options || []).forEach(function (g) { sel[g.name] = g.values[0].label; });
  return sel;
};

/* 把「选项选择」解析成可下单的具体款式 */
window.resolveVariant = function (product, selection) {
  var sel = selection || window.defaultSelection(product);
  var labels = [];
  var skuParts = [];

  var price = product.price;
  var weight = product.weight;
  var dims = {
    l: product.dims.l, w: product.dims.w, h: product.dims.h
  };

  (product.options || []).forEach(function (g) {
    var val = g.values.find(function (x) { return x.label === sel[g.name]; }) || g.values[0];
    sel[g.name] = val.label;
    labels.push(val.label);
    skuParts.push(val.label.replace(/[^A-Za-z0-9]/g, '').slice(0, 4).toUpperCase() || 'STD');
    if (val.price) price += val.price;
    if (val.weight) weight += val.weight;
    if (val.dims) dims = { l: val.dims.l, w: val.dims.w, h: val.dims.h };
  });

  var code = product.id.split('-')[1] || product.id.slice(0, 3);
  var sku = (code + '-' + skuParts.join('-')).toUpperCase();

  return {
    key: labels.length ? labels.join('|') : 'std',
    label: labels.length ? labels.join(' · ') : 'Standard',
    shortLabel: labels.length ? labels.join('/') : '',
    sku: sku,
    price: Math.round(price * 100) / 100,
    weight: weight,
    dims: dims,
    volumeCm3: dims.l * dims.w * dims.h,
    selection: sel
  };
};

/* 购物车行唯一键：商品 + 款式 */
window.lineKey = function (productId, variantKey) {
  return productId + '::' + variantKey;
};
