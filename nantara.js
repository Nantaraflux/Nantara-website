(()=>{
  const root=document.documentElement;
  const storage={get(key){try{return localStorage.getItem(key)}catch{return null}},set(key,value){try{localStorage.setItem(key,value)}catch{}}};
  const savedLanguage=storage.get('nantara-language');
  let language=['id','en'].includes(savedLanguage)?savedLanguage:(root.dataset.defaultLanguage||'en');
  let stage=0;
  const localized=[...document.querySelectorAll('[data-en][data-id]')];
  const stageData=document.getElementById('stageCopy');
  const stages=stageData?JSON.parse(stageData.textContent):[];
  const themeButton=document.getElementById('themeToggle');
  document.querySelector('meta[name="theme-color"]').content=root.dataset.theme==='dark'?'#111b18':'#fafbf8';
  const menu=document.getElementById('mainNav');
  const menuButton=document.getElementById('menuToggle');
  function labels(){
    const dark=root.dataset.theme==='dark';
    themeButton.setAttribute('aria-label',language==='id'?(dark?'Ganti ke tema terang':'Ganti ke tema gelap'):(dark?'Switch to light theme':'Switch to dark theme'));
    const expanded=menuButton.getAttribute('aria-expanded')==='true';
    menuButton.setAttribute('aria-label',language==='id'?(expanded?'Tutup navigasi':'Buka navigasi'):(expanded?'Close navigation':'Open navigation'));
    menu.setAttribute('aria-label',language==='id'?'Navigasi utama':'Main navigation');
  }
  function renderStage(){
    if(!stages.length)return;
    document.querySelectorAll('[data-step]').forEach((button,i)=>{button.setAttribute('aria-selected',String(i===stage));button.tabIndex=i===stage?0:-1;document.getElementById(`panel-${i}`).hidden=i!==stage});
    document.getElementById('stageTitle').textContent=stages[stage][language==='id'?1:0];
    document.getElementById('stageText').textContent=stages[stage][language==='id'?3:2];
    document.querySelector('#nextStep [data-en]').textContent=stage===3?(language==='id'?'Kembali ke awal':'Back to start'):(language==='id'?'Langkah berikutnya':'Next step');
  }
  function setLanguage(lang){
    language=lang;root.lang=lang;
    document.querySelectorAll('[data-wa-id][data-wa-en]').forEach(link=>{link.href='https://wa.me/6285110516135?text='+encodeURIComponent(link.getAttribute('data-wa-'+lang))});
    localized.forEach(el=>el.textContent=el.dataset[lang]);
    document.querySelector('.locale').dataset.language=lang;
    document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
    storage.set('nantara-language',lang);labels();renderStage();document.dispatchEvent(new CustomEvent('nantara:language',{detail:lang}));
  }
  document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
  setLanguage(language);
  themeButton.addEventListener('click',()=>{
    const apply=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';storage.set('nantara-theme',root.dataset.theme);document.querySelector('meta[name="theme-color"]').content=root.dataset.theme==='dark'?'#111b18':'#fafbf8';labels()};
    if(document.startViewTransition&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
      const box=themeButton.getBoundingClientRect();root.style.setProperty('--theme-x',`${box.x+box.width/2}px`);root.style.setProperty('--theme-y',`${box.y+box.height/2}px`);root.classList.add('theme-transition');themeButton.disabled=true;
      const transition=document.startViewTransition(apply);transition.finished.catch(()=>{}).finally(()=>{root.classList.remove('theme-transition');themeButton.disabled=false});
    }else apply();
  });
  function closeMenu(){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');labels()}
  menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));labels()});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('open')){closeMenu();menuButton.focus()}});
  document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu()});
  matchMedia('(min-width:701px)').addEventListener('change',event=>{if(event.matches)closeMenu()});
  const header=document.getElementById('siteHeader');const updateHeader=()=>header.classList.toggle('scrolled',window.scrollY>40);window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
  document.querySelectorAll('[data-step]').forEach(button=>{
    button.addEventListener('click',()=>{stage=Number(button.dataset.step);renderStage()});
    button.addEventListener('keydown',event=>{let next=stage;if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(stage+1)%4;else if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(stage+3)%4;else if(event.key==='Home')next=0;else if(event.key==='End')next=3;else return;event.preventDefault();stage=next;renderStage();document.getElementById(`step-${stage}`).focus()});
  });
  document.getElementById('nextStep')?.addEventListener('click',()=>{stage=(stage+1)%4;renderStage()});
  const carousel=document.querySelector('.scenario-carousel');
  if(carousel){
    const slides=[...carousel.querySelectorAll('[data-scenario]')];let current=0;
    const show=next=>{current=(next+slides.length)%slides.length;slides.forEach((slide,i)=>slide.hidden=i!==current);document.getElementById('scenarioCount').textContent=String(current+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0')};
    document.getElementById('scenarioPrev').addEventListener('click',()=>show(current-1));
    document.getElementById('scenarioNext').addEventListener('click',()=>show(current+1));
    carousel.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();show(current+(event.key==='ArrowRight'?1:-1))}});
    let start=null;carousel.addEventListener('touchstart',event=>{start={x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY}},{passive:true});
    carousel.addEventListener('touchend',event=>{if(!start)return;const dx=event.changedTouches[0].clientX-start.x,dy=event.changedTouches[0].clientY-start.y;if(Math.abs(dx)>60&&Math.abs(dx)>Math.abs(dy)*1.5)show(current+(dx<0?1:-1));start=null},{passive:true});
  }

  const controlPreview=document.querySelector('.tc-product-preview');
  if(controlPreview){
    const controlViews={
      overview:{en:['Transaction overview','10,000','9,740','260','Rp184.7M','97.4%','Price mismatch · PO-220981','PT Surya Distribusi · owner: Sales Ops','Rp25M','Duplicate supplier invoice','INV-89341 · owner: Accounts Payable','Rp8.4M','Unmatched bank reference','TRX-10582 · owner: Finance','Rp2.1M','94.7%','Control overview','Rp184.7M','260 exceptions need review','Price mismatch','PO-220981 · Rp25M'],id:['Ringkasan transaksi','10.000','9.740','260','Rp184,7Jt','97,4%','Selisih harga · PO-220981','PT Surya Distribusi · pemilik: Sales Ops','Rp25Jt','Invoice supplier duplikat','INV-89341 · pemilik: Accounts Payable','Rp8,4Jt','Referensi bank tidak cocok','TRX-10582 · pemilik: Finance','Rp2,1Jt','94,7%','Ringkasan kontrol','Rp184,7Jt','260 pengecualian perlu diperiksa','Selisih harga','PO-220981 · Rp25Jt']},
      order:{en:['Order Control','4,280','4,116','164','Rp92.5M','96.2%','Unauthorized discount · SO-1842','PT Aruna Teknik · owner: Sales Ops','Rp18M','Quantity mismatch · PO-9912','Delivery vs order · owner: Warehouse','Rp6.2M','Unknown customer SKU','PO-9931 · owner: Order Desk','Rp1.4M','96.2%','Order Control','Rp92.5M','164 order exceptions','Unauthorized discount','SO-1842 · Rp18M'],id:['Order Control','4.280','4.116','164','Rp92,5Jt','96,2%','Diskon tidak berizin · SO-1842','PT Aruna Teknik · pemilik: Sales Ops','Rp18Jt','Selisih kuantitas · PO-9912','Delivery vs order · pemilik: Warehouse','Rp6,2Jt','SKU customer tidak dikenal','PO-9931 · pemilik: Order Desk','Rp1,4Jt','96,2%','Order Control','Rp92,5Jt','164 pengecualian order','Diskon tidak berizin','SO-1842 · Rp18Jt']},
      ap:{en:['AP Control','3,150','3,029','121','Rp71.8M','96.1%','Invoice exceeds PO · INV-7321','PT Prima Logam · owner: AP','Rp31M','Duplicate invoice · INV-7288','Same vendor and amount · owner: AP','Rp12.6M','Bank account changed','Vendor master · owner: Treasury','Rp4.7M','96.1%','AP Control','Rp71.8M','121 AP exceptions','Invoice exceeds PO','INV-7321 · Rp31M'],id:['AP Control','3.150','3.029','121','Rp71,8Jt','96,1%','Invoice melebihi PO · INV-7321','PT Prima Logam · pemilik: AP','Rp31Jt','Invoice duplikat · INV-7288','Vendor dan nominal sama · pemilik: AP','Rp12,6Jt','Rekening bank berubah','Master vendor · pemilik: Treasury','Rp4,7Jt','96,1%','AP Control','Rp71,8Jt','121 pengecualian AP','Invoice melebihi PO','INV-7321 · Rp31Jt']},
      reconciliation:{en:['Reconciliation','2,570','2,495','75','Rp20.4M','97.1%','Unmatched receipt · RCPT-4182','Bank vs ledger · owner: Finance','Rp9.8M','Amount variance · PAY-2291','Invoice vs payment · owner: AR','Rp3.1M','Timing difference','Bank settlement · owner: Finance','Rp860K','97.1%','Reconciliation','Rp20.4M','75 items need matching','Unmatched receipt','RCPT-4182 · Rp9.8M'],id:['Reconciliation','2.570','2.495','75','Rp20,4Jt','97,1%','Penerimaan tidak cocok · RCPT-4182','Bank vs ledger · pemilik: Finance','Rp9,8Jt','Selisih nominal · PAY-2291','Invoice vs pembayaran · pemilik: AR','Rp3,1Jt','Perbedaan waktu','Settlement bank · pemilik: Finance','Rp860Rb','97,1%','Reconciliation','Rp20,4Jt','75 item perlu dicocokkan','Penerimaan tidak cocok','RCPT-4182 · Rp9,8Jt']}
    };
    let selectedControl='overview';
    const roles=['view-title','metric-one','metric-two','metric-three','metric-four','metric-rate','exception-one','exception-one-meta','exception-one-value','exception-two','exception-two-meta','exception-two-value','exception-three','exception-three-meta','exception-three-value','health-rate','mobile-title','mobile-exposure','mobile-review','mobile-exception','mobile-meta'];
    const renderControl=()=>{const values=controlViews[selectedControl][language];roles.forEach((role,index)=>{controlPreview.querySelectorAll(`[data-role="${role}"]`).forEach(element=>element.textContent=values[index])});controlPreview.classList.remove('is-changing');void controlPreview.offsetWidth;controlPreview.classList.add('is-changing')};
    controlPreview.querySelectorAll('[data-control-view]').forEach(button=>button.addEventListener('click',()=>{selectedControl=button.dataset.controlView;controlPreview.querySelectorAll('[data-control-view]').forEach(item=>item.setAttribute('aria-selected',String(item===button)));renderControl()}));
    document.addEventListener('nantara:language',renderControl);renderControl();
  }

  const conversionCopy={
    en:{cookieTitle:'Your preferences, remembered.',cookieText:'Nantara uses limited browser storage to remember your language, theme and consent preferences.',privacy:'Read our Privacy Policy',accept:'Accept',label:'15-minute product walkthrough',title:'See Nantara Control Engine in action.',body:'Bring one transaction problem. We will map where the Control Engine and its modules can help.',cta:'Book a 15-minute demo',reopen:'15-min demo'},
    id:{cookieTitle:'Preferensi Anda, kami ingat.',cookieText:'Nantara menggunakan penyimpanan browser terbatas untuk mengingat bahasa, tema, dan pilihan persetujuan Anda.',privacy:'Baca Kebijakan Privasi',accept:'Terima',label:'Demo produk 15 menit',title:'Lihat Nantara Control Engine bekerja.',body:'Bawa satu masalah transaksi. Kami akan memetakan peran Control Engine dan modul yang sesuai.',cta:'Jadwalkan demo 15 menit',reopen:'Demo 15 menit'}
  };
  const demoDock=document.createElement('aside');
  demoDock.className='demo-dock';demoDock.setAttribute('aria-label','Nantara product demo');
  demoDock.innerHTML='<div class="demo-dock-content"><div class="demo-dock-head"><div><span class="demo-dock-label"></span><h2></h2></div><button class="demo-dock-close" type="button" aria-label="Minimize demo invitation">×</button></div><p></p><a class="button" href="https://wa.me/6285110516135?text=Hello%20Nantara%2C%20I%20would%20like%20a%2015-minute%20Control%20Engine%20demo." target="_blank" rel="noopener"><span></span><span aria-hidden="true">↗</span></a></div><button class="demo-dock-toggle" type="button"></button>';
  document.body.appendChild(demoDock);
  const updateConversionCopy=lang=>{const copy=conversionCopy[lang]||conversionCopy.en;demoDock.querySelector('.demo-dock-label').textContent=copy.label;demoDock.querySelector('h2').textContent=copy.title;demoDock.querySelector('p').textContent=copy.body;demoDock.querySelector('.button span').textContent=copy.cta;demoDock.querySelector('.demo-dock-toggle').textContent=copy.reopen;const banner=document.querySelector('.cookie-banner');if(banner){banner.querySelector('strong').textContent=copy.cookieTitle;banner.querySelector('p>span').textContent=copy.cookieText+' ';banner.querySelector('a').textContent=copy.privacy;banner.querySelector('.cookie-accept span').textContent=copy.accept}};
  demoDock.querySelector('.demo-dock-close').addEventListener('click',()=>demoDock.classList.add('is-collapsed'));
  demoDock.querySelector('.demo-dock-toggle').addEventListener('click',()=>demoDock.classList.remove('is-collapsed'));
  document.addEventListener('nantara:language',event=>updateConversionCopy(event.detail));
  const consent=storage.get('nantara-cookie-consent');
  if(!consent){
    demoDock.hidden=true;
    const cookieBanner=document.createElement('section');cookieBanner.className='cookie-banner';cookieBanner.setAttribute('role','dialog');cookieBanner.setAttribute('aria-label','Cookie preferences');
    cookieBanner.innerHTML='<div class="cookie-copy"><strong></strong><p><span></span><a href="Privacy%20Policy.html"></a>.</p></div><button class="button cookie-accept" type="button"><span></span><span aria-hidden="true">✓</span></button>';
    document.body.appendChild(cookieBanner);
    cookieBanner.querySelector('.cookie-accept').addEventListener('click',()=>{storage.set('nantara-cookie-consent','accepted');cookieBanner.remove();demoDock.hidden=false});
  }
  updateConversionCopy(language);
})();
