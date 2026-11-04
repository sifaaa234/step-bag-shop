/* ================================================================
   STEP & BAG — Application Script
   Semua logika (data, render, filter, cart, wishlist, checkout)
================================================================ */
(function(){
"use strict";

/* ----------------------------------------------------------------
   1. PRODUCT DATA
---------------------------------------------------------------- */
const PLACEHOLDER = (bg, fg, text) => `https://placehold.co/700x700/${bg}/${fg}?text=${encodeURIComponent(text)}&font=poppins`;

const COLOR_SETS = {
  blueSet:[{name:'Soft Blue',hex:'#A9D6E8'},{name:'Dark Navy',hex:'#1E2A38'},{name:'Cream',hex:'#F3EBDD'}],
  pinkSet:[{name:'Soft Pink',hex:'#F6D9E6'},{name:'Charcoal',hex:'#3A4756'},{name:'White',hex:'#FFFFFF'}],
  earthSet:[{name:'Sand',hex:'#D8C3A5'},{name:'Olive',hex:'#8A9A5B'},{name:'Black',hex:'#222222'}],
  monoSet:[{name:'Black',hex:'#1E2A38'},{name:'White',hex:'#FFFFFF'},{name:'Grey',hex:'#9AA5B1'}]
};
const SHOE_SIZES = [36,37,38,39,40,41,42,43,44,45];

function makeGallery(seedText, bgList){
  return bgList.map((bg,i)=>PLACEHOLDER(bg,'1E2A38', seedText+' '+(i+1)));
}

const PRODUCTS = [
  {id:1,name:'Urban Stride Sneakers',category:'Sneakers',type:'shoes',price:749000,oldPrice:949000,rating:4.8,reviews:312,
    image:PLACEHOLDER('A9D6E8','1E2A38','Urban Stride'),gallery:makeGallery('Urban Stride',['A9D6E8','F6D9E6','D8EEF8']),
    colors:COLOR_SETS.blueSet,sizes:SHOE_SIZES,material:'Knit Mesh & Rubber Outsole',texture:'Ringan dan breathable',
    dimensions:null,description:'Sneakers harian dengan upper knit yang lentur mengikuti bentuk kaki, dipadukan sol karet anti-slip untuk aktivitas di jalanan kota.',
    comfort:'Empuk dengan bantalan busa memory foam pada tumit.',suitableFor:'Jalan santai, kuliah, hangout.',
    features:['Breathable knit upper','Sol anti-slip','Insole memory foam','Ringan 260gr/sepatu'],badge:'best',stock:24,createdAt:20},
  {id:2,name:'Cloud Step Sneakers',category:'Sneakers',type:'shoes',price:689000,oldPrice:0,rating:4.6,reviews:198,
    image:PLACEHOLDER('D8EEF8','1E2A38','Cloud Step'),gallery:makeGallery('Cloud Step',['D8EEF8','A9D6E8','F6D9E6']),
    colors:COLOR_SETS.monoSet,sizes:SHOE_SIZES,material:'Canvas Premium & EVA Sole',texture:'Halus dengan grip solid',
    dimensions:null,description:'Desain klasik dengan sentuhan modern, cocok untuk gaya kasual sehari-hari maupun tampil semi-formal.',
    comfort:'Sol EVA ringan yang meredam benturan.',suitableFor:'Kerja santai, jalan-jalan, nongkrong.',
    features:['Canvas tahan lama','Tali katun kuat','Sol EVA ringan','Desain unisex'],badge:'new',stock:31,createdAt:35},
  {id:3,name:'AeroFlex Runner',category:'Running Shoes',type:'shoes',price:899000,oldPrice:1199000,rating:4.9,reviews:456,
    image:PLACEHOLDER('A9D6E8','1E2A38','AeroFlex'),gallery:makeGallery('AeroFlex',['A9D6E8','D8EEF8','F6D9E6']),
    colors:COLOR_SETS.blueSet,sizes:SHOE_SIZES,material:'Engineered Mesh & Foam Responsif',texture:'Elastis dan menyerap keringat',
    dimensions:null,description:'Sepatu lari performa tinggi dengan teknologi foam responsif yang mengembalikan energi setiap langkah.',
    comfort:'Bantalan foam ganda untuk lari jarak jauh.',suitableFor:'Lari pagi, olahraga, gym.',
    features:['Foam responsif','Mesh breathable','Grip outsole karet','Ringan untuk lari cepat'],badge:'best',stock:18,createdAt:40},
  {id:4,name:'SprintMax Pro',category:'Running Shoes',type:'shoes',price:1049000,oldPrice:0,rating:4.7,reviews:221,
    image:PLACEHOLDER('F6D9E6','1E2A38','SprintMax'),gallery:makeGallery('SprintMax',['F6D9E6','A9D6E8','D8EEF8']),
    colors:COLOR_SETS.pinkSet,sizes:SHOE_SIZES,material:'Flyknit & Carbon Plate',texture:'Elastis dengan struktur kokoh',
    dimensions:null,description:'Dirancang untuk pelari kompetitif, dilengkapi plate stabilizer untuk dorongan ekstra di setiap langkah.',
    comfort:'Stabil dan responsif untuk kecepatan tinggi.',suitableFor:'Lari kompetitif, latihan interval.',
    features:['Carbon stabilizer plate','Upper flyknit','Heel lock system','Grip multi-arah'],badge:'limited',stock:9,createdAt:44},
  {id:5,name:'Weekend Loafer',category:'Casual Shoes',type:'shoes',price:559000,oldPrice:699000,rating:4.5,reviews:167,
    image:PLACEHOLDER('D8EEF8','1E2A38','Weekend Loafer'),gallery:makeGallery('Weekend Loafer',['D8EEF8','F6D9E6','A9D6E8']),
    colors:COLOR_SETS.earthSet,sizes:SHOE_SIZES,material:'Suede & Karet Anti Slip',texture:'Lembut dan premium',
    dimensions:null,description:'Loafer santai dengan bahan suede premium, mudah dipadukan untuk tampilan smart casual.',
    comfort:'Insole empuk untuk pemakaian seharian.',suitableFor:'Kerja santai, kencan, kumpul keluarga.',
    features:['Suede premium','Anti slip','Desain slip-on','Jahitan rapi'],badge:'',stock:27,createdAt:12},
  {id:6,name:'Canvas Comfort',category:'Casual Shoes',type:'shoes',price:479000,oldPrice:0,rating:4.4,reviews:143,
    image:PLACEHOLDER('F6D9E6','1E2A38','Canvas Comfort'),gallery:makeGallery('Canvas Comfort',['F6D9E6','D8EEF8','A9D6E8']),
    colors:COLOR_SETS.monoSet,sizes:SHOE_SIZES,material:'Kanvas Katun',texture:'Ringan dan kasual',
    dimensions:null,description:'Sepatu kanvas ringan dengan gaya retro yang selalu relevan untuk gaya harian.',
    comfort:'Ringan dengan sol fleksibel.',suitableFor:'Sekolah, kuliah, jalan santai.',
    features:['Kanvas tebal','Sol fleksibel','Tali panjang adjustable','Desain retro'],badge:'',stock:35,createdAt:8},
  {id:7,name:'Coastal Slide Sandal',category:'Sandal',type:'shoes',price:329000,oldPrice:399000,rating:4.6,reviews:201,
    image:PLACEHOLDER('A9D6E8','1E2A38','Coastal Slide'),gallery:makeGallery('Coastal Slide',['A9D6E8','F6D9E6','D8EEF8']),
    colors:COLOR_SETS.blueSet,sizes:SHOE_SIZES,material:'EVA Foam & Strap Karet',texture:'Empuk dan tahan air',
    dimensions:null,description:'Sandal slide anti air, sempurna untuk aktivitas santai di pantai maupun sekitar rumah.',
    comfort:'Footbed empuk kontur kaki.',suitableFor:'Pantai, kolam renang, santai.',
    features:['Tahan air','Anti slip','Footbed kontur','Ringan dibawa traveling'],badge:'sale',stock:40,createdAt:15},
  {id:8,name:'Trail Strap Sandal',category:'Sandal',type:'shoes',price:389000,oldPrice:0,rating:4.5,reviews:112,
    image:PLACEHOLDER('D8EEF8','1E2A38','Trail Strap'),gallery:makeGallery('Trail Strap',['D8EEF8','A9D6E8','F6D9E6']),
    colors:COLOR_SETS.earthSet,sizes:SHOE_SIZES,material:'Nylon Strap & Sol Trekking',texture:'Kokoh dengan grip kuat',
    dimensions:null,description:'Sandal outdoor dengan strap adjustable dan sol trekking untuk medan ringan hingga menengah.',
    comfort:'Strap adjustable untuk fit presisi.',suitableFor:'Hiking ringan, camping, traveling.',
    features:['Strap adjustable','Sol trekking','Tahan lama','Grip anti selip'],badge:'',stock:22,createdAt:19},
  {id:9,name:'CityPack Backpack',category:'Backpack',type:'bag',price:459000,oldPrice:599000,rating:4.8,reviews:289,
    image:PLACEHOLDER('F6D9E6','1E2A38','CityPack'),gallery:makeGallery('CityPack',['F6D9E6','D8EEF8','A9D6E8']),
    colors:COLOR_SETS.pinkSet,sizes:null,material:'Kain Oxford Anti Air',texture:'Kokoh dan ringan',
    dimensions:'30 x 20 x 45 cm',description:'Backpack harian dengan kompartemen laptop terpisah dan banyak kantong penyimpanan.',
    comfort:'Strap empuk dengan ventilasi punggung.',suitableFor:'Sekolah, kuliah, kerja.',
    features:['Kompartemen laptop 15"','Anti air','Banyak kantong','Strap empuk'],badge:'best',stock:26,createdAt:38},
  {id:10,name:'Voyager Daypack',category:'Backpack',type:'bag',price:519000,oldPrice:0,rating:4.6,reviews:154,
    image:PLACEHOLDER('A9D6E8','1E2A38','Voyager'),gallery:makeGallery('Voyager',['A9D6E8','F6D9E6','D8EEF8']),
    colors:COLOR_SETS.monoSet,sizes:null,material:'Ripstop Nylon',texture:'Ringan dan tahan sobek',
    dimensions:'28 x 18 x 42 cm',description:'Daypack minimalis dengan desain sporty, cocok untuk aktivitas outdoor maupun perkotaan.',
    comfort:'Bantalan busa pada punggung dan strap.',suitableFor:'Traveling, hiking ringan, harian.',
    features:['Ripstop tahan sobek','Resleting YKK','Kantong botol samping','Desain sporty'],badge:'new',stock:19,createdAt:41},
  {id:11,name:'Compact Sling',category:'Sling Bag',type:'bag',price:279000,oldPrice:349000,rating:4.5,reviews:132,
    image:PLACEHOLDER('D8EEF8','1E2A38','Compact Sling'),gallery:makeGallery('Compact Sling',['D8EEF8','A9D6E8','F6D9E6']),
    colors:COLOR_SETS.blueSet,sizes:null,material:'Kanvas & Kulit Sintetis',texture:'Ringan dan fleksibel',
    dimensions:'22 x 8 x 16 cm',description:'Sling bag ringkas untuk membawa barang esensial saat beraktivitas ringan di luar rumah.',
    comfort:'Strap adjustable dan empuk.',suitableFor:'Jalan-jalan, olahraga ringan, harian.',
    features:['Strap adjustable','Resleting anti macet','Kantong dalam rapi','Desain unisex'],badge:'sale',stock:33,createdAt:10},
  {id:12,name:'Urban Crossbody Sling',category:'Sling Bag',type:'bag',price:319000,oldPrice:0,rating:4.4,reviews:98,
    image:PLACEHOLDER('F6D9E6','1E2A38','Urban Crossbody'),gallery:makeGallery('Urban Crossbody',['F6D9E6','A9D6E8','D8EEF8']),
    colors:COLOR_SETS.pinkSet,sizes:null,material:'Nylon Tahan Air',texture:'Halus dengan lapisan tahan air',
    dimensions:'24 x 9 x 18 cm',description:'Crossbody bag bergaya urban dengan banyak kompartemen untuk kebutuhan mobile harian.',
    comfort:'Desain ergonomis mengikuti bentuk tubuh.',suitableFor:'Commuting, hangout, traveling singkat.',
    features:['Tahan air','Multi kompartemen','Resleting ganda','Gesper metal kokoh'],badge:'',stock:21,createdAt:14},
  {id:13,name:'Everyday Canvas Tote',category:'Tote Bag',type:'bag',price:249000,oldPrice:299000,rating:4.7,reviews:245,
    image:PLACEHOLDER('A9D6E8','1E2A38','Canvas Tote'),gallery:makeGallery('Canvas Tote',['A9D6E8','D8EEF8','F6D9E6']),
    colors:COLOR_SETS.earthSet,sizes:null,material:'Kanvas Tebal',texture:'Kokoh dan natural',
    dimensions:'38 x 12 x 32 cm',description:'Tote bag serbaguna dengan kapasitas besar, ideal untuk belanja maupun kebutuhan kuliah.',
    comfort:'Handle nyaman digenggam maupun disampirkan di bahu.',suitableFor:'Kuliah, belanja, kerja santai.',
    features:['Kapasitas besar','Kanvas tebal','Handle ganda','Kantong dalam zipper'],badge:'sale',stock:29,createdAt:17},
  {id:14,name:'Weekend Leather Tote',category:'Tote Bag',type:'bag',price:689000,oldPrice:0,rating:4.8,reviews:176,
    image:PLACEHOLDER('F6D9E6','1E2A38','Leather Tote'),gallery:makeGallery('Leather Tote',['F6D9E6','A9D6E8','D8EEF8']),
    colors:COLOR_SETS.monoSet,sizes:null,material:'Kulit Sintetis Premium',texture:'Halus dan elegan',
    dimensions:'36 x 14 x 30 cm',description:'Tote bag kulit sintetis dengan finishing premium, sempurna untuk gaya kerja maupun santai akhir pekan.',
    comfort:'Struktur kokoh menjaga bentuk tas.',suitableFor:'Kerja, meeting, akhir pekan.',
    features:['Kulit sintetis premium','Struktur kokoh','Kantong laptop dalam','Finishing jahitan rapi'],badge:'best',stock:14,createdAt:33},
  {id:15,name:'Mini Structured Handbag',category:'Hand Bag',type:'bag',price:399000,oldPrice:499000,rating:4.6,reviews:189,
    image:PLACEHOLDER('D8EEF8','1E2A38','Mini Handbag'),gallery:makeGallery('Mini Handbag',['D8EEF8','F6D9E6','A9D6E8']),
    colors:COLOR_SETS.pinkSet,sizes:null,material:'Kulit Sintetis & Hardware Gold',texture:'Halus dan berkilau lembut',
    dimensions:'20 x 9 x 14 cm',description:'Handbag mini dengan struktur kokoh dan detail hardware elegan, cocok untuk tampilan chic sehari-hari.',
    comfort:'Ringan dengan tali bahu adjustable.',suitableFor:'Kencan, acara santai, hangout.',
    features:['Hardware gold','Struktur kokoh','Tali adjustable','Kantong dalam rapi'],badge:'sale',stock:23,createdAt:22},
  {id:16,name:'Chic Clutch Handbag',category:'Hand Bag',type:'bag',price:279000,oldPrice:0,rating:4.5,reviews:121,
    image:PLACEHOLDER('A9D6E8','1E2A38','Chic Clutch'),gallery:makeGallery('Chic Clutch',['A9D6E8','F6D9E6','D8EEF8']),
    colors:COLOR_SETS.blueSet,sizes:null,material:'Suede Sintetis',texture:'Lembut dengan tekstur elegan',
    dimensions:'26 x 4 x 16 cm',description:'Clutch elegan untuk melengkapi outfit di berbagai acara spesial maupun santai.',
    comfort:'Ringan dan mudah dibawa.',suitableFor:'Acara formal, kencan malam, pesta.',
    features:['Suede lembut','Gesper magnet','Kantong koin dalam','Desain ramping'],badge:'new',stock:17,createdAt:43},
  {id:17,name:'TechCarry Laptop Bag',category:'Laptop Bag',type:'bag',price:549000,oldPrice:649000,rating:4.9,reviews:267,
    image:PLACEHOLDER('F6D9E6','1E2A38','TechCarry'),gallery:makeGallery('TechCarry',['F6D9E6','D8EEF8','A9D6E8']),
    colors:COLOR_SETS.monoSet,sizes:null,material:'Nylon Tahan Air & Padding Busa',texture:'Kokoh dengan proteksi ekstra',
    dimensions:'40 x 8 x 30 cm (muat laptop 15.6")',description:'Tas laptop dengan padding busa tebal untuk melindungi perangkat kerja dan kuliahmu.',
    comfort:'Strap empuk dengan grip anti slip.',suitableFor:'Kerja, kuliah, presentasi.',
    features:['Padding anti benturan','Muat laptop 15.6"','Port USB eksternal','Tahan air'],badge:'best',stock:20,createdAt:46},
  {id:18,name:'ProSleeve Laptop Tote',category:'Laptop Bag',type:'bag',price:479000,oldPrice:0,rating:4.6,reviews:134,
    image:PLACEHOLDER('D8EEF8','1E2A38','ProSleeve'),gallery:makeGallery('ProSleeve',['D8EEF8','A9D6E8','F6D9E6']),
    colors:COLOR_SETS.pinkSet,sizes:null,material:'Kanvas & Lapisan Busa',texture:'Ringan dengan proteksi lembut',
    dimensions:'37 x 7 x 27 cm (muat laptop 14")',description:'Laptop tote bergaya minimalis, memadukan fungsi kerja profesional dengan tampilan kasual.',
    comfort:'Handle ganda dan tali bahu lepas-pasang.',suitableFor:'Kerja hybrid, kuliah, commuting.',
    features:['Lapisan busa protektif','Handle ganda','Kantong charger','Desain minimalis'],badge:'',stock:25,createdAt:6},
  {id:20,name:'Metro Curve Tote',category:'Tote Bag',type:'bag',price:459000,oldPrice:559000,rating:4.7,reviews:88,
    image:PLACEHOLDER('F6D9E6','1E2A38','Metro Curve'),gallery:makeGallery('Metro Curve',['F6D9E6','A9D6E8','D8EEF8']),
    colors:COLOR_SETS.pinkSet,sizes:null,material:'Vegan Leather & Struktur Curved Frame',texture:'Halus dengan bentuk melengkung modern',
    dimensions:'34 x 13 x 29 cm',description:'Tote bag dengan siluet melengkung yang khas, memadukan struktur kokoh dan sentuhan premium untuk gaya kerja maupun jalan-jalan.',
    comfort:'Handle top empuk dan tali bahu lepas-pasang.',suitableFor:'Kerja, hangout, akhir pekan di kota.',
    features:['Struktur curved frame','Vegan leather','Kantong laptop dalam','Tali bahu adjustable'],badge:'best',stock:20,createdAt:50},

  /* ---- Tambahan agar setiap kategori punya minimal 4 produk ---- */
  {id:21,name:'Skyline Court Sneakers',category:'Sneakers',type:'shoes',price:799000,oldPrice:999000,rating:4.7,reviews:178,
    image:PLACEHOLDER('A9D6E8','1E2A38','Skyline Court'),gallery:makeGallery('Skyline Court',['A9D6E8','D8EEF8','F6D9E6']),
    colors:COLOR_SETS.blueSet,sizes:SHOE_SIZES,material:'Kulit Sintetis & Sol Karet',texture:'Kokoh dengan grip stabil',
    dimensions:null,description:'Sneakers bergaya court classic dengan upper kulit sintetis premium, tampil rapi untuk gaya kasual maupun semi-formal.',
    comfort:'Insole empuk dengan bantalan tumit ekstra.',suitableFor:'Kuliah, hangout, jalan santai.',
    features:['Upper kulit sintetis','Sol karet anti-slip','Insole empuk','Jahitan rapi'],badge:'sale',stock:20,createdAt:30},
  {id:22,name:'Pulse Street Sneakers',category:'Sneakers',type:'shoes',price:719000,oldPrice:0,rating:4.5,reviews:145,
    image:PLACEHOLDER('D8EEF8','1E2A38','Pulse Street'),gallery:makeGallery('Pulse Street',['D8EEF8','A9D6E8','F6D9E6']),
    colors:COLOR_SETS.monoSet,sizes:SHOE_SIZES,material:'Mesh Rajut & Sol EVA',texture:'Ringan dan lentur',
    dimensions:null,description:'Sneakers streetwear dengan upper mesh rajut yang lentur dan siluet modern, cocok jadi andalan gaya harian.',
    comfort:'Sol EVA ringan meredam benturan setiap langkah.',suitableFor:'Jalan-jalan kota, hangout, kuliah.',
    features:['Mesh rajut breathable','Sol EVA ringan','Desain streetwear','Ringan dipakai seharian'],badge:'new',stock:28,createdAt:47},

  {id:23,name:'Velocity Runner',category:'Running Shoes',type:'shoes',price:949000,oldPrice:1199000,rating:4.8,reviews:267,
    image:PLACEHOLDER('F6D9E6','1E2A38','Velocity Runner'),gallery:makeGallery('Velocity Runner',['F6D9E6','A9D6E8','D8EEF8']),
    colors:COLOR_SETS.pinkSet,sizes:SHOE_SIZES,material:'Mesh Rajut & Foam Responsif',texture:'Elastis dan menyerap keringat',
    dimensions:null,description:'Sepatu lari dengan foam responsif generasi baru untuk dorongan energi ekstra di setiap langkah kaki.',
    comfort:'Bantalan foam empuk namun tetap responsif.',suitableFor:'Lari harian, jogging, gym.',
    features:['Foam responsif generasi baru','Upper mesh breathable','Outsole grip karet','Heel lock stabil'],badge:'sale',stock:15,createdAt:25},
  {id:24,name:'EnduroFlex Runner',category:'Running Shoes',type:'shoes',price:1099000,oldPrice:0,rating:4.6,reviews:132,
    image:PLACEHOLDER('D8C3A5','1E2A38','EnduroFlex'),gallery:makeGallery('EnduroFlex',['D8C3A5','A9D6E8','F6D9E6']),
    colors:COLOR_SETS.earthSet,sizes:SHOE_SIZES,material:'Engineered Mesh & Sol Karbon Ringan',texture:'Fleksibel dengan struktur stabil',
    dimensions:null,description:'Dirancang untuk lari jarak jauh, dengan struktur sol yang stabil dan tetap fleksibel mengikuti gerak kaki.',
    comfort:'Nyaman untuk lari jarak jauh tanpa cepat lelah.',suitableFor:'Lari jarak jauh, latihan rutin.',
    features:['Sol fleksibel & stabil','Mesh breathable','Grip multi-arah','Ringan untuk performa tinggi'],badge:'',stock:12,createdAt:5},

  {id:25,name:'Heritage Slip-On',category:'Casual Shoes',type:'shoes',price:599000,oldPrice:699000,rating:4.4,reviews:98,
    image:PLACEHOLDER('D8C3A5','1E2A38','Heritage Slip-On'),gallery:makeGallery('Heritage Slip-On',['D8C3A5','F6D9E6','A9D6E8']),
    colors:COLOR_SETS.earthSet,sizes:SHOE_SIZES,material:'Kanvas Premium & Sol Karet',texture:'Lembut dengan grip stabil',
    dimensions:null,description:'Slip-on kasual bergaya heritage yang mudah dipakai-lepas, cocok menemani aktivitas santai sehari-hari.',
    comfort:'Desain slip-on tanpa tali, praktis dan nyaman.',suitableFor:'Jalan santai, nongkrong, akhir pekan.',
    features:['Desain slip-on praktis','Kanvas premium','Sol karet anti-slip','Gaya heritage timeless'],badge:'sale',stock:30,createdAt:3},
  {id:26,name:'Daily Comfort Casual',category:'Casual Shoes',type:'shoes',price:529000,oldPrice:0,rating:4.3,reviews:76,
    image:PLACEHOLDER('A9D6E8','1E2A38','Daily Comfort'),gallery:makeGallery('Daily Comfort',['A9D6E8','D8EEF8','F6D9E6']),
    colors:COLOR_SETS.monoSet,sizes:SHOE_SIZES,material:'Kanvas & Sol Fleksibel',texture:'Ringan dan nyaman',
    dimensions:null,description:'Sepatu kasual serbaguna dengan bahan ringan, cocok dipakai untuk berbagai aktivitas harian.',
    comfort:'Ringan dan fleksibel untuk pemakaian lama.',suitableFor:'Sekolah, kerja santai, jalan-jalan.',
    features:['Bahan ringan','Sol fleksibel','Desain serbaguna','Nyaman seharian'],badge:'',stock:33,createdAt:9},

  {id:27,name:'Breeze Comfort Sandal',category:'Sandal',type:'shoes',price:299000,oldPrice:369000,rating:4.5,reviews:154,
    image:PLACEHOLDER('D8EEF8','1E2A38','Breeze Comfort'),gallery:makeGallery('Breeze Comfort',['D8EEF8','A9D6E8','F6D9E6']),
    colors:COLOR_SETS.blueSet,sizes:SHOE_SIZES,material:'EVA Foam Ringan',texture:'Empuk dan lentur',
    dimensions:null,description:'Sandal ringan dengan footbed empuk, pas untuk aktivitas santai di rumah maupun bepergian singkat.',
    comfort:'Footbed empuk yang lentur mengikuti langkah.',suitableFor:'Santai di rumah, jalan sekitar, liburan.',
    features:['Footbed empuk','Ringan dibawa','Tahan air','Grip anti selip'],badge:'sale',stock:45,createdAt:13},
  {id:28,name:'Terra Walk Sandal',category:'Sandal',type:'shoes',price:359000,oldPrice:0,rating:4.6,reviews:87,
    image:PLACEHOLDER('D8C3A5','1E2A38','Terra Walk'),gallery:makeGallery('Terra Walk',['D8C3A5','A9D6E8','F6D9E6']),
    colors:COLOR_SETS.earthSet,sizes:SHOE_SIZES,material:'Nylon Strap & Sol Trekking',texture:'Kokoh dengan grip agresif',
    dimensions:null,description:'Sandal outdoor dengan strap kokoh dan sol bertekstur, siap menemani jalur trekking ringan hingga sedang.',
    comfort:'Strap adjustable menjaga fit tetap presisi.',suitableFor:'Hiking ringan, outdoor, traveling.',
    features:['Sol trekking bertekstur','Strap adjustable','Tahan lama','Grip agresif'],badge:'new',stock:24,createdAt:45},

  {id:29,name:'Nomad Travel Backpack',category:'Backpack',type:'bag',price:599000,oldPrice:749000,rating:4.7,reviews:203,
    image:PLACEHOLDER('A9D6E8','1E2A38','Nomad Travel'),gallery:makeGallery('Nomad Travel',['A9D6E8','F6D9E6','D8EEF8']),
    colors:COLOR_SETS.monoSet,sizes:null,material:'Kain Oxford Tebal & Resleting YKK',texture:'Kokoh dan tahan lama',
    dimensions:'32 x 22 x 48 cm',description:'Backpack travel dengan kapasitas besar dan banyak kompartemen, ideal untuk perjalanan singkat maupun harian.',
    comfort:'Strap empuk dengan sistem ventilasi punggung.',suitableFor:'Traveling, kerja, kuliah.',
    features:['Kapasitas besar','Resleting YKK','Kompartemen laptop','Strap empuk berventilasi'],badge:'sale',stock:18,createdAt:37},
  {id:30,name:'Campus Ready Backpack',category:'Backpack',type:'bag',price:429000,oldPrice:0,rating:4.5,reviews:165,
    image:PLACEHOLDER('F6D9E6','1E2A38','Campus Ready'),gallery:makeGallery('Campus Ready',['F6D9E6','D8EEF8','A9D6E8']),
    colors:COLOR_SETS.pinkSet,sizes:null,material:'Kanvas & Kulit Sintetis',texture:'Ringan dan rapi',
    dimensions:'29 x 18 x 43 cm',description:'Backpack kampus dengan desain rapi dan kantong serbaguna, pas untuk buku, laptop, dan perlengkapan harian.',
    comfort:'Bantalan busa pada bagian punggung.',suitableFor:'Kuliah, sekolah, harian.',
    features:['Kantong serbaguna','Kompartemen laptop','Bahan ringan','Desain rapi'],badge:'',stock:29,createdAt:4},

  {id:31,name:'Metro Mini Sling',category:'Sling Bag',type:'bag',price:259000,oldPrice:0,rating:4.4,reviews:76,
    image:PLACEHOLDER('A9D6E8','1E2A38','Metro Mini'),gallery:makeGallery('Metro Mini',['A9D6E8','D8EEF8','F6D9E6']),
    colors:COLOR_SETS.blueSet,sizes:null,material:'Kanvas Ringan',texture:'Ringan dan ringkas',
    dimensions:'20 x 7 x 15 cm',description:'Sling bag mini yang ringkas untuk membawa barang esensial saat beraktivitas ringan di luar rumah.',
    comfort:'Ringan dan nyaman disampirkan seharian.',suitableFor:'Jalan santai, olahraga ringan, harian.',
    features:['Desain ringkas','Strap adjustable','Kantong dalam rapi','Ringan dibawa'],badge:'',stock:34,createdAt:11},
  {id:32,name:'Active Sport Sling',category:'Sling Bag',type:'bag',price:299000,oldPrice:349000,rating:4.6,reviews:112,
    image:PLACEHOLDER('D8C3A5','1E2A38','Active Sport'),gallery:makeGallery('Active Sport',['D8C3A5','A9D6E8','F6D9E6']),
    colors:COLOR_SETS.earthSet,sizes:null,material:'Nylon Tahan Air',texture:'Ringan dan tahan air',
    dimensions:'23 x 8 x 17 cm',description:'Sling bag sporty dengan bahan tahan air, cocok menemani aktivitas outdoor maupun olahraga ringan.',
    comfort:'Strap empuk dan dapat disesuaikan.',suitableFor:'Olahraga, jalan-jalan, commuting singkat.',
    features:['Tahan air','Strap empuk adjustable','Kantong botol samping','Desain sporty'],badge:'sale',stock:26,createdAt:36},

  {id:33,name:'Sunday Market Tote',category:'Tote Bag',type:'bag',price:289000,oldPrice:0,rating:4.6,reviews:143,
    image:PLACEHOLDER('D8C3A5','1E2A38','Sunday Market'),gallery:makeGallery('Sunday Market',['D8C3A5','F6D9E6','A9D6E8']),
    colors:COLOR_SETS.earthSet,sizes:null,material:'Kanvas Katun Tebal',texture:'Kokoh dan natural',
    dimensions:'36 x 13 x 30 cm',description:'Tote bag kanvas serbaguna berkapasitas lega, cocok untuk belanja akhir pekan maupun aktivitas harian.',
    comfort:'Handle ganda nyaman digenggam atau disampirkan.',suitableFor:'Belanja, kuliah, jalan santai.',
    features:['Kapasitas lega','Kanvas tebal','Handle ganda','Kantong dalam rapi'],badge:'new',stock:31,createdAt:42},

  {id:34,name:'Evening Elegance Handbag',category:'Hand Bag',type:'bag',price:449000,oldPrice:539000,rating:4.7,reviews:121,
    image:PLACEHOLDER('F6D9E6','1E2A38','Evening Elegance'),gallery:makeGallery('Evening Elegance',['F6D9E6','A9D6E8','D8EEF8']),
    colors:COLOR_SETS.monoSet,sizes:null,material:'Kulit Sintetis Premium & Hardware Metal',texture:'Halus dan elegan',
    dimensions:'24 x 10 x 16 cm',description:'Handbag elegan dengan finishing premium, sempurna untuk melengkapi tampilan di acara-acara spesial.',
    comfort:'Struktur kokoh menjaga bentuk tas tetap rapi.',suitableFor:'Acara formal, kencan malam, kondangan.',
    features:['Hardware metal premium','Struktur kokoh','Tali bahu lepas-pasang','Finishing elegan'],badge:'sale',stock:19,createdAt:27},
  {id:35,name:'Structured City Handbag',category:'Hand Bag',type:'bag',price:379000,oldPrice:0,rating:4.5,reviews:94,
    image:PLACEHOLDER('A9D6E8','1E2A38','Structured City'),gallery:makeGallery('Structured City',['A9D6E8','F6D9E6','D8EEF8']),
    colors:COLOR_SETS.pinkSet,sizes:null,material:'Kulit Sintetis & Struktur Frame',texture:'Halus dengan bentuk rapi',
    dimensions:'26 x 11 x 18 cm',description:'Handbag berstruktur rapi dengan siluet minimalis, mudah dipadukan untuk gaya kerja maupun santai.',
    comfort:'Ringan dengan tali bahu adjustable.',suitableFor:'Kerja, hangout, jalan-jalan kota.',
    features:['Struktur rapi minimalis','Tali adjustable','Kantong dalam terorganisir','Gesper kokoh'],badge:'',stock:22,createdAt:7},

  {id:36,name:'Slim Commuter Laptop Bag',category:'Laptop Bag',type:'bag',price:499000,oldPrice:0,rating:4.6,reviews:108,
    image:PLACEHOLDER('D8EEF8','1E2A38','Slim Commuter'),gallery:makeGallery('Slim Commuter',['D8EEF8','A9D6E8','F6D9E6']),
    colors:COLOR_SETS.blueSet,sizes:null,material:'Nylon Ringan & Padding Busa',texture:'Ramping dan protektif',
    dimensions:'38 x 6 x 28 cm (muat laptop 14")',description:'Tas laptop ramping dengan padding pelindung, dirancang khusus untuk mobilitas commuting harian.',
    comfort:'Strap empuk dengan desain ramping tidak memberatkan.',suitableFor:'Commuting, kerja, kuliah.',
    features:['Padding protektif','Desain ramping','Kantong charger','Tahan air ringan'],badge:'',stock:24,createdAt:16},
  {id:37,name:'Executive Laptop Briefcase',category:'Laptop Bag',type:'bag',price:649000,oldPrice:799000,rating:4.8,reviews:156,
    image:PLACEHOLDER('D8C3A5','1E2A38','Executive Briefcase'),gallery:makeGallery('Executive Briefcase',['D8C3A5','A9D6E8','F6D9E6']),
    colors:COLOR_SETS.monoSet,sizes:null,material:'Kulit Sintetis Premium & Padding Busa',texture:'Kokoh dan profesional',
    dimensions:'41 x 9 x 31 cm (muat laptop 15.6")',description:'Briefcase laptop bergaya profesional dengan finishing premium, cocok untuk kebutuhan kerja dan meeting.',
    comfort:'Handle kokoh dan tali bahu lepas-pasang.',suitableFor:'Kerja, meeting, presentasi.',
    features:['Finishing premium','Padding anti benturan','Kantong dokumen','Handle kokoh'],badge:'best',stock:13,createdAt:49},
];

const CATEGORIES = [
  {name:'Sneakers',icon:'sneaker',featured:true},{name:'Running Shoes',icon:'running'},
  {name:'Casual Shoes',icon:'casual'},{name:'Sandal',icon:'sandal'},
  {name:'Backpack',icon:'backpack'},{name:'Sling Bag',icon:'sling'},
  {name:'Tote Bag',icon:'tote'},{name:'Hand Bag',icon:'handbag'},
  {name:'Laptop Bag',icon:'laptopbag'}
];

/* ----------------------------------------------------------------
   1b. CATEGORY SVG ICONS
   Clean, consistent-stroke inline SVGs (24px grid, viewBox 0 0 64 64).
   Decorative only -> aria-hidden. Colour is controlled via
   currentColor so it inherits from .cat-icon.
---------------------------------------------------------------- */
const CATEGORY_ICONS = {
  sneaker: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <path d="M6 40c0-3 2-5 5-6l10-3c2-4 5-8 9-10l4 6 6-3 4 5c5 1 9 4 11 8 2 1 3 3 3 5v3c0 2-2 4-4 4H10c-2 0-4-2-4-4v-5Z" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M21 21c1 3 3 6 6 8" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M31 19l4 6M41 16l4 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <path d="M14 42h36" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-dasharray="1 5.4"/>
  </svg>`,
  running: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <path d="M8 44c8 2 14-1 18-6l3-8c1-3 4-5 7-4l3 1-4 9c6-1 11 1 14 6 2 1 3 3 3 5v2c0 2-2 3-4 3H14c-3 0-6-2-6-5v-3Z" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M20 20l6 4" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="18" cy="16" r="4" stroke="currentColor" stroke-width="2.6"/>
  </svg>`,
  casual: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <path d="M10 38c0-2 1-4 3-5l14-6c3-1 6 0 8 2l4 4c6 0 11 3 13 7 2 1 3 3 3 5v2c0 2-2 4-4 4H14c-2 0-4-2-4-4v-9Z" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M27 27c2 3 5 5 8 6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
  </svg>`,
  sandal: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <path d="M12 34c0-3 2-6 5-7l24-6c4-1 8 2 8 6v12c0 4-3 7-7 7H19c-4 0-7-3-7-7v-5Z" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M22 21v9M34 18v10" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
  </svg>`,
  backpack: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <rect x="16" y="22" width="32" height="30" rx="8" stroke="currentColor" stroke-width="2.6"/>
    <path d="M24 22v-4a8 8 0 0 1 16 0v4" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    <rect x="26" y="30" width="12" height="8" rx="2" stroke="currentColor" stroke-width="2.4"/>
    <path d="M24 44h16" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>
  </svg>`,
  sling: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <path d="M14 8c10 3 18 12 21 23" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M18 30c0-3 2-5 5-5h18c3 0 5 2 5 5v3H18v-3Z" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/>
    <rect x="16" y="33" width="32" height="21" rx="9" stroke="currentColor" stroke-width="2.6"/>
    <rect x="29" y="36" width="6" height="5" rx="1.5" fill="currentColor"/>
  </svg>`,
  tote: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <path d="M16 26h32l-3 24a4 4 0 0 1-4 3.5H23A4 4 0 0 1 19 50L16 26Z" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M23 26v-4a9 9 0 0 1 18 0v4" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
  </svg>`,
  handbag: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <path d="M22 25c0-7 4-11 10-11s10 4 10 11" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M16 25h32a3 3 0 0 1 3 3.2l-2.4 19.6A5 5 0 0 1 43.7 52H20.3a5 5 0 0 1-4.9-4.2L13 28.2A3 3 0 0 1 16 25Z" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M17 33h30" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" opacity=".45"/>
    <circle cx="32" cy="33" r="2.5" fill="currentColor"/>
  </svg>`,
  laptopbag: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true" focusable="false">
    <rect x="12" y="20" width="40" height="28" rx="6" stroke="currentColor" stroke-width="2.6"/>
    <path d="M20 20v-3a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v3" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M12 32h40" stroke="currentColor" stroke-width="2.2"/>
    <path d="M28 32v6h8v-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
};

const TESTIMONIALS = [
  {name:'Raka A.',initial:'RA',text:'Sepatunya nyaman banget dipakai seharian, kualitas bahan juga premium. Pengiriman cepat!',rating:5},
  {name:'Nabila S.',initial:'NS',text:'Tas totenya luas dan modelnya kekinian. Cocok buat kuliah dan jalan-jalan santai.',rating:5},
  {name:'Dimas P.',initial:'DP',text:'Sneakers-nya ringan dan grip-nya mantap untuk aktivitas outdoor. Recommended!',rating:4},
  {name:'Citra W.',initial:'CW',text:'Pelayanan ramah, produk sesuai deskripsi. Warna soft blue-nya cantik banget.',rating:5},
  {name:'Fajar T.',initial:'FT',text:'Tas laptopnya proteksinya oke, laptop aman meski dibawa naik motor tiap hari.',rating:5}
];

/* ----------------------------------------------------------------
   2. STATE
---------------------------------------------------------------- */
let state = {
  search:'', category:'all', type:'all', priceRange:'all', minRating:0, sortBy:'newest',
  showAllProducts:false, recentWishlistToggleId:null,
  wishlist: JSON.parse(localStorage.getItem('sb_wishlist')||'[]'),
  cart: JSON.parse(localStorage.getItem('sb_cart')||'[]'),
  activeProduct:null, modalSelectedColor:null, modalSelectedSize:null, modalQty:1, modalGalleryIndex:0,
  selectedPayMethod:'qris'
};

function saveWishlist(){ localStorage.setItem('sb_wishlist', JSON.stringify(state.wishlist)); }
function saveCart(){ localStorage.setItem('sb_cart', JSON.stringify(state.cart)); }
function formatRp(n){ return 'Rp' + Number(n).toLocaleString('id-ID'); }
function findProduct(id){ return PRODUCTS.find(p=>p.id===id); }

/* ----------------------------------------------------------------
   3. TOAST
---------------------------------------------------------------- */
const toastEl = document.getElementById('mainToast');
const bsToast = new bootstrap.Toast(toastEl, {delay:2200});
function showToast(msg, icon='bi-check-circle-fill'){
  document.getElementById('toastMessage').textContent = msg;
  document.querySelector('#toastBody i').className = 'bi ' + icon;
  bsToast.show();
}

/* ----------------------------------------------------------------
   4. IMAGE FALLBACK HELPER
---------------------------------------------------------------- */
function imgTag(src, alt, cls){
  return `<img src="${src}" alt="${alt}" class="${cls||''}" loading="lazy" onerror="this.onerror=null;this.outerHTML='<div class=img-fallback><i class=\\'bi bi-bag-heart\\' style=font-size:2rem></i><span>${alt.replace(/'/g,'')}</span></div>'">`;
}

/* ----------------------------------------------------------------
   5. RENDER: CATEGORIES
---------------------------------------------------------------- */
/* Themed pastel backgrounds cycled across category cards so the
   category section doesn't look flat/plain. Built from the same
   CSS variables already used elsewhere on the site, so it stays
   consistent with the existing color palette. */
const CAT_BG_PALETTE = [
  'linear-gradient(150deg, var(--baby-blue) 0%, rgba(255,255,255,.35) 100%)',
  'linear-gradient(150deg, var(--soft-pink) 0%, rgba(255,255,255,.35) 100%)',
  'linear-gradient(150deg, var(--soft-blue) 0%, rgba(255,255,255,.3) 100%)',
  'linear-gradient(150deg, var(--pink-deep) 0%, rgba(255,255,255,.35) 100%)',
  'linear-gradient(150deg, var(--cream) 0%, var(--baby-blue) 130%)',
  'linear-gradient(150deg, var(--cream) 0%, var(--soft-pink) 130%)'
];

function renderCategoryGrid(){
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = CATEGORIES.map((cat,i)=>{
    const count = PRODUCTS.filter(p=>p.category===cat.name).length;
    const catBgStyle = cat.featured ? '' : `;--cat-bg:${CAT_BG_PALETTE[i % CAT_BG_PALETTE.length]}`;
    return `
    <div class="col-6 col-md-4 col-lg-4">
      <div class="cat-card ${cat.featured?'cat-card-featured':''} reveal-card" data-cat="${cat.name}" role="button" tabindex="0" style="--d:${i*60}ms${catBgStyle}" aria-label="Filter kategori ${cat.name}">
        ${cat.featured ? `<span class="cat-featured-tag"><i class="bi bi-stars" aria-hidden="true"></i> Favorit</span>` : ''}
        <div class="cat-icon">${CATEGORY_ICONS[cat.icon] || ''}</div>
        <div class="cat-name">${cat.name}</div>
        <div class="cat-count">${count} Produk</div>
      </div>
    </div>`;
  }).join('');
  observeReveal(grid);
  grid.querySelectorAll('.cat-card').forEach(el=>{
    el.addEventListener('click', ()=>{
      state.category = el.dataset.cat;
      state.showAllProducts = false;
      syncChipsAndCards();
      document.getElementById('catalog').scrollIntoView({behavior:'smooth'});
      renderProducts();
    });
    el.addEventListener('keypress', e=>{ if(e.key==='Enter') el.click(); });
  });

  // chips inside toolbar
  const chipsWrap = document.getElementById('categoryChips');
  chipsWrap.innerHTML = `<button class="filter-chip active" data-cat="all">Semua Kategori</button>` +
    CATEGORIES.map(cat=>`<button class="filter-chip" data-cat="${cat.name}">${cat.name}</button>`).join('');
  chipsWrap.querySelectorAll('.filter-chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      state.category = chip.dataset.cat;
      state.showAllProducts = false;
      syncChipsAndCards();
      renderProducts();
    });
  });
}

