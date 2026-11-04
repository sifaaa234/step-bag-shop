/* ================================================================
   STEP & BAG — DAFTAR FOTO (EDIT FILE INI SAJA UNTUK GANTI FOTO)
   ----------------------------------------------------------------
   CARA PAKAI:
   1. Taruh foto kamu di folder:  images/produk/
   2. Tulis nama filenya di bawah ini (sesuai id produk).
        utama : foto utama (muncul di katalog & keranjang)
        galeri: daftar foto di popup detail produk (boleh 1-5 foto)
   3. Kalau dikosongkan ('' atau []), otomatis tetap pakai gambar
      placeholder lama. Jadi aman, bisa diisi sebagian-sebagian.
   Contoh:
        1: { utama:'images/produk/urban-stride-1.jpg',
             galeri:['images/produk/urban-stride-1.jpg',
                     'images/produk/urban-stride-2.jpg',
                     'images/produk/urban-stride-3.jpg'] },
   Kalau galeri dikosongkan tapi utama diisi, galeri otomatis
   memakai foto utama saja.
================================================================ */

/* ---- Foto besar di halaman (opsional, kosongkan kalau tidak diganti) ---- */
window.FOTO_LAIN = {
  hero : '',   // foto sepatu besar di bagian Beranda  (contoh: 'images/hero.jpg')
  about: ''    // foto di bagian Tentang Kami          (contoh: 'images/about.jpg')
};

