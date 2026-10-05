# FINDLY 独立站（demo 占位名）— 交付说明

对标「Dollar Tree 模式」的平价淘货独立站。零依赖、零构建，纯 HTML/CSS/JS。

> ⚠️ **FINDLY 只是演示占位名。上线前必须换名，并在 USPTO（tmsearch.uspto.gov）查重无冲突后才可使用。**

---

## 1. 目录结构

```
site/
├── index.html          首页：淘货流 + 三档筛选 + 免运提示
├── product.html        商品详情（?id=商品ID，支持款式选择 + 运费试算）
├── cart.html           购物车（多款式多行混装 + 分区运费明细）
├── checkout.html       结账（地址驱动分区重算 + 支付适配层）
└── assets/
    ├── css/style.css   全部样式
    └── js/
        ├── config.js   ★ 站点配置：品牌名、免运门槛、运费表、支付模式
        ├── products.js ★ 商品数据（含款式/规格选项、包装尺寸）
        ├── shipping.js ★ 运费引擎（实际重量 vs 体积重）
        └── store.js    购物车（款式级行）+ 共享组件
```

**改这三处就能运营，不用碰其他文件：**
- 加/改商品 → `assets/js/products.js`
- 改品牌/价格档/免运门槛/运费表/支付 → `assets/js/config.js`
- 运费规则逻辑 → `assets/js/shipping.js`（一般不用动）

## 2. 运费引擎（重点）

**计费规则：**
```
实际重量 = Σ(单品重量 × 数量) + 外包装重量(默认 40g)
体积重   = Σ(单品体积 × 数量) × 装箱空隙系数(默认1.12) ÷ 体积除数 × 1000
计费重   = max(实际重量, 体积重)，不低于最低计费重(默认 50g)
运费     = 分区阶梯价(计费重) + 超大件附加费(任一边 > 60cm → +$6)
免运     = 商品小计 ≥ $29 且 计费重 ≤ 1.5kg
```

**款式（variant）：**
每款商品可有多个选项组（颜色/尺寸/香型），选项可带 `price`/`weight`/`dims` 增量。
同商品不同款式 = 购物车里两行，可分别改数量、分别结算。
SKU 自动生成：`品类前缀-选项缩写`（如 `CABLE-BLACK`）。

**分区：** US 大陆 / US 阿拉斯加夏威夷 / CA / UK / AU，按 `国家+州` 自动推断
（US 单填 AK 或 HI 自动切到偏远区费率）。阶梯价在 `config.js` 里逐档可改。

### ⚠️ 最重要的一个参数：`weightBasis`

```
weightBasis: 'max'        → 计费重 = max(实重, 体积重)  ← 默认
weightBasis: 'actual'     → 只按实重（邮政挂号小包，有尺寸上限）
weightBasis: 'volumetric' → 只按体积重（极端抛货）
```

**同一购物车，两种口径的差别（实测）：**

| 购物车 | 口径 max | 口径 actual |
|---|---|---|
| 理线盒×1 + 硅胶厨具×2 | 计费重 1755g → **运费 $14.50** | 计费重 830g → **运费 $0（免运）** |

差 **$14.50**，占订单金额 27%。这就是为什么**选品时必须优先谈「按实际重量」的挂号小包渠道**——
`max` 口径下，体积重会把低价商品的运费推到售价的 40–70%，直接做不下去。

### 选品信号（详情页已内置）

详情页规格区会自动算两个指标，颜色标记：

- **Freight ratio（运费占售价比）**：单独寄这一件的运费 ÷ 售价
  - 绿 <25% 可以做 ｜ 黄 25–40% 要靠组合装摊 ｜ 红 >40% 别单独卖
- **Density（密度）**：重量 ÷ 体积，单位 g/L
  - 绿 ≥250 ｜ 黄 150–250 ｜ 红 <150（抛货，运费杀手）

**当前 14 款 demo 商品里，红色的一堆（收纳盒、冰箱盒都是抛货）——
这不是 bug，是真话。** 真选品时照着这个信号筛：挑「小而扁」或「小而重」的，
避开放大体积的（收纳盒、枕头、猫窝这类）。

## 3. 多语言（2026-10-05 新增）

**11 种语言**：English / Español / Português / Français / Deutsch / Italiano / Русский / العربية / 日本語 / 한국어 / 中文

**语言判定优先级**：URL `?lang=xx`（分享用）→ localStorage（手动选过就记住）→ 浏览器语言 `navigator.languages` → 英文兜底。
即「哪个国家客户打开就是哪个语言」靠浏览器语言自动匹配（和 Shopify 同一思路，比 IP 判断准）。

