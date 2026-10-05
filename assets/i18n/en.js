/* English — base dictionary. Every other language falls back to this one. */
window.I18N_DICTS = window.I18N_DICTS || {};
window.I18N_DICTS.en = {
  ui: {
    /* ---------- 通用 ---------- */
    'demo.notice': 'Demo build · brand name, prices and images are placeholders and must be replaced before launch',
    'ship.free_over': 'Free shipping over {amount}',
    'ship.new_finds': 'New finds every Wednesday',

    /* ---------- 导航 ---------- */
    'nav.shop_all': 'Shop all',
    'nav.treasure_box': 'Treasure Box',
    'nav.cart': 'Cart',
    'lang.label': 'Language',

    /* ---------- 页脚 ---------- */
    'footer.note': 'Small, useful things at prices that do not need justifying.',
    'footer.shop': 'Shop',
    'footer.all_finds': 'All finds',
    'footer.pet': 'Pet',
    'footer.storage_home': 'Storage & Home',
    'footer.help': 'Help',
    'footer.contact': 'Contact',
    'footer.shipping_returns': 'Shipping & returns',
    'footer.track': 'Track order',
    'footer.follow': 'Follow',
    'footer.rights': '© {year} {brand}. All rights reserved.',
    'footer.secure': 'Secure checkout',

    /* ---------- 商品卡 ---------- */
    'card.save': 'Save {n}%',
    'card.colours': '{n} colours',
    'card.options': '{n} options',

    /* ---------- 首页 ---------- */
    'home.eyebrow': 'New finds every Wednesday',
    'home.h1': 'Good stuff,',
    'home.h1_em': 'under $20.',
    'home.sub': 'The useful little things that make a home work better — storage that actually fits, kitchen tools that last, pet gear that saves your couch. Priced so you do not have to think about it.',
    'home.cta_shelf': 'Shop the shelf',
    'home.cta_box': 'Open a Treasure Box',
    'home.stat_price': '$7.99–19.99',
    'home.stat_price_l': 'Every single item',
    'home.stat_ship': 'Free ship $29+',
    'home.stat_ship_l': 'Ships in 1 business day',
    'home.stat_rating': '4.7★ avg',
    'home.stat_rating_l': 'Across {n}+ reviews',
    'home.value1_t': 'One price ladder, no games',
    'home.value1_s': 'Three tiers. No fake countdowns.',
    'home.value2_t': 'Packed and shipped in 24h',
    'home.value2_s': 'Small items, tracked delivery.',
    'home.value3_t': 'Found, not dropshipped',
    'home.value3_s': 'We test it before it goes up.',
    'home.shelf_t': "This week's shelf",
    'home.shelf_s': 'Everything below is in stock and ready to ship.',
    'home.why_t': 'Why the shelf changes',
    'home.why_s': 'We keep roughly 20 items live at a time. When something is gone, it is gone — and something else takes its place.',
    'home.panel1_t': 'Small batch on purpose',
    'home.panel1_s': 'Deep inventory means boring inventory. We buy shallow so the shelf keeps moving and nothing sits in a warehouse for a year getting dusty.',
    'home.panel2_t': 'Tested before listing',
    'home.panel2_s': 'Every item gets used for a week first. If it annoys us, it does not go up. That is the whole quality process, and it is enough.',
    'home.panel3_t': 'Under $20, always',
    'home.panel3_s': 'Three price tiers: $7.99, $12.99, $19.99. You should never have to check your balance before buying something useful.',

    /* ---------- 商品详情 ---------- */
    'pdp.not_found_t': 'That item left the shelf',
    'pdp.not_found_s': 'The shelf changes every week, so some things do not come back. Have a look at what is live right now.',
    'pdp.back_shelf': 'Back to the shelf',
    'pdp.reviews': '({n} reviews)',
    'pdp.in_stock': '{n} in stock',
    'pdp.add': 'Add to cart',
    'pdp.add_price': 'Add to cart · {price}',
    'pdp.qty': 'Quantity',
    'pdp.decrease': 'Decrease',
    'pdp.increase': 'Increase',
    'pdp.related_t': 'Also on the shelf',
    'pdp.related_s': 'Pairs well with what you just looked at.',
    'pdp.sku': 'SKU',
    'pdp.weight': 'Item weight',
    'pdp.dims': 'Packed size',
    'pdp.billable': 'Billable weight (this item, on its own)',
    'pdp.ratio': 'Freight ratio (shipped alone)',
    'pdp.density': 'Density',
    'pdp.ships_from': 'Ships from',
    'pdp.ships_from_v': 'Local warehouse',
    'pdp.returns': 'Returns',
    'pdp.returns_v': '30 days, no questions',
    'pdp.by_volume': ' — by volume',
    'pdp.by_weight': ' — by weight',
    'pdp.ship_hint': 'On its own this ships at {weight} billable weight — {rate} to {zone}. Free once your cart passes {threshold}.',
    'pdp.ratio_of': '{n}% of item price',
    'pdp.density_bulky': ' — bulky, expensive to ship',
    'pdp.cn_note': 'internal note, delete before launch',
    'pdp.added': 'Added {n} × {name} to cart',

    /* ---------- 购物车 ---------- */
    'cart.title': 'Your cart',
    'cart.loading': 'Loading…',
    'cart.nothing': 'Nothing here yet.',
    'cart.items_line': '{n} items in {m} lines — ready to go.',
    'cart.empty_t': 'Your cart is empty',
    'cart.empty_s': "The shelf is small on purpose, so have a look before this week's picks sell through.",
    'cart.summary': 'Order summary',
    'cart.ship_to': 'Ship to',
    'cart.subtotal': 'Subtotal',
    'cart.shipping': 'Shipping',
    'cart.total': 'Total',
    'cart.free': 'Free',
    'cart.free_unlocked': 'Free shipping unlocked.',
    'cart.free_cap': 'Ships free up to {cap}. This order is {w} billable, so standard rates apply.',
    'cart.away': 'You are {amount} away from free shipping.',
    'cart.how_shipping': 'How shipping was calculated',
    'cart.checkout': 'Checkout',
    'cart.keep': 'Keep browsing',
    'cart.note': 'Ships in 1 business day. 30-day returns.',
    'cart.note2': 'Card details never touch this site.',
    'cart.each': '{price} each',
    'cart.remove': 'Remove',
    'cart.removed': 'Removed from cart',
    'cart.dest': 'Destination',
    'cart.units': 'Units',
    'cart.actual_w': 'Actual weight',
    'cart.vol_w': 'Volume weight',
    'cart.billable_w': 'Billable weight',
    'cart.billed_volume': 'Billed on volume — this order takes up more space than it weighs. Volume weight is {p}% of the billable weight.',
    'cart.billed_actual': 'Billed on actual weight — this order is dense enough that size does not matter.',
    'cart.oversize': 'Oversize surcharge applied: +{amount}',
    'cart.base_rate': 'Base rate',
    'cart.oversize_row': 'Oversize surcharge',
    'cart.free_discount': 'Free shipping discount',
    'cart.shipping_charged': 'Shipping charged',
    'cart.divisor_note': 'Volume divisor: 1 kg per {vol} cm³. Packing overhead included: {g} g + {p}% volume.',

    /* ---------- 结账 ---------- */
    'co.title': 'Checkout',
    'co.sub': 'Secure checkout · Card details never touch this site',
    'co.empty_t': 'Your cart is empty',
    'co.empty_s': 'Add something to the cart first, then come back.',
    'co.nothing': 'Nothing to check out yet.',
    'co.contact': 'Contact',
    'co.contact_hint': 'Order confirmation goes here.',
    'co.email': 'Email',
    'co.email_ph': 'you@example.com',
    'co.ship_addr': 'Shipping address',
    'co.ship_addr_hint': 'Shipping is calculated from your address and the packed size of what is in the cart.',
    'co.first': 'First name',
    'co.last': 'Last name',
    'co.address1': 'Address',
    'co.address2': 'Apartment, suite, etc.',
    'co.optional': '(optional)',
    'co.country': 'Country',
    'co.state': 'State',
    'co.state_ph': 'e.g. CA',
    'co.province': 'Province / region',
    'co.city': 'City',
    'co.zip': 'ZIP / postcode',
    'co.phone': 'Phone',
    'co.phone_hint': '(for delivery only, optional)',
    'co.payment': 'Payment',
    'co.payment_hint': 'Choose how you want to pay.',
    'co.card': 'Credit / debit card',
    'co.card_sub': 'Visa, Mastercard, Amex, Apple Pay, Google Pay',
    'co.paypal': 'PayPal',
    'co.paypal_sub': 'Pay with your PayPal balance or linked account',
    'co.pay_note': 'You will be redirected to our payment provider to finish securely. Card data is never stored on this site.',
    'co.pay_note_wallet': 'You will be redirected to PayPal to approve the payment.',
    'co.place': 'Place order',
    'co.working': 'Working…',
    'co.terms': 'By placing an order you agree to our terms and 30-day return policy.',
    'co.your_order': 'Your order',
    'co.edit_cart': 'Edit cart',
    'co.err_required': 'Please fill in every required field',
    'co.err_email': 'That email address looks off',
    'co.demo_title': 'Payment not connected yet',
    'co.demo_body': 'This is a working demo. Cart, weights, shipping calculation and the order form are all real, but no payment gateway is wired up, so nothing will be charged.',
    'co.err_payment': 'Could not reach the payment service',
    'co.demo_toast': 'Demo only — no payment gateway connected yet',

    /* ---------- 国家 / 语言选择器 ---------- */
    'geo.title': 'Country & language',
    'geo.search_ph': 'Search country',
    'geo.all': 'All countries',
    'geo.none': 'No match found',
    'geo.results': '{n} countries',
    'geo.note': 'Picking a country also switches the site language.',
    'geo.region.americas': 'Americas',
    'geo.region.europe': 'Europe',
    'geo.region.asia': 'Asia',
    'geo.region.mena': 'Middle East & Africa',
    'geo.region.oceania': 'Oceania',
    'geo.region.other': 'Other regions'
  },

  /* ---------- 分类 ---------- */
  cats: {
    all: 'All finds',
    organization: 'Storage & Home',
    kitchen: 'Kitchen',
    pet: 'Pet',
    fragrance: 'Home Scent',
    jewelry: 'Accessories',
    bundle: 'Treasure Box'
  },

  /* ---------- 商品标签 ---------- */
  tags: {
    'Bestseller': 'Bestseller',
    'New': 'New',
    'Under $10': 'Under $10',
    'Limited': 'Limited',
    'Gift pick': 'Gift pick'
  },

  /* ---------- 选项组名 ---------- */
  optNames: {
    'Finish': 'Finish',
    'Colour': 'Colour',
    'Scent': 'Scent',
    'Size': 'Size',
    'Set': 'Set',
    'Hand': 'Hand'
  },

  /* ---------- 选项值 ---------- */
  optValues: {
    'Frosted': 'Frosted', 'Clear': 'Clear', 'Charcoal': 'Charcoal',
    'White': 'White', 'Black': 'Black', 'Oak': 'Oak',
    'Sage': 'Sage', 'Cream': 'Cream', 'Terracotta': 'Terracotta',
    'Blush': 'Blush',
    'Lavender': 'Lavender', 'Rose': 'Rose', 'Citrus': 'Citrus',
    'Linen': 'Linen', 'Sandalwood': 'Sandalwood', 'Fig': 'Fig',
    'Ocean': 'Ocean', 'Vanilla': 'Vanilla', 'Pine': 'Pine',
    'Small (up to 15 lb)': 'Small (up to 15 lb)',
    'Large (15–50 lb)': 'Large (15–50 lb)',
    'Left': 'Left', 'Right': 'Right', 'Pair': 'Pair',
    'US 5–7': 'US 5–7', 'US 8–10': 'US 8–10',
    '3 Large + 2 Medium': '3 Large + 2 Medium', '5 Large': '5 Large'
  },

  /* ---------- 运费分区 ---------- */
  zone: {
    'US': 'United States — mainland',
    'US-AKHI': 'United States — Alaska / Hawaii',
    'CA': 'Canada',
    'UK': 'United Kingdom',
    'AU': 'Australia'
  },

  /* ---------- 商品文案 ---------- */
  /* ---------- 国家 ---------- */
  countries: {
    'US': 'United States',
    'CA': 'Canada',
    'GB': 'United Kingdom',
    'AU': 'Australia'
  },

  products: {
    'org-drawer-3pk': {
      title: 'Stackable Drawer Organizer, 3-Pack',
      blurb: 'Clean up a messy drawer in under a minute. Three nesting sizes that lock together and slide, so nothing rattles.',
      features: [
        'Three sizes stack or sit side by side',
        'Non-slip feet — stays put when you open the drawer',
        'Fits standard 12" vanity and desk drawers',
        'Wipe-clean finish, no sharp edges'
      ]
    },
    'org-cable-box': {
      title: 'Desktop Cable & Cord Organizer Box',
      blurb: 'Hides the power strip nobody wants to look at. Ventilated lid keeps things cool while cables exit through the side slots.',
      features: [
        'Fits most 6-outlet power strips',
        'Ventilated lid, no heat build-up',
        'Cable exits on both ends',
        'Matte finish that does not show dust'
      ]
    },
    'org-vacuum-bags': {
      title: 'Vacuum Storage Bags',
      blurb: 'Squeezes a whole winter of bedding down to a stack of pancakes. Works with any vacuum, no pump needed.',
      features: [
        'Double-zip seal plus one-way valve',
        'Reusable — flatten, re-seal, repeat',
        'Cuts closet volume by about 70%',
        'Works with any standard vacuum hose'
      ]
    },
    'org-fridge-4pk': {
      title: 'Stackable Fridge Bin Set, 4-Pack',
      blurb: 'The answer to the fridge that eats your leftovers. Clear sides so you actually see what is about to go off.',
      features: [
        'Two sizes, stackable to save shelf height',
        'Clear walls, easy-grip handles',
        'Pull-out design — no unstacking to reach the back',
        'BPA-free, fridge and freezer safe'
      ]
    },
    'kit-silicone-6pk': {
      title: 'Silicone Kitchen Utensil Set, 6-Piece',
      blurb: 'Heat-safe to 480°F, so you can stir without scratching the pan you spent money on. Dishwasher safe, no melting handles.',
      features: [
        'Six pieces: spatula, turner, ladle, spoon, slotted spoon, whisk',
        'Food-grade silicone, no BPA',
        'Will not scratch non-stick coatings',
        'Dishwasher safe, no melting handles'
      ]
    },
    'pet-lint-roller': {
      title: 'Reusable Pet Hair Remover Roller',
      blurb: 'No sticky sheets, no refills to buy ever again. Roll, empty the chamber, go again.',
      features: [
        'Reusable — nothing disposable to re-buy',
        'One-handed back-and-forth motion',
        'Open chamber empties straight into the bin',
        'Works on couches, bedding and car seats'
      ]
    },
    'pet-slow-bowl': {
      title: 'Slow Feeder Pet Bowl',
      blurb: 'The maze pattern stretches a ten-second meal into ten minutes, which cuts down on bloat and the mess after.',
      features: [
        'Maze ridges slow eating, reduce bloat risk',
        'Non-slip base — does not slide across the floor',
        'BPA-free, dishwasher safe',
        'Suits small and medium breeds'
      ]
    },
    'pet-groom-glove': {
      title: 'Pet Grooming Deshedding Glove',
      blurb: 'Most pets prefer being stroked to being brushed. The soft nubs lift loose fur while you pet, so it never hits the couch.',
      features: [
        'Soft rubber nubs, comfortable for nervous pets',
        'Peel off the collected fur in one sheet',
        'Adjustable wrist strap, either hand',
        'Works on short and long coats'
      ]
    },
    'fra-sachet-6pk': {
      title: 'Dried Flower Scent Sachets, 6-Pack',
      blurb: 'Tuck one in a drawer, a shoe, a gym bag. Fabric pouch, all-natural dried botanicals, no open flame and nothing to plug in.',
      features: [
        'Six pouches per set, sachet bags included',
        'All-natural dried botanicals, long lasting',
        'No flame, no batteries, nothing to plug in',
        'Ideal for drawers, closets and luggage'
      ]
    },
    'fra-reed-diffuser': {
      title: 'Reed Diffuser Set with Ceramic Vase',
      blurb: 'Looks like something from a boutique, costs like something from a supermarket. Scent runs about eight weeks, no flame involved.',
      features: [
        'Glazed ceramic vase, reusable',
        '8 rattan reeds for steady diffusion',
        'Approximately 8 weeks of fragrance',
        'Flame-free — safe around kids and pets'
      ]
    },
    'fra-gel-clips': {
      title: 'Scented Gel Air Freshener Clips, 4-Pack',
      blurb: 'Clips onto an air vent and turns the whole car around in about a minute. Lasts roughly thirty days each.',
      features: [
        'Four clips, four scents per set',
        'Clips to vent blades, no adhesive',
        'About 30 days of scent per clip',
        'Adjustable open/close vent for intensity'
      ]
    },
    'jwl-earring-case': {
      title: 'Velvet Earring & Ring Storage Case',
      blurb: 'Two zip layers, no tangling, no lost backs. The kind of thing you buy to fix a drawer that has been a problem for years.',
      features: [
        'Two zip layers with stud and ring panels',
        'Soft velvet lining, nothing scratches',
        'Holds roughly 40 earrings plus 20 rings',
        'Fits in a carry-on or a handbag'
      ]
    },
    'jwl-ring-set': {
      title: 'Adjustable Stainless Steel Ring Set, 5-Pack',
      blurb: 'Opens and closes to fit almost any finger, so there is no size to guess wrong on. Steel core, tarnish-resistant finish.',
      features: [
        'Five rings, adjustable band',
        'Hypoallergenic stainless steel core',
        'Tarnish-resistant finish, no green fingers',
        'Open-back design fits most finger sizes'
      ]
    },
    'bundle-treasure-box': {
      title: 'The Treasure Box — 3 Random Finds',
      blurb: 'The whole point of this store in one box. We pack three picks from the current shelf, always worth more than you paid.',
      features: [
        'Three items, always over $39 in retail value',
        'Every box is packed differently',
        'Ships in 1 business day',
        'Sizes and colors vary — that is the fun part'
      ]
    }
  }
};
