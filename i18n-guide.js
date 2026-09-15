window.NANTARA_EXTRA_TRANSLATIONS+='\n'+`What it is|Pengertian
The loop|Siklus
Levels|Tingkatan
See it live|Lihat Demo
Field Guide · 01, Foundations|Panduan · 01, Dasar
What makes an AI|Apa yang membuat AI
agentic?|mampu bertindak?
A chatbot answers. An|Chatbot menjawab. Sebuah
agent|agen
acts, it takes a goal, decides the steps, reaches for tools, and keeps going until the job is done. Drag the core. Tap a bubble. Learn how autonomy actually works.|bertindak: menerima tujuan, menentukan langkah, menggunakan alat, dan bekerja hingga selesai. Geser inti dan klik bubble untuk memahami cara kerjanya.
capabilities|kemampuan
loop|siklus
levels of autonomy|tingkat kemandirian
~7 min|~7 menit
read|bacaan
Agent|Agen
drag me|geser saya
Autonomy|Kemandirian
Reasoning|Penalaran
Planning|Perencanaan
Tool Use|Penggunaan Alat
Memory|Memori
Adaptation|Adaptasi
CAPABILITY · 6|KEMAMPUAN · 6
The anatomy of an agent|Anatomi sebuah agen
Six capabilities turn a language model into something that can be trusted with a goal. Tap any bubble orbiting the core to see what each one really means, and why a plain chatbot has none of them.|Enam kemampuan membuat model bahasa mampu menjalankan suatu tujuan. Klik bubble di sekitar inti untuk memahami setiap kemampuan dan perbedaannya dengan chatbot biasa.
Together they form a single loop: perceive the situation, reason about it, plan a move, act through a tool, observe the result, then do it again until the goal is met.|Semuanya membentuk satu siklus: memahami situasi, menalar, merencanakan langkah, menggunakan alat, mengamati hasil, lalu mengulang hingga tujuan tercapai.
Tip, drag the glowing core and watch the orbit follow|Tips: geser inti yang bercahaya dan lihat orbit mengikutinya
02, The distinction|02, Perbedaannya
Generative gives you output.|AI generatif menghasilkan konten.
Agentic gives you outcomes.|Agen AI menyelesaikan pekerjaan.
Generative AI is a brilliant one-shot machine: you ask, it produces. Agentic AI wraps that same intelligence in a loop and points it at a goal, so instead of handing you a draft, it does the work, checks itself, and comes back when it's finished.|AI generatif menghasilkan jawaban atas permintaan. Agen AI menggunakan kecerdasan itu dalam siklus menuju suatu tujuan: mengerjakan tugas, memeriksa hasil, dan kembali saat selesai.
Generative AI|AI Generatif
The responder|Pemberi jawaban
Reacts to a single prompt|Merespons satu permintaan
One turn in, one output out|Satu permintaan, satu hasil
Stateless, forgets after the answer|Tanpa memori setelah menjawab
You drive every step|Anda mengarahkan setiap langkah
Produces content|Menghasilkan konten
"Write me a restock email"|“Buat email pengisian stok”
Agentic AI|Agen AI
The operator|Pelaksana tugas
Pursues a goal you set once|Mengejar tujuan yang Anda tetapkan
Many turns, until the goal is met|Banyak langkah hingga tujuan tercapai
Remembers context across steps|Mengingat konteks antar langkah
It drives itself|Menjalankan langkah secara mandiri
Takes actions in the real world|Bertindak pada sistem nyata
"Win back every buyer who lapsed this month"|“Hubungi kembali pelanggan yang tidak aktif bulan ini”
03, The engine|03, Mesin penggerak
The agent loop|Siklus agen
Strip away the buzzwords and every agent runs the same five-beat cycle. It repeats this loop, sometimes hundreds of times, until the goal is reached. Hover a step to follow the cycle.|Setiap agen menjalankan siklus lima tahap yang sama. Siklus diulang hingga tujuan tercapai. Arahkan kursor ke setiap tahap untuk mempelajarinya.
Perceive|Pahami
Take in the goal and the current state, messages, data, the last tool's result, the world as it is right now.|Pahami tujuan dan kondisi terkini, termasuk pesan, data, serta hasil alat terakhir.
Reason|Nalar
Work out what matters, what's missing, and what the single best next move would be.|Tentukan hal penting, informasi yang kurang, dan langkah terbaik berikutnya.
Plan|Rencanakan
Choose a concrete action and the right tool to carry it out, the API, the query, the message.|Pilih tindakan dan alat yang sesuai, seperti API, kueri, atau pesan.
Act|Jalankan
Execute. Call the function, run the code, send the reply, write the record. Reach into the world.|Jalankan fungsi atau kode, kirim balasan, dan tulis catatan pada sistem nyata.
Observe|Amati
Read the outcome. Did it work? What changed, what's left? Then start the loop again.|Periksa hasilnya: apakah berhasil, apa yang berubah, dan apa yang tersisa? Lalu ulangi siklus.
Loops back to|Kembali ke
, autonomously, until the goal is met or it asks for help.|, secara mandiri hingga tujuan tercapai atau bantuan diperlukan.
04, Under the hood|04, Di balik sistem
An agent is a model wearing a toolbelt|Agen adalah model yang dilengkapi alat
// drop your own diagram, screenshot, or product render|// tempatkan diagram atau tampilan produk Anda
The language model is the brain, but a brain alone can only think out loud. What turns it into an agent is the scaffolding around it: the parts that let it remember, decide, and reach into real systems.|Model bahasa berperan sebagai otak. Komponen pendukung membuatnya menjadi agen yang bisa mengingat, mengambil keputusan, dan mengakses sistem nyata.
Model|Model
The reasoning core that interprets the goal and chooses each next move.|Inti penalaran yang memahami tujuan dan memilih langkah berikutnya.
Tools|Alat
APIs, databases, search, code execution, the agent's hands in the real world.|API, basis data, pencarian, dan eksekusi kode menjadi sarana agen untuk bertindak.
Short-term scratchpad plus long-term recall, so context survives across steps.|Catatan sementara dan ingatan jangka panjang menjaga konteks antar langkah.
Orchestrator|Pengatur Alur
The loop controller that decides when to keep going, retry, or hand back to a human.|Pengendali siklus yang menentukan kapan melanjutkan, mencoba lagi, atau meminta bantuan manusia.
05, How far does it go|05, Tingkat kemampuan
Five levels of autonomy|Lima tingkat kemandirian
"Agentic" isn't a switch, it's a dial. Most products today live around Level 2; the frontier is pushing into Level 3 and beyond.|Kemandirian agen memiliki beberapa tingkatan. Banyak produk berada di tingkat 2, sementara pengembangan terus menuju tingkat 3 dan lebih tinggi.
Assisted|Dibantu
You do the work; the AI suggests as you go.|Anda mengerjakan tugas, AI memberi saran.
e.g. autocomplete|contoh: pelengkapan otomatis
Reactive|Reaktif
Completes a single task each time you ask for it.|Menyelesaikan satu tugas setiap kali diminta.
e.g. a chatbot|contoh: chatbot
Orchestrated|Terkoordinasi
Chains tools to finish a defined workflow, you approve.|Menghubungkan alat untuk menyelesaikan alur yang Anda setujui.
e.g. a copilot|contoh: copilot
Autonomous|Mandiri
Owns a goal end-to-end; escalates only on exceptions.|Menangani tujuan secara menyeluruh dan meminta bantuan saat ada pengecualian.
e.g. an agent|contoh: agen
Self-directed|Mengatur Diri
Sets its own sub-goals, spawns sub-agents, refines its strategy.|Menetapkan subtujuan, membuat subagen, dan menyempurnakan strategi.
e.g. agent swarms · emerging|contoh: kelompok agen · masih berkembang
Bring it to your business|Terapkan pada bisnis Anda
Nantara is an agent,|Nantara adalah agen,
not another chatbot.|lebih dari chatbot biasa.
It perceives your orders, reasons about your buyers, and acts on WhatsApp before you've finished your coffee. Everything in this guide, running on your store.|Nantara memahami pesanan, menalar kebutuhan pelanggan, dan menjalankan tugas melalui WhatsApp. Terapkan kemampuan dalam panduan ini pada bisnis Anda.
See Nantara in action|Lihat Nantara Bekerja
Re-read the guide|Baca Ulang Panduan
Field Guide to Agentic AI · 2026|Panduan Agen AI · 2026`;
