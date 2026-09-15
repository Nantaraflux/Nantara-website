# Audit Nantara AI — versi 7

Versi ini menyalin website asli tanpa mengubah layout, warna, tipografi, animasi, atau susunan konten. File asli tidak diubah. Tambahan UI terbatas pada permintaan checklist: cookie banner, tombol demo mobile, kontak email, dan pesan validasi.

| Poin | Hasil |
|---|---|
| 1. Custom 404 | Ditambahkan 404.html. GitHub Pages dapat memakainya saat versi ini dipublikasikan. |
| 2. Sitemap | Ditambahkan sitemap.xml untuk homepage, About, Privacy Policy, Terms. Versi eksperimen tidak dimasukkan. |
| 3. Loading states | Demo chat sudah punya indikator typing dan tombol disabled; ditambah aria-busy untuk aksesibilitas. |
| 4. Compressed images | PNG logo dan favicon dioptimalkan bila hasil lebih kecil; decoding async ditambahkan. |
| 5. Analytics | Integrasi GA4 dibuat, tetapi BELUM AKTIF. Isi ga4Id pada site-config.js menggunakan ID asli. Hanya dimuat setelah consent analytics. |
| 6. Favicon | Sudah ada, dipertahankan. |
| 7. Meta title | Empat halaman publik sudah memiliki judul berbeda, dipertahankan. Halaman utility punya judul baru. |
| 8. Meta description | Deskripsi ditambahkan ke halaman yang kurang; duplikasi pada homepage dihapus. |
| 9. CTA above fold | Sudah ada Book a Demo di hero, dipertahankan. |
| 10. Robots | Ditambahkan robots.txt. |
| 11. Open Graph | Dibuat social-card.png ukuran 1200×630 dan URL absolut di metadata. |
| 12. Alt text | Gambar halaman publik sudah memiliki alt; alt kosong pada tombol logo diperjelas. |
| 13. Mobile breakpoints | Sudah ada banyak breakpoint, dipertahankan. |
| 14. Sticky mobile CTA | Tombol tambahan dihapus sesuai permintaan pemilik; CTA bawaan dipertahankan. |
| 15. Form errors | Chat sudah punya error koneksi; ditambah validasi pesan kosong serta label aksesibilitas. |
| 16. Thank you | Ditambahkan thank-you.html. Redirect setelah booking perlu dikonfigurasi di layanan booking; halaman ini tidak mengklaim pesan terkirim. |
| 17. Privacy Policy | Sudah ada, isi dipertahankan. Tinjau kebijakan agar cocok dengan penyedia analytics yang benar-benar diaktifkan. |
| 18. Terms | Sudah ada Terms of Service, isi dipertahankan. |
| 19. Cookie banner | Ditambahkan pilihan essential/analytics dan tombol untuk membuka ulang preferensi. |
| 20. Real contact address | Email nantaraai@gmail.com ditemukan di kebijakan asli dan ditampilkan. ALAMAT FISIK belum tersedia; tidak dikarang. |

## Sebelum publikasi

## Bahasa website

Toggle English / Indonesia tersedia di atas halaman. Pilihan disimpan di perangkat dan diterapkan pada homepage, About, Privacy Policy, Terms, halaman terima kasih, 404, serta panduan. Terjemahan juga mengikuti konten simulasi chat. Nama bisnis, merek alat, alamat email, nominal dan referensi transaksi dipertahankan. Halaman eksperimen lama mendapat toggle yang sama, tetapi teks khusus yang tidak digunakan di halaman utama belum seluruhnya memiliki padanan.

- Konfirmasi domain produksi. Canonical, OG, sitemap dan robots memakai asumsi https://nantaraflux.github.io/Nantara-website/ berdasarkan repository, bukan domain yang sudah diverifikasi.
- Isi ID GA4 asli di site-config.js jika analytics ingin diaktifkan.
- Berikan alamat bisnis fisik yang memang boleh dipublikasikan.
- Chat sekarang menggunakan empat topik dengan jawaban template tanpa AI/API key. Teks bebas mendapat arahan konsultasi WhatsApp. Link langsung dari pemilik: https://wa.me/message/7DRPFHKTWGPDE1, dikonfigurasi pada site-config.js.
- Konfirmasi bahwa link Calendly yang sudah ada memang aktif dan milik bisnis Anda.
- Upload seluruh isi folder versi 7 sebagai satu website; membuka file lokal tidak menguji respons HTTP 404 atau indexing search engine.

Tidak ada publikasi atau push ke GitHub yang dilakukan. Audit mencakup empat halaman publik utama; file eksperimen disalin sebagai arsip tanpa perubahan.
