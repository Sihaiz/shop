/* 捷克语 — Čeština */
window.I18N_DICTS = window.I18N_DICTS || {};
window.I18N_DICTS.cs = {
  ui: {
    /* ---------- 通用 ---------- */
    'demo.notice': 'Demo verze · název značky, ceny a obrázky jsou zástupné a před spuštěním je nutné je nahradit',
    'ship.free_over': 'Doprava zdarma nad {amount}',
    'ship.new_finds': 'Nové úlovky každou středu',

    /* ---------- 导航 ---------- */
    'nav.shop_all': 'Zobrazit vše',
    'nav.treasure_box': 'Krabička překvapení',
    'nav.cart': 'Košík',
    'lang.label': 'Jazyk',

    /* ---------- 页脚 ---------- */
    'footer.note': 'Malé, užitečné věci za ceny, které se nemusí obhajovat.',
    'footer.shop': 'Obchod',
    'footer.all_finds': 'Všechny úlovky',
    'footer.pet': 'Mazlíčci',
    'footer.storage_home': 'Úložný prostor a domov',
    'footer.help': 'Nápověda',
    'footer.contact': 'Kontakt',
    'footer.shipping_returns': 'Doprava a vrácení',
    'footer.track': 'Sledovat objednávku',
    'footer.follow': 'Sledujte',
    'footer.rights': '© {year} {brand}. Všechna práva vyhrazena.',
    'footer.secure': 'Zabezpečená pokladna',

    /* ---------- 商品卡 ---------- */
    'card.save': 'Ušetříte {n}%',
    'card.colours': '{n} barev',
    'card.options': '{n} variant',

    /* ---------- 首页 ---------- */
    'home.eyebrow': 'Nové úlovky každou středu',
    'home.h1': 'Dobré věci,',
    'home.h1_em': 'pod $20.',
    'home.sub': 'Malé užitečné věci, díky kterým domov funguje lépe — úložný prostor, který opravdu sedí, kuchyňské náčiní, které vydrží, potřeby pro mazlíčky, které zachrání vaši pohovku. Za ceny, nad kterými nemusíte přemýšlet.',
    'home.cta_shelf': 'Prohlédnout polici',
    'home.cta_box': 'Otevřít krabičku překvapení',
    'home.stat_price': '$7.99–19.99',
    'home.stat_price_l': 'Každá jednotlivá položka',
    'home.stat_ship': 'Doprava zdarma $29+',
    'home.stat_ship_l': 'Odesíláme do 1 pracovního dne',
    'home.stat_rating': '4,7★ prům.',
    'home.stat_rating_l': 'Z více než {n}+ recenzí',
    'home.value1_t': 'Jeden ceník, žádné hry',
    'home.value1_s': 'Tři úrovně. Žádné falešné odpočty.',
    'home.value2_t': 'Zabaleno a odesláno do 24 h',
    'home.value2_s': 'Malé položky, doručení se sledováním.',
    'home.value3_t': 'Objeveno, ne dropshipping',
    'home.value3_s': 'Testujeme to, než to dáme nahoru.',
    'home.shelf_t': 'Police tohoto týdne',
    'home.shelf_s': 'Vše níže je skladem a připraveno k odeslání.',
    'home.why_t': 'Proč se police mění',
    'home.why_s': 'Držíme aktivních zhruba 20 položek najednou. Když něco zmizí, zmizí to — a jeho místo zaujme něco jiného.',
    'home.panel1_t': 'Malé šarže schválně',
    'home.panel1_s': 'Hluboké sklady jsou nudné sklady. Nakupujeme mělce, aby se police pořád hýbala a nic neleželo rok ve skladu a neprášilo se.',
    'home.panel2_t': 'Testováno před zařazením',
    'home.panel2_s': 'Každou položku nejdřív týden používáme. Pokud nás štve, nejde nahoru. To je celý proces kvality a stačí to.',
    'home.panel3_t': 'Vždy pod $20',
    'home.panel3_s': 'Tři cenové úrovně: $7.99, $12.99, $19.99. Nikdy byste neměli muset kontrolovat zůstatek, než koupíte něco užitečného.',

    /* ---------- 商品详情 ---------- */
    'pdp.not_found_t': 'Tato položka opustila polici',
    'pdp.not_found_s': 'Police se mění každý týden, takže některé věci se nevrací. Podívejte se, co je teď k dispozici.',
    'pdp.back_shelf': 'Zpět na polici',
    'pdp.reviews': '({n} recenzí)',
    'pdp.in_stock': '{n} skladem',
    'pdp.add': 'Přidat do košíku',
    'pdp.add_price': 'Přidat do košíku · {price}',
    'pdp.qty': 'Množství',
    'pdp.decrease': 'Snížit',
    'pdp.increase': 'Zvýšit',
    'pdp.related_t': 'Také na polici',
    'pdp.related_s': 'Skvěle se hodí k tomu, co jste právě prohlíželi.',
    'pdp.sku': 'SKU',
    'pdp.weight': 'Hmotnost položky',
    'pdp.dims': 'Rozměr balení',
    'pdp.billable': 'Fakturovatelná hmotnost (tato položka samostatně)',
    'pdp.ratio': 'Přepravní poměr (samostatně)',
    'pdp.density': 'Hustota',
    'pdp.ships_from': 'Odesílá se z',
    'pdp.ships_from_v': 'Místní sklad',
    'pdp.returns': 'Vrácení',
    'pdp.returns_v': '30 dní, bez otázek',
    'pdp.by_volume': ' — podle objemu',
    'pdp.by_weight': ' — podle hmotnosti',
    'pdp.ship_hint': 'Samostatně se tato položka odesílá s fakturovatelnou hmotností {weight} — {rate} do {zone}. Zdarma, jakmile košík přesáhne {threshold}.',
    'pdp.ratio_of': '{n}% z ceny položky',
    'pdp.density_bulky': ' — objemné, drahé na dopravu',
    'pdp.cn_note': 'interní poznámka, před spuštěním smazat',
    'pdp.added': 'Přidáno {n} × {name} do košíku',

    /* ---------- 购物车 ---------- */
    'cart.title': 'Váš košík',
    'cart.loading': 'Načítání…',
    'cart.nothing': 'Zatím tu nic není.',
    'cart.items_line': '{n} položek v {m} řádcích — připraveno k odeslání.',
    'cart.empty_t': 'Váš košík je prázdný',
    'cart.empty_s': 'Police je schválně malá, tak se podívejte, než se letošní výběr vyprodá.',
    'cart.summary': 'Souhrn objednávky',
    'cart.ship_to': 'Doručit do',
    'cart.subtotal': 'Mezisoučet',
    'cart.shipping': 'Doprava',
    'cart.total': 'Celkem',
    'cart.free': 'Zdarma',
    'cart.free_unlocked': 'Doprava zdarma odemčena.',
    'cart.free_cap': 'Doprava zdarma do {cap}. Tato objednávka má {w} fakturovatelných, takže platí běžné sazby.',
    'cart.away': 'Do dopravy zdarma vám zbývá {amount}.',
    'cart.how_shipping': 'Jak byla doprava vypočítána',
    'cart.checkout': 'K pokladně',
    'cart.keep': 'Pokračovat v prohlížení',
    'cart.note': 'Odesíláme do 1 pracovního dne. Vrácení do 30 dnů.',
    'cart.note2': 'Údaje o kartě se této stránky nikdy nedotknou.',
    'cart.each': '{price} za kus',
    'cart.remove': 'Odebrat',
    'cart.removed': 'Odebráno z košíku',
    'cart.dest': 'Cíl',
    'cart.units': 'Jednotky',
    'cart.actual_w': 'Skutečná hmotnost',
    'cart.vol_w': 'Objemová hmotnost',
    'cart.billable_w': 'Fakturovatelná hmotnost',
    'cart.billed_volume': 'Účtováno podle objemu — tato objednávka zabírá víc místa, než váží. Objemová hmotnost je {p}% fakturovatelné hmotnosti.',
    'cart.billed_actual': 'Účtováno podle skutečné hmotnosti — tato objednávka je dost hustá, že na velikosti nezáleží.',
    'cart.oversize': 'Uplatněn příplatek za nadměrnost: +{amount}',
    'cart.base_rate': 'Základní sazba',
    'cart.oversize_row': 'Příplatek za nadměrnost',
    'cart.free_discount': 'Sleva na dopravu zdarma',
    'cart.shipping_charged': 'Účtovaná doprava',
    'cart.divisor_note': 'Objemový dělitel: 1 kg na {vol} cm³. Balení zahrnuto: {g} g + {p}% objemu.',

    /* ---------- 结账 ---------- */
    'co.title': 'Pokladna',
    'co.sub': 'Zabezpečená pokladna · Údaje o kartě se této stránky nikdy nedotknou',
    'co.empty_t': 'Váš košík je prázdný',
    'co.empty_s': 'Nejprve něco přidejte do košíku a pak se vraťte.',
    'co.nothing': 'Zatím není co zaplatit.',
    'co.contact': 'Kontakt',
    'co.contact_hint': 'Potvrzení objednávky přichází sem.',
    'co.email': 'E-mail',
    'co.email_ph': 'vy@priklad.cz',
    'co.ship_addr': 'Doručovací adresa',
    'co.ship_addr_hint': 'Doprava se počítá z vaší adresy a velikosti zabalení obsahu košíku.',
    'co.first': 'Jméno',
    'co.last': 'Příjmení',
    'co.address1': 'Adresa',
    'co.address2': 'Byt, patro atd.',
    'co.optional': '(nepovinné)',
    'co.country': 'Země',
    'co.state': 'Stát',
    'co.state_ph': 'např. CA',
    'co.province': 'Kraj / region',
    'co.city': 'Město',
    'co.zip': 'PSČ',
    'co.phone': 'Telefon',
    'co.phone_hint': '(jen pro doručení, nepovinné)',
    'co.payment': 'Platba',
    'co.payment_hint': 'Zvolte, jak chcete zaplatit.',
    'co.card': 'Kreditní / debetní karta',
    'co.card_sub': 'Visa, Mastercard, Amex, Apple Pay, Google Pay',
    'co.paypal': 'PayPal',
    'co.paypal_sub': 'Zaplaťte zůstatkem PayPal nebo propojeným účtem',
    'co.pay_note': 'Budete přesměrováni k našemu poskytovateli plateb, abyste vše bezpečně dokončili. Údaje o kartě se na této stránce nikdy neukládají.',
    'co.pay_note_wallet': 'Budete přesměrováni na PayPal, abyste platbu schválili.',
    'co.place': 'Dokončit objednávku',
    'co.working': 'Zpracovává se…',
    'co.terms': 'Odesláním objednávky souhlasíte s našimi podmínkami a 30denní zásadou vrácení.',
    'co.your_order': 'Vaše objednávka',
    'co.edit_cart': 'Upravit košík',
    'co.err_required': 'Vyplňte prosím všechna povinná pole',
    'co.err_email': 'Tato e-mailová adresa vypadá špatně',
    'co.demo_title': 'Platba zatím není připojena',
    'co.demo_body': 'Toto je funkční demo. Košík, hmotnosti, výpočet dopravy a formulář jsou skutečné, ale platební brána není připojena, takže nic nebude účtováno.',
    'co.err_payment': 'Nepodařilo se spojit s platební službou',
    'co.demo_toast': 'Jen demo — platební brána zatím není připojena',

    /* ---------- 国家 / 语言选择器 ---------- */
    'geo.title': 'Země a jazyk',
    'geo.search_ph': 'Hledat zemi',
    'geo.all': 'Všechny země',
    'geo.none': 'Žádná shoda',
    'geo.results': '{n} zemí',
    'geo.note': 'Výběrem země se také přepne jazyk stránek.',
    'geo.region.americas': 'Amerika',
    'geo.region.europe': 'Evropa',
    'geo.region.asia': 'Asie',
    'geo.region.mena': 'Blízký východ a Afrika',
    'geo.region.oceania': 'Oceánie',
    'geo.region.other': 'Ostatní regiony'
  },

  /* ---------- 分类 ---------- */
  cats: {
    all: 'Všechny úlovky',
    organization: 'Úložný prostor a domov',
    kitchen: 'Kuchyně',
    pet: 'Mazlíčci',
    fragrance: 'Vůně domova',
    jewelry: 'Doplňky',
    bundle: 'Krabička překvapení'
  },

  /* ---------- 商品标签 ---------- */
  tags: {
    'Bestseller': 'Nejprodávanější',
    'New': 'Nové',
    'Under $10': 'Pod $10',
    'Limited': 'Limitované',
    'Gift pick': 'Tip na dárek'
  },

  /* ---------- 选项组名 ---------- */
  optNames: {
    'Finish': 'Povrch',
    'Colour': 'Barva',
    'Scent': 'Vůně',
    'Size': 'Velikost',
    'Set': 'Sada',
    'Hand': 'Ruka'
  },

  /* ---------- 选项值 ---------- */
  optValues: {
    'Frosted': 'Matované', 'Clear': 'Čiré', 'Charcoal': 'Uhlová',
    'White': 'Bílá', 'Black': 'Černá', 'Oak': 'Dub',
    'Sage': 'Šalvěj', 'Cream': 'Krémová', 'Terracotta': 'Terakota',
    'Blush': 'Růžová',
    'Lavender': 'Levandule', 'Rose': 'Růže', 'Citrus': 'Citrus',
    'Linen': 'Len', 'Sandalwood': 'Santalové dřevo', 'Fig': 'Fík',
    'Ocean': 'Oceán', 'Vanilla': 'Vanilka', 'Pine': 'Borovice',
    'Small (up to 15 lb)': 'Malá (do 15 lb)',
    'Large (15–50 lb)': 'Velká (15–50 lb)',
    'Left': 'Levá', 'Right': 'Pravá', 'Pair': 'Pár',
    'US 5–7': 'US 5–7', 'US 8–10': 'US 8–10',
    '3 Large + 2 Medium': '3 velké + 2 střední', '5 Large': '5 velkých'
  },

  /* ---------- 运费分区 ---------- */
  zone: {
    'US': 'Spojené státy — pevnina',
    'US-AKHI': 'Spojené státy — Aljaška / Havaj',
    'CA': 'Kanada',
    'UK': 'Spojené království',
    'AU': 'Austrálie'
  },

  /* ---------- 国家 ---------- */
  countries: {
    'US': 'Spojené státy',
    'CA': 'Kanada',
    'GB': 'Spojené království',
    'AU': 'Austrálie'
  },

  products: {
    'org-drawer-3pk': {
      title: 'Skládací organizér do zásuvky, 3 ks',
      blurb: 'Uklidíte nepořádnou zásuvku za méně než minutu. Tři velikosti, které do sebe zapadají a kloužou, takže nic nechrastí.',
      features: [
        'Tři velikosti se skládají na sebe nebo stojí vedle sebe',
        'Protiskluzové nožičky — zůstanou na místě při otevření zásuvky',
        'Vejdou se do běžných 12palcových zásuvek (toaletní stolek, psací stůl)',
        'Otíratelný povrch, žádné ostré hrany'
      ]
    },
    'org-cable-box': {
      title: 'Dekorační box na kabely a šňůry',
      blurb: 'Skryje prodlužovačku, na kterou se nikdo nechce dívat. Větrané víko udržuje věci v chladu a kabely vycházejí bočními otvory.',
      features: [
        'Vejde se do většiny prodlužovaček se 6 zásuvkami',
        'Větrané víko, žádné hromadění tepla',
        'Kabely vycházejí na obou koncích',
        'Matný povrch, na kterém není vidět prach'
      ]
    },
    'org-vacuum-bags': {
      title: 'Vakuové úložné vaky',
      blurb: 'Stlačí celou zimní postelovinu do plochého stohu. Funguje s jakýmkoli vysavačem, pumpa není potřeba.',
      features: [
        'Dvojitý zip a jednocestný ventil',
        'Opakovaně použitelné — zploštit, znovu uzavřít, opakovat',
        'Sníží objem skříně asi o 70%',
        'Funguje s jakoukoli standardní hadicí vysavače'
      ]
    },
    'org-fridge-4pk': {
      title: 'Skládací sada boxů do lednice, 4 ks',
      blurb: 'Odpověď na lednici, která požírá vaše zbytky. Průhledné boky, takže opravdu vidíte, co se chystá zkazit.',
      features: [
        'Dvě velikosti, skládací pro úsporu výšky',
        'Průhledné stěny, snadno uchopitelná ucha',
        'Vysouvací design — žádné rozkládání, abyste se dostali dozadu',
        'Bez BPA, vhodné do lednice i mrazničky'
      ]
    },
    'kit-silicone-6pk': {
      title: 'Sada silikonového kuchyňského náčiní, 6 ks',
      blurb: 'Tepelně odolné do 480°F, takže můžete míchat, aniž byste poškrábali pánev, za kterou jste utratili peníze. Vhodné do myčky, žádné tající rukojeti.',
      features: [
        'Šest kusů: stěrka, obracečka, naběračka, lžíce, děrovaná lžíce, metlička',
        'Silikon v potravinářské kvalitě, bez BPA',
        'Nepoškrábe nepřilnavé povrchy',
        'Vhodné do myčky, žádné tající rukojeti'
      ]
    },
    'pet-lint-roller': {
      title: 'Opakovaně použitelný váleček na zvířecí chlupy',
      blurb: 'Žádné lepicí listy, žádné náplně k dokupování. Přejeďte, vysypte komoru, pokračujte.',
      features: [
        'Opakovaně použitelný — nic jednorázového k dokupování',
        'Pohyb tam a zpět jednou rukou',
        'Otevřená komora se vysype přímo do koše',
        'Funguje na pohovkách, postelovině i autosedačkách'
      ]
    },
    'pet-slow-bowl': {
      title: 'Miska pro pomalé krmení mazlíčků',
      blurb: 'Vzor bludiště protáhne desetisekundové jídlo na deset minut, což snižuje nadýmání a nepořádek po něm.',
      features: [
        'Hřebeny bludiště zpomalují jedení a snižují riziko nadýmání',
        'Protiskluzová základna — neklouže po podlaze',
        'Bez BPA, vhodná do myčky',
        'Hodí se pro malá a střední plemena'
      ]
    },
    'pet-groom-glove': {
      title: 'Rukavice na vyčesávání chlupů mazlíčků',
      blurb: 'Většina mazlíčků má radši hlazení než kartáčování. Jemné výstupky zvedají uvolněné chlupy, když je hladíte, takže se nedostanou na pohovku.',
      features: [
        'Jemné gumové výstupky, příjemné i pro nervózní mazlíčky',
        'Sebrané chlupy sloupnete v jednom kuse',
        'Nastavitelný pásek na zápěstí, na kteroukoli ruku',
        'Funguje na krátké i dlouhé srsti'
      ]
    },
    'fra-sachet-6pk': {
      title: 'Vonné sáčky ze sušených květin, 6 ks',
      blurb: 'Strčte jeden do zásuvky, do boty, do sportovní tašky. Látkový sáček, plně přírodní sušené rostliny, žádný otevřený plamen a nic k zapojení.',
      features: [
        'Šest sáčků v sadě, vonné sáčky součástí',
        'Plně přírodní sušené rostliny, dlouhotrvající',
        'Žádný plamen, žádné baterie, nic k zapojení',
        'Ideální do zásuvek, skříní a zavazadel'
      ]
    },
    'fra-reed-diffuser': {
      title: 'Sada vonných tyčinek s keramickou vázou',
      blurb: 'Vypadá jako z butiku, stojí jako ze supermarketu. Vůně vydrží asi osm týdnů, bez plamene.',
      features: [
        'Glazovaná keramická váza, opakovaně použitelná',
        '8 ratanových tyčinek pro stálé šíření vůně',
        'Přibližně 8 týdnů vůně',
        'Bez plamene — bezpečné kolem dětí a mazlíčků'
      ]
    },
    'fra-gel-clips': {
      title: 'Vonné gelové klipy do auta, 4 ks',
      blurb: 'Přicvakněte na výdech ventilace a během minuty změní celé auto. Každý vydrží zhruba třicet dní.',
      features: [
        'Čtyři klipy, čtyři vůně v sadě',
        'Cvaknou na lamely ventilace, bez lepidla',
        'Asi 30 dní vůně na klip',
        'Nastavitelný otvor pro intenzitu'
      ]
    },
    'jwl-earring-case': {
      title: 'Sametové pouzdro na náušnice a prsteny',
      blurb: 'Dvě zipové vrstvy, žádné zamotání, žádné ztracené uzávěry. Přesně to, co si koupíte, abyste spravili zásuvku, která je problémem roky.',
      features: [
        'Dvě zipové vrstvy s panely na náušnice a prsteny',
        'Měkká sametová podšívka, nic se nepoškrábe',
        'Pojme asi 40 náušnic a 20 prstenů',
        'Vejde se do příručního zavazadla i kabelky'
      ]
    },
    'jwl-ring-set': {
      title: 'Nastavitelná sada prstenů z nerezové oceli, 5 ks',
      blurb: 'Otevírá se a zavírá tak, aby sedla téměř na každý prst, takže není velikost, kterou byste odhadli špatně. Ocelové jádro, povrch odolný proti matnění.',
      features: [
        'Pět prstenů s nastavitelným páskem',
        'Hypoalergenní jádro z nerezové oceli',
        'Povrch odolný proti matnění, žádné zelené prsty',
        'Otevřený design sedí většině velikostí prstů'
      ]
    },
    'bundle-treasure-box': {
      title: 'Krabička překvapení — 3 náhodné úlovky',
      blurb: 'Celý smysl tohoto obchodu v jedné krabici. Zabalíme tři kousky z aktuální police, vždy za víc, než jste zaplatili.',
      features: [
        'Tři položky, vždy nad $39 v maloobchodní hodnotě',
        'Každá krabice je zabalena jinak',
        'Odesíláme do 1 pracovního dne',
        'Velikosti a barvy se liší — a to je ta zábava'
      ]
    }
  }
};
