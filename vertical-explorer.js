(() => {
  const explorer = document.querySelector('[data-business-explorer]');
  if (!explorer) return;
  const businesses = {
    distributor: {
      label: { en: 'Distributor', id: 'Distributor' },
      headline: { en: 'Move every customer order with fewer manual checks.', id: 'Proses setiap order pelanggan dengan lebih sedikit pemeriksaan manual.' },
      summary: { en: 'For multi-SKU businesses receiving orders through WhatsApp, email, spreadsheets and PDFs.', id: 'Untuk bisnis dengan banyak SKU yang menerima order melalui WhatsApp, email, spreadsheet, dan PDF.' },
      cases: [
        { title: { en: 'Order intake & product matching', id: 'Penerimaan order & pencocokan produk' }, problem: { en: 'Customer descriptions, pack sizes and SKU names rarely match your catalogue.', id: 'Deskripsi pelanggan, ukuran kemasan, dan nama SKU sering tidak sama dengan katalog.' }, action: { en: 'Nantara reads the order, matches each line and flags uncertain products for review.', id: 'Nantara membaca order, mencocokkan setiap baris, dan menandai produk yang perlu diperiksa.' }, output: { en: 'Review-ready sales order', id: 'Sales order siap diperiksa' } },
        { title: { en: 'Price, discount & credit control', id: 'Kontrol harga, diskon & kredit' }, problem: { en: 'Different customers have different price lists, discounts and credit limits.', id: 'Setiap pelanggan memiliki daftar harga, diskon, dan limit kredit yang berbeda.' }, action: { en: 'Nantara checks commercial terms before the order reaches fulfilment.', id: 'Nantara memeriksa ketentuan komersial sebelum order masuk ke proses pemenuhan.' }, output: { en: 'Exception list with source evidence', id: 'Daftar pengecualian dengan bukti sumber' } }
      ]
    },
    wholesaler: {
      label: { en: 'Wholesaler', id: 'Grosir' },
      headline: { en: 'Keep high-volume repeat orders fast and consistent.', id: 'Jaga repeat order bervolume tinggi tetap cepat dan konsisten.' },
      summary: { en: 'For businesses serving repeat buyers with fast-moving inventory and frequent deliveries.', id: 'Untuk bisnis yang melayani pelanggan rutin dengan stok bergerak cepat dan pengiriman berkala.' },
      cases: [
        { title: { en: 'Repeat-order automation', id: 'Otomasi repeat order' }, problem: { en: 'The same buyers reorder with abbreviations, voice notes and changing quantities.', id: 'Pelanggan yang sama memesan ulang memakai singkatan, voice note, dan jumlah yang berubah.' }, action: { en: 'Nantara recognizes the buyer, recalls usual products and structures the new order.', id: 'Nantara mengenali pelanggan, menemukan produk yang biasa dipesan, dan menyusun order baru.' }, output: { en: 'Structured repeat-order draft', id: 'Draft repeat order terstruktur' } },
        { title: { en: 'Stock & fulfilment exceptions', id: 'Pengecualian stok & pemenuhan' }, problem: { en: 'Short stock, substitutions and split deliveries slow the order desk.', id: 'Kekurangan stok, barang pengganti, dan pengiriman terpisah memperlambat tim order.' }, action: { en: 'Nantara separates clear lines from decisions and routes only exceptions to the team.', id: 'Nantara memisahkan baris yang jelas dari keputusan dan mengirim hanya pengecualian kepada tim.' }, output: { en: 'Prioritized fulfilment decisions', id: 'Keputusan pemenuhan yang diprioritaskan' } }
      ]
    },
    importer: {
      label: { en: 'Importer', id: 'Importir' },
      headline: { en: 'Connect purchase documents, landed costs and approvals.', id: 'Hubungkan dokumen pembelian, landed cost, dan persetujuan.' },
      summary: { en: 'For import operations coordinating suppliers, shipments, documents and local sales commitments.', id: 'Untuk operasi impor yang mengoordinasikan supplier, pengiriman, dokumen, dan komitmen penjualan lokal.' },
      cases: [
        { title: { en: 'Supplier PO & document matching', id: 'Pencocokan PO supplier & dokumen' }, problem: { en: 'POs, invoices, packing lists and shipment records can contain costly differences.', id: 'PO, invoice, packing list, dan data pengiriman dapat memiliki selisih yang berdampak besar.' }, action: { en: 'Nantara compares line items, quantities, values and document references.', id: 'Nantara membandingkan item, jumlah, nilai, dan referensi antar dokumen.' }, output: { en: 'Document discrepancy report', id: 'Laporan selisih dokumen' } },
        { title: { en: 'Landed-cost & margin control', id: 'Kontrol landed cost & margin' }, problem: { en: 'Freight, duty and currency changes can make a selling price unprofitable.', id: 'Perubahan ongkir, bea, dan kurs dapat membuat harga jual menjadi tidak menguntungkan.' }, action: { en: 'Nantara recalculates the cost basis and flags orders below the required margin.', id: 'Nantara menghitung ulang dasar biaya dan menandai order di bawah margin minimum.' }, output: { en: 'Margin exception for approval', id: 'Pengecualian margin untuk disetujui' } }
      ]
    },
    trading: {
      label: { en: 'Trading company', id: 'Perusahaan trading' },
      headline: { en: 'Turn complex RFQs into controlled, traceable quotations.', id: 'Ubah RFQ kompleks menjadi penawaran yang terkendali dan dapat ditelusuri.' },
      summary: { en: 'For companies sourcing from multiple suppliers and quoting products that change from deal to deal.', id: 'Untuk perusahaan yang membeli dari banyak supplier dan menawarkan produk berbeda pada setiap transaksi.' },
      cases: [
        { title: { en: 'RFQ-to-quotation workflow', id: 'Alur RFQ ke penawaran' }, problem: { en: 'Customer specifications must be matched against supplier offers and lead times.', id: 'Spesifikasi pelanggan harus dicocokkan dengan penawaran serta lead time supplier.' }, action: { en: 'Nantara structures the RFQ, compares options and prepares a quotation brief.', id: 'Nantara menyusun RFQ, membandingkan pilihan, dan menyiapkan brief penawaran.' }, output: { en: 'Comparable supplier options', id: 'Pilihan supplier yang dapat dibandingkan' } },
        { title: { en: 'Margin & approval guardrails', id: 'Kontrol margin & persetujuan' }, problem: { en: 'Custom deals can bypass margin targets, payment terms or management approval.', id: 'Transaksi custom dapat melewati target margin, termin pembayaran, atau persetujuan manajemen.' }, action: { en: 'Nantara checks each proposal against deal rules before it is sent.', id: 'Nantara memeriksa setiap proposal berdasarkan aturan transaksi sebelum dikirim.' }, output: { en: 'Approval-ready quotation', id: 'Penawaran siap disetujui' } }
      ]
    }
  };
  const tabs = [...explorer.querySelectorAll('[data-business]')];
  const label = document.getElementById('businessLabel');
  const headline = document.getElementById('businessHeadline');
  const summary = document.getElementById('businessSummary');
  const list = document.getElementById('useCaseList');
  let active = 0;
  const lang = () => document.documentElement.lang === 'id' ? 'id' : 'en';
  const localized = value => value[lang()] || value.en;
  function render(index, focus = false) {
    active = (index + tabs.length) % tabs.length;
    const selected = tabs[active];
    const business = businesses[selected.dataset.business];
    tabs.forEach((tab, tabIndex) => {
      const isActive = tabIndex === active;
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });
    label.textContent = localized(business.label);
    headline.textContent = localized(business.headline);
    summary.textContent = localized(business.summary);
    list.replaceChildren(...business.cases.map((item, caseIndex) => {
      const card = document.createElement('article');
      card.className = 'use-case-card';
      const number = document.createElement('span');
      number.className = 'use-case-number';
      number.textContent = String(active * 2 + caseIndex + 1).padStart(2, '0');
      const title = document.createElement('h4');
      title.textContent = localized(item.title);
      const problem = document.createElement('p');
      problem.textContent = localized(item.problem);
      const action = document.createElement('p');
      action.className = 'use-case-action';
      action.textContent = localized(item.action);
      const output = document.createElement('strong');
      output.textContent = localized(item.output);
      card.append(number, title, problem, action, output);
      return card;
    }));
    if (focus) selected.focus();
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => render(index));
    tab.addEventListener('keydown', event => {
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'Home') render(0, true);
      else if (event.key === 'End') render(tabs.length - 1, true);
      else render(index + (event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1), true);
    });
  });
  document.addEventListener('nantara:language', () => render(active));
  render(0);
})();