function syncChipsAndCards(){
  document.querySelectorAll('#categoryChips .filter-chip').forEach(c=>c.classList.toggle('active', c.dataset.cat===state.category));
  document.querySelectorAll('#categoryGrid .cat-card').forEach(c=>c.classList.toggle('active', c.dataset.cat===state.category));
}

/* ----------------------------------------------------------------
   6. RENDER: PRODUCT CARD
---------------------------------------------------------------- */
function badgeLabel(b){
  return {new:'Baru', sale:'Diskon', best:'Terlaris', limited:'Terbatas'}[b] || '';
}
function badgeClass(b){
  return {new:'badge-new', sale:'badge-sale', best:'badge-best', limited:'badge-limited'}[b] || '';
}

function productCardHTML(p, index){
  const inWishlist = state.wishlist.includes(p.id);
  const discount = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : 0;
  const swatches = (p.colors||[]).slice(0,4).map(c=>`<span class="swatch-dot" style="background:${c.hex}"></span>`).join('');
  const i = index % 8; // restart stagger rhythm every visual "row batch"
  const delay = i * 70;
  return `
  <div class="col-6 col-md-4 col-lg-3">
    <div class="product-card reveal-card" data-id="${p.id}" style="--d:${delay}ms">
      <div class="product-thumb">
        ${p.badge ? `<span class="product-badge ${badgeClass(p.badge)}">${badgeLabel(p.badge)}</span>` : ''}
        <button class="wishlist-btn ${inWishlist?'active':''} ${state.recentWishlistToggleId===p.id?'pop':''}" aria-label="${inWishlist?'Hapus dari':'Tambah ke'} wishlist ${p.name}" data-action="wishlist" data-id="${p.id}">
          <i class="bi ${inWishlist?'bi-heart-fill':'bi-heart'}"></i>
        </button>
        ${imgTag(p.image, p.name, '')}
        <div class="product-quick-actions">
          <button class="quick-btn" data-action="detail" data-id="${p.id}" aria-label="Lihat detail ${p.name}"><i class="bi bi-eye"></i> Detail</button>
          <button class="quick-btn primary" data-action="quickadd" data-id="${p.id}" aria-label="Tambah ${p.name} ke keranjang"><i class="bi bi-bag-plus"></i> Add</button>
        </div>
      </div>
      <div class="product-body">
        <span class="product-cat-label">${p.category}</span>
        <span class="product-name">${p.name}</span>
        <p class="product-desc">${p.description||''}</p>
        <div class="product-rating"><i class="bi bi-star-fill"></i> ${p.rating.toFixed(1)} <span>(${p.reviews})</span></div>
        <div class="swatch-row">${swatches}</div>
        <div class="product-price-row">
          <span class="price-now">${formatRp(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${formatRp(p.oldPrice)}</span><span class="price-discount">-${discount}%</span>` : ''}
        </div>
        ${p.stock<12 ? `<span class="stock-tag"><i class="bi bi-exclamation-circle"></i> Sisa ${p.stock} stok</span>` : ''}
        <div class="card-action-row">
          <button class="btn-add-cart-card" data-action="cardaddcart" data-id="${p.id}" aria-label="Tambahkan ${p.name} ke keranjang">
            <i class="bi bi-bag-plus"></i> Tambahkan ke Keranjang
          </button>
          <button class="btn-checkout-now" data-action="cardcheckout" data-id="${p.id}" aria-label="Checkout ${p.name} sekarang">
            <i class="bi bi-lightning-charge-fill"></i> Checkout
          </button>
        </div>
      </div>
    </div>
  </div>`;
}

/* ----------------------------------------------------------------
   7. FILTER + SORT + RENDER PRODUCTS
---------------------------------------------------------------- */
function getFilteredProducts(){
  let list = PRODUCTS.slice();

  if(state.search.trim()){
    const q = state.search.trim().toLowerCase();
    list = list.filter(p=>p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
  if(state.category !== 'all'){ list = list.filter(p=>p.category===state.category); }
  if(state.type !== 'all'){ list = list.filter(p=>p.type===state.type); }
  if(state.priceRange !== 'all'){
    const [min,max] = state.priceRange.split('-').map(Number);
    list = list.filter(p=>p.price>=min && p.price<=max);
  }
  if(state.minRating>0){ list = list.filter(p=>p.rating>=state.minRating); }

  switch(state.sortBy){
    case 'price-asc': list.sort((a,b)=>a.price-b.price); break;
    case 'price-desc': list.sort((a,b)=>b.price-a.price); break;
    case 'rating': list.sort((a,b)=>b.rating-a.rating); break;
    default: list.sort((a,b)=>b.createdAt-a.createdAt);
  }
  return list;
}

const PRODUCTS_DEFAULT_LIMIT = 8;

function renderProducts(){
  const list = getFilteredProducts();
  const grid = document.getElementById('productGrid');
  const empty = document.getElementById('catalogEmptyState');
  const showMoreWrap = document.getElementById('showMoreWrap');

  const visible = state.showAllProducts ? list : list.slice(0, PRODUCTS_DEFAULT_LIMIT);
  document.getElementById('resultCount').textContent =
    list.length===0 ? '' : `Menampilkan ${visible.length} dari ${list.length} produk hasil filter`;

  if(list.length===0){
    grid.innerHTML = '';
    empty.classList.remove('d-none');
  } else {
    empty.classList.add('d-none');
    grid.innerHTML = visible.map((p,idx)=> productCardHTML(p, idx)).join('');
  }
  observeReveal(grid);
  attachCardEvents(grid);

  // "Tampilkan Semua" / "Tampilkan Lebih Sedikit" toggle
  if(list.length > PRODUCTS_DEFAULT_LIMIT){
    showMoreWrap.classList.remove('d-none');
    showMoreWrap.innerHTML = `
      <button class="btn-show-more ${state.showAllProducts?'expanded':''}" id="toggleShowAllBtn" aria-expanded="${state.showAllProducts}">
        ${state.showAllProducts ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Semua'}
        <i class="bi ${state.showAllProducts?'bi-arrow-up':'bi-arrow-right'}" aria-hidden="true"></i>
      </button>`;
    document.getElementById('toggleShowAllBtn').addEventListener('click', ()=>{
      state.showAllProducts = !state.showAllProducts;
      renderProducts();
      if(!state.showAllProducts){ document.getElementById('catalog').scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  } else {
    showMoreWrap.classList.add('d-none');
    showMoreWrap.innerHTML = '';
  }
}

function attachCardEvents(scopeEl){
  scopeEl.querySelectorAll('[data-action="wishlist"]').forEach(btn=>{
    btn.addEventListener('click', e=>{ e.stopPropagation(); toggleWishlist(Number(btn.dataset.id)); });
  });
  scopeEl.querySelectorAll('[data-action="detail"]').forEach(btn=>{
    btn.addEventListener('click', e=>{ e.stopPropagation(); openProductModal(Number(btn.dataset.id)); });
  });
  scopeEl.querySelectorAll('[data-action="quickadd"]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const p = findProduct(Number(btn.dataset.id));
      addToCart(p, (p.colors&&p.colors[0])?p.colors[0].name:null, (p.sizes&&p.sizes[0])?p.sizes[0]:null, 1);
    });
  });
  scopeEl.querySelectorAll('[data-action="cardaddcart"]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const p = findProduct(Number(btn.dataset.id));
      addToCart(p, (p.colors&&p.colors[0])?p.colors[0].name:null, (p.sizes&&p.sizes[0])?p.sizes[0]:null, 1);
    });
  });
  scopeEl.querySelectorAll('[data-action="cardcheckout"]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.stopPropagation();
      const p = findProduct(Number(btn.dataset.id));
      addToCart(p, (p.colors&&p.colors[0])?p.colors[0].name:null, (p.sizes&&p.sizes[0])?p.sizes[0]:null, 1);
      openCheckoutFromCard();
    });
  });
  scopeEl.querySelectorAll('.product-card').forEach(card=>{
    card.addEventListener('click', ()=> openProductModal(Number(card.dataset.id)) );
  });
}

/* Jump straight into the existing checkout flow (used by the
   product card "Checkout" button). Reuses the same checkout modal
   and steps that the cart offcanvas "Checkout" button uses. */
function openCheckoutFromCard(){
  renderCheckoutSummary();
  goToCheckoutStep(1);
  bsCheckoutModal.show();
}

/* ----------------------------------------------------------------
   8. RECOMMENDED PRODUCTS
---------------------------------------------------------------- */
function renderRecommended(){
  const list = PRODUCTS.slice().sort((a,b)=>b.rating-a.rating).slice(0,4);
  const grid = document.getElementById('recommendedGrid');
  grid.innerHTML = list.map((p,idx)=> productCardHTML(p, idx)).join('');
  observeReveal(grid);
  attachCardEvents(grid);
}

/* ----------------------------------------------------------------
   9. WISHLIST
---------------------------------------------------------------- */
function toggleWishlist(id){
  const idx = state.wishlist.indexOf(id);
  const p = findProduct(id);
  if(idx>-1){ state.wishlist.splice(idx,1); showToast(`${p.name} dihapus dari wishlist`,'bi-heart'); }
  else { state.wishlist.push(id); showToast(`${p.name} ditambahkan ke wishlist`,'bi-heart-fill'); }
  saveWishlist();
  updateBadges();
  state.recentWishlistToggleId = id;
  renderProducts();
  renderRecommended();
  renderWishlistPanel();
  // clear the "just toggled" flag after the pop animation has had time to play
  setTimeout(()=>{ if(state.recentWishlistToggleId===id) state.recentWishlistToggleId=null; }, 450);
}

function renderWishlistPanel(){
  const body = document.getElementById('wishlistBody');
  if(state.wishlist.length===0){
    body.innerHTML = `<div class="empty-state"><i class="bi bi-heart"></i><h6 class="font-display">Wishlist masih kosong</h6><p>Simpan produk favoritmu di sini.</p></div>`;
    return;
  }
  body.innerHTML = state.wishlist.map(id=>{
    const p = findProduct(id); if(!p) return '';
    return `
    <div class="cart-item-row">
      <div class="cart-item-thumb">${imgTag(p.image,p.name,'')}</div>
      <div class="flex-grow-1">
        <div class="fw-semibold" style="font-size:.88rem;">${p.name}</div>
        <div class="text-soft" style="font-size:.78rem;">${p.category}</div>
        <div class="fw-bold mt-1" style="font-size:.9rem;">${formatRp(p.price)}</div>
      </div>
      <div class="d-flex flex-column gap-2">
        <button class="quick-btn primary" style="padding:6px 10px;font-size:.7rem;" data-action="wl-add" data-id="${p.id}"><i class="bi bi-bag-plus"></i></button>
        <button class="quick-btn" style="padding:6px 10px;font-size:.7rem;" data-action="wl-remove" data-id="${p.id}"><i class="bi bi-trash3"></i></button>
      </div>
    </div>`;
  }).join('');
  body.querySelectorAll('[data-action="wl-add"]').forEach(b=>b.addEventListener('click',()=>{
    const p=findProduct(Number(b.dataset.id));
    addToCart(p,(p.colors&&p.colors[0])?p.colors[0].name:null,(p.sizes&&p.sizes[0])?p.sizes[0]:null,1);
  }));
  body.querySelectorAll('[data-action="wl-remove"]').forEach(b=>b.addEventListener('click',()=>toggleWishlist(Number(b.dataset.id))));
}

/* ----------------------------------------------------------------
   10. CART
---------------------------------------------------------------- */
function addToCart(p, color, size, qty){
  const existing = state.cart.find(i=>i.id===p.id && i.color===color && i.size===size);
  if(existing){ existing.qty += qty; }
  else { state.cart.push({id:p.id, color, size, qty}); }
  saveCart();
  updateBadges();
  renderCartPanel();
  showToast(`${p.name} ditambahkan ke keranjang`,'bi-bag-check-fill');
}

function removeFromCart(index){
  state.cart.splice(index,1);
  saveCart(); updateBadges(); renderCartPanel();
}
function updateCartQty(index, delta){
  state.cart[index].qty = Math.max(1, state.cart[index].qty+delta);
  saveCart(); updateBadges(); renderCartPanel();
}
function clearCart(){
  state.cart = [];
  saveCart(); updateBadges(); renderCartPanel();
  showToast('Keranjang dikosongkan','bi-trash3-fill');
}
function cartSubtotal(){
  return state.cart.reduce((sum,item)=>{
    const p = findProduct(item.id);
    return sum + (p ? p.price*item.qty : 0);
  },0);
}
function renderCartPanel(){
  const body = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');
  if(state.cart.length===0){
    body.innerHTML = `<div class="empty-state"><i class="bi bi-bag"></i><h6 class="font-display">Keranjang masih kosong</h6><p>Yuk mulai belanja produk favoritmu.</p></div>`;
    footer.classList.add('d-none');
    return;
  }
  footer.classList.remove('d-none');
  body.innerHTML = state.cart.map((item,idx)=>{
    const p = findProduct(item.id); if(!p) return '';
    return `
    <div class="cart-item-row">
      <div class="cart-item-thumb">${imgTag(p.image,p.name,'')}</div>
      <div class="flex-grow-1">
        <div class="fw-semibold" style="font-size:.86rem;">${p.name}</div>
        <div class="text-soft" style="font-size:.75rem;">${item.color?item.color:''}${item.size?' • Size '+item.size:''}</div>
        <div class="fw-bold mt-1" style="font-size:.86rem;">${formatRp(p.price)}</div>
        <div class="qty-control mt-1">
          <button data-action="dec" data-idx="${idx}" aria-label="Kurangi jumlah">−</button>
          <span>${item.qty}</span>
          <button data-action="inc" data-idx="${idx}" aria-label="Tambah jumlah">+</button>
        </div>
      </div>
      <button class="quick-btn" style="padding:6px 10px;font-size:.7rem;height:fit-content;" data-action="remove" data-idx="${idx}" aria-label="Hapus dari keranjang"><i class="bi bi-trash3"></i></button>
    </div>`;
  }).join('');

  body.querySelectorAll('[data-action="inc"]').forEach(b=>b.addEventListener('click',()=>updateCartQty(Number(b.dataset.idx),1)));
  body.querySelectorAll('[data-action="dec"]').forEach(b=>b.addEventListener('click',()=>updateCartQty(Number(b.dataset.idx),-1)));
  body.querySelectorAll('[data-action="remove"]').forEach(b=>b.addEventListener('click',()=>removeFromCart(Number(b.dataset.idx))));

  const subtotal = cartSubtotal();
  const shipping = subtotal>0 ? (subtotal>=300000?0:25000) : 0;
  document.getElementById('cartSubtotal').textContent = formatRp(subtotal);
  document.getElementById('cartShipping').textContent = shipping===0?'Gratis':formatRp(shipping);
  document.getElementById('cartTotal').textContent = formatRp(subtotal+shipping);
}

function updateBadges(){
  document.getElementById('wishlistCount').textContent = state.wishlist.length;
  document.getElementById('cartCount').textContent = state.cart.reduce((s,i)=>s+i.qty,0);
}

/* ----------------------------------------------------------------
   11. PRODUCT DETAIL MODAL
---------------------------------------------------------------- */
const productModalEl = document.getElementById('productModal');
const bsProductModal = new bootstrap.Modal(productModalEl);

function openProductModal(id){
  const p = findProduct(id);
  if(!p) return;
  state.activeProduct = p;
  state.modalSelectedColor = p.colors ? p.colors[0].name : null;
  state.modalSelectedSize = p.sizes ? p.sizes[Math.floor(p.sizes.length/2)] : null;
  state.modalQty = 1;
  state.modalGalleryIndex = 0;
  document.getElementById('productModalLabel').textContent = p.name;
  renderProductModalBody();
  bsProductModal.show();
}

function renderProductModalBody(){
  const p = state.activeProduct;
  const inWishlist = state.wishlist.includes(p.id);
  const discount = p.oldPrice ? Math.round((1-p.price/p.oldPrice)*100) : 0;

  const galleryThumbs = p.gallery.map((g,i)=>`<div class="gallery-thumb ${i===state.modalGalleryIndex?'active':''}" data-idx="${i}">${imgTag(g,p.name+' foto '+(i+1),'')}</div>`).join('');

  const colorHTML = p.colors ? `
    <div class="mb-3">
      <div class="fw-semibold mb-2" style="font-size:.88rem;">Pilih Warna: <span class="text-soft" id="selectedColorLabel">${state.modalSelectedColor}</span></div>
      <div class="d-flex gap-2 flex-wrap">
        ${p.colors.map(c=>`<span class="swatch-select ${c.name===state.modalSelectedColor?'selected':''}" style="background:${c.hex}" data-color="${c.name}" role="button" tabindex="0" aria-label="Pilih warna ${c.name}" title="${c.name}"></span>`).join('')}
      </div>
    </div>` : '';

  const sizeHTML = p.sizes ? `
    <div class="mb-3">
      <div class="fw-semibold mb-2" style="font-size:.88rem;">Pilih Ukuran (EU): <span class="text-soft" id="selectedSizeLabel">${state.modalSelectedSize}</span></div>
      <div class="d-flex gap-2 flex-wrap">
        ${p.sizes.map(s=>`<span class="size-select ${s===state.modalSelectedSize?'selected':''}" data-size="${s}" role="button" tabindex="0" aria-label="Pilih ukuran ${s}">${s}</span>`).join('')}
      </div>
    </div>` : '';

  const dimensionHTML = p.dimensions ? `
    <div class="mb-3 d-flex align-items-center gap-2">
      <i class="bi bi-rulers"></i><span class="fw-semibold" style="font-size:.88rem;">Dimensi:</span> <span class="text-soft" style="font-size:.88rem;">${p.dimensions}</span>
    </div>` : '';

  document.getElementById('productModalBody').innerHTML = `
    <div class="row g-4">
      <div class="col-md-6 modal-stagger" style="--d:0ms">
        <div class="gallery-main mb-2" id="galleryMain">${imgTag(p.gallery[state.modalGalleryIndex], p.name, '')}</div>
        <div class="d-flex gap-2" id="galleryThumbs">${galleryThumbs}</div>
      </div>
      <div class="col-md-6 modal-stagger" style="--d:120ms">
        <span class="product-cat-label">${p.category}</span>
        <h4 class="font-display fw-bold mt-1">${p.name}</h4>
        <div class="product-rating mb-2"><i class="bi bi-star-fill"></i> ${p.rating.toFixed(1)} <span>(${p.reviews} ulasan)</span> ${p.badge?`<span class="product-badge ${badgeClass(p.badge)}" style="position:static;margin-left:8px;">${badgeLabel(p.badge)}</span>`:''}</div>
        <div class="d-flex align-items-baseline gap-2 mb-3">
          <span class="price-now fs-4">${formatRp(p.price)}</span>
          ${p.oldPrice ? `<span class="price-old">${formatRp(p.oldPrice)}</span><span class="price-discount">-${discount}%</span>` : ''}
        </div>
        <p class="text-soft" style="font-size:.9rem;">${p.description}</p>

        ${colorHTML}
        ${sizeHTML}
        ${dimensionHTML}

        <div class="mb-3">
          <div class="fw-semibold mb-2" style="font-size:.88rem;">Jumlah:</div>
          <div class="qty-control" style="width:fit-content;">
            <button id="modalQtyDec" aria-label="Kurangi jumlah">−</button>
            <span id="modalQtyDisplay">${state.modalQty}</span>
            <button id="modalQtyInc" aria-label="Tambah jumlah">+</button>
          </div>
          <span class="text-soft ms-2" style="font-size:.8rem;">Stok tersedia: ${p.stock}</span>
        </div>

        <div class="d-flex gap-2 mb-4">
          <button class="btn-dark-custom flex-fill justify-content-center" id="modalAddToCart"><i class="bi bi-bag-plus"></i> Tambah ke Keranjang</button>
          <button class="nav-icon-btn" id="modalWishlistBtn" aria-label="${inWishlist?'Hapus dari':'Tambah ke'} wishlist" style="width:52px;height:52px;">
            <i class="bi ${inWishlist?'bi-heart-fill':'bi-heart'}" style="color:${inWishlist?'#E4759A':'inherit'};"></i>
          </button>
        </div>

        <div class="divider-soft mb-3"></div>
        <div class="row g-2" style="font-size:.85rem;">
          <div class="col-6"><i class="bi bi-layers"></i> <strong>Material:</strong> ${p.material}</div>
          <div class="col-6"><i class="bi bi-hand-index"></i> <strong>Tekstur:</strong> ${p.texture}</div>
          <div class="col-6"><i class="bi bi-emoji-smile"></i> <strong>Kenyamanan:</strong> ${p.comfort}</div>
          <div class="col-6"><i class="bi bi-person-check"></i> <strong>Cocok untuk:</strong> ${p.suitableFor}</div>
        </div>
        <div class="mt-3">
          <strong style="font-size:.85rem;">Fitur Utama:</strong>
          <ul class="mt-2" style="font-size:.85rem;color:var(--dark-soft);">
            ${p.features.map(f=>`<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>`;

  attachModalEvents();
}

function attachModalEvents(){
  const p = state.activeProduct;

  document.querySelectorAll('#productModalBody .gallery-thumb').forEach(t=>{
    t.addEventListener('click', ()=>{
      state.modalGalleryIndex = Number(t.dataset.idx);
      document.getElementById('galleryMain').innerHTML = imgTag(p.gallery[state.modalGalleryIndex], p.name, '');
      document.querySelectorAll('#productModalBody .gallery-thumb').forEach(x=>x.classList.remove('active'));
      t.classList.add('active');
    });
  });

  document.querySelectorAll('#productModalBody .swatch-select').forEach(sw=>{
    sw.addEventListener('click', ()=>{
      state.modalSelectedColor = sw.dataset.color;
      document.querySelectorAll('#productModalBody .swatch-select').forEach(x=>x.classList.remove('selected'));
      sw.classList.add('selected');
      document.getElementById('selectedColorLabel').textContent = state.modalSelectedColor;
    });
  });

  document.querySelectorAll('#productModalBody .size-select').forEach(sz=>{
    sz.addEventListener('click', ()=>{
      state.modalSelectedSize = Number(sz.dataset.size);
      document.querySelectorAll('#productModalBody .size-select').forEach(x=>x.classList.remove('selected'));
      sz.classList.add('selected');
      document.getElementById('selectedSizeLabel').textContent = state.modalSelectedSize;
    });
  });

  const qtyDisplay = document.getElementById('modalQtyDisplay');
  document.getElementById('modalQtyInc').addEventListener('click', ()=>{
    state.modalQty = Math.min(p.stock, state.modalQty+1);
    qtyDisplay.textContent = state.modalQty;
  });
  document.getElementById('modalQtyDec').addEventListener('click', ()=>{
    state.modalQty = Math.max(1, state.modalQty-1);
    qtyDisplay.textContent = state.modalQty;
  });

  document.getElementById('modalAddToCart').addEventListener('click', ()=>{
    addToCart(p, state.modalSelectedColor, state.modalSelectedSize, state.modalQty);
  });
  document.getElementById('modalWishlistBtn').addEventListener('click', ()=>{
    toggleWishlist(p.id);
    renderProductModalBody();
  });
}

/* ----------------------------------------------------------------
   12. COUNTDOWN TIMER (Promo)
---------------------------------------------------------------- */
function initPromoCountdown(){
  let target = Date.now() + (6*3600 + 42*60 + 10)*1000; // simulated fixed countdown
  function tick(){
    let diff = target - Date.now();
    if(diff<=0){ diff = (6*3600+42*60+10)*1000; target = Date.now()+diff; }
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    document.getElementById('cdHours').textContent = String(h).padStart(2,'0');
    document.getElementById('cdMinutes').textContent = String(m).padStart(2,'0');
    document.getElementById('cdSeconds').textContent = String(s).padStart(2,'0');
  }
  tick();
  setInterval(tick,1000);
}

/* ----------------------------------------------------------------
   13. TESTIMONIALS CAROUSEL
---------------------------------------------------------------- */
function renderTestimonials(){
  const inner = document.getElementById('testiCarouselInner');
  inner.innerHTML = TESTIMONIALS.map((t,i)=>`
    <div class="carousel-item ${i===0?'active':''}">
      <div class="testi-card">
        <div class="testi-avatar">${t.initial}</div>
        <div class="text-warning mb-2" aria-hidden="true">${'<i class="bi bi-star-fill"></i>'.repeat(t.rating)}${'<i class="bi bi-star"></i>'.repeat(5-t.rating)}</div>
        <p style="font-size:1rem;color:var(--dark-soft);">"${t.text}"</p>
        <div class="fw-bold">${t.name}</div>
        <div class="text-soft" style="font-size:.8rem;">Pelanggan Terverifikasi</div>
      </div>
    </div>`).join('');
}

/* ----------------------------------------------------------------
   14. CHECKOUT FLOW
---------------------------------------------------------------- */
let paymentCountdownInterval = null;

function renderCheckoutSummary(){
  const wrap = document.getElementById('checkoutOrderSummary');
  wrap.innerHTML = state.cart.map(item=>{
    const p = findProduct(item.id); if(!p) return '';
    return `<div class="d-flex justify-content-between mb-2" style="font-size:.87rem;">
      <span>${p.name} ${item.color?`(${item.color}${item.size?', '+item.size:''})`:''} × ${item.qty}</span>
      <span class="fw-semibold">${formatRp(p.price*item.qty)}</span>
    </div>`;
  }).join('');
  const subtotal = cartSubtotal();
  const shipping = subtotal>=300000?0:25000;
  document.getElementById('checkoutTotalDisplay').textContent = formatRp(subtotal+shipping);
}

const bsCheckoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));

