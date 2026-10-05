/* 瑞典语 — Svenska */
window.I18N_DICTS = window.I18N_DICTS || {};
window.I18N_DICTS.sv = {
  ui: {
    /* ---------- 通用 ---------- */
    'demo.notice': 'Demoversion · varumärke, priser och bilder är platshållare och måste bytas ut före lansering',
    'ship.free_over': 'Fri frakt över {amount}',
    'ship.new_finds': 'Nya fynd varje onsdag',

    /* ---------- 导航 ---------- */
    'nav.shop_all': 'Se allt',
    'nav.treasure_box': 'Skattkistan',
    'nav.cart': 'Varukorg',
    'lang.label': 'Språk',

    /* ---------- 页脚 ---------- */
    'footer.note': 'Små, användbara saker till priser som inte behöver försvaras.',
    'footer.shop': 'Butik',
    'footer.all_finds': 'Alla fynd',
    'footer.pet': 'Husdjur',
    'footer.storage_home': 'Förvaring & hem',
    'footer.help': 'Hjälp',
    'footer.contact': 'Kontakt',
    'footer.shipping_returns': 'Frakt & retur',
    'footer.track': 'Spåra order',
    'footer.follow': 'Följ oss',
    'footer.rights': '© {year} {brand}. Alla rättigheter förbehållna.',
    'footer.secure': 'Säker betalning',

    /* ---------- 商品卡 ---------- */
    'card.save': 'Spara {n}%',
    'card.colours': '{n} färger',
    'card.options': '{n} alternativ',

    /* ---------- 首页 ---------- */
    'home.eyebrow': 'Nya fynd varje onsdag',
    'home.h1': 'Bra saker,',
    'home.h1_em': 'under $20.',
    'home.sub': 'De små användbara sakerna som får ett hem att fungera bättre — förvaring som faktiskt passar, köksredskap som håller, saker till husdjuret som räddar soffan. Till priser du inte behöver tänka på.',
    'home.cta_shelf': 'Se hyllan',
    'home.cta_box': 'Öppna en Skattkista',
    'home.stat_price': '$7.99–19.99',
    'home.stat_price_l': 'Varenda vara',
    'home.stat_ship': 'Fri frakt $29+',
    'home.stat_ship_l': 'Skickas inom 1 arbetsdag',
    'home.stat_rating': '4,7★ i snitt',
    'home.stat_rating_l': 'Från {n}+ omdömen',
    'home.value1_t': 'En prisstege, inga spel',
    'home.value1_s': 'Tre nivåer. Inga falska nedräkningar.',
    'home.value2_t': 'Packas och skickas inom 24 h',
    'home.value2_s': 'Små varor, spårbar leverans.',
    'home.value3_t': 'Utvalt, inte droppshipat',
    'home.value3_s': 'Vi testar det innan det läggs upp.',
    'home.shelf_t': 'Veckans hylla',
    'home.shelf_s': 'Allt nedan finns i lager och är redo att skickas.',
    'home.why_t': 'Varför hyllan ändras',
    'home.why_s': 'Vi håller ungefär 20 varor live åt gången. När något tar slut är det slut — och något annat tar dess plats.',
    'home.panel1_t': 'Små partier med flit',
    'home.panel1_s': 'Djupt lager är tråkigt lager. Vi köper grunt så att hyllan fortsätter röra sig och inget står i ett lager i ett år och dammar.',
    'home.panel2_t': 'Testat före publicering',
    'home.panel2_s': 'Varje vara används i en vecka först. Om den irriterar oss läggs den inte upp. Det är hela vår kvalitetsprocess, och den räcker.',
    'home.panel3_t': 'Alltid under $20',
    'home.panel3_s': 'Tre prisnivåer: $7.99, $12.99, $19.99. Du ska aldrig behöva kolla saldot innan du köper något användbart.',

    /* ---------- 商品详情 ---------- */
    'pdp.not_found_t': 'Den varan lämnade hyllan',
    'pdp.not_found_s': 'Hyllan ändras varje vecka, så vissa saker kommer inte tillbaka. Titta på vad som finns just nu.',
    'pdp.back_shelf': 'Tillbaka till hyllan',
    'pdp.reviews': '({n} omdömen)',
    'pdp.in_stock': '{n} i lager',
    'pdp.add': 'Lägg i varukorg',
    'pdp.add_price': 'Lägg i varukorg · {price}',
    'pdp.qty': 'Antal',
    'pdp.decrease': 'Minska',
    'pdp.increase': 'Öka',
    'pdp.related_t': 'Också på hyllan',
    'pdp.related_s': 'Passar bra med det du just tittade på.',
    'pdp.sku': 'SKU',
    'pdp.weight': 'Varans vikt',
    'pdp.dims': 'Förpackningsstorlek',
    'pdp.billable': 'Debiterbar vikt (bara denna vara)',
    'pdp.ratio': 'Fraktandel (skickas ensam)',
    'pdp.density': 'Densitet',
    'pdp.ships_from': 'Skickas från',
    'pdp.ships_from_v': 'Lokalt lager',
    'pdp.returns': 'Returer',
    'pdp.returns_v': '30 dagar, inga frågor',
    'pdp.by_volume': ' — efter volym',
    'pdp.by_weight': ' — efter vikt',
    'pdp.ship_hint': 'Ensam skickas den med {weight} debiterbar vikt — {rate} till {zone}. Gratis så fort din varukorg passerar {threshold}.',
    'pdp.ratio_of': '{n}% av varans pris',
    'pdp.density_bulky': ' — skrymmande, dyrt att skicka',
    'pdp.cn_note': 'intern anteckning, ta bort före lansering',
    'pdp.added': 'Lade {n} × {name} i varukorgen',

    /* ---------- 购物车 ---------- */
    'cart.title': 'Din varukorg',
    'cart.loading': 'Laddar…',
    'cart.nothing': 'Inget här än.',
    'cart.items_line': '{n} varor på {m} rader — redo att gå vidare.',
    'cart.empty_t': 'Din varukorg är tom',
    'cart.empty_s': 'Hyllan är liten med flit, så titta in innan veckans urval tar slut.',
    'cart.summary': 'Ordersammanfattning',
    'cart.ship_to': 'Skickas till',
    'cart.subtotal': 'Delsumma',
    'cart.shipping': 'Frakt',
    'cart.total': 'Totalt',
    'cart.free': 'Gratis',
    'cart.free_unlocked': 'Fri frakt upplåst.',
    'cart.free_cap': 'Fri frakt upp till {cap}. Denna order har {w} debiterbar vikt, så vanliga priser gäller.',
    'cart.away': 'Du är {amount} från fri frakt.',
    'cart.how_shipping': 'Så räknades frakten ut',
    'cart.checkout': 'Till kassan',
    'cart.keep': 'Fortsätt titta',
    'cart.note': 'Skickas inom 1 arbetsdag. 30 dagars retur.',
    'cart.note2': 'Kortuppgifter når aldrig den här sidan.',
    'cart.each': '{price} styck',
    'cart.remove': 'Ta bort',
    'cart.removed': 'Borttagen från varukorgen',
    'cart.dest': 'Destination',
    'cart.units': 'Enheter',
    'cart.actual_w': 'Verklig vikt',
    'cart.vol_w': 'Volymvikt',
    'cart.billable_w': 'Debiterbar vikt',
    'cart.billed_volume': 'Debiteras på volym — denna order tar mer plats än den väger. Volymvikten är {p}% av den debiterbara vikten.',
    'cart.billed_actual': 'Debiteras på verklig vikt — denna order är tillräckligt tät för att storleken inte spelar roll.',
    'cart.oversize': 'Tillägg för skrymmande vara: +{amount}',
    'cart.base_rate': 'Grundpris',
    'cart.oversize_row': 'Tillägg skrymmande',
    'cart.free_discount': 'Rabatt fri frakt',
    'cart.shipping_charged': 'Debiterad frakt',
    'cart.divisor_note': 'Volymdivisor: 1 kg per {vol} cm³. Packningspåslag ingår: {g} g + {p}% volym.',

    /* ---------- 结账 ---------- */
    'co.title': 'Kassa',
    'co.sub': 'Säker betalning · Kortuppgifter når aldrig den här sidan',
    'co.empty_t': 'Din varukorg är tom',
    'co.empty_s': 'Lägg till något i varukorgen först och kom tillbaka.',
    'co.nothing': 'Inget att betala än.',
    'co.contact': 'Kontakt',
    'co.contact_hint': 'Orderbekräftelsen hamnar här.',
    'co.email': 'E-post',
    'co.email_ph': 'du@exempel.com',
    'co.ship_addr': 'Leveransadress',
    'co.ship_addr_hint': 'Frakten räknas ut från din adress och förpackningsstorleken på det som ligger i varukorgen.',
    'co.first': 'Förnamn',
    'co.last': 'Efternamn',
    'co.address1': 'Adress',
    'co.address2': 'Lägenhet, våning, m.m.',
    'co.optional': '(valfritt)',
    'co.country': 'Land',
    'co.state': 'Delstat',
    'co.state_ph': 't.ex. CA',
    'co.province': 'Provins / region',
    'co.city': 'Stad',
    'co.zip': 'Postnummer',
    'co.phone': 'Telefon',
    'co.phone_hint': '(endast för leverans, valfritt)',
    'co.payment': 'Betalning',
    'co.payment_hint': 'Välj hur du vill betala.',
    'co.card': 'Kredit- / betalkort',
    'co.card_sub': 'Visa, Mastercard, Amex, Apple Pay, Google Pay',
    'co.paypal': 'PayPal',
    'co.paypal_sub': 'Betala med ditt PayPal-saldo eller kopplade konto',
    'co.pay_note': 'Du skickas vidare till vår betalningsleverantör för att slutföra säkert. Kortuppgifter sparas aldrig på den här sidan.',
    'co.pay_note_wallet': 'Du skickas vidare till PayPal för att godkänna betalningen.',
    'co.place': 'Lägg order',
    'co.working': 'Arbetar…',
    'co.terms': 'Genom att lägga en order godkänner du våra villkor och 30-dagars returpolicy.',
    'co.your_order': 'Din order',
    'co.edit_cart': 'Redigera varukorg',
    'co.err_required': 'Fyll i alla obligatoriska fält',
    'co.err_email': 'Den e-postadressen ser fel ut',
    'co.demo_title': 'Betalning inte ansluten än',
    'co.demo_body': 'Detta är en fungerande demo. Varukorg, vikter, fraktberäkning och orderformuläret är äkta, men ingen betalningsgateway är inkopplad, så inget debiteras.',
    'co.err_payment': 'Kunde inte nå betaltjänsten',
    'co.demo_toast': 'Endast demo — ingen betalningsgateway ansluten',

    /* ---------- 国家 / 语言选择器 ---------- */
    'geo.title': 'Land & språk',
    'geo.search_ph': 'Sök land',
    'geo.all': 'Alla länder',
    'geo.none': 'Inga träffar',
    'geo.results': '{n} länder',
    'geo.note': 'Att välja land byter också språk på sidan.',
    'geo.region.americas': 'Amerika',
    'geo.region.europe': 'Europa',
    'geo.region.asia': 'Asien',
    'geo.region.mena': 'Mellanöstern & Afrika',
    'geo.region.oceania': 'Oceanien',
    'geo.region.other': 'Övriga regioner'
  },

  /* ---------- 分类 ---------- */
  cats: {
    all: 'Allt',
    organization: 'Förvaring & hem',
    kitchen: 'Kök',
    pet: 'Husdjur',
    fragrance: 'Hemdoft',
    jewelry: 'Accessoarer',
    bundle: 'Skattkistan'
  },

  /* ---------- 商品标签 ---------- */
  tags: {
    'Bestseller': 'Bästsäljare',
    'New': 'Ny',
    'Under $10': 'Under $10',
    'Limited': 'Begränsad',
    'Gift pick': 'Presenttips'
  },

  /* ---------- 选项组名 ---------- */
  optNames: {
    'Finish': 'Yta',
    'Colour': 'Färg',
    'Scent': 'Doft',
    'Size': 'Storlek',
    'Set': 'Set',
    'Hand': 'Hand'
  },

  /* ---------- 选项值 ---------- */
  optValues: {
    'Frosted': 'Matt', 'Clear': 'Klar', 'Charcoal': 'Antracit',
    'White': 'Vit', 'Black': 'Svart', 'Oak': 'Ek',
    'Sage': 'Salvia', 'Cream': 'Kräm', 'Terracotta': 'Terrakotta',
    'Blush': 'Puderrosa',
    'Lavender': 'Lavendel', 'Rose': 'Ros', 'Citrus': 'Citrus',
    'Linen': 'Linne', 'Sandalwood': 'Sandelträ', 'Fig': 'Fikon',
    'Ocean': 'Hav', 'Vanilla': 'Vanilj', 'Pine': 'Tall',
    'Small (up to 15 lb)': 'Liten (upp till 15 lb)',
    'Large (15–50 lb)': 'Stor (15–50 lb)',
    'Left': 'Vänster', 'Right': 'Höger', 'Pair': 'Par',
    'US 5–7': 'US 5–7', 'US 8–10': 'US 8–10',
    '3 Large + 2 Medium': '3 stora + 2 medel', '5 Large': '5 stora'
  },

  /* ---------- 运费分区 ---------- */
  zone: {
    'US': 'USA — fastlandet',
    'US-AKHI': 'USA — Alaska / Hawaii',
    'CA': 'Kanada',
    'UK': 'Storbritannien',
    'AU': 'Australien'
  },

  /* ---------- 国家 ---------- */
  countries: {
    'US': 'USA',
    'CA': 'Kanada',
    'GB': 'Storbritannien',
    'AU': 'Australien'
  },

  /* ---------- 商品文案 ---------- */
  products: {
    'org-drawer-3pk': {
      title: 'Stapelbar lådorganisatör, 3-pack',
      blurb: 'Rensa en rörig låda på under en minut. Tre storlekar som klickar ihop och glider, så att inget skramlar.',
      features: [
        'Tre storlekar: stapla eller ställ sida vid sida',
        'Halkskydd under — ligger kvar när du öppnar lådan',
        'Passar vanliga lådor på 12 tum',
        'Lätt att torka av, inga vassa kanter'
      ]
    },
    'org-cable-box': {
      title: 'Låda för kablar och grenuttag på skrivbordet',
      blurb: 'Gömmer grenuttaget ingen vill se. Locket med ventilation håller det svalt medan kablarna går ut på sidorna.',
      features: [
        'Passar de flesta grenuttag med 6 uttag',
        'Ventilerat lock, ingen värmeansamling',
        'Kablarna går ut i båda ändar',
        'Matt yta som inte visar damm'
      ]
    },
    'org-vacuum-bags': {
      title: 'Vakuumförvaringspåsar',
      blurb: 'Pressar en hel vinter sängkläder till en tunn stapel. Fungerar med vilken dammsugare som helst, ingen pump behövs.',
      features: [
        'Dubbel dragkedja plus envägsventil',
        'Återanvändbara — platta till, stäng igen, upprepa',
        'Minskar garderobsvolymen med cirka 70%',
        'Fungerar med alla vanliga dammsugarslangar'
      ]
    },
    'org-fridge-4pk': {
      title: 'Stapelbara kylskåpslådor, 4-pack',
      blurb: 'Svaret på kylskåpet som äter upp dina rester. Klara sidor så att du faktiskt ser vad som snart måste ätas.',
      features: [
        'Två storlekar, stapelbara för att spara höjd',
        'Klara väggar och greppvänliga handtag',
        'Utdragbar design — inget att stapla om för att nå baktill',
        'BPA-fria, tål kyl och frys'
      ]
    },
    'kit-silicone-6pk': {
      title: 'Köksredskap i silikon, 6 delar',
      blurb: 'Värmetåliga till 480°F, så du kan röra utan att repa stekpannan du betalade för. Diskmaskinssäkra, inga handtag som smälter.',
      features: [
        'Sex delar: spatel, stekspade, soppslev, sked, hålslev, visp',
        'Silikon för livsmedel, BPA-fritt',
        'Repar inte nonstick-beläggningar',
        'Diskmaskinssäkra, inga handtag som smälter'
      ]
    },
    'pet-lint-roller': {
      title: 'Återanvändbar roller för husdjurshår',
      blurb: 'Inga kladdiga ark, inga refill att köpa. Rulla, töm kammaren, kör igen.',
      features: [
        'Återanvändbar — inget engångsmaterial att köpa igen',
        'Fram och tillbaka med en hand',
        'Öppen kammare töms rakt i papperskorgen',
        'Fungerar på soffor, sängkläder och bilsäten'
      ]
    },
    'pet-slow-bowl': {
      title: 'Långsamt ätande skål för husdjur',
      blurb: 'Labyrintmönstret drar ut en tio sekunders måltid till tio minuter, vilket minskar uppsvälldhet och röran efteråt.',
      features: [
        'Labyrintåsar saktar ner ätandet och minskar risken för uppsvälldhet',
        'Halkskydd under — glider inte över golvet',
        'BPA-fri, diskmaskinssäker',
        'Passar små och medelstora raser'
      ]
    },
    'pet-groom-glove': {
      title: 'Handske för att borsta bort lös päls från husdjur',
      blurb: 'De flesta husdjur föredrar att bli klappade framför borstade. De mjuka knopparna lyfter lös päls medan du klappar, så att den inte hamnar i soffan.',
      features: [
        'Mjuka gummiknoppar, sköna även för nervösa djur',
        'Den samlade pälsen dras av i ett enda stycke',
        'Justerbar handledsrem, för båda händerna',
        'Fungerar på kort och lång päls'
      ]
    },
    'fra-sachet-6pk': {
      title: 'Doftpåsar med torkade blommor, 6-pack',
      blurb: 'Stoppa en i en låda, en sko, en träningsväska. Tygpåse, naturliga torkade blommor, ingen öppen låga och inget att koppla in.',
      features: [
        'Sex påsar per set, doftpåsar ingår',
        'Naturligt torkade blommor, långvariga',
        'Ingen låga, inga batterier, inget att koppla in',
        'Perfekt för lådor, garderober och resväskor'
      ]
    },
    'fra-reed-diffuser': {
      title: 'Doftspridare med rörpinnar och keramikvas',
      blurb: 'Ser ut som något från en boutique, kostar som något från en mataffär. Doften håller i ungefär åtta veckor, utan låga.',
      features: [
        'Glasyrerad keramikvas, återanvändbar',
        '8 rattanpinnar för jämn spridning',
        'Cirka 8 veckor med doft',
        'Utan låga — säker runt barn och husdjur'
      ]
    },
    'fra-gel-clips': {
      title: 'Doftande gelklämmor, 4-pack',
      blurb: 'Kläm fast på ett ventilationsgaller och hela bilen doftar annorlunda inom en minut. Varje klämma håller i ungefär trettio dagar.',
      features: [
        'Fyra klämmor, fyra dofter per set',
        'Klämmer på gallrets lameller, inget lim',
        'Cirka 30 dagar med doft per klämma',
        'Justerbar öppning för intensiteten'
      ]
    },
    'jwl-earring-case': {
      title: 'Fodral i sammet för örhängen och ringar',
      blurb: 'Två dragkedjelager, inget trassel, inga tappade stift. Precis en sådan sak man köper för att lösa en låda man bråkat med i år.',
      features: [
        'Två dragkedjelager med paneler för örhängen och ringar',
        'Mjukt sammetsfoder, inget blir repat',
        'Rymmer cirka 40 örhängen plus 20 ringar',
        'Får plats i handbagage eller handväska'
      ]
    },
    'jwl-ring-set': {
      title: 'Justerbart ring-set i rostfritt stål, 5-pack',
      blurb: 'Öppnas och stängs för att passa nästan vilket finger som helst, så det finns ingen storlek att gissa fel på. Stålkärna, yta som står emot missfärgning.',
      features: [
        'Fem ringar med justerbart band',
        'Hypoallergen kärna i rostfritt stål',
        'Yta som står emot missfärgning, inga gröna fingrar',
        'Öppen baksida passar de flesta fingerstorlekar'
      ]
    },
    'bundle-treasure-box': {
      title: 'Skattkistan — 3 slumpade fynd',
      blurb: 'Hela poängen med butiken i en låda. Vi packar tre urval från aktuell hylla, alltid värda mer än du betalar.',
      features: [
        'Tre varor, alltid över $39 i ordinarie värde',
        'Varje låda packas olika',
        'Skickas inom 1 arbetsdag',
        'Storlekar och färger varierar — det är det roliga'
      ]
    }
  }
};