- 语言引擎：`assets/js/i18n.js`（自动检测 + 右上角切换器 + localStorage 记忆）
- 字典：`assets/i18n/{en,zh,es,fr,de,it,pt,ja,ko,ar,ru}.js`，每份含全部界面文案 + 14 款商品的标题/卖点/特性
- 阿拉伯语自动整站 RTL 镜像
- 加新语言：复制 `en.js` 改名翻译 → 在 `i18n.js` 的 `LANGS` 里加一行即可
- 分享链接可带 `?lang=es` 强制指定语言

## 3.1 本地预览

```bash
cd site
python -m http.server 8788
# 打开 http://127.0.0.1:8788
```

（直接双击 index.html 也能看，但 localStorage 在 file:// 下部分浏览器受限，建议走 http。）

## 3. 上线前必改清单

| 项 | 位置 | 说明 |
|---|---|---|
| 品牌名 | `config.js` → `brand` | 先查 USPTO 商标，再注册域名 |
| 商品图 | `products.js` | 当前是品类色块+图标占位，上线前必须换实拍图 |
| 价格/划线价 | `products.js` | 按单位经济模型核过再填 |
| Demo 提示条 | `config.js` → `showDemoNotice` | 上线前设为 `false` |
| 详情页中文备注 | `product.html` 模板里的 `pdp-cn` | 内部备注，上线前删掉 |
| 页脚链接 | `store.js` → `footerHTML` | 补 Shipping & Returns / Track order 真实页面 |

## 4. 部署（免费方案）

推荐 **Cloudflare Pages**（免费、全球 CDN、自带 Functions 可跑支付后端）：

1. 把 `site/` 目录推到 GitHub（私有仓库即可）
2. Cloudflare Dashboard → Pages → Connect to Git → 选仓库
3. 构建命令留空，输出目录填 `site`（或把文件放仓库根目录，输出目录填 `/`）
4. 绑定自有域名

备选 Vercel / Netlify，步骤类似。

## 5. 支付接入（三档，按进度切换）

改 `config.js` 里的 `payment.mode`：

### 现状 `mode: 'demo'`
结账能走完流程、生成订单对象（控制台可见），但不收款。用于演示和测流程。

### 第一档 `mode: 'payment_link'`（最快上线，零后端）
1. Airwallex 后台生成「收款链接」（或 Stripe Payment Link，需海外主体）
2. 把链接填进 `config.js` → `payment.stripePaymentLink`
3. 结账点击后直接跳转托管收银台

缺点：跳转出去付款，弃单率略高；链接金额固定，不能动态算多商品总价。
适合：验证期、单一爆品的 TikTok 落地页。

### 第二档 `mode: 'endpoint'`（正式方案）
需要一个小后端（Cloudflare Functions / Vercel Functions）调 Airwallex 的 API 动态创建支付会话：

```
前端 checkout.html
   └─POST /api/checkout  { items, total, customer }
        └─ Cloudflare Function（服务端，密钥不暴露）
             └─ Airwallex API：创建 payment intent / checkout session
                  └─ 返回 { url } → 前端跳转
```

`checkout.html` 已经按这个契约写好了：POST 到 `checkoutEndpoint`，拿到 `{url}` 就跳。后端只需实现这一个接口。

**Airwallex 开户注意（重要顺序）：**
- 先把网站部署上线、传够商品、看起来像正经在做生意 → 再提交开户
- 需要材料：营业执照、法人身份证、对公账户信息
- 营业执照经营范围需含「货物进出口/电子商务」，否则先补《对外贸易经营者备案登记表》
- 大陆企业唯一注册入口是官网，没有代理渠道

## 6. TikTok 引流配合

- 每个主推爆品做一个独立落地页：`product.html?id=xxx` 直接可当落地页用（带价格、卖点、免运提示）
- 视频挂链用 TikTok Shop 主站跳转，或 bio link 指向首页/爆品页
- 「Treasure Box 盲盒」是最适合做内容的 SKU——开箱视频天然带传播性，也是清库存工具
- 每周三上新：TikTok 内容节奏跟着上新日走，站内「New finds every Wednesday」已经写进顶部横幅

## 7. 已知边界（诚实说明）

- 商品图目前是占位图（品类色 + 线性图标），**不能直接上线卖货**
- 评论数/评分是演示数据，接真实评价系统前必须清掉或换成真实数据
- 无库存管理、无订单后台——日订单 <20 单/天之前，用 Airwallex 后台 + 表格管理足够，不必过早建系统
- SEO 基础已做（meta/语义化标签），但单页 JS 渲染对 SEO 不如静态输出，等需要自然流量时再考虑迁移 Next.js SSG
