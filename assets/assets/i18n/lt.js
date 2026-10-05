/* 立陶宛语 — Lietuvių */
window.I18N_DICTS = window.I18N_DICTS || {};
window.I18N_DICTS.lt = {
  ui: {
    /* ---------- Bendra ---------- */
    'demo.notice': 'Demonstracinė versija · prekės ženklo pavadinimas, kainos ir vaizdai yra laikini',
    'ship.free_over': 'Nemokamas pristatymas nuo {amount}',
    'ship.new_finds': 'Nauji radiniai kiekvieną trečiadienį',

    /* ---------- Navigacija ---------- */
    'nav.shop_all': 'Peržiūrėti viską',
    'nav.treasure_box': 'Netikėtumų dėžė',
    'nav.cart': 'Krepšelis',
    'lang.label': 'Kalba',

    /* ---------- Poraštė ---------- */
    'footer.note': 'Maži, naudingi daiktai už kainas, kurių nereikia pateisinti.',
    'footer.shop': 'Parduotuvė',
    'footer.all_finds': 'Visi radiniai',
    'footer.pet': 'Augintiniai',
    'footer.storage_home': 'Laikymas ir namai',
    'footer.help': 'Pagalba',
    'footer.contact': 'Kontaktai',
    'footer.shipping_returns': 'Pristatymas ir grąžinimas',
    'footer.track': 'Sekti užsakymą',
    'footer.follow': 'Sekite mus',
    'footer.rights': '© {year} {brand}. Visos teisės saugomos.',
    'footer.secure': 'Saugus atsiskaitymas',

    /* ---------- Prekės kortelė ---------- */
    'card.save': 'Sutaupyk {n}%',
    'card.colours': '{n} spalvų',
    'card.options': '{n} variantų',

    /* ---------- Pradžia ---------- */
    'home.eyebrow': 'Nauji radiniai kiekvieną trečiadienį',
    'home.h1': 'Geri daiktai,',
    'home.h1_em': 'iki $20.',
    'home.sub': 'Maži naudingi daiktai, dėl kurių namai veikia geriau — laikymas, kuris tikrai telpa, virtuvės įrankiai, kurie tarnauja, augintinių reikmenys, kurie gelbsti sofą. Už kainas, apie kurias nereikia galvoti.',
    'home.cta_shelf': 'Peržiūrėti lentyną',
    'home.cta_box': 'Atidaryti Netikėtumų dėžę',
    'home.stat_price': '$7.99–19.99',
    'home.stat_price_l': 'Kiekvienas atskiras daiktas',
    'home.stat_ship': 'Nemokamas pristatymas $29+',
    'home.stat_ship_l': 'Išsiunčiame per 1 darbo dieną',
    'home.stat_rating': '4.7★ vid.',
    'home.stat_rating_l': 'Iš {n}+ atsiliepimų',
    'home.value1_t': 'Viena kainų skalė, jokių žaidimų',
    'home.value1_s': 'Trys lygiai. Jokių netikrų laikmačių.',
    'home.value2_t': 'Supakuota ir išsiųsta per 24 h',
    'home.value2_s': 'Maži daiktai, pristatymas su sekimu.',
    'home.value3_t': 'Atrasta, o ne dropshipping',
    'home.value3_s': 'Testuojame, prieš keldami į svetainę.',
    'home.shelf_t': 'Šios savaitės lentyna',
    'home.shelf_s': 'Viskas žemiau yra sandėlyje ir paruošta siuntimui.',
    'home.why_t': 'Kodėl lentyna keičiasi',
    'home.why_s': 'Vienu metu laikome apie 20 aktyvių daiktų. Kai kas nors dingsta, tai dingsta — o jo vietą užima kažkas kitas.',
    'home.panel1_t': 'Mažos partijos tyčia',
    'home.panel1_s': 'Dideli atsargų kiekiai yra nuobodūs. Perkame nedaug, kad lentyna nuolat judėtų ir niekas metus negulėtų sandėlyje ir nekauptų dulkių.',
    'home.panel2_t': 'Išbandyta prieš įkeliant',
    'home.panel2_s': 'Kiekvieną daiktą pirmiausia naudojame savaitę. Jei jis mus erzina, jis nekeliauja į svetainę. Tai visas mūsų kokybės procesas, ir jo pakanka.',
    'home.panel3_t': 'Visada iki $20',
    'home.panel3_s': 'Trys kainų lygiai: $7.99, $12.99, $19.99. Niekada neturėtum tikrinti balanso prieš pirkdamas ką nors naudingo.',

    /* ---------- Prekės informacija ---------- */
    'pdp.not_found_t': 'Šis daiktas paliko lentyną',
    'pdp.not_found_s': 'Lentyna keičiasi kas savaitę, tad kai kurie daiktai nebegrįžta. Pažiūrėk, kas šiuo metu yra.',
    'pdp.back_shelf': 'Atgal į lentyną',
    'pdp.reviews': '({n} atsiliepimų)',
    'pdp.in_stock': '{n} sandėlyje',
    'pdp.add': 'Į krepšelį',
    'pdp.add_price': 'Į krepšelį · {price}',
    'pdp.qty': 'Kiekis',
    'pdp.decrease': 'Mažinti',
    'pdp.increase': 'Didinti',
    'pdp.related_t': 'Taip pat lentynoje',
    'pdp.related_s': 'Puikiai dera su tuo, ką ką tik žiūrėjai.',
    'pdp.sku': 'SKU',
    'pdp.weight': 'Daikto svoris',
    'pdp.dims': 'Pakuotės dydis',
    'pdp.billable': 'Apmokestinamasis svoris (šis daiktas atskirai)',
    'pdp.ratio': 'Siuntimo dalis (siunčiant atskirai)',
    'pdp.density': 'Tankis',
    'pdp.ships_from': 'Siunčiama iš',
    'pdp.ships_from_v': 'Vietinis sandėlis',
    'pdp.returns': 'Grąžinimas',
    'pdp.returns_v': '30 dienų, be klausimų',
    'pdp.by_volume': ' — pagal tūrį',
    'pdp.by_weight': ' — pagal svorį',
    'pdp.ship_hint': 'Atskirai šis daiktas siunčiamas su {weight} apmokestinamojo svorio — {rate} į {zone}. Nemokamai, kai krepšelis viršija {threshold}.',
    'pdp.ratio_of': '{n}% daikto kainos',
    'pdp.density_bulky': ' — didelis, brangus siųsti',
    'pdp.cn_note': 'vidinė pastaba, ištrinti prieš paleidimą',
    'pdp.added': 'Pridėta {n} × {name} į krepšelį',

    /* ---------- Krepšelis ---------- */
    'cart.title': 'Tavo krepšelis',
    'cart.loading': 'Kraunama…',
    'cart.nothing': 'Kol kas nieko.',
    'cart.items_line': '{n} daiktai {m} eilutėse — paruošta atsiskaitymui.',
    'cart.empty_t': 'Tavo krepšelis tuščias',
    'cart.empty_s': 'Lentyna tyčia maža, tad pažiūrėk, kol šios savaitės pasirinkimai neišparduoti.',
    'cart.summary': 'Užsakymo suvestinė',
    'cart.ship_to': 'Pristatymo adresas',
    'cart.subtotal': 'Tarpinė suma',
    'cart.shipping': 'Pristatymas',
    'cart.total': 'Iš viso',
    'cart.free': 'Nemokamai',
    'cart.free_unlocked': 'Nemokamas pristatymas aktyvuotas.',
    'cart.free_cap': 'Nemokamas pristatymas iki {cap}. Šis užsakymas yra {w} apmokestinamojo svorio, tad taikomi standartiniai tarifai.',
    'cart.away': 'Iki nemokamo pristatymo liko {amount}.',
    'cart.how_shipping': 'Kaip apskaičiuotas pristatymas',
    'cart.checkout': 'Atsiskaityti',
    'cart.keep': 'Tęsti apžiūrą',
    'cart.note': 'Išsiunčiame per 1 darbo dieną. Grąžinimas per 30 dienų.',
    'cart.note2': 'Kortelės duomenys niekada nepatenka į šią svetainę.',
    'cart.each': '{price} už vienetą',
    'cart.remove': 'Pašalinti',
    'cart.removed': 'Pašalinta iš krepšelio',
    'cart.dest': 'Paskirties vieta',
    'cart.units': 'Vienetai',
    'cart.actual_w': 'Faktinis svoris',
    'cart.vol_w': 'Tūrinis svoris',
    'cart.billable_w': 'Apmokestinamasis svoris',
    'cart.billed_volume': 'Skaičiuojama pagal tūrį — šis užsakymas užima daugiau vietos nei sveria. Tūrinis svoris sudaro {p}% apmokestinamojo.',
    'cart.billed_actual': 'Skaičiuojama pagal faktinį svorį — šis užsakymas pakankamai tankus, tad dydis nevaidina rolės.',
    'cart.oversize': 'Pritaikytas didelių gabaritų priedas: +{amount}',
    'cart.base_rate': 'Bazinis tarifas',
    'cart.oversize_row': 'Didelių gabaritų priedas',
    'cart.free_discount': 'Nemokamo pristatymo nuolaida',
    'cart.shipping_charged': 'Priskaičiuotas pristatymas',
    'cart.divisor_note': 'Tūrio daliklis: 1 kg už {vol} cm³. Įskaičiuota pakuotė: {g} g + {p}% tūrio.',

    /* ---------- Atsiskaitymas ---------- */
    'co.title': 'Atsiskaitymas',
    'co.sub': 'Saugus atsiskaitymas · Kortelės duomenys niekada nepatenka į šią svetainę',
    'co.empty_t': 'Tavo krepšelis tuščias',
    'co.empty_s': 'Pirmiausia ką nors pridėk į krepšelį, tada grįžk.',
    'co.nothing': 'Kol kas nėra ko atsiskaityti.',
    'co.contact': 'Kontaktai',
    'co.contact_hint': 'Užsakymo patvirtinimas ateis čia.',
    'co.email': 'El. paštas',
    'co.email_ph': 'tu@pvz.lt',
    'co.ship_addr': 'Pristatymo adresas',
    'co.ship_addr_hint': 'Pristatymas apskaičiuojamas pagal tavo adresą ir krepšelyje esančių daiktų pakuotės dydį.',
    'co.first': 'Vardas',
    'co.last': 'Pavardė',
    'co.address1': 'Adresas',
    'co.address2': 'Butas, aukštas ir pan.',
    'co.optional': '(nebūtina)',
    'co.country': 'Šalis',
    'co.state': 'Valstija',
    'co.state_ph': 'pvz. CA',
    'co.province': 'Provincija / regionas',
    'co.city': 'Miestas',
    'co.zip': 'Pašto kodas',
    'co.phone': 'Telefonas',
    'co.phone_hint': '(tik pristatymui, nebūtina)',
    'co.payment': 'Mokėjimas',
    'co.payment_hint': 'Pasirink, kaip nori mokėti.',
    'co.card': 'Kredito / debeto kortelė',
    'co.card_sub': 'Visa, Mastercard, Amex, Apple Pay, Google Pay',
    'co.paypal': 'PayPal',
    'co.paypal_sub': 'Mokėk PayPal likučiu arba susieta sąskaita',
    'co.pay_note': 'Būsi nukreiptas į mūsų mokėjimų tiekėją, kad saugiai užbaigtum. Kortelės duomenys niekada nesaugomi šioje svetainėje.',
    'co.pay_note_wallet': 'Būsi nukreiptas į PayPal, kad patvirtintum mokėjimą.',
    'co.place': 'Pateikti užsakymą',
    'co.working': 'Apdorojama…',
    'co.terms': 'Pateikdamas užsakymą sutinki su mūsų sąlygomis ir 30 dienų grąžinimo taisykle.',
    'co.your_order': 'Tavo užsakymas',
    'co.edit_cart': 'Redaguoti krepšelį',
    'co.err_required': 'Užpildyk visus privalomus laukus',
    'co.err_email': 'Šis el. pašto adresas atrodo netaisyklingas',
    'co.demo_title': 'Mokėjimas dar neprijungtas',
    'co.demo_body': 'Tai veikianti demonstracinė versija. Krepšelis, svoriai, pristatymo skaičiavimas ir forma yra tikri, tačiau mokėjimo sistema neprijungta, tad nieko nebus nuskaičiuota.',
    'co.err_payment': 'Nepavyko pasiekti mokėjimo paslaugos',
    'co.demo_toast': 'Tik demonstracija — mokėjimo sistema dar neprijungta',

    /* ---------- Šalies / kalbos pasirinkimas ---------- */
    'geo.title': 'Šalis ir kalba',
    'geo.search_ph': 'Ieškoti šalies',
    'geo.all': 'Visos šalys',
    'geo.none': 'Nieko nerasta',
    'geo.results': '{n} šalių',
    'geo.note': 'Pasirinkus šalį taip pat pakeičiama svetainės kalba.',
    'geo.region.americas': 'Amerika',
    'geo.region.europe': 'Europa',
    'geo.region.asia': 'Azija',
    'geo.region.mena': 'Artimieji Rytai ir Afrika',
    'geo.region.oceania': 'Okeanija',
    'geo.region.other': 'Kiti regionai'
  },

  /* ---------- Kategorijos ---------- */
  cats: {
    all: 'Visi radiniai',
    organization: 'Laikymas ir namai',
    kitchen: 'Virtuvė',
    pet: 'Augintiniai',
    fragrance: 'Namų kvapai',
    jewelry: 'Aksesuarai',
    bundle: 'Netikėtumų dėžė'
  },

  /* ---------- Prekių žymos ---------- */
  tags: {
    'Bestseller': 'Perkamiausias',
    'New': 'Nauja',
    'Under $10': 'Iki $10',
    'Limited': 'Ribota',
    'Gift pick': 'Dovanų idėja'
  },

  /* ---------- Pasirinkimų grupių pavadinimai ---------- */
  optNames: {
    'Finish': 'Apdaila',
    'Colour': 'Spalva',
    'Scent': 'Kvapas',
    'Size': 'Dydis',
    'Set': 'Rinkinys',
    'Hand': 'Ranka'
  },

  /* ---------- Pasirinkimų reikšmės ---------- */
  optValues: {
    'Frosted': 'Matinis', 'Clear': 'Skaidrus', 'Charcoal': 'Antracitas',
    'White': 'Balta', 'Black': 'Juoda', 'Oak': 'Ąžuolas',
    'Sage': 'Šalavijas', 'Cream': 'Kreminė', 'Terracotta': 'Terakota',
    'Blush': 'Blyškiai rožinė',
    'Lavender': 'Levanda', 'Rose': 'Rožė', 'Citrus': 'Citrusas',
    'Linen': 'Linas', 'Sandalwood': 'Sandalmedis', 'Fig': 'Figa',
    'Ocean': 'Vandenynas', 'Vanilla': 'Vanilė', 'Pine': 'Pušis',
    'Small (up to 15 lb)': 'Mažas (iki 15 lb)',
    'Large (15–50 lb)': 'Didelis (15–50 lb)',
    'Left': 'Kairė', 'Right': 'Dešinė', 'Pair': 'Pora',
    'US 5–7': 'US 5–7', 'US 8–10': 'US 8–10',
    '3 Large + 2 Medium': '3 dideli + 2 vidutiniai', '5 Large': '5 dideli'
  },

  /* ---------- Pristatymo zonos ---------- */
  zone: {
    'US': 'Jungtinės Valstijos — žemynas',
    'US-AKHI': 'Jungtinės Valstijos — Aliaska / Havajai',
    'CA': 'Kanada',
    'UK': 'Jungtinė Karalystė',
    'AU': 'Australija'
  },

  /* ---------- Šalys ---------- */
  countries: {
    'US': 'Jungtinės Valstijos',
    'CA': 'Kanada',
    'GB': 'Jungtinė Karalystė',
    'AU': 'Australija'
  },

  products: {
    'org-drawer-3pk': {
      title: 'Sukraunamas stalčių organizatorius, 3 vnt.',
      blurb: 'Sutvarkyk netvarkingą stalčių greičiau nei per minutę. Trys dydžiai, kurie susikabina ir slenka, tad niekas nebarška.',
      features: [
        'Trys dydžiai: sukraunami arba dedami greta',
        'Neslystančios kojelės — išlieka vietoje atidarant stalčių',
        'Telpa į standartinius 12 colių stalčius',
        'Nuvalomas paviršius, jokių aštrių kraštų'
      ]
    },
    'org-cable-box': {
      title: 'Stalinė laidų ir ilgintuvų dėžutė',
      blurb: 'Paslepia ilgintuvą, kurio niekas nenori matyti. Vėdinamas dangtis laiko vėsą, o laidai išeina per šoninius plyšius.',
      features: [
        'Telpa dauguma 6 lizdų ilgintuvų',
        'Vėdinamas dangtis, nekaupia šilumos',
        'Laidai išeina iš abiejų galų',
        'Matinis paviršius, kuriame nesimato dulkių'
      ]
    },
    'org-vacuum-bags': {
      title: 'Vakuuminiai laikymo maišai',
      blurb: 'Suspausia visą žiemos patalynę į plokščią krūvelę. Veikia su bet kuriuo siurbliu, nereikia pompos.',
      features: [
        'Dvigubas užtrauktukas ir vienkryptis vožtuvas',
        'Daugkartiniai — išlygink, vėl uždaryk, kartok',
        'Sumažina spintos tūrį maždaug 70%',
        'Tinka prie bet kurios standartinės siurblio žarnos'
      ]
    },
    'org-fridge-4pk': {
      title: 'Sukraunamų šaldytuvo dėžių rinkinys, 4 vnt.',
      blurb: 'Atsakymas į šaldytuvą, kuris praryja tavo likučius. Skaidrūs šonai, kad tikrai matytum, kas netrukus pasibaigs.',
      features: [
        'Dviejų dydžių, sukraunami taupant aukštį',
        'Skaidrios sienelės, patogios rankenos',
        'Ištraukiama konstrukcija — nereikia perkrauti, kad pasiektum galą',
        'Be BPA, tinka šaldytuvui ir šaldikliui'
      ]
    },
    'kit-silicone-6pk': {
      title: 'Silikoninių virtuvės įrankių rinkinys, 6 vnt.',
      blurb: 'Atsparūs karščiui iki 480°F, tad gali maišyti nesubraižydamas keptuvės, už kurią sumokėjai. Tinka plauti indaplovėje, rankenos netirpsta.',
      features: [
        'Šeši vienetai: mentelė, apvertėjas, samtis, šaukštas, šaukštas su skylutėmis, plaktuvas',
        'Maistui saugus silikonas, be BPA',
        'Nebraižo nepridegančių dangų',
        'Tinka plauti indaplovėje, rankenos netirpsta'
      ]
    },
    'pet-lint-roller': {
      title: 'Daugkartinis augintinių plaukų valymo volelis',
      blurb: 'Jokių lipnių lapelių, jokių papildymų, kurių niekada nebereikės pirkti. Pravesk volelį, išvalyk kamerą, tęsk.',
      features: [
        'Daugkartinis — nieko vienkartinio, ką reikėtų pirkti iš naujo',
        'Judėjimas pirmyn-atgal viena ranka',
        'Atvira kamera ištuštinama tiesiai į šiukšliadėžę',
        'Veikia ant sofų, patalynės ir automobilių sėdynių'
      ]
    },
    'pet-slow-bowl': {
      title: 'Lėto maitinimo augintinių dubenėlis',
      blurb: 'Labirinto raštas dešimties sekundžių maistą ištempia į dešimt minučių, o tai sumažina pūtimą ir netvarką po valgio.',
      features: [
        'Labirinto briaunos lėtina ėdimą, mažina pūtimo riziką',
        'Neslystantis pagrindas — neslankioja grindimis',
        'Be BPA, tinka plauti indaplovėje',
        'Tinka mažoms ir vidutinėms veislėms'
      ]
    },
    'pet-groom-glove': {
      title: 'Augintinių šukavimo ir plaukų šalinimo pirštinė',
      blurb: 'Dauguma augintinių labiau mėgsta glostymą nei šukavimą. Minkšti gumbeliai iškelia išslenkančius plaukus, kol glostai, tad jie niekada nepasiekia sofos.',
      features: [
        'Minkšti guminiai gumbeliai, patogūs nervingiems augintiniams',
        'Surinktus plaukus nusiimi vienu sluoksniu',
        'Reguliuojamas riešo dirželis, tinka abiem rankom',
        'Veikia ant trumpo ir ilgo kailio'
      ]
    },
    'fra-sachet-6pk': {
      title: 'Kvapnios džiovintų gėlių pagalvėlės, 6 vnt.',
      blurb: 'Įkišk vieną į stalčių, batą, sporto krepšį. Audinio maišelis, visiškai natūralios džiovintos gėlės, jokios atviros liepsnos ir jokio kištuko.',
      features: [
        'Šeši maišeliai rinkinyje, įskaitant pagalvėlių maišelius',
        'Visiškai natūralios džiovintos gėlės, ilgai išlaiko kvapą',
        'Jokios liepsnos, jokių baterijų, jokio kištuko',
        'Idealiai tinka stalčiams, spintoms ir lagaminams'
      ]
    },
    'fra-reed-diffuser': {
      title: 'Nendrių difuzoriaus rinkinys su keramikine vaza',
      blurb: 'Atrodo kaip iš butiko, kainuoja kaip iš prekybos centro. Kvapas išsilaiko apie aštuonias savaites, be liepsnos.',
      features: [
        'Glazūruota keramikinė vaza, daugkartinė',
        '8 ratano nendrės tolygiam skleidimui',
        'Apie 8 savaites kvapo',
        'Be liepsnos — saugu su vaikais ir augintiniais'
      ]
    },
    'fra-gel-clips': {
      title: 'Kvapnios gelinės oro gaiviklio segės, 4 vnt.',
      blurb: 'Prisisega prie ventiliacijos grotelių ir per maždaug minutę pakeičia visą automobilį. Kiekviena laikosi apie trisdešimt dienų.',
      features: [
        'Keturi segtukai, keturi kvapai rinkinyje',
        'Segasi prie grotelių mentelių, be klijų',
        'Apie 30 dienų kvapo vienam segtukui',
        'Reguliuojamas atidarymas/uždarymas pagal intensyvumą'
      ]
    },
    'jwl-earring-case': {
      title: 'Aksominė auskarų ir žiedų laikymo dėžutė',
      blurb: 'Du sluoksniai su užtrauktuku, jokio susipainiojimo, jokių pamestų užsegimų. Daiktas, kurį perki, kad sutvarkytum stalčių, metų metus buvusį problema.',
      features: [
        'Du sluoksniai su užtrauktuku ir panelėmis auskarams bei žiedams',
        'Minkštas aksominis pamušalas, niekas nesibraižo',
        'Talpina apie 40 auskarų ir 20 žiedų',
        'Telpa į rankinį lagaminą ar rankinę'
      ]
    },
    'jwl-ring-set': {
      title: 'Reguliuojamų nerūdijančio plieno žiedų rinkinys, 5 vnt.',
      blurb: 'Atsidaro ir užsidaro, kad tiktų beveik bet kuriam pirštui, tad nėra dydžio, kurį galėtum atspėti neteisingai. Plieninis šerdis, apsauginė danga nuo apnašų.',
      features: [
        'Penki žiedai, reguliuojama juosta',
        'Hipoalergeniška nerūdijančio plieno šerdis',
        'Danga nuo apnašų — jokių žalių pirštų',
        'Atviro galo konstrukcija tinka daugumai pirštų dydžių'
      ]
    },
    'bundle-treasure-box': {
      title: 'Netikėtumų dėžė — 3 atsitiktiniai radiniai',
      blurb: 'Visa šios parduotuvės esmė vienoje dėžėje. Supakuojame tris pasirinkimus iš dabartinės lentynos, visada vertus daugiau nei sumokėjai.',
      features: [
        'Trys daiktai, visada virš $39 mažmeninės vertės',
        'Kiekviena dėžė supakuota skirtingai',
        'Išsiunčiame per 1 darbo dieną',
        'Dydžiai ir spalvos skiriasi — tai linksmiausia dalis'
      ]
    }
  }
};
