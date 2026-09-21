(() => {
  const explorer = document.querySelector('[data-vertical-explorer]');
  if (!explorer) return;

  const copy = {
    fmcg: {
      label: { en: 'FMCG & grocery', id: 'FMCG & sembako' },
      headline: { en: 'Turn mixed WhatsApp orders into one clean sales-order draft.', id: 'Ubah order WhatsApp yang campur aduk menjadi satu draft sales order yang rapi.' },
      problem: { en: 'Customers use nicknames, different pack sizes and old price lists. Admins retype every line before the warehouse can work.', id: 'Pelanggan memakai nama barang, ukuran kemasan, dan daftar harga yang berbeda. Admin harus mengetik ulang sebelum gudang dapat bekerja.' },
      inputs: { en: ['WhatsApp text & voice notes', 'PO files', 'Product catalogue'], id: ['Chat & voice note WhatsApp', 'File PO', 'Katalog produk'] },
      build: { en: 'Match products, pack sizes and customer pricing.', id: 'Mencocokkan produk, ukuran kemasan, dan harga pelanggan.' },
      decision: { en: 'Confirm stock, credit limit and substitutions.', id: 'Konfirmasi stok, limit kredit, dan barang pengganti.' },
      output: { en: 'A review-ready sales-order draft.', id: 'Draft sales order yang siap diperiksa.' }
    },
    building: {
      label: { en: 'Building materials', id: 'Bahan bangunan' },
      headline: { en: 'Quote heavy, unit-based orders without losing margin.', id: 'Buat penawaran order berbasis unit dan berat tanpa kehilangan margin.' },
      problem: { en: 'One request can mix pieces, metres, kilograms and project pricing while freight changes by destination.', id: 'Satu permintaan bisa mencampur satuan batang, meter, kilogram, dan harga proyek dengan ongkir berbeda tiap tujuan.' },
      inputs: { en: ['Material list', 'Project price list', 'Delivery address'], id: ['Daftar material', 'Harga proyek', 'Alamat pengiriman'] },
      build: { en: 'Normalize units, calculate quantities and prepare pricing.', id: 'Menormalkan satuan, menghitung kuantitas, dan menyiapkan harga.' },
      decision: { en: 'Approve freight, discount and payment terms.', id: 'Setujui ongkir, diskon, dan termin pembayaran.' },
      output: { en: 'Consistent quotation and order draft.', id: 'Penawaran dan draft order yang konsisten.' }
    },
    auto: {
      label: { en: 'Automotive parts', id: 'Suku cadang otomotif' },
      headline: { en: 'Find the right part before the wrong item ships.', id: 'Temukan part yang tepat sebelum barang yang salah terkirim.' },
      problem: { en: 'Part numbers, vehicle models and customer nicknames rarely match the catalogue exactly.', id: 'Nomor part, model kendaraan, dan istilah pelanggan sering tidak sama dengan katalog.' },
      inputs: { en: ['Part number or photo', 'Vehicle details', 'Parts catalogue'], id: ['Nomor part atau foto', 'Detail kendaraan', 'Katalog part'] },
      build: { en: 'Search compatible parts and flag possible alternatives.', id: 'Mencari part kompatibel dan menandai alternatif yang mungkin.' },
      decision: { en: 'Validate compatibility and warranty conditions.', id: 'Validasi kecocokan dan ketentuan garansi.' },
      output: { en: 'A checked parts recommendation and quote.', id: 'Rekomendasi part dan penawaran yang sudah diperiksa.' }
    },
    food: {
      label: { en: 'Food & beverage', id: 'Makanan & minuman' },
      headline: { en: 'Keep fast-moving orders aligned with shelf life and delivery windows.', id: 'Jaga order cepat tetap sesuai umur simpan dan jadwal kirim.' },
      problem: { en: 'Variants, case sizes, expiry rules and delivery windows make repeat orders easy to misread.', id: 'Varian, isi karton, aturan kedaluwarsa, dan jadwal kirim membuat repeat order mudah salah dibaca.' },
      inputs: { en: ['Customer order', 'Batch & expiry data', 'Route schedule'], id: ['Order pelanggan', 'Data batch & kedaluwarsa', 'Jadwal rute'] },
      build: { en: 'Structure SKUs, quantities and delivery requirements.', id: 'Menyusun SKU, kuantitas, dan kebutuhan pengiriman.' },
      decision: { en: 'Approve batch allocation and cold-chain handling.', id: 'Setujui alokasi batch dan penanganan rantai dingin.' },
      output: { en: 'A fulfilment-ready order draft.', id: 'Draft order yang siap dipenuhi.' }
    },
    packaging: {
      label: { en: 'Packaging', id: 'Kemasan' },
      headline: { en: 'Translate customer descriptions into production-ready specifications.', id: 'Ubah deskripsi pelanggan menjadi spesifikasi yang siap diproduksi.' },
      problem: { en: 'Dimensions, materials, print finishes and minimum quantities arrive in unstructured chats.', id: 'Ukuran, bahan, finishing cetak, dan minimum order datang melalui chat yang tidak terstruktur.' },
      inputs: { en: ['Chat & reference image', 'Specification table', 'MOQ & price rules'], id: ['Chat & gambar referensi', 'Tabel spesifikasi', 'Aturan MOQ & harga'] },
      build: { en: 'Extract dimensions, materials, print and quantity.', id: 'Mengambil ukuran, bahan, detail cetak, dan kuantitas.' },
      decision: { en: 'Confirm feasibility, artwork and production slot.', id: 'Konfirmasi kelayakan, artwork, dan jadwal produksi.' },
      output: { en: 'A structured quotation request and job draft.', id: 'Permintaan penawaran dan draft pekerjaan yang terstruktur.' }
    },
    industrial: {
      label: { en: 'Industrial supplies', id: 'Kebutuhan industri' },
      headline: { en: 'Match technical specifications across large supplier catalogues.', id: 'Cocokkan spesifikasi teknis di katalog supplier yang besar.' },
      problem: { en: 'Buyers ask by function or specification while catalogues use brands and internal codes.', id: 'Pembeli meminta berdasarkan fungsi atau spesifikasi, sementara katalog memakai merek dan kode internal.' },
      inputs: { en: ['RFQ or PO', 'Technical catalogue', 'Stock & lead time'], id: ['RFQ atau PO', 'Katalog teknis', 'Stok & lead time'] },
      build: { en: 'Compare specifications and surface catalogue matches.', id: 'Membandingkan spesifikasi dan menampilkan kandidat dari katalog.' },
      decision: { en: 'Approve equivalence and commercial terms.', id: 'Setujui kesetaraan produk dan ketentuan komersial.' },
      output: { en: 'A traceable recommendation and quote draft.', id: 'Rekomendasi terlacak dan draft penawaran.' }
    },
    electronics: {
      label: { en: 'Electronics', id: 'Elektronik' },
      headline: { en: 'Control model variants, serials and warranty from the first order.', id: 'Kendalikan varian model, serial, dan garansi sejak order pertama.' },
      problem: { en: 'Similar model names and changing bundles create costly picking and warranty errors.', id: 'Nama model yang mirip dan paket yang berubah menimbulkan kesalahan picking serta garansi.' },
      inputs: { en: ['Model request', 'SKU & bundle list', 'Warranty rules'], id: ['Permintaan model', 'Daftar SKU & paket', 'Aturan garansi'] },
      build: { en: 'Resolve variants, bundles and required accessories.', id: 'Mencocokkan varian, paket, dan aksesori wajib.' },
      decision: { en: 'Confirm availability and warranty coverage.', id: 'Konfirmasi ketersediaan dan cakupan garansi.' },
      output: { en: 'An accurate sales-order draft.', id: 'Draft sales order yang akurat.' }
    },
    agri: {
      label: { en: 'Agriculture inputs', id: 'Sarana pertanian' },
      headline: { en: 'Organize seasonal demand across products, regions and pack sizes.', id: 'Rapikan permintaan musiman berdasarkan produk, wilayah, dan ukuran kemasan.' },
      problem: { en: 'Product names, application needs and regional availability vary throughout the season.', id: 'Nama produk, kebutuhan aplikasi, dan ketersediaan wilayah berubah sepanjang musim.' },
      inputs: { en: ['Dealer order', 'Product catalogue', 'Regional inventory'], id: ['Order dealer', 'Katalog produk', 'Stok wilayah'] },
      build: { en: 'Map requested products, units and local availability.', id: 'Memetakan produk, satuan, dan ketersediaan lokal.' },
      decision: { en: 'Approve regulated items and substitutions.', id: 'Setujui produk terkontrol dan barang pengganti.' },
      output: { en: 'A regional fulfilment draft.', id: 'Draft pemenuhan order per wilayah.' }
    },
    medical: {
      label: { en: 'Medical supplies', id: 'Alat kesehatan' },
      headline: { en: 'Keep catalogue, batch and document checks connected to every order.', id: 'Hubungkan pemeriksaan katalog, batch, dan dokumen pada setiap order.' },
      problem: { en: 'Orders require precise SKUs, batch visibility and supporting documents before fulfilment.', id: 'Order membutuhkan SKU yang tepat, visibilitas batch, dan dokumen pendukung sebelum dipenuhi.' },
      inputs: { en: ['Hospital or clinic PO', 'Approved catalogue', 'Batch & document records'], id: ['PO rumah sakit atau klinik', 'Katalog resmi', 'Data batch & dokumen'] },
      build: { en: 'Validate fields and assemble the required order record.', id: 'Memvalidasi kolom dan menyusun catatan order yang dibutuhkan.' },
      decision: { en: 'Compliance staff confirms product and documents.', id: 'Tim compliance mengonfirmasi produk dan dokumen.' },
      output: { en: 'A documented order draft for approval.', id: 'Draft order terdokumentasi untuk disetujui.' }
    },
    textile: {
      label: { en: 'Textile & fashion', id: 'Tekstil & fesyen' },
      headline: { en: 'Manage size, colour and material matrices without spreadsheet chaos.', id: 'Kelola matriks ukuran, warna, dan bahan tanpa spreadsheet yang berantakan.' },
      problem: { en: 'One order contains many combinations, and a single missed variant affects production.', id: 'Satu order berisi banyak kombinasi, dan satu varian yang terlewat dapat mengganggu produksi.' },
      inputs: { en: ['Order sheet', 'Variant catalogue', 'Production availability'], id: ['Form order', 'Katalog varian', 'Ketersediaan produksi'] },
      build: { en: 'Expand each size-colour-material combination.', id: 'Mengurai setiap kombinasi ukuran, warna, dan bahan.' },
      decision: { en: 'Approve substitutions and production timing.', id: 'Setujui penggantian dan jadwal produksi.' },
      output: { en: 'A complete variant-level order.', id: 'Order lengkap sampai tingkat varian.' }
    },
    furniture: {
      label: { en: 'Furniture & interior', id: 'Furnitur & interior' },
      headline: { en: 'Move custom requests from inspiration image to a controlled quote.', id: 'Ubah permintaan custom dari gambar inspirasi menjadi penawaran yang terkendali.' },
      problem: { en: 'Dimensions, finish, fabric and installation details are spread across conversations.', id: 'Ukuran, finishing, kain, dan detail instalasi tersebar di berbagai percakapan.' },
      inputs: { en: ['Reference image', 'Site dimensions', 'Material options'], id: ['Gambar referensi', 'Ukuran lokasi', 'Pilihan material'] },
      build: { en: 'Structure specifications and identify missing details.', id: 'Menyusun spesifikasi dan menemukan detail yang belum lengkap.' },
      decision: { en: 'Approve design, material and installation scope.', id: 'Setujui desain, material, dan lingkup instalasi.' },
      output: { en: 'A scoped quotation brief.', id: 'Brief penawaran dengan lingkup yang jelas.' }
    },
    printing: {
      label: { en: 'Printing & signage', id: 'Percetakan & signage' },
      headline: { en: 'Capture every print specification before it reaches production.', id: 'Tangkap setiap spesifikasi cetak sebelum masuk produksi.' },
      problem: { en: 'Size, substrate, finishing, artwork and deadlines often arrive in separate messages.', id: 'Ukuran, bahan, finishing, artwork, dan deadline sering dikirim dalam pesan terpisah.' },
      inputs: { en: ['Chat request', 'Artwork files', 'Price & production rules'], id: ['Permintaan chat', 'File artwork', 'Aturan harga & produksi'] },
      build: { en: 'Compile specs and flag missing production information.', id: 'Mengompilasi spesifikasi dan menandai informasi produksi yang kurang.' },
      decision: { en: 'Approve artwork, proof and schedule.', id: 'Setujui artwork, proof, dan jadwal.' },
      output: { en: 'A production-ready job brief.', id: 'Brief pekerjaan yang siap diproduksi.' }
    },
    hospitality: {
      label: { en: 'Hospitality suppliers', id: 'Supplier hotel & restoran' },
      headline: { en: 'Coordinate repeat orders across outlets and delivery schedules.', id: 'Koordinasikan repeat order lintas outlet dan jadwal pengiriman.' },
      problem: { en: 'Each outlet orders differently while purchasing needs one consolidated view.', id: 'Setiap outlet memesan dengan cara berbeda sementara purchasing memerlukan satu tampilan gabungan.' },
      inputs: { en: ['Outlet orders', 'Contract price list', 'Delivery calendar'], id: ['Order outlet', 'Harga kontrak', 'Kalender pengiriman'] },
      build: { en: 'Consolidate items, outlet codes and delivery dates.', id: 'Menggabungkan barang, kode outlet, dan tanggal pengiriman.' },
      decision: { en: 'Approve budget, substitutions and routing.', id: 'Setujui anggaran, penggantian, dan rute.' },
      output: { en: 'A consolidated multi-outlet order.', id: 'Order gabungan untuk banyak outlet.' }
    },
    beauty: {
      label: { en: 'Beauty distribution', id: 'Distribusi kecantikan' },
      headline: { en: 'Keep shades, variants and batch information accurate at scale.', id: 'Jaga akurasi shade, varian, dan informasi batch dalam volume besar.' },
      problem: { en: 'Similar product names and shade codes cause order and return errors.', id: 'Nama produk dan kode shade yang mirip menyebabkan salah order dan retur.' },
      inputs: { en: ['Reseller order', 'Variant catalogue', 'Batch & expiry data'], id: ['Order reseller', 'Katalog varian', 'Data batch & kedaluwarsa'] },
      build: { en: 'Match products, shades, bundles and quantities.', id: 'Mencocokkan produk, shade, bundel, dan kuantitas.' },
      decision: { en: 'Approve stock allocation and promotion terms.', id: 'Setujui alokasi stok dan ketentuan promosi.' },
      output: { en: 'A variant-accurate order draft.', id: 'Draft order yang akurat sampai tingkat varian.' }
    },
    chemical: {
      label: { en: 'Chemical & laboratory', id: 'Kimia & laboratorium' },
      headline: { en: 'Make technical grade, concentration and documentation explicit.', id: 'Pastikan grade teknis, konsentrasi, dan dokumen tercatat jelas.' },
      problem: { en: 'Small differences in grade, concentration or pack size can make an order unusable.', id: 'Perbedaan kecil pada grade, konsentrasi, atau ukuran kemasan dapat membuat order tidak dapat digunakan.' },
      inputs: { en: ['Technical request', 'Approved catalogue', 'SDS & handling data'], id: ['Permintaan teknis', 'Katalog resmi', 'Data SDS & penanganan'] },
      build: { en: 'Compare specifications and collect document references.', id: 'Membandingkan spesifikasi dan mengumpulkan referensi dokumen.' },
      decision: { en: 'Qualified staff approves product and handling.', id: 'Petugas berwenang menyetujui produk dan penanganan.' },
      output: { en: 'A controlled quotation draft.', id: 'Draft penawaran yang terkendali.' }
    },
    office: {
      label: { en: 'Office supplies', id: 'Kebutuhan kantor' },
      headline: { en: 'Automate recurring catalogue orders while keeping budget control.', id: 'Otomasi order katalog berulang dengan kontrol anggaran tetap terjaga.' },
      problem: { en: 'Routine requests arrive from many departments with different names and approval limits.', id: 'Permintaan rutin datang dari banyak divisi dengan nama barang dan batas persetujuan yang berbeda.' },
      inputs: { en: ['Department request', 'Approved item list', 'Budget rules'], id: ['Permintaan divisi', 'Daftar barang resmi', 'Aturan anggaran'] },
      build: { en: 'Standardize items and route requests by budget.', id: 'Menstandarkan barang dan mengarahkan permintaan sesuai anggaran.' },
      decision: { en: 'Manager approves exceptions and spend.', id: 'Manajer menyetujui pengecualian dan pengeluaran.' },
      output: { en: 'A consolidated purchase request.', id: 'Permintaan pembelian yang terkonsolidasi.' }
    }
  };

  const tabs = [...explorer.querySelectorAll('[data-vertical]')];
  const previous = explorer.querySelector('[data-vertical-prev]');
  const next = explorer.querySelector('[data-vertical-next]');
  const fields = {
    label: document.getElementById('verticalLabel'),
    headline: document.getElementById('verticalHeadline'),
    problem: document.getElementById('verticalProblem'),
    inputs: document.getElementById('verticalInputs'),
    build: document.getElementById('verticalBuild'),
    decision: document.getElementById('verticalDecision'),
    output: document.getElementById('verticalOutput')
  };
  let activeIndex = 0;

  const language = () => document.documentElement.lang === 'id' ? 'id' : 'en';
  const localize = (value) => value[language()] || value.en;

  function render(index, moveFocus = false) {
    activeIndex = (index + tabs.length) % tabs.length;
    const tab = tabs[activeIndex];
    const item = copy[tab.dataset.vertical];
    if (!item) return;

    tabs.forEach((button, buttonIndex) => {
      const selected = buttonIndex === activeIndex;
      button.setAttribute('aria-selected', selected ? 'true' : 'false');
      button.tabIndex = selected ? 0 : -1;
    });
    fields.label.textContent = localize(item.label);
    fields.headline.textContent = localize(item.headline);
    fields.problem.textContent = localize(item.problem);
    fields.inputs.replaceChildren(...localize(item.inputs).map((value) => {
      const span = document.createElement('span');
      span.textContent = value;
      return span;
    }));
    fields.build.textContent = localize(item.build);
    fields.decision.textContent = localize(item.decision);
    fields.output.textContent = localize(item.output);
    previous.setAttribute('aria-label', language() === 'id' ? 'Vertikal sebelumnya' : 'Previous vertical');
    next.setAttribute('aria-label', language() === 'id' ? 'Vertikal berikutnya' : 'Next vertical');
    tab.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
    if (moveFocus) tab.focus({ preventScroll: true });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => render(index));
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'Home') render(0, true);
      else if (event.key === 'End') render(tabs.length - 1, true);
      else render(index + (event.key === 'ArrowRight' ? 1 : -1), true);
    });
  });
  previous.addEventListener('click', () => render(activeIndex - 1));
  next.addEventListener('click', () => render(activeIndex + 1));
  document.addEventListener('nantara:language', () => render(activeIndex));
  render(0);
})();