/* ---- Foto per produk (urut sesuai id) ---- */
window.FOTO_PRODUK = {
  1: { utama:'images/produk/urban-softblue.jpg', galeri:['images/produk/urban-softblue.jpg','images/produk/urban-cream.jpg','images/produk/urban-nevy.jpg' ] },     // Urban Stride Sneakers  [Sneakers]
  2: { utama:'images/produk/cloud-grey.jpg', galeri:['images/produk/cloud-grey.jpg', 'images/produk/cloud-white.jpg', 'images/produk/cloud-black.jpg'] },     // Cloud Step Sneakers  [Sneakers]
  3: { utama:'images/produk/aerox-nevy (2).jpg', galeri:['images/produk/aerox-nevy (2).jpg', 'images/produk/aerox-blue.jpg', 'images/produk/aerox-cream.jpg'] },     // AeroFlex Runner  [Running Shoes]
  4: { utama:'images/produk/max-pink.jpg', galeri:['images/produk/max-pink.jpg', 'images/produk/max-charcoal.jpg','images/produk/max-orange.jpg'] },     // SprintMax Pro  [Running Shoes]
  5: { utama:'images/produk/loaf-olive.jpg', galeri:['images/produk/loaf-olive.jpg', 'images/produk/loaf-sand.jpg', 'images/produk/loaf-black.jpg'] },     // Weekend Loafer  [Casual Shoes]
  6: { utama:'images/produk/canvas-grey.jpg', galeri:['images/produk/canvas-grey.jpg', 'images/produk/canvas-black.jpg', 'images/produk/canvas-white.jpg'] },     // Canvas Comfort  [Casual Shoes]
  7: { utama:'images/produk/coas-cream.jpg', galeri:['images/produk/coas-cream.jpg', 'images/produk/coas-nevy.jpg', 'images/produk/coas-blue.jpg'] },     // Coastal Slide Sandal  [Sandal]
  8: { utama:'images/produk/trail-olive.jpg', galeri:['images/produk/trail-olive.jpg','images/produk/trail-sand.jpg', 'images/produk/trail-black.jpg'] },     // Trail Strap Sandal  [Sandal]
  9: { utama:'images/produk/pack-pink.jpg', galeri:['images/produk/pack-pink.jpg', 'images/produk/pack-charcoal.jpg', 'images/produk/pack white.jpg'] },     // CityPack Backpack  [Backpack]
  10: { utama:'images/produk/voy-gray.jpg', galeri:['images/produk/voy-gray.jpg', 'images/produk/voy-white.jpg', 'images/produk/voy-black.jpg'] },    // Voyager Daypack  [Backpack]
  11: { utama:'images/produk/sling-blue.jpg', galeri:['images/produk/sling-blue.jpg', 'images/produk/sling-nevy.jpg', 'images/produk/sling-cream.jpg'] },    // Compact Sling  [Sling Bag]
  12: { utama:'images/produk/crossbody-pink_11zon.jpg', galeri:['images/produk/crossbody-pink_11zon.jpg', 'images/produk/crossbody-gray_11zon.jpg', 'images/produk/crossbody-white_11zon.jpg'] },    // Urban Crossbody Sling  [Sling Bag]
  13: { utama:'images/produk/every-black (1).jpg', galeri:['images/produk/every-black (1).jpg', 'images/produk/every-olive (1).jpg','images/produk/every-sand.jpg'] },    // Everyday Canvas Tote  [Tote Bag]
  14: { utama:'images/produk/week-black_11zon.jpg', galeri:['images/produk/week-black_11zon.jpg', 'images/produk/week-white_11zon.jpg', 'images/produk/week-gray_11zon.jpg'] },    // Weekend Leather Tote  [Tote Bag]
  15: { utama:'images/produk/mini-white_11zon.jpg', galeri:['images/produk/mini-white_11zon.jpg', 'images/produk/mini-pink_11zon.jpg', 'images/produk/mini-charcoal_11zon.jpg'] },    // Mini Structured Handbag  [Hand Bag]
  16: { utama:'images/produk/chic-blue_11zon.jpg', galeri:['images/produk/chic-blue_11zon.jpg', 'images/produk/chic-cream_11zon.jpg', 'images/produk/chic-nevy_11zon.jpg'] },    // Chic Clutch Handbag  [Hand Bag]
  17: { utama:'images/produk/tech-gray_11zon.jpg', galeri:['images/produk/tech-gray_11zon.jpg', 'images/produk/tech-white_11zon.jpg', 'images/produk/tech-black_11zon.jpg'] },    // TechCarry Laptop Bag  [Laptop Bag]
  18: { utama:'images/produk/pro-pink.jpg', galeri:['images/produk/pro-pink.jpg', 'images/produk/pro-charcoal.jpg', 'images/produk/pro-white.jpg'] },    // ProSleeve Laptop Tote  [Laptop Bag]
  20: { utama:'images/produk/curve-pink.jpg', galeri:['images/produk/curve-pink.jpg', 'images/produk/curve-white.jpg', 'images/produk/curve-charcoal.jpg'] },    // Metro Curve Tote  [Tote Bag]
  21: { utama:'images/produk/sky-nevy.jpg', galeri:['images/produk/sky-nevy.jpg', 'images/produk/sky-blue.jpg', 'images/produk/sky-cream.jpg'] },    // Skyline Court Sneakers  [Sneakers]
  22: { utama:'images/produk/ImageToStl.com_pulse-grey.jpg', galeri:['images/produk/ImageToStl.com_pulse-grey.jpg', 'images/produk/ImageToStl.com_pulse+white.jpg', 'images/produk/ImageToStl.com_pulse-black.jpg'] },    // Pulse Street Sneakers  [Sneakers]
  23: { utama:'images/produk/ImageToStl.com_velo-white.jpg', galeri:['images/produk/ImageToStl.com_velo-white.jpg', 'images/produk/velo-pink.jpg', 'images/produk/velo-charcoal.jpg'] },    // Velocity Runner  [Running Shoes]
  24: { utama:'images/produk/ImageToStl.com_endu-sand.jpg', galeri:['images/produk/ImageToStl.com_endu-sand.jpg', 'images/produk/ImageToStl.com_endu-olive.jpg', 'images/produk/ImageToStl.com_endu-black.jpg'] },    // EnduroFlex Runner  [Running Shoes]
  25: { utama:'images/produk/ImageToStl.com_heri-olive.jpg', galeri:['images/produk/ImageToStl.com_heri-olive.jpg', 'images/produk/ImageToStl.com_heri-sand.jpg', 'images/produk/ImageToStl.com_heri-black.jpg'] },    // Heritage Slip-On  [Casual Shoes]
  26: { utama:'images/produk/ImageToStl.com_daily-white.jpg', galeri:['images/produk/ImageToStl.com_daily-white.jpg', 'images/produk/ImageToStl.com_daily-gray.jpg', 'images/produk/ImageToStl.com_daily-black.jpg'] },    // Daily Comfort Casual  [Casual Shoes]
  27: { utama:'images/produk/ImageToStl.com_breeze-blue.jpg', galeri:['images/produk/ImageToStl.com_breeze-blue.jpg', 'images/produk/ImageToStl.com_breeze-cream.jpg', 'images/produk/ImageToStl.com_breeze-navy.jpg'] },    // Breeze Comfort Sandal  [Sandal]
  28: { utama:'images/produk/ImageToStl.com_terra-olive.jpg', galeri:['images/produk/ImageToStl.com_terra-olive.jpg', 'images/produk/ImageToStl.com_terra-sand.jpg', 'images/produk/ImageToStl.com_terra-black.jpg'] },    // Terra Walk Sandal  [Sandal]
  29: { utama:'images/produk/ImageToStl.com_nomad-gray.jpg', galeri:['images/produk/ImageToStl.com_nomad-gray.jpg', 'images/produk/ImageToStl.com_nomad-white.jpg', 'images/produk/ImageToStl.com_nomad-black.jpg'] },    // Nomad Travel Backpack  [Backpack]
  30: { utama:'images/produk/ImageToStl.com_camp-pink.jpg', galeri:['images/produk/ImageToStl.com_camp-pink.jpg', 'images/produk/ImageToStl.com_camp-white.jpg', 'images/produk/ImageToStl.com_camp-charcoal.jpg'] },    // Campus Ready Backpack  [Backpack]
  31: { utama:'images/produk/ImageToStl.com_met-blue.jpg', galeri:['images/produk/ImageToStl.com_met-blue.jpg', 'images/produk/ImageToStl.com_met-cream.jpg', 'images/produk/ImageToStl.com_met-nevy.jpg'] },    // Metro Mini Sling  [Sling Bag]
  32: { utama:'images/produk/ImageToStl.com_act-sand.jpg', galeri:['images/produk/ImageToStl.com_act-sand.jpg', 'images/produk/ImageToStl.com_act-olive.jpg', 'images/produk/ImageToStl.com_act-black.jpg'] },    // Active Sport Sling  [Sling Bag]
  33: { utama:'images/produk/ImageToStl.com_sun-sand.jpg', galeri:['images/produk/ImageToStl.com_sun-sand.jpg', 'images/produk/ImageToStl.com_sun-olive.jpg', 'images/produk/ImageToStl.com_sun-black.jpg'] },    // Sunday Market Tote  [Tote Bag]
  34: { utama:'images/produk/ImageToStl.com_ev-white.jpg', galeri:['images/produk/ImageToStl.com_ev-white.jpg', 'images/produk/ImageToStl.com_ev-gray.jpg', 'images/produk/ImageToStl.com_ev-black.jpg'] },    // Evening Elegance Handbag  [Hand Bag]
  35: { utama:'images/produk/ImageToStl.com_struc-pink.jpg', galeri:['images/produk/ImageToStl.com_struc-pink.jpg', 'images/produk/ImageToStl.com_struc-gray.jpg', 'images/produk/ImageToStl.com_struc-white.jpg'] },    // Structured City Handbag  [Hand Bag]
  36: { utama:'images/produk/ImageToStl.com_slim-cream.jpg', galeri:['images/produk/ImageToStl.com_slim-cream.jpg', 'images/produk/ImageToStl.com_slim-blue.jpg', 'images/produk/ImageToStl.com_slim-navy.jpg'] },    // Slim Commuter Laptop Bag  [Laptop Bag]
  37: { utama:'images/produk/ImageToStl.com_ex-black.jpg', galeri:['images/produk/ImageToStl.com_ex-black.jpg', 'images/produk/ImageToStl.com_ex-white.jpg', 'images/produk/ImageToStl.com_ex-gray.jpg'] },    // Executive Laptop Briefcase  [Laptop Bag]
};
