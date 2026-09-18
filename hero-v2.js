window.NANTARA_EXTRA_TRANSLATIONS = (window.NANTARA_EXTRA_TRANSLATIONS || '') + '\n' + `WHATSAPP BUSINESS AUTOMATION|OTOMASI BISNIS DI WHATSAPP
Turn WhatsApp chats|Ubah chat WhatsApp
into completed orders.|jadi pesanan tuntas.
Nantara captures order details, connects them to your existing tools, and keeps customers updated. Your team handles the decisions that need a person.|Nantara mencatat detail pesanan, menghubungkannya ke sistem Anda, dan memberi kabar kepada pelanggan. Keputusan yang membutuhkan pertimbangan manusia tetap di tangan tim Anda.
Let's talk on WhatsApp|Konsultasi via WhatsApp
Explore our process|Lihat proses kami
Setup in 5–7 days|Persiapan 5–7 hari
Your tools. Connected.|Sistem Anda. Terhubung.
Agentic. Autonomous.|Agentic. Autonomous.
Built around your business.|Dirancang untuk bisnis Anda.
HOW NANTARA WORKS|CARA KERJA NANTARA
Illustrative workflow|Ilustrasi alur kerja
Example conversations|Contoh percakapan
Conversations|Percakapan
New order|Pesanan baru
Order confirmed|Pesanan dikonfirmasi
Delivery update|Kabar pengiriman
Powered by Nantara|Didukung Nantara
Example customer|Contoh pelanggan
Today|Hari ini
Hi, can I reorder 20 bags of house blend for Friday?|Halo, bisa pesan lagi 20 kantong house blend untuk Jumat?
Of course. The same 1 kg bags, delivered to your usual address?|Tentu. Kemasan 1 kg seperti biasa, dikirim ke alamat yang sama?
Yes, that's right. Thank you!|Iya, betul. Terima kasih!
Order details captured|Detail pesanan tercatat
Message|Pesan
Ready for your team|Siap untuk tim Anda
Order #NT-1042|Pesanan #NT-1042
Customer|Pelanggan
Order|Pesanan
Delivery|Pengiriman
Friday · saved address|Jumat · alamat tersimpan
Sent to your connected order system|Dikirim ke sistem pesanan Anda
How Nantara works|Cara kerja Nantara
Customer chats|Pelanggan mengirim chat
Nantara acts|Nantara memproses
Your team stays in control|Tim Anda tetap memegang kendali
Customers order naturally on WhatsApp. Nantara asks for any missing details.|Pelanggan memesan seperti biasa di WhatsApp. Nantara menanyakan detail yang belum lengkap.
Confirmed details flow into your connected tools, ready for invoicing and fulfilment.|Detail yang sudah dikonfirmasi masuk ke sistem Anda, siap untuk pembuatan faktur dan pemrosesan pesanan.
Your rules guide each action. Exceptions go to your team, with the conversation attached.|Setiap tindakan mengikuti aturan Anda. Kasus khusus diteruskan ke tim beserta percakapannya.
One conversation. A connected operation.|Satu percakapan. Operasional yang terhubung.
View original version|Lihat versi sebelumnya`;

document.addEventListener('DOMContentLoaded', () => {
  const visual = document.querySelector('.mh-visual');
  const buttons = [...document.querySelectorAll('.mh-process button')];
  function select(button) {
    visual.dataset.active = button.dataset.step;
    for (const item of buttons) {
      const active = item === button;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    }
  }
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => select(button));
    button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
      if (event.key === 'ArrowLeft') next = (index + buttons.length - 1) % buttons.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = buttons.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      select(buttons[next]);
      buttons[next].focus();
    });
  });
  select(buttons[0]);
});