document.getElementById('checkoutBtn').addEventListener('click', ()=>{
  goToCheckoutStep(1);
  renderCheckoutSummary();
});

function goToCheckoutStep(n){
  [1,2,3].forEach(i=>{
    document.getElementById('checkoutStep'+i).classList.toggle('d-none', i!==n);
    const ind = document.getElementById('stepIndicator'+i);
    ind.classList.remove('active','done');
    if(i<n) ind.classList.add('done');
    if(i===n) ind.classList.add('active');
  });
}

document.getElementById('checkoutForm').addEventListener('submit', function(e){
  e.preventDefault();
  if(state.cart.length===0){ showToast('Keranjang masih kosong','bi-exclamation-circle-fill'); return; }
  goToCheckoutStep(2);
  renderPaymentDetail('qris');
});

document.querySelectorAll('.pay-method').forEach(el=>{
  el.addEventListener('click', ()=>{
    document.querySelectorAll('.pay-method').forEach(x=>x.classList.remove('selected'));
    el.classList.add('selected');
    el.querySelector('input[type=radio]').checked = true;
    state.selectedPayMethod = el.dataset.method;
    renderPaymentDetail(el.dataset.method);
  });
});
document.querySelector('.pay-method[data-method="qris"]').classList.add('selected');

function renderPaymentDetail(method){
  clearInterval(paymentCountdownInterval);
  const area = document.getElementById('paymentDetailArea');
  const subtotal = cartSubtotal();
  const shipping = subtotal>=300000?0:25000;
  const total = subtotal+shipping;

  if(method==='qris'){
    area.innerHTML = `
      <div class="qris-box">
        <div class="qris-code">
          ${generateQrisSvg()}
        </div>
        <p class="fw-bold mt-3 mb-1">Scan QRIS untuk membayar</p>
        <p class="text-soft" style="font-size:.85rem;">Total: <strong>${formatRp(total)}</strong></p>
        <p class="text-soft" style="font-size:.8rem;">Batas waktu pembayaran: <span class="fw-bold" id="payCountdown">15:00</span></p>
        <p class="text-soft" style="font-size:.75rem;">*Ini adalah simulasi QRIS untuk keperluan demo, bukan payment gateway sungguhan.</p>
      </div>`;
    startPaymentCountdown();
  } else if(method==='transfer'){
    area.innerHTML = `
      <div class="qris-box text-start">
        <p class="fw-bold mb-2"><i class="bi bi-bank"></i> Transfer ke Rekening Berikut</p>
        <div class="mb-2" style="font-size:.9rem;">Bank BCA — <strong>1234567890</strong><br>a.n. PT Step Bag Indonesia</div>
        <div class="mb-2" style="font-size:.9rem;">Total Transfer: <strong>${formatRp(total)}</strong></div>
        <p class="text-soft" style="font-size:.8rem;">Batas waktu pembayaran: <span class="fw-bold" id="payCountdown">15:00</span></p>
        <p class="text-soft" style="font-size:.75rem;">*Simulasi transfer bank untuk keperluan demo.</p>
      </div>`;
    startPaymentCountdown();
  } else if(EWALLET_INFO[method]){
    const info = EWALLET_INFO[method];
    area.innerHTML = `
      <div class="qris-box text-start">
        <p class="fw-bold mb-2"><i class="bi bi-wallet2"></i> Bayar dengan ${info.label}</p>
        <div class="mb-2" style="font-size:.9rem;">Nomor ${info.label} — <strong>${info.number}</strong><br>a.n. ${info.owner}</div>
        <div class="mb-2" style="font-size:.9rem;">Total Pembayaran: <strong>${formatRp(total)}</strong></div>
        <p class="text-soft" style="font-size:.8rem;">Batas waktu pembayaran: <span class="fw-bold" id="payCountdown">15:00</span></p>
        <p class="text-soft" style="font-size:.75rem;">*Nomor ${info.label} di atas adalah placeholder untuk keperluan demo. Ganti dengan nomor ${info.label} asli sebelum digunakan.</p>
      </div>`;
    startPaymentCountdown();
  }
}

