/* 土耳其语 — Türkçe */
window.I18N_DICTS = window.I18N_DICTS || {};
window.I18N_DICTS.tr = {
  ui: {
    /* ---------- 通用 ---------- */
    'demo.notice': 'Demo sürümü · marka adı, fiyatlar ve görseller geçicidir ve yayından önce değiştirilmelidir',
    'ship.free_over': '{amount} üzeri ücretsiz kargo',
    'ship.new_finds': 'Her çarşamba yeni ürünler',

    /* ---------- 导航 ---------- */
    'nav.shop_all': 'Tümüne göz at',
    'nav.treasure_box': 'Hazine Kutusu',
    'nav.cart': 'Sepet',
    'lang.label': 'Dil',

    /* ---------- 页脚 ---------- */
    'footer.note': 'Gerekçe gerektirmeyen fiyatlarla küçük, işe yarar şeyler.',
    'footer.shop': 'Mağaza',
    'footer.all_finds': 'Tüm ürünler',
    'footer.pet': 'Evcil hayvan',
    'footer.storage_home': 'Düzenleme ve Ev',
    'footer.help': 'Yardım',
    'footer.contact': 'İletişim',
    'footer.shipping_returns': 'Kargo ve iade',
    'footer.track': 'Siparişi takip et',
    'footer.follow': 'Takip et',
    'footer.rights': '© {year} {brand}. Tüm hakları saklıdır.',
    'footer.secure': 'Güvenli ödeme',

    /* ---------- 商品卡 ---------- */
    'card.save': '%{n} tasarruf',
    'card.colours': '{n} renk',
    'card.options': '{n} seçenek',

    /* ---------- 首页 ---------- */
    'home.eyebrow': 'Her çarşamba yeni ürünler',
    'home.h1': 'İyi şeyler,',
    'home.h1_em': '$20 altı.',
    'home.sub': 'Bir evi daha iyi çalıştıran küçük, kullanışlı şeyler — gerçekten sığan düzenleyiciler, dayanan mutfak aletleri, kanepenizi kurtaran evcil hayvan ürünleri. Düşünmenize gerek olmayan fiyatlarla.',
    'home.cta_shelf': 'Rafa göz at',
    'home.cta_box': 'Bir Hazine Kutusu aç',
    'home.stat_price': '$7.99–19.99',
    'home.stat_price_l': 'Tek tek her ürün',
    'home.stat_ship': '$29+ ücretsiz kargo',
    'home.stat_ship_l': '1 iş gününde kargoda',
    'home.stat_rating': '4.7★ ort.',
    'home.stat_rating_l': '{n}+ yorumun ortalaması',
    'home.value1_t': 'Tek fiyat merdiveni, oyun yok',
    'home.value1_s': 'Üç kademe. Sahte geri sayım yok.',
    'home.value2_t': '24 saatte paketlenir ve kargolanır',
    'home.value2_s': 'Küçük ürünler, takipli teslimat.',
    'home.value3_t': 'Dropshipping değil, seçilmiş',
    'home.value3_s': 'Vitrine çıkmadan önce test ederiz.',
    'home.shelf_t': 'Bu haftanın rafı',
    'home.shelf_s': 'Aşağıdaki her şey stokta ve kargoya hazır.',
    'home.why_t': 'Raf neden değişir',
    'home.why_s': 'Aynı anda yaklaşık 20 ürün canlı tutarız. Bir şey biterse biter — yerini başka bir şey alır.',
    'home.panel1_t': 'Bilinçli olarak az stok',
    'home.panel1_s': 'Derin stok, sıkıcı stoktur. Raf hareket etsin ve hiçbir şey bir yıl depoda tozlanmasın diye az alırız.',
    'home.panel2_t': 'Listelemeden önce test',
    'home.panel2_s': 'Her ürün önce bir hafta kullanılır. Bizi rahatsız ederse listelenmez. Kalite sürecinin tamamı bu, ve yeterli.',
    'home.panel3_t': 'Her zaman $20 altı',
    'home.panel3_s': 'Üç fiyat kademesi: $7.99, $12.99, $19.99. İşe yarar bir şey alırken bakiyenizi kontrol etmek zorunda kalmamalısınız.',

    /* ---------- 商品详情 ---------- */
    'pdp.not_found_t': 'Bu ürün raftan kalktı',
    'pdp.not_found_s': 'Raf her hafta değişir, bazı şeyler geri gelmez. Şu an neler olduğuna bakın.',
    'pdp.back_shelf': 'Rafa dön',
    'pdp.reviews': '({n} yorum)',
    'pdp.in_stock': '{n} stokta',
    'pdp.add': 'Sepete ekle',
    'pdp.add_price': 'Sepete ekle · {price}',
    'pdp.qty': 'Adet',
    'pdp.decrease': 'Azalt',
    'pdp.increase': 'Artır',
    'pdp.related_t': 'Rafta ayrıca',
    'pdp.related_s': 'Az önce baktığınızla iyi gider.',
    'pdp.sku': 'SKU',
    'pdp.weight': 'Ürün ağırlığı',
    'pdp.dims': 'Paket boyutu',
    'pdp.billable': 'Faturalanabilir ağırlık (tek başına bu ürün)',
    'pdp.ratio': 'Kargo oranı (tek başına)',
    'pdp.density': 'Yoğunluk',
    'pdp.ships_from': 'Gönderim yeri',
    'pdp.ships_from_v': 'Yerel depo',
    'pdp.returns': 'İade',
    'pdp.returns_v': '30 gün, soru sorulmadan',
    'pdp.by_volume': ' — hacme göre',
    'pdp.by_weight': ' — ağırlığa göre',
    'pdp.ship_hint': 'Tek başına bu ürün {weight} faturalanabilir ağırlıkla gönderilir — {zone} için {rate}. Sepetiniz {threshold} geçince ücretsiz.',
    'pdp.ratio_of': 'Ürün fiyatının %{n}\'i',
    'pdp.density_bulky': ' — hantal, kargosu pahalı',
    'pdp.cn_note': 'dahili not, yayından önce silin',
    'pdp.added': 'Sepete {n} × {name} eklendi',

    /* ---------- 购物车 ---------- */
    'cart.title': 'Sepetiniz',
    'cart.loading': 'Yükleniyor…',
    'cart.nothing': 'Henüz bir şey yok.',
    'cart.items_line': '{m} satırda {n} ürün — ödemeye hazır.',
    'cart.empty_t': 'Sepetiniz boş',
    'cart.empty_s': 'Raf bilinçli olarak küçük, bu haftanın seçkileri tükenmeden göz atın.',
    'cart.summary': 'Sipariş özeti',
    'cart.ship_to': 'Gönderim yeri',
    'cart.subtotal': 'Ara toplam',
    'cart.shipping': 'Kargo',
    'cart.total': 'Toplam',
    'cart.free': 'Ücretsiz',
    'cart.free_unlocked': 'Ücretsiz kargo açıldı.',
    'cart.free_cap': '{cap} değerine kadar ücretsiz kargo. Bu sipariş {w} faturalanabilir, bu yüzden normal tarifeler geçerli.',
    'cart.away': 'Ücretsiz kargoya {amount} kaldı.',
    'cart.how_shipping': 'Kargo nasıl hesaplandı',
    'cart.checkout': 'Ödemeye geç',
    'cart.keep': 'Göz atmaya devam et',
    'cart.note': '1 iş gününde kargoda. 30 gün iade.',
    'cart.note2': 'Kart bilgileri bu siteye hiç dokunmaz.',
    'cart.each': 'tanesi {price}',
    'cart.remove': 'Kaldır',
    'cart.removed': 'Sepetten kaldırıldı',
    'cart.dest': 'Varış yeri',
    'cart.units': 'Adet',
    'cart.actual_w': 'Gerçek ağırlık',
    'cart.vol_w': 'Hacimsel ağırlık',
    'cart.billable_w': 'Faturalanabilir ağırlık',
    'cart.billed_volume': 'Hacme göre faturalandırıldı — bu sipariş ağırlığından çok yer kaplıyor. Hacimsel ağırlık, faturalanabilir ağırlığın %{p}\'i.',
    'cart.billed_actual': 'Gerçek ağırlığa göre faturalandırıldı — bu sipariş boyutun önemsiz olduğu kadar yoğun.',
    'cart.oversize': 'Büyük boy ek ücreti uygulandı: +{amount}',
    'cart.base_rate': 'Temel tarife',
    'cart.oversize_row': 'Büyük boy ek ücreti',
    'cart.free_discount': 'Ücretsiz kargo indirimi',
    'cart.shipping_charged': 'Alınan kargo',
    'cart.divisor_note': 'Hacim böleni: {vol} cm³ başına 1 kg. Paketleme dahil: {g} g + %{p} hacim.',

    /* ---------- 结账 ---------- */
    'co.title': 'Ödeme',
    'co.sub': 'Güvenli ödeme · Kart bilgileri bu siteye hiç dokunmaz',
    'co.empty_t': 'Sepetiniz boş',
    'co.empty_s': 'Önce sepete bir şey ekleyin, sonra dönün.',
    'co.nothing': 'Henüz ödenecek bir şey yok.',
    'co.contact': 'İletişim',
    'co.contact_hint': 'Sipariş onayı buraya gelir.',
    'co.email': 'E-posta',
    'co.email_ph': 'you@example.com',
    'co.ship_addr': 'Teslimat adresi',
    'co.ship_addr_hint': 'Kargo, adresinize ve sepetinizdekilerin paket boyutuna göre hesaplanır.',
    'co.first': 'Ad',
    'co.last': 'Soyad',
    'co.address1': 'Adres',
    'co.address2': 'Daire, kat vb.',
    'co.optional': '(isteğe bağlı)',
    'co.country': 'Ülke',
    'co.state': 'Eyalet',
    'co.state_ph': 'örn. CA',
    'co.province': 'İl / bölge',
    'co.city': 'Şehir',
    'co.zip': 'Posta kodu',
    'co.phone': 'Telefon',
    'co.phone_hint': '(yalnızca teslimat için, isteğe bağlı)',
    'co.payment': 'Ödeme',
    'co.payment_hint': 'Nasıl ödemek istediğinizi seçin.',
    'co.card': 'Kredi / banka kartı',
    'co.card_sub': 'Visa, Mastercard, Amex, Apple Pay, Google Pay',
    'co.paypal': 'PayPal',
    'co.paypal_sub': 'PayPal bakiyeniz veya bağlı hesabınızla ödeyin',
    'co.pay_note': 'Güvenli şekilde tamamlamak için ödeme sağlayıcımıza yönlendirileceksiniz. Kart verileri bu sitede asla saklanmaz.',
    'co.pay_note_wallet': 'Ödemeyi onaylamak için PayPal\'a yönlendirileceksiniz.',
    'co.place': 'Siparişi ver',
    'co.working': 'İşleniyor…',
    'co.terms': 'Sipariş vererek koşullarımızı ve 30 günlük iade politikamızı kabul edersiniz.',
    'co.your_order': 'Siparişiniz',
    'co.edit_cart': 'Sepeti düzenle',
    'co.err_required': 'Lütfen tüm zorunlu alanları doldurun',
    'co.err_email': 'Bu e-posta adresi hatalı görünüyor',
    'co.demo_title': 'Ödeme henüz bağlı değil',
    'co.demo_body': 'Bu çalışan bir demo. Sepet, ağırlıklar, kargo hesaplaması ve sipariş formu gerçek, ancak ödeme ağ geçidi bağlı değil, bu yüzden hiçbir ücret alınmaz.',
    'co.err_payment': 'Ödeme servisine ulaşılamadı',
    'co.demo_toast': 'Yalnızca demo — ödeme ağ geçidi bağlı değil',

    /* ---------- 国家 / 语言选择器 ---------- */
    'geo.title': 'Ülke ve dil',
    'geo.search_ph': 'Ülke ara',
    'geo.all': 'Tüm ülkeler',
    'geo.none': 'Eşleşme bulunamadı',
    'geo.results': '{n} ülke',
    'geo.note': 'Ülke seçmek site dilini de değiştirir.',
    'geo.region.americas': 'Amerika',
    'geo.region.europe': 'Avrupa',
    'geo.region.asia': 'Asya',
    'geo.region.mena': 'Orta Doğu ve Afrika',
    'geo.region.oceania': 'Okyanusya',
    'geo.region.other': 'Diğer bölgeler'
  },

  /* ---------- 分类 ---------- */
  cats: {
    all: 'Tüm ürünler',
    organization: 'Düzenleme ve Ev',
    kitchen: 'Mutfak',
    pet: 'Evcil hayvan',
    fragrance: 'Ev kokusu',
    jewelry: 'Aksesuar',
    bundle: 'Hazine Kutusu'
  },

  /* ---------- 商品标签 ---------- */
  tags: {
    'Bestseller': 'En çok satan',
    'New': 'Yeni',
    'Under $10': '$10 altı',
    'Limited': 'Sınırlı',
    'Gift pick': 'Hediye fikri'
  },

  /* ---------- 选项组名 ---------- */
  optNames: {
    'Finish': 'Yüzey',
    'Colour': 'Renk',
    'Scent': 'Koku',
    'Size': 'Boyut',
    'Set': 'Set',
    'Hand': 'El'
  },

  /* ---------- 选项值 ---------- */
  optValues: {
    'Frosted': 'Buzlu', 'Clear': 'Şeffaf', 'Charcoal': 'Antrasit',
    'White': 'Beyaz', 'Black': 'Siyah', 'Oak': 'Meşe',
    'Sage': 'Adaçayı', 'Cream': 'Krem', 'Terracotta': 'Kiremit',
    'Blush': 'Pudra',
    'Lavender': 'Lavanta', 'Rose': 'Gül', 'Citrus': 'Narenciye',
    'Linen': 'Keten', 'Sandalwood': 'Sandal ağacı', 'Fig': 'İncir',
    'Ocean': 'Okyanus', 'Vanilla': 'Vanilya', 'Pine': 'Çam',
    'Small (up to 15 lb)': 'Küçük (15 lb\'ye kadar)',
    'Large (15–50 lb)': 'Büyük (15–50 lb)',
    'Left': 'Sol', 'Right': 'Sağ', 'Pair': 'Çift',
    'US 5–7': 'US 5–7', 'US 8–10': 'US 8–10',
    '3 Large + 2 Medium': '3 büyük + 2 orta', '5 Large': '5 büyük'
  },

  /* ---------- 运费分区 ---------- */
  zone: {
    'US': 'Amerika Birleşik Devletleri — ana kara',
    'US-AKHI': 'Amerika Birleşik Devletleri — Alaska / Hawaii',
    'CA': 'Kanada',
    'UK': 'Birleşik Krallık',
    'AU': 'Avustralya'
  },

  /* ---------- 商品文案 ---------- */
  /* ---------- 国家 ---------- */
  countries: {
    'US': 'Amerika Birleşik Devletleri',
    'CA': 'Kanada',
    'GB': 'Birleşik Krallık',
    'AU': 'Avustralya'
  },

  products: {
    'org-drawer-3pk': {
      title: 'İstiflenebilir Çekmece Düzenleyici, 3\'lü',
      blurb: 'Dağınık bir çekmeceyi bir dakikadan kısa sürede toparlar. İç içe geçen üç boy, kilitlenir ve kayar, hiçbir şey takırdamaz.',
      features: [
        'Üç boy istiflenir veya yan yana durur',
        'Kaymaz ayaklar — çekmeceyi açınca yerinde kalır',
        'Standart 12" banyo ve çalışma masası çekmecelerine uyar',
        'Silinebilir yüzey, keskin kenar yok'
      ]
    },
    'org-cable-box': {
      title: 'Masaüstü Kablo Düzenleme Kutusu',
      blurb: 'Kimsenin bakmak istemediği prizli uzatmayı saklar. Havalandırmalı kapak serin tutar, kablolar yan yuvalardan çıkar.',
      features: [
        '6 çıkışlı çoğu prizle uyar',
        'Havalandırmalı kapak, ısı birikmez',
        'Kablolar iki uçtan çıkar',
        'Toz göstermeyen mat yüzey'
      ]
    },
    'org-vacuum-bags': {
      title: 'Vakumlu Saklama Poşetleri',
      blurb: 'Koca bir kış nevresimi ince bir yığın haline sıkıştırır. Her süpürgeyle çalışır, pompa gerekmez.',
      features: [
        'Çift fermuar ve tek yönlü valf',
        'Yeniden kullanılabilir — yassılt, tekrar kapat, tekrarla',
        'Dolap hacmini yaklaşık %70 azaltır',
        'Her standart süpürge hortumuyla çalışır'
      ]
    },
    'org-fridge-4pk': {
      title: 'İstiflenebilir Buzdolabı Kutusu Seti, 4\'lü',
      blurb: 'Artıklarınızı yiyen buzdolabına çözüm. Şeffaf yanlar, böylece bozulmak üzere olanı gerçekten görürsünüz.',
      features: [
        'İki boy, yükseklikten tasarruf için istiflenir',
        'Şeffaf duvarlar, kolay tutuşlu kulplar',
        'Çekmeli tasarım — arkaya ulaşmak için boşaltmaya gerek yok',
        'BPA\'sız, buzdolabı ve dondurucuya uygun'
      ]
    },
    'kit-silicone-6pk': {
      title: 'Silikon Mutfak Gereci Seti, 6 Parça',
      blurb: '480°F\'e kadar ısıya dayanıklı, böylece para verdiğiniz tavayı çizmeden karıştırırsınız. Bulaşık makinesinde yıkanır, eriyen tutamak yok.',
      features: [
        'Altı parça: spatula, çevirici, kepçe, kaşık, delikli kaşık, çırpıcı',
        'Gıdaya uygun silikon, BPA\'sız',
        'Yapışmaz kaplamaları çizmez',
        'Bulaşık makinesinde yıkanır, eriyen tutamak yok'
      ]
    },
    'pet-lint-roller': {
      title: 'Yeniden Kullanılabilir Tüy Toplama Rulosu',
      blurb: 'Yapışkan yaprak yok, bir daha asla yedek almak yok. Yuvarla, hazneyi boşalt, devam et.',
      features: [
        'Yeniden kullanılabilir — tekrar alınacak tek kullanımlık yok',
        'Tek elle ileri geri hareket',
        'Açık hazne doğrudan çöpe boşalır',
        'Kanepe, nevresim ve araç koltuğunda çalışır'
      ]
    },
    'pet-slow-bowl': {
      title: 'Yavaş Yeme Evcil Hayvan Maması Kabı',
      blurb: 'Labirent deseni on saniyelik öğünü on dakikaya yayar, bu da şişkinliği ve sonrasındaki dağınıklığı azaltır.',
      features: [
        'Labirent çıkıntıları yemeyi yavaşlatır, şişkinlik riskini azaltır',
        'Kaymaz taban — yerde kaymaz',
        'BPA\'sız, bulaşık makinesinde yıkanır',
        'Küçük ve orta ırklar için uygundur'
      ]
    },
    'pet-groom-glove': {
      title: 'Evcil Hayvan Tüy Toplama Eldiveni',
      blurb: 'Çoğu evcil hayvan fırçalanmaktan çok okşanmayı sever. Yumuşak çıkıntılar siz severken gevşek tüyü alır, böylece kanepeye hiç ulaşmaz.',
      features: [
        'Yumuşak kauçuk çıkıntılar, tedirgin hayvanlar için rahat',
        'Toplanan tüyü tek katman halinde sıyırırsınız',
        'Ayarlanabilir bilek kayışı, iki el için',
        'Kısa ve uzun tüylerde çalışır'
      ]
    },
    'fra-sachet-6pk': {
      title: 'Kuru Çiçek Kokulu Kese, 6\'lı',
      blurb: 'Birini bir çekmeceye, bir ayakkabıya, bir spor çantasına koyun. Kumaş kese, tamamen doğal kurutulmuş bitkiler, alev yok, fiş yok.',
      features: [
        'Set başına altı kese, kılıflar dahil',
        'Tamamen doğal kurutulmuş bitkiler, uzun ömürlü',
        'Alev yok, pil yok, fiş yok',
        'Çekmeceler, dolaplar ve valizler için ideal'
      ]
    },
    'fra-reed-diffuser': {
      title: 'Seramik Vazolu Çubuklu Oda Kokusu Seti',
      blurb: 'Butikten çıkmış gibi görünür, marketten alınmış gibi fiyatlanır. Koku yaklaşık sekiz hafta sürer, alev yok.',
      features: [
        'Sırlı seramik vazo, yeniden kullanılabilir',
        'Dengeli yayılım için 8 rattan çubuk',
        'Yaklaşık 8 hafta koku',
        'Alevsiz — çocuklar ve evcil hayvanlar için güvenli'
      ]
    },
    'fra-gel-clips': {
      title: 'Kokulu Jel Oto Klipsleri, 4\'lü',
      blurb: 'Bir havalandırma ızgarasına takılır ve tüm arabayı yaklaşık bir dakikada değiştirir. Her biri yaklaşık otuz gün dayanır.',
      features: [
        'Dört klips, set başına dört koku',
        'Izgara kanatlarına takılır, yapıştırıcı yok',
        'Klips başına yaklaşık 30 gün koku',
        'Yoğunluk için ayarlanabilir açma/kapama'
      ]
    },
    'jwl-earring-case': {
      title: 'Kadife Küpe ve Yüzük Saklama Kutusu',
      blurb: 'Fermuarlı iki kat, dolaşma yok, kaybolan kapak yok. Yıllardır sorun olan bir çekmeceyi çözmek için alınan türden.',
      features: [
        'Fermuarlı iki kat, küpe ve yüzük panelleriyle',
        'Yumuşak kadife astar, hiçbir şey çizilmez',
        'Yaklaşık 40 küpe ve 20 yüzük alır',
        'El bagajına veya çantaya sığar'
      ]
    },
    'jwl-ring-set': {
      title: 'Ayar Edilebilir Paslanmaz Çelik Yüzük Seti, 5\'li',
      blurb: 'Neredeyse her parmağa uyacak şekilde açılıp kapanır, yanlış tahmin edilecek bir beden yok. Çelik çekirdek, kararmaya dirençli yüzey.',
      features: [
        'Beş yüzük, ayarlanabilir bant',
        'Hipoalerjenik paslanmaz çelik çekirdek',
        'Kararmaya dirençli yüzey, yeşil parmak yok',
        'Açık sırt tasarımı çoğu parmak boyutuna uyar'
      ]
    },
    'bundle-treasure-box': {
      title: 'Hazine Kutusu — 3 Rastgele Ürün',
      blurb: 'Bu mağazanın tüm anlamı tek kutuda. Güncel raftan üç ürün paketleriz, her zaman ödediğinizden değerli.',
      features: [
        'Üç ürün, perakende değeri her zaman $39 üzeri',
        'Her kutu farklı paketlenir',
        '1 iş gününde kargoda',
        'Boyutlar ve renkler değişir — eğlenceli kısmı bu'
      ]
    }
  }
};
