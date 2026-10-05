/* 冰岛语 — Íslenska */
window.I18N_DICTS = window.I18N_DICTS || {};
window.I18N_DICTS.is = {
  ui: {
    /* ---------- 通用 ---------- */
    'demo.notice': 'Prufuútgáfa · vörumerki, verð og myndir eru staðgenglar og verður að skipta út fyrir opnun',
    'ship.free_over': 'Ókeypis sending yfir {amount}',
    'ship.new_finds': 'Nýir fundir á hverjum miðvikudegi',

    /* ---------- 导航 ---------- */
    'nav.shop_all': 'Sjá allt',
    'nav.treasure_box': 'Fjárkista',
    'nav.cart': 'Karfa',
    'lang.label': 'Tungumál',

    /* ---------- 页脚 ---------- */
    'footer.note': 'Litlir, nytsamlegir hlutir á verði sem þarf ekki að réttlæta.',
    'footer.shop': 'Verslun',
    'footer.all_finds': 'Allir fundir',
    'footer.pet': 'Gæludýr',
    'footer.storage_home': 'Geymsla og heimili',
    'footer.help': 'Hjálp',
    'footer.contact': 'Hafa samband',
    'footer.shipping_returns': 'Sending og skil',
    'footer.track': 'Rekja pöntun',
    'footer.follow': 'Fylgdu',
    'footer.rights': '© {year} {brand}. Öll réttindi áskilin.',
    'footer.secure': 'Örugg greiðsla',

    /* ---------- 商品卡 ---------- */
    'card.save': 'Sparaðu {n}%',
    'card.colours': '{n} litir',
    'card.options': '{n} valkostir',

    /* ---------- 首页 ---------- */
    'home.eyebrow': 'Nýir fundir á hverjum miðvikudegi',
    'home.h1': 'Góðir hlutir,',
    'home.h1_em': 'undir $20.',
    'home.sub': 'Litlu nytsömu hlutirnir sem láta heimili ganga betur — geymsla sem passar í raun, eldhúsáhöld sem endast, gæludýradót sem bjargar sófanum þínum. Verðlagt þannig að þú þurfir ekki að hugsa um það.',
    'home.cta_shelf': 'Skoða hilluna',
    'home.cta_box': 'Opna fjárkistu',
    'home.stat_price': '$7.99–19.99',
    'home.stat_price_l': 'Hver einasta vara',
    'home.stat_ship': 'Ókeypis sending $29+',
    'home.stat_ship_l': 'Sent innan 1 virks dags',
    'home.stat_rating': '4,7★ að meðaltali',
    'home.stat_rating_l': 'Út frá {n}+ umsögnum',
    'home.value1_t': 'Einn verðstigi, engar brellur',
    'home.value1_s': 'Þrjú stig. Engin fölsuð niðurtalning.',
    'home.value2_t': 'Pakkað og sent innan 24 klst',
    'home.value2_s': 'Litlar vörur, sending með rakningu.',
    'home.value3_t': 'Fundið, ekki dropshippað',
    'home.value3_s': 'Við prófum það áður en það fer upp.',
    'home.shelf_t': 'Hilla þessarar viku',
    'home.shelf_s': 'Allt hér að neðan er á lager og tilbúið til sendingar.',
    'home.why_t': 'Hvers vegna hillan breytist',
    'home.why_s': 'Við höldum um það bil 20 vörum virkum í einu. Þegar eitthvað er búið, er það búið — og eitthvað annað tekur plássið.',
    'home.panel1_t': 'Lítil magn viljandi',
    'home.panel1_s': 'Djúpt lager er leiðinlegt lager. Við kaupum grunnt svo hillan haldist á hreyfingu og ekkert stendur í vöruhúsi í ár og safnar ryki.',
    'home.panel2_t': 'Prófað áður en það er skráð',
    'home.panel2_s': 'Hver vara er notuð í viku fyrst. Ef hún pirrar okkur fer hún ekki upp. Það er allt gæðaferlið, og það er nóg.',
    'home.panel3_t': 'Alltaf undir $20',
    'home.panel3_s': 'Þrjú verðstig: $7.99, $12.99, $19.99. Þú ættir aldrei að þurfa að athuga stöðuna þína áður en þú kaupir eitthvað nytsamlegt.',

    /* ---------- 商品详情 ---------- */
    'pdp.not_found_t': 'Þessi vara fór af hillunni',
    'pdp.not_found_s': 'Hillan breytist á hverri viku, svo sumt kemur ekki aftur. Kíktu á það sem er í boði núna.',
    'pdp.back_shelf': 'Aftur á hilluna',
    'pdp.reviews': '({n} umsagnir)',
    'pdp.in_stock': '{n} á lager',
    'pdp.add': 'Setja í körfu',
    'pdp.add_price': 'Setja í körfu · {price}',
    'pdp.qty': 'Magn',
    'pdp.decrease': 'Minnka',
    'pdp.increase': 'Auka',
    'pdp.related_t': 'Líka á hillunni',
    'pdp.related_s': 'Passar vel við það sem þú varst að skoða.',
    'pdp.sku': 'SKU',
    'pdp.weight': 'Þyngd vöru',
    'pdp.dims': 'Pökkunarstærð',
    'pdp.billable': 'Greiðsluskyld þyngd (þessi vara ein)',
    'pdp.ratio': 'Flutningshlutfall (sent eitt)',
    'pdp.density': 'Eðlismassi',
    'pdp.ships_from': 'Sent frá',
    'pdp.ships_from_v': 'Staðbundið vöruhús',
    'pdp.returns': 'Skil',
    'pdp.returns_v': '30 dagar, engar spurningar',
    'pdp.by_volume': ' — eftir rúmmáli',
    'pdp.by_weight': ' — eftir þyngd',
    'pdp.ship_hint': 'Eitt og sér sendist þetta með {weight} greiðsluskyldri þyngd — {rate} til {zone}. Ókeypis þegar karfan þín fer yfir {threshold}.',
    'pdp.ratio_of': '{n}% af verði vöru',
    'pdp.density_bulky': ' — fyrirferðarmikið, dýrt að senda',
    'pdp.cn_note': 'innri athugasemd, eyða fyrir opnun',
    'pdp.added': 'Bætt við {n} × {name} í körfu',

    /* ---------- 购物车 ---------- */
    'cart.title': 'Karfan þín',
    'cart.loading': 'Hleð…',
    'cart.nothing': 'Ekkert hér ennþá.',
    'cart.items_line': '{n} vörur í {m} línum — tilbúið að fara.',
    'cart.empty_t': 'Karfan þín er tóm',
    'cart.empty_s': 'Hillan er lítil viljandi, svo kíktu áður en val vikunnar selst upp.',
    'cart.summary': 'Yfirlit pöntunar',
    'cart.ship_to': 'Senda til',
    'cart.subtotal': 'Millisumma',
    'cart.shipping': 'Sending',
    'cart.total': 'Samtals',
    'cart.free': 'Ókeypis',
    'cart.free_unlocked': 'Ókeypis sending opnuð.',
    'cart.free_cap': 'Ókeypis sending upp að {cap}. Þessi pöntun er {w} greiðsluskyld, svo venjuleg verð gilda.',
    'cart.away': 'Þú ert {amount} frá ókeypis sendingu.',
    'cart.how_shipping': 'Hvernig sendingin var reiknuð',
    'cart.checkout': 'Til greiðslu',
    'cart.keep': 'Halda áfram að skoða',
    'cart.note': 'Sent innan 1 virks dags. 30 daga skil.',
    'cart.note2': 'Kortaupplýsingar snerta aldrei þessa síðu.',
    'cart.each': '{price} hvert',
    'cart.remove': 'Fjarlægja',
    'cart.removed': 'Fjarlægt úr körfu',
    'cart.dest': 'Áfangastaður',
    'cart.units': 'Einingar',
    'cart.actual_w': 'Raunþyngd',
    'cart.vol_w': 'Rúmmálsþyngd',
    'cart.billable_w': 'Greiðsluskyld þyngd',
    'cart.billed_volume': 'Greiðsla miðast við rúmmál — þessi pöntun tekur meira pláss en hún þyngist. Rúmmálsþyngdin er {p}% af greiðsluskyldri þyngd.',
    'cart.billed_actual': 'Greiðsla miðast við raunþyngd — þessi pöntun er nógu þétt að stærðin skiptir ekki máli.',
    'cart.oversize': 'Aukagjald fyrir stórvöru bætt við: +{amount}',
    'cart.base_rate': 'Grunnverð',
    'cart.oversize_row': 'Aukagjald fyrir stórvöru',
    'cart.free_discount': 'Afsláttur fyrir ókeypis sendingu',
    'cart.shipping_charged': 'Sendingargjald',
    'cart.divisor_note': 'Rúmmáldeilir: 1 kg á {vol} cm³. Pökkun innifalin: {g} g + {p}% rúmmál.',

    /* ---------- 结账 ---------- */
    'co.title': 'Greiðsla',
    'co.sub': 'Örugg greiðsla · Kortaupplýsingar snerta aldrei þessa síðu',
    'co.empty_t': 'Karfan þín er tóm',
    'co.empty_s': 'Settu eitthvað í körfuna fyrst og komdu svo aftur.',
    'co.nothing': 'Ekkert til að greiða ennþá.',
    'co.contact': 'Hafa samband',
    'co.contact_hint': 'Staðfesting pöntunar fer hingað.',
    'co.email': 'Netfang',
    'co.email_ph': 'thu@daemi.com',
    'co.ship_addr': 'Sendingarheimilisfang',
    'co.ship_addr_hint': 'Sending er reiknuð út frá heimilisfangi þínu og pökkunarstærð þess sem er í körfunni.',
    'co.first': 'Fornafn',
    'co.last': 'Eftirnafn',
    'co.address1': 'Heimilisfang',
    'co.address2': 'Íbúð, hæð, o.s.frv.',
    'co.optional': '(valfrjálst)',
    'co.country': 'Land',
    'co.state': 'Fylki',
    'co.state_ph': 't.d. CA',
    'co.province': 'Hérað / svæði',
    'co.city': 'Borg',
    'co.zip': 'Póstnúmer',
    'co.phone': 'Sími',
    'co.phone_hint': '(aðeins fyrir afhendingu, valfrjálst)',
    'co.payment': 'Greiðsla',
    'co.payment_hint': 'Veldu hvernig þú vilt greiða.',
    'co.card': 'Kredit- / debetkort',
    'co.card_sub': 'Visa, Mastercard, Amex, Apple Pay, Google Pay',
    'co.paypal': 'PayPal',
    'co.paypal_sub': 'Greiddu með PayPal-stöðu eða tengdum reikningi',
    'co.pay_note': 'Þér verður vísað á greiðsluveituna okkar til að ljúka örugglega. Kortagögn eru aldrei geymd á þessari síðu.',
    'co.pay_note_wallet': 'Þér verður vísað á PayPal til að samþykkja greiðsluna.',
    'co.place': 'Staðfesta pöntun',
    'co.working': 'Vinnur…',
    'co.terms': 'Með því að panta samþykkir þú skilmála okkar og 30 daga skilastefnu.',
    'co.your_order': 'Pöntunin þín',
    'co.edit_cart': 'Breyta körfu',
    'co.err_required': 'Vinsamlegast fylltu út alla nauðsynlega reiti',
    'co.err_email': 'Þetta netfang lítur rangt út',
    'co.demo_title': 'Greiðsla ekki tengd ennþá',
    'co.demo_body': 'Þetta er virk prufa. Karfa, þyngdir, sendingarútreikningur og formið eru alvöru, en engin greiðslugátt er tengd, svo ekkert verður rukkað.',
    'co.err_payment': 'Náði ekki sambandi við greiðsluþjónustu',
    'co.demo_toast': 'Aðeins prufa — engin greiðslugátt tengd ennþá',

    /* ---------- 国家 / 语言选择器 ---------- */
    'geo.title': 'Land og tungumál',
    'geo.search_ph': 'Leita að landi',
    'geo.all': 'Öll lönd',
    'geo.none': 'Engin niðurstaða',
    'geo.results': '{n} lönd',
    'geo.note': 'Að velja land skiptir líka um tungumál síðunnar.',
    'geo.region.americas': 'Ameríka',
    'geo.region.europe': 'Evrópa',
    'geo.region.asia': 'Asía',
    'geo.region.mena': 'Mið-Austurlönd og Afríka',
    'geo.region.oceania': 'Eyjaálfa',
    'geo.region.other': 'Önnur svæði'
  },

  /* ---------- 分类 ---------- */
  cats: {
    all: 'Allir fundir',
    organization: 'Geymsla og heimili',
    kitchen: 'Eldhús',
    pet: 'Gæludýr',
    fragrance: 'Ilmur heimilisins',
    jewelry: 'Fylgihlutir',
    bundle: 'Fjárkista'
  },

  /* ---------- 商品标签 ---------- */
  tags: {
    'Bestseller': 'Mest selda',
    'New': 'Nýtt',
    'Under $10': 'Undir $10',
    'Limited': 'Takmarkað',
    'Gift pick': 'Gjafavinsælt'
  },

  /* ---------- 选项组名 ---------- */
  optNames: {
    'Finish': 'Áferð',
    'Colour': 'Litur',
    'Scent': 'Ilmur',
    'Size': 'Stærð',
    'Set': 'Sett',
    'Hand': 'Hönd'
  },

  /* ---------- 选项值 ---------- */
  optValues: {
    'Frosted': 'Frostað', 'Clear': 'Tært', 'Charcoal': 'Kolgrátt',
    'White': 'Hvítt', 'Black': 'Svart', 'Oak': 'Eik',
    'Sage': 'Salvía', 'Cream': 'Rjómalitur', 'Terracotta': 'Terracotta',
    'Blush': 'Bleikur',
    'Lavender': 'Lavender', 'Rose': 'Rós', 'Citrus': 'Sítróna',
    'Linen': 'Hör', 'Sandalwood': 'Santalviður', 'Fig': 'Fíkja',
    'Ocean': 'Haf', 'Vanilla': 'Vanilla', 'Pine': 'Fura',
    'Small (up to 15 lb)': 'Lítið (allt að 15 lb)',
    'Large (15–50 lb)': 'Stórt (15–50 lb)',
    'Left': 'Vinstri', 'Right': 'Hægri', 'Pair': 'Par',
    'US 5–7': 'US 5–7', 'US 8–10': 'US 8–10',
    '3 Large + 2 Medium': '3 stór + 2 miðlungs', '5 Large': '5 stór'
  },

  /* ---------- 运费分区 ---------- */
  zone: {
    'US': 'Bandaríkin — meginland',
    'US-AKHI': 'Bandaríkin — Alaska / Hawaii',
    'CA': 'Kanada',
    'UK': 'Bretland',
    'AU': 'Ástralía'
  },

  /* ---------- 国家 ---------- */
  countries: {
    'US': 'Bandaríkin',
    'CA': 'Kanada',
    'GB': 'Bretland',
    'AU': 'Ástralía'
  },

  products: {
    'org-drawer-3pk': {
      title: 'Staflanlegur skúffuskipuleggur, 3 stk',
      blurb: 'Hreinsaðu sóðalega skúffu á undir einni mínútu. Þrjár stærðir sem festast saman og renna, svo ekkert skröltrar.',
      features: [
        'Þrjár stærðir stafla eða standa hlið við hlið',
        'Mótskriðfætur — standa kyrr þegar þú opnar skúffuna',
        'Passa í venjulegar 12 tommu snyrti- og skrifborðsskúffur',
        'Þurrkuð áferð, engir skarpar brúnir'
      ]
    },
    'org-cable-box': {
      title: 'Skrifborðsbox fyrir kapla og snúrur',
      blurb: 'Felur fjöltengið sem enginn vill sjá. Loftræst lok heldur hlutunum köldum á meðan kaplar koma út um hliðarraufar.',
      features: [
        'Passar fyrir flest 6-úttaks fjöltengi',
        'Loftræst lok, engin hitasöfnun',
        'Kaplar út á báðum endum',
        'Matt áferð sem sýnir ekki ryk'
      ]
    },
    'org-vacuum-bags': {
      title: 'Tómarúm geymslupokar',
      blurb: 'Þrýstir heilum vetri af rúmfötum niður í flatan stafla. Virkar með hvaða ryksugu sem er, engin dæla þarf.',
      features: [
        'Tvöfaldur rennilás og einstefnuventill',
        'Endurnotanlegir — flatur, lokaðu aftur, endurtaktu',
        'Minnkar rúmmál skápsins um u.þ.b. 70%',
        'Virkar með hvaða venjulegri ryksuguslöngu sem er'
      ]
    },
    'org-fridge-4pk': {
      title: 'Staflanlegt ísskápaboxasett, 4 stk',
      blurb: 'Svarið við ísskápnum sem étur afganga þína. Tærar hliðar svo þú sjáir í raun hvað er að fara út.',
      features: [
        'Tvær stærðir, staflanlegar til að spara hæð',
        'Tærar veggir, handföng sem eru auðveld að grípa',
        'Útdraganleg hönnun — engin umstöflun til að ná aftast',
        'BPA-laust, öruggt í ísskáp og frysti'
      ]
    },
    'kit-silicone-6pk': {
      title: 'Sílíkón eldhúsáhöld, 6 stk',
      blurb: 'Hitþolin upp að 480°F, svo þú getur hrært án þess að rispa pönnuna sem þú eyddir pening í. Þvottavélarþolin, engin bráðnandi handföng.',
      features: [
        'Sex stykki: spaði, vendir, ausa, skeið, gataskeið, þeytari',
        'Sílíkón í matvælaflokki, ekkert BPA',
        'Rispar ekki óviðloðandi húðun',
        'Þvottavélarþolin, engin bráðnandi handföng'
      ]
    },
    'pet-lint-roller': {
      title: 'Endurnotanlegur gæludýrahárrúlla',
      blurb: 'Engin límblöð, engar áfyllingar að kaupa aftur. Rúllaðu, tæmdu hólfið, haltu áfram.',
      features: [
        'Endurnotanleg — ekkert einnota að kaupa aftur',
        'Fram og til baka með einni hendi',
        'Opið hólf tæmist beint í ruslið',
        'Virkar á sófum, rúmfötum og bílsætum'
      ]
    },
    'pet-slow-bowl': {
      title: 'Hægur matarskál fyrir gæludýr',
      blurb: 'Völundarhúsmyndin teygir tíu sekúndna máltíð í tíu mínútur, sem dregur úr þenslu og sóðaskapnum eftir.',
      features: [
        'Völundarhúsrifur hægja á átinu, minnka hættu á þenslu',
        'Mótskriðbotn — rennur ekki um gólfið',
        'BPA-laust, þvottavélarþolið',
        'Hentar litlum og meðalstórum tegundum'
      ]
    },
    'pet-groom-glove': {
      title: 'Gæludýra hárhirðingarhanski',
      blurb: 'Flest gæludýr vilja frekar láta klappa sér en bursta sig. Mjúku hnapparnir lyfta lausu hári á meðan þú klappar, svo það lendir aldrei á sófanum.',
      features: [
        'Mjúkir gúmmíhnappar, þægilegir fyrir taugaveikluð gæludýr',
        'Afhýða má safnað hárið í einu lagi',
        'Stillanleg úlnliðsól, báðar hendur',
        'Virkar á stuttum og löngum feldi'
      ]
    },
    'fra-sachet-6pk': {
      title: 'Ilmpokar úr þurrkuðum blómum, 6 stk',
      blurb: 'Stingdu einum í skúffu, skó eða íþróttatösku. Efnisbelgur, algjörlega náttúrulegar þurrkaðar jurtir, engin opinn logi og ekkert að stinga í samband.',
      features: [
        'Sex belgir í setti, ilmpokar meðfylgjandi',
        'Algjörlega náttúrulegar þurrkaðar jurtir, endingargóðar',
        'Engin logi, engar rafhlöður, ekkert að stinga í samband',
        'Frábært fyrir skúffur, skápa og farangur'
      ]
    },
    'fra-reed-diffuser': {
      title: 'Ilmprik sett með keramikvasa',
      blurb: 'Lítur út eins og eitthvað úr butik, kostar eins og eitthvað úr stórmarkaði. Ilmurinn endist í um það bil átta vikur, án loga.',
      features: [
        'Glerunguð keramikvasi, endurnotanlegur',
        '8 rótungaprik fyrir jafnan ilm',
        'Um það bil 8 vikur af ilmi',
        'Logalaus — örugg í kringum börn og gæludýr'
      ]
    },
    'fra-gel-clips': {
      title: 'Ilmandi gellklips, 4 stk',
      blurb: 'Klipar á loftrás og breytir öllum bílnum á um það bil einni mínútu. Endist um þrjátíu daga hver.',
      features: [
        'Fjórir klips, fjórir ilmir í setti',
        'Klipast á loftrásarblöð, ekkert lím',
        'Um það bil 30 dagar af ilmi á hvern klips',
        'Stillanleg opnun og lokun fyrir styrk'
      ]
    },
    'jwl-earring-case': {
      title: 'Flauels eyrnalokk- og hringageymsla',
      blurb: 'Tvö renniláslög, engin flækja, engin týnd festing. Slík sem þú kaupir til að laga skúffu sem hefur verið vandamál í mörg ár.',
      features: [
        'Tvö renniláslög með eyrnalokka- og hringapönum',
        'Mjúk flauelsfóður, ekkert rispast',
        'Tekur um það bil 40 eyrnalokka og 20 hringa',
        'Passar í handfarangur eða tösku'
      ]
    },
    'jwl-ring-set': {
      title: 'Stillanlegt hringasett úr ryðfríu stáli, 5 stk',
      blurb: 'Opnast og lokast til að passa nánast hvaða fingur sem er, svo engin stærð til að giska rangt á. Stálkjarni og yfirborð sem ómast ekki.',
      features: [
        'Fimm hringar, stillanlegur band',
        'Ofnæmislítill kjarni úr ryðfríu stáli',
        'Yfirborð sem ómast ekki, engir grænir fingur',
        'Opinn bakhluti passar flestum fingurstærðum'
      ]
    },
    'bundle-treasure-box': {
      title: 'Fjárkistan — 3 tilviljanakenndir fundir',
      blurb: 'Allt tilgangurinn með þessari verslun í einni kistu. Við pökkum þremur fundum úr núverandi hillu, alltaf meira virði en þú borgaðir.',
      features: [
        'Þrjár vörur, alltaf yfir $39 í smásöluverðmæti',
        'Hver kista er pökkuð öðruvísi',
        'Sent innan 1 virks dags',
        'Stærðir og litir eru breytilegir — það er skemmtilegi hlutinn'
      ]
    }
  }
};