/* Placeholder destination numbers for each e-wallet — replace these
   with real, verified account numbers before going live. */
const EWALLET_INFO = {
  dana:{label:'DANA', number:'0812-3456-7890 (placeholder)', owner:'STEP & BAG Official'},
  ovo:{label:'OVO', number:'0812-3456-7890 (placeholder)', owner:'STEP & BAG Official'},
  gopay:{label:'GoPay', number:'0812-3456-7890 (placeholder)', owner:'STEP & BAG Official'},
  shopeepay:{label:'ShopeePay', number:'0812-3456-7890 (placeholder)', owner:'STEP & BAG Official'}
};

function generateQrisSvg(){
  // deterministic pseudo-QR pattern for visual simulation only
  let cells = '';
  let seed = 42;
  function rnd(){ seed = (seed*9301+49297)%233280; return seed/233280; }
  for(let y=0;y<18;y++){
    for(let x=0;x<18;x++){
      if(rnd()>0.55){ cells += `<rect x="${x*11}" y="${y*11}" width="10" height="10" fill="#1E2A38"/>`; }
    }
  }
  return `<svg viewBox="0 0 198 198" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" role="img" aria-label="Kode QRIS simulasi pembayaran">
    <rect width="198" height="198" fill="#ffffff"/>
    ${cells}
    <rect x="0" y="0" width="40" height="40" fill="none" stroke="#1E2A38" stroke-width="6"/>
    <rect x="158" y="0" width="40" height="40" fill="none" stroke="#1E2A38" stroke-width="6"/>
    <rect x="0" y="158" width="40" height="40" fill="none" stroke="#1E2A38" stroke-width="6"/>
  </svg>`;
}

