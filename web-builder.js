(()=>{
  let selected=null;
  const result=document.getElementById('wbRecommendation');
  if(!result)return;
  const copy={
    starter:{id:'Starter — Rp1.999.000. Fokus satu penawaran, estimasi 3–5 hari pengerjaan.',en:'Starter — Rp1.999.000. One focused offer, estimated build time 3–5 days.'},
    growth:{id:'Growth — Rp3.500.000. Profil perusahaan 3–5 halaman, estimasi 5–7 hari pengerjaan.',en:'Growth — Rp3.500.000. A 3–5 page company profile, estimated build time 5–7 days.'},
    ultra:{id:'Ultra — Rp7.999.000. CMS, blog dan form kustom, estimasi 1–2 minggu pengerjaan.',en:'Ultra — Rp7.999.000. CMS, blog and custom forms, estimated build time 1–2 weeks.'}
  };
  const render=()=>{if(selected)result.textContent=copy[selected][document.documentElement.lang==='id'?'id':'en'];};
  document.querySelectorAll('[data-recommend]').forEach(button=>button.addEventListener('click',()=>{
    selected=button.dataset.recommend;
    document.querySelectorAll('[data-recommend]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    document.querySelectorAll('.wb-price-card').forEach(card=>card.classList.toggle('wb-selected',card.id==='package-'+selected));
    render();
    document.getElementById('package-'+selected).scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});
  }));
  document.addEventListener('nantara:language',render);
})();
