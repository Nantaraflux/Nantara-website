(()=>{
  let selected=null;
  const result=document.getElementById('wbRecommendation');
  if(!result)return;
  const copy={
    starter:{id:'Starter — Rp1.999.000. Fokus satu penawaran; jadwal dikonfirmasi setelah scope ditinjau.',en:'Starter — Rp1.999.000. One focused offer; timeline confirmed after scope review.'},
    growth:{id:'Growth — Rp3.500.000. Profil perusahaan 3–5 halaman; jadwal mengikuti kebutuhan konten.',en:'Growth — Rp3.500.000. A 3–5 page company profile; timeline follows content requirements.'},
    ultra:{id:'Ultra — Rp7.999.000. CMS, blog dan form kustom; jadwal khusus setelah discovery.',en:'Ultra — Rp7.999.000. CMS, blog and custom forms; custom timeline after discovery.'}
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
  const deliveryCopy={id:['Jadwal setelah peninjauan scope','Jadwal sesuai kompleksitas','Jadwal khusus setelah discovery'],en:['Timeline after scope review','Timeline based on complexity','Custom timeline after discovery']};
  const renderDelivery=()=>document.querySelectorAll('.wb-delivery').forEach((item,index)=>{item.textContent=deliveryCopy[document.documentElement.lang==='id'?'id':'en'][index]});
  renderDelivery();
  document.addEventListener('nantara:language',renderDelivery);
})();