function startPaymentCountdown(){
  let remain = 15*60;
  const el = document.getElementById('payCountdown');
  clearInterval(paymentCountdownInterval);
  paymentCountdownInterval = setInterval(()=>{
    remain--;
    if(remain<=0){ remain = 15*60; }
    const m = Math.floor(remain/60), s = remain%60;
    if(el) el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  },1000);
}

document.getElementById('backToStep1').addEventListener('click', ()=> goToCheckoutStep(1));

document.getElementById('confirmPaymentBtn').addEventListener('click', ()=>{
  clearInterval(paymentCountdownInterval);
  const orderNum = 'SB-' + Date.now().toString().slice(-8);
  document.getElementById('orderNumberDisplay').textContent = orderNum;
  goToCheckoutStep(3);
  state.cart = [];
  saveCart(); updateBadges(); renderCartPanel();
  showToast('Pembayaran berhasil dikonfirmasi!','bi-check-circle-fill');
});

document.getElementById('finishOrderBtn').addEventListener('click', ()=>{
  document.getElementById('checkoutForm').reset();
  goToCheckoutStep(1);
  const offcanvasEl = document.getElementById('cartOffcanvas');
  const oc = bootstrap.Offcanvas.getInstance(offcanvasEl);
  if(oc) oc.hide();
});

