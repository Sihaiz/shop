/* 芬兰语 — Suomi */
window.I18N_DICTS = window.I18N_DICTS || {};
window.I18N_DICTS.fi = {
  ui: {
    /* ---------- 通用 ---------- */
    'demo.notice': 'Demoversio · brändinimi, hinnat ja kuvat ovat paikkamerkkejä ja ne on vaihdettava ennen julkaisua',
    'ship.free_over': 'Ilmainen toimitus yli {amount}',
    'ship.new_finds': 'Uudet löydöt joka keskiviikko',

    /* ---------- 导航 ---------- */
    'nav.shop_all': 'Katso kaikki',
    'nav.treasure_box': 'Aarrelaatikko',
    'nav.cart': 'Ostoskori',
    'lang.label': 'Kieli',

    /* ---------- 页脚 ---------- */
    'footer.note': 'Pieniä, hyödyllisiä asioita hintaan, jota ei tarvitse perustella.',
    'footer.shop': 'Kauppa',
    'footer.all_finds': 'Kaikki löydöt',
    'footer.pet': 'Lemmikit',
    'footer.storage_home': 'Säilytys ja koti',
    'footer.help': 'Apua',
    'footer.contact': 'Yhteystiedot',
    'footer.shipping_returns': 'Toimitus ja palautukset',
    'footer.track': 'Seuraa tilausta',
    'footer.follow': 'Seuraa',
    'footer.rights': '© {year} {brand}. Kaikki oikeudet pidätetään.',
    'footer.secure': 'Turvallinen kassa',

    /* ---------- 商品卡 ---------- */
    'card.save': 'Säästä {n}%',
    'card.colours': '{n} väriä',
    'card.options': '{n} vaihtoehtoa',

    /* ---------- 首页 ---------- */
    'home.eyebrow': 'Uudet löydöt joka keskiviikko',
    'home.h1': 'Hyvää tavaraa,',
    'home.h1_em': 'alle $20.',
    'home.sub': 'Pienet hyödylliset asiat, jotka saavat kodin toimimaan paremmin – säilytystä joka oikeasti mahtuu, kestäviä keittiövälineitä, lemmikkitarvikkeita jotka pelastavat sohvasi. Hinnoiteltu niin, ettei sinun tarvitse miettiä.',
    'home.cta_shelf': 'Katso hylly',
    'home.cta_box': 'Avaa aarrelaatikko',
    'home.stat_price': '$7.99–19.99',
    'home.stat_price_l': 'Jokainen yksittäinen tuote',
    'home.stat_ship': 'Ilmainen toimitus $29+',
    'home.stat_ship_l': 'Lähtee 1 arkipäivässä',
    'home.stat_rating': '4,7★ ka.',
    'home.stat_rating_l': 'Perustuu yli {n}+ arvosteluun',
    'home.value1_t': 'Yksi hintaporras, ei pelejä',
    'home.value1_s': 'Kolme tasoa. Ei vääriä lähtölaskentoja.',
    'home.value2_t': 'Pakattu ja lähetetty 24 tunnissa',
    'home.value2_s': 'Pieniä tuotteita, seurattu toimitus.',
    'home.value3_t': 'Löydetty, ei droppishippiä',
    'home.value3_s': 'Testaamme sen ennen kuin se menee myyntiin.',
    'home.shelf_t': 'Tämän viikon hylly',
    'home.shelf_s': 'Kaikki alla on varastossa ja valmiina lähtemään.',
    'home.why_t': 'Miksi hylly muuttuu',
    'home.why_s': 'Pidämme noin 20 tuotetta aktiivisena kerrallaan. Kun jokin loppuu, se loppuu – ja jokin toinen ottaa sen paikan.',
    'home.panel1_t': 'Pieniä eriä tarkoituksella',
    'home.panel1_s': 'Syvä varasto on tylsää varastoa. Ostamme kapeasti, jotta hylly pysyy liikkeessä eikä mikään seiso varastossa vuotta pölyttymässä.',
    'home.panel2_t': 'Testattu ennen myyntiin laittoa',
    'home.panel2_s': 'Jokaista tuotetta käytetään ensin viikko. Jos se ärsyttää meitä, se ei mene myyntiin. Siinä koko laatuprosessi, ja se riittää.',
    'home.panel3_t': 'Aina alle $20',
    'home.panel3_s': 'Kolme hintatasoa: $7.99, $12.99, $19.99. Sinun ei pitäisi koskaan joutua tarkistamaan saldoasi ennen kuin ostat jotain hyödyllistä.',

    /* ---------- 商品详情 ---------- */
    'pdp.not_found_t': 'Tuote lähti hyllystä',
    'pdp.not_found_s': 'Hylly vaihtuu joka viikko, joten jotkut asiat eivät palaa. Katso, mitä on juuri nyt tarjolla.',
    'pdp.back_shelf': 'Takaisin hyllylle',
    'pdp.reviews': '({n} arvostelua)',
    'pdp.in_stock': '{n} varastossa',
    'pdp.add': 'Lisää koriin',
    'pdp.add_price': 'Lisää koriin · {price}',
    'pdp.qty': 'Määrä',
    'pdp.decrease': 'Vähennä',
    'pdp.increase': 'Lisää',
    'pdp.related_t': 'Myös hyllyllä',
    'pdp.related_s': 'Sopii hyvin yhteen juuri katselemasi kanssa.',
    'pdp.sku': 'SKU',
    'pdp.weight': 'Tuotteen paino',
    'pdp.dims': 'Pakkauskoko',
    'pdp.billable': 'Laskutettava paino (tämä tuote yksinään)',
    'pdp.ratio': 'Rahtisuhde (yksin lähetettynä)',
    'pdp.density': 'Tiheys',
    'pdp.ships_from': 'Lähetyspaikka',
    'pdp.ships_from_v': 'Paikallinen varasto',
    'pdp.returns': 'Palautukset',
    'pdp.returns_v': '30 päivää, ilman kysymyksiä',
    'pdp.by_volume': ' — tilavuuden mukaan',
    'pdp.by_weight': ' — painon mukaan',
    'pdp.ship_hint': 'Yksinään tämä lähtee {weight} laskutettavalla painolla — {rate} kohteeseen {zone}. Ilmainen, kun korisi ylittää {threshold}.',
    'pdp.ratio_of': '{n}% tuotteen hinnasta',
    'pdp.density_bulky': ' — tilaa vievä, kallis lähettää',
    'pdp.cn_note': 'sisäinen muistiinpano, poista ennen julkaisua',
    'pdp.added': 'Lisätty {n} × {name} koriin',

    /* ---------- 购物车 ---------- */
    'cart.title': 'Ostoskorisi',
    'cart.loading': 'Ladataan…',
    'cart.nothing': 'Täällä ei ole vielä mitään.',
    'cart.items_line': '{n} tuotetta {m} rivillä — valmiina lähtemään.',
    'cart.empty_t': 'Ostoskorisi on tyhjä',
    'cart.empty_s': 'Hylly on tarkoituksella pieni, joten vilkaise ennen kuin tämän viikon valinnat myydään loppuun.',
    'cart.summary': 'Tilauksen yhteenveto',
    'cart.ship_to': 'Toimitusosoite',
    'cart.subtotal': 'Välisumma',
    'cart.shipping': 'Toimitus',
    'cart.total': 'Yhteensä',
    'cart.free': 'Ilmainen',
    'cart.free_unlocked': 'Ilmainen toimitus avattu.',
    'cart.free_cap': 'Ilmainen toimitus {cap} asti. Tämä tilaus on {w} laskutettavaa, joten normaalit hinnat pätevät.',
    'cart.away': 'Olet {amount} päässä ilmaisesta toimituksesta.',
    'cart.how_shipping': 'Miten toimitus laskettiin',
    'cart.checkout': 'Kassalle',
    'cart.keep': 'Jatka selailua',
    'cart.note': 'Lähtee 1 arkipäivässä. 30 päivän palautus.',
    'cart.note2': 'Korttitiedot eivät koskaan kosketa tätä sivustoa.',
    'cart.each': '{price} kappale',
    'cart.remove': 'Poista',
    'cart.removed': 'Poistettu korista',
    'cart.dest': 'Määränpää',
    'cart.units': 'Yksikköä',
    'cart.actual_w': 'Todellinen paino',
    'cart.vol_w': 'Tilavuuspaino',
    'cart.billable_w': 'Laskutettava paino',
    'cart.billed_volume': 'Laskutetaan tilavuudesta — tämä tilaus vie enemmän tilaa kuin painaa. Tilavuuspaino on {p}% laskutettavasta painosta.',
    'cart.billed_actual': 'Laskutetaan todellisesta painosta — tämä tilaus on tarpeeksi tiheä, ettei koolla ole väliä.',
    'cart.oversize': 'Ylisuuruuslisä lisätty: +{amount}',
    'cart.base_rate': 'Perushinta',
    'cart.oversize_row': 'Ylisuuruuslisä',
    'cart.free_discount': 'Ilmaisen toimituksen alennus',
    'cart.shipping_charged': 'Toimituksesta veloitettu',
    'cart.divisor_note': 'Tilavuusjako: 1 kg per {vol} cm³. Pakkauslisä sisältyy: {g} g + {p}% tilavuus.',

    /* ---------- 结账 ---------- */
    'co.title': 'Kassa',
    'co.sub': 'Turvallinen kassa · Korttitiedot eivät koskaan kosketa tätä sivustoa',
    'co.empty_t': 'Ostoskorisi on tyhjä',
    'co.empty_s': 'Lisää ensin jotain koriin ja palaa sitten takaisin.',
    'co.nothing': 'Ei vielä mitään maksettavaa.',
    'co.contact': 'Yhteystiedot',
    'co.contact_hint': 'Tilausvahvistus tulee tähän.',
    'co.email': 'Sähköposti',
    'co.email_ph': 'sina@esimerkki.com',
    'co.ship_addr': 'Toimitusosoite',
    'co.ship_addr_hint': 'Toimitus lasketaan osoitteesi ja korissa olevien tuotteiden pakkauskoon perusteella.',
    'co.first': 'Etunimi',
    'co.last': 'Sukunimi',
    'co.address1': 'Osoite',
    'co.address2': 'Asunto, kerros, jne.',
    'co.optional': '(valinnainen)',
    'co.country': 'Maa',
    'co.state': 'Osavaltio',
    'co.state_ph': 'esim. CA',
    'co.province': 'Maakunta / alue',
    'co.city': 'Kaupunki',
    'co.zip': 'Postinumero',
    'co.phone': 'Puhelin',
    'co.phone_hint': '(vain toimitusta varten, valinnainen)',
    'co.payment': 'Maksu',
    'co.payment_hint': 'Valitse, miten haluat maksaa.',
    'co.card': 'Luotto- / pankkikortti',
    'co.card_sub': 'Visa, Mastercard, Amex, Apple Pay, Google Pay',
    'co.paypal': 'PayPal',
    'co.paypal_sub': 'Maksa PayPal-saldolla tai linkitetyllä tilillä',
    'co.pay_note': 'Sinut ohjataan maksupalveluntarjoajallemme viimeistelemään turvallisesti. Korttitietoja ei koskaan tallenneta tälle sivustolle.',
    'co.pay_note_wallet': 'Sinut ohjataan PayPaliin hyväksymään maksu.',
    'co.place': 'Tee tilaus',
    'co.working': 'Käsitellään…',
    'co.terms': 'Tekemällä tilauksen hyväksyt käyttöehdot ja 30 päivän palautuskäytännön.',
    'co.your_order': 'Tilauksesi',
    'co.edit_cart': 'Muokkaa koria',
    'co.err_required': 'Täytä kaikki pakolliset kentät',
    'co.err_email': 'Tuo sähköpostiosoite näyttää virheelliseltä',
    'co.demo_title': 'Maksua ei ole vielä yhdistetty',
    'co.demo_body': 'Tämä on toimiva demo. Kori, painot, toimituslaskenta ja lomake ovat aitoja, mutta maksuyhdyskäytävää ei ole kytketty, joten mitään ei veloiteta.',
    'co.err_payment': 'Maksupalveluun ei saatu yhteyttä',
    'co.demo_toast': 'Vain demo — maksuyhdyskäytävää ei ole vielä yhdistetty',

    /* ---------- 国家 / 语言选择器 ---------- */
    'geo.title': 'Maa ja kieli',
    'geo.search_ph': 'Hae maata',
    'geo.all': 'Kaikki maat',
    'geo.none': 'Ei tuloksia',
    'geo.results': '{n} maata',
    'geo.note': 'Maan valinta vaihtaa myös sivuston kielen.',
    'geo.region.americas': 'Amerikat',
    'geo.region.europe': 'Eurooppa',
    'geo.region.asia': 'Aasia',
    'geo.region.mena': 'Lähi-itä ja Afrikka',
    'geo.region.oceania': 'Oseania',
    'geo.region.other': 'Muut alueet'
  },

  /* ---------- 分类 ---------- */
  cats: {
    all: 'Kaikki löydöt',
    organization: 'Säilytys ja koti',
    kitchen: 'Keittiö',
    pet: 'Lemmikit',
    fragrance: 'Kodin tuoksut',
    jewelry: 'Asusteet',
    bundle: 'Aarrelaatikko'
  },

  /* ---------- 商品标签 ---------- */
  tags: {
    'Bestseller': 'Myydyin',
    'New': 'Uusi',
    'Under $10': 'Alle $10',
    'Limited': 'Rajoitettu',
    'Gift pick': 'Lahjavinkki'
  },

  /* ---------- 选项组名 ---------- */
  optNames: {
    'Finish': 'Pinta',
    'Colour': 'Väri',
    'Scent': 'Tuoksu',
    'Size': 'Koko',
    'Set': 'Sarja',
    'Hand': 'Käsi'
  },

  /* ---------- 选项值 ---------- */
  optValues: {
    'Frosted': 'Himmennetty', 'Clear': 'Kirkas', 'Charcoal': 'Hiilenharmaa',
    'White': 'Valkoinen', 'Black': 'Musta', 'Oak': 'Tammi',
    'Sage': 'Salvia', 'Cream': 'Kerma', 'Terracotta': 'Terrakotta',
    'Blush': 'Vaaleanpunainen',
    'Lavender': 'Laventeli', 'Rose': 'Ruusu', 'Citrus': 'Sitrus',
    'Linen': 'Pellava', 'Sandalwood': 'Santalpuu', 'Fig': 'Viikuna',
    'Ocean': 'Meri', 'Vanilla': 'Vanilja', 'Pine': 'Mänty',
    'Small (up to 15 lb)': 'Pieni (enintään 15 lb)',
    'Large (15–50 lb)': 'Suuri (15–50 lb)',
    'Left': 'Vasen', 'Right': 'Oikea', 'Pair': 'Pari',
    'US 5–7': 'US 5–7', 'US 8–10': 'US 8–10',
    '3 Large + 2 Medium': '3 suurta + 2 keskikokoista', '5 Large': '5 suurta'
  },

  /* ---------- 运费分区 ---------- */
  zone: {
    'US': 'Yhdysvallat — mannerosa',
    'US-AKHI': 'Yhdysvallat — Alaska / Havaiji',
    'CA': 'Kanada',
    'UK': 'Iso-Britannia',
    'AU': 'Australia'
  },

  /* ---------- 国家 ---------- */
  countries: {
    'US': 'Yhdysvallat',
    'CA': 'Kanada',
    'GB': 'Iso-Britannia',
    'AU': 'Australia'
  },

  products: {
    'org-drawer-3pk': {
      title: 'Pinottava laatikkojärjestäjä, 3 kpl',
      blurb: 'Siivoa sotkuinen laatikko alle minuutissa. Kolme sisäkkäistä kokoa, jotka lukittuvat yhteen ja liukuvat, joten mikään ei kolise.',
      features: [
        'Kolme kokoa pinottavina tai vierekkäin',
        'Liukumattomat jalat — pysyvät paikallaan, kun avaat laatikon',
        'Sopii tavallisiin 12 tuuman meikki- ja työpöytälaatikoihin',
        'Pyyhittävä pinta, ei teräviä kulmia'
      ]
    },
    'org-cable-box': {
      title: 'Työpöydän kaapeli- ja johtolaatikko',
      blurb: 'Piilottaa jatkojohdon, jota kukaan ei halua katsoa. Tuuletettu kansi pitää asiat viileinä, ja kaapelit tulevat ulos sivuraoista.',
      features: [
        'Sopii useimpiin 6-pistorasiaisiin jatkojohtoihin',
        'Tuuletettu kansi, ei lämmön kertymistä',
        'Kaapelit ulos molemmista päistä',
        'Mattapinta, joka ei näytä pölyä'
      ]
    },
    'org-vacuum-bags': {
      title: 'Tyhjiösäilytyspussit',
      blurb: 'Puristaa kokonaisen talven vuodevaatteet litistäen pinoksi. Toimii minkä tahansa imurin kanssa, pumppua ei tarvita.',
      features: [
        'Kaksinkertainen vetoketju ja yksisuuntainen venttiili',
        'Uudelleenkäytettävät — litistä, sulje uudelleen, toista',
        'Pienentää kaapin tilavuutta noin 70%',
        'Sopii mihin tahansa tavalliseen imurin letkuun'
      ]
    },
    'org-fridge-4pk': {
      title: 'Pinottava jääkaappilaatikkosarja, 4 kpl',
      blurb: 'Vastaus jääkaappiin, joka syö tähteesi. Kirkkaat sivut, jotta näet oikeasti, mikä on kohta menossa pilalle.',
      features: [
        'Kaksi kokoa, pinottavina tilan säästämiseksi',
        'Kirkkaat seinämät, helposti tartuttavat kahvat',
        'Ulosvedettävä muotoilu — ei purkamista päästäksesi taakse',
        'BPA-vapaa, turvallinen jääkaappiin ja pakastimeen'
      ]
    },
    'kit-silicone-6pk': {
      title: 'Silikoniset keittiövälineet, 6 osaa',
      blurb: 'Lämmönkestävät 480°F asti, joten voit sekoittaa naarmuttamatta pannua, johon käytit rahaa. Konepesun kestävät, ei sulavia kahvoja.',
      features: [
        'Kuusi osaa: lasta, kääntölapio, kauha, lusikka, reikälusikka, vispilä',
        'Elintarvikelaatuinen silikoni, ei BPA:ta',
        'Ei naarmuta tarttumattomia pinnoitteita',
        'Konepesun kestävät, ei sulavia kahvoja'
      ]
    },
    'pet-lint-roller': {
      title: 'Uudelleenkäytettävä lemmikkikarvarulla',
      blurb: 'Ei tahmeita arkkeja, ei täyttöjä ostettavaksi enää koskaan. Rullaa, tyhjennä säiliö, jatka.',
      features: [
        'Uudelleenkäytettävä — ei mitään kertakäyttöistä ostettavaksi',
        'Edestakainen liike yhdellä kädellä',
        'Avoin säiliö tyhjenee suoraan roskiin',
        'Toimii sohvilla, vuodevaatteilla ja autonistuimilla'
      ]
    },
    'pet-slow-bowl': {
      title: 'Hitaasti syötävä lemmikkikuppi',
      blurb: 'Sokkelokuvio venyttää kymmenen sekunnin aterian kymmeneen minuuttiin, mikä vähentää vatsan turpoamista ja jälkisiivousta.',
      features: [
        'Sokkeloharjanteet hidastavat syömistä, vähentävät turpoamisriskiä',
        'Liukumaton pohja — pysyy paikallaan lattialla',
        'BPA-vapaa, konepesun kestävä',
        'Sopii pienille ja keskikokoisille roduille'
      ]
    },
    'pet-groom-glove': {
      title: 'Lemmikin karvanpoistokäsine',
      blurb: 'Useimmat lemmikit pitävät silittämisestä enemmän kuin harjaamisesta. Pehmeät nystyrät nostavat irtokarvan silittäessäsi, joten se ei päädy sohvalle.',
      features: [
        'Pehmeät kuminystyrät, mukavat hermostuneille lemmikeille',
        'Kerätty karva irtoaa yhtenä levynä',
        'Säädettävä rannehihna, kumpaan käteen tahansa',
        'Toimii lyhyessä ja pitkässä karvassa'
      ]
    },
    'fra-sachet-6pk': {
      title: 'Kuivakukkatuoksupussit, 6 kpl',
      blurb: 'Sujauta yksi laatikkoon, kenkään tai kuntosalilaukkuun. Kangaspussi, täysin luonnollisia kuivattuja kasveja, ei avotulta eikä mitään pistokkeeseen.',
      features: [
        'Kuusi pussia per sarja, tuoksupussit mukana',
        'Täysin luonnollisia kuivattuja kasveja, pitkäkestoisia',
        'Ei tulta, ei paristoja, ei mitään pistokkeeseen',
        'Ihanteellinen laatikoihin, kaappeihin ja matkatavaroihin'
      ]
    },
    'fra-reed-diffuser': {
      title: 'Tuoksutikku-sarja keramiikkavaasilla',
      blurb: 'Näyttää boutique-tavaralta, maksaa kuin supermarket-tavara. Tuoksu kestää noin kahdeksan viikkoa, ilman tulta.',
      features: [
        'Lasitettu keramiikkavaasi, uudelleenkäytettävä',
        '8 rottinkitikkua tasaiseen tuoksuun',
        'Noin 8 viikkoa tuoksua',
        'Tulta vailla — turvallinen lasten ja lemmikkien lähellä'
      ]
    },
    'fra-gel-clips': {
      title: 'Tuoksuiset geeliklipsit, 4 kpl',
      blurb: 'Kiinnitä ilmastointiritilään ja muuta koko auto noin minuutissa. Kestää kutakin noin kolmekymmentä päivää.',
      features: [
        'Neljä klipsiä, neljä tuoksua per sarja',
        'Kiinnittyvät ritilän läppiin, ei liimaa',
        'Noin 30 päivää tuoksua per klipsi',
        'Säädettävä avaus ja sulkeminen voimakkuuden mukaan'
      ]
    },
    'jwl-earring-case': {
      title: 'Samettinen korvakoru- ja sormusrasia',
      blurb: 'Kaksi vetoketjutasoa, ei sotkeutumista, ei kadonneita lukkoja. Sellainen, jonka ostat korjataksesi laatikon, joka on ollut ongelma vuosia.',
      features: [
        'Kaksi vetoketjutasoa korva- ja sormuspaneeleilla',
        'Pehmeä samettivuori, mikään ei naarmuunnu',
        'Mahtuu noin 40 korvakorua ja 20 sormusta',
        'Sopii käsimatkatavaroihin tai käsilaukkuun'
      ]
    },
    'jwl-ring-set': {
      title: 'Säädettävä ruostumattoman teräksen sormussarja, 5 kpl',
      blurb: 'Avautuu ja sulkeutuu sopiakseen lähes mihin tahansa sormeen, joten kokoa ei tarvitse arvata väärin. Teräsydin, tummumista kestävä pinta.',
      features: [
        'Viisi sormusta, säädettävä kehä',
        'Hypoallergeeninen ruostumattoman teräksen ydin',
        'Tummumista kestävä pinta, ei vihreitä sormia',
        'Avonainen muotoilu sopii useimpiin sormikokoihin'
      ]
    },
    'bundle-treasure-box': {
      title: 'Aarrelaatikko — 3 satunnaista löytöä',
      blurb: 'Koko tämän kaupan idea yhdessä laatikossa. Pakkaamme kolme löytöä nykyiseltä hyllyltä, aina enemmän arvoa kuin maksoit.',
      features: [
        'Kolme tuotetta, aina yli $39 vähittäisarvosta',
        'Jokainen laatikko pakataan eri tavalla',
        'Lähtee 1 arkipäivässä',
        'Koot ja värit vaihtelevat — se on hauskin osa'
      ]
    }
  }
};