/* Reset checkout modal state each time it's opened fresh */
document.getElementById('checkoutModal').addEventListener('show.bs.modal', ()=>{
  if(state.cart.length>0){ goToCheckoutStep(1); renderCheckoutSummary(); }
});

/* ----------------------------------------------------------------
   15. FORMS: Contact & Newsletter
---------------------------------------------------------------- */
document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  showToast('Pesan berhasil dikirim, kami akan segera membalas!','bi-send-check-fill');
  this.reset();
});
document.getElementById('newsletterForm').addEventListener('submit', function(e){
  e.preventDefault();
  showToast('Berhasil berlangganan newsletter STEP & BAG!','bi-envelope-check-fill');
  this.reset();
});

/* ----------------------------------------------------------------
   16. SEARCH (navbar, mobile, catalog — all synced)
---------------------------------------------------------------- */
function bindSearchInput(el){
  el.addEventListener('input', ()=>{
    state.search = el.value;
    state.showAllProducts = false;
    document.querySelectorAll('#navSearchInput,#mobileSearchInput,#catalogSearchInput').forEach(other=>{
      if(other!==el) other.value = el.value;
    });
    renderProducts();
    if(el.value.trim()){ document.getElementById('catalog').scrollIntoView({behavior:'smooth'}); }
  });
}
['navSearchInput','mobileSearchInput','catalogSearchInput'].forEach(id=>bindSearchInput(document.getElementById(id)));

document.getElementById('mobileSearchBtn').addEventListener('click', ()=>{
  document.getElementById('mobileSearchBar').classList.toggle('d-none');
});

/* ----------------------------------------------------------------
   17. FILTER / SORT CONTROLS
---------------------------------------------------------------- */
document.getElementById('filterType').addEventListener('change', e=>{ state.type=e.target.value; state.showAllProducts=false; renderProducts(); });
document.getElementById('filterPrice').addEventListener('change', e=>{ state.priceRange=e.target.value; state.showAllProducts=false; renderProducts(); });
document.getElementById('filterRating').addEventListener('change', e=>{ state.minRating=Number(e.target.value); state.showAllProducts=false; renderProducts(); });
document.getElementById('sortBy').addEventListener('change', e=>{ state.sortBy=e.target.value; renderProducts(); });
document.getElementById('resetFilters').addEventListener('click', ()=>{
  state = {...state, search:'', category:'all', type:'all', priceRange:'all', minRating:0, sortBy:'newest', showAllProducts:false};
  document.getElementById('filterType').value='all';
  document.getElementById('filterPrice').value='all';
  document.getElementById('filterRating').value='0';
  document.getElementById('sortBy').value='newest';
  document.querySelectorAll('#navSearchInput,#mobileSearchInput,#catalogSearchInput').forEach(i=>i.value='');
  syncChipsAndCards();
  renderProducts();
  showToast('Filter direset','bi-arrow-counterclockwise');
});

/* ----------------------------------------------------------------
   18. NAVBAR SCROLL + BACK TO TOP
---------------------------------------------------------------- */
window.addEventListener('scroll', ()=>{
  const nav = document.getElementById('mainNavbar');
  nav.classList.toggle('scrolled', window.scrollY>30);
  document.getElementById('backToTopBtn').classList.toggle('show', window.scrollY>500);
});
document.getElementById('backToTopBtn').addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

/* Close navbar collapse on link click (mobile) */
document.querySelectorAll('.nav-link-custom').forEach(link=>{
  link.addEventListener('click', ()=>{
    const nav = document.getElementById('navMenu');
    if(nav.classList.contains('show')) new bootstrap.Collapse(nav).hide();
  });
});

/* ----------------------------------------------------------------
   19. SCROLL REVEAL
   Single shared observer. `observeReveal(root)` is called after
   every dynamic render (category grid, product grid, recommended
   grid) so newly injected cards get their entrance animation too,
   instead of just popping in with class "in" pre-applied.
---------------------------------------------------------------- */
const REVEAL_SELECTOR = '.reveal,.reveal-up,.reveal-fade,.reveal-scale,.reveal-card,.reveal-left,.reveal-right';
let revealObserver = null;

function initScrollReveal(){
  revealObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('in'); revealObserver.unobserve(entry.target); }
    });
  }, {threshold:0.12});
  observeReveal(document);
}

function observeReveal(root){
  if(!revealObserver) return;
  root.querySelectorAll(REVEAL_SELECTOR).forEach(el=>{
    if(!el.classList.contains('in')) revealObserver.observe(el);
  });
}

/* ----------------------------------------------------------------
   20. INIT
---------------------------------------------------------------- */
function init(){
  const heroCountEl = document.getElementById('heroProductCount');
  if(heroCountEl) heroCountEl.textContent = PRODUCTS.length + '+';

  renderCategoryGrid();
  renderProducts();
  renderRecommended();
  renderWishlistPanel();
  renderCartPanel();
  renderTestimonials();
  initPromoCountdown();
  updateBadges();
  initScrollReveal();

  window.addEventListener('load', ()=>{
    setTimeout(()=>{ document.getElementById('loadingScreen').classList.add('hide'); }, 500);
  });
  // fallback in case load event already fired
  setTimeout(()=>{ document.getElementById('loadingScreen').classList.add('hide'); }, 2500);
}

document.addEventListener('DOMContentLoaded', init);

})();