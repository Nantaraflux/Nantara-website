(()=>{
  const root=document.documentElement;
  const storage={get(key){try{return localStorage.getItem(key)}catch{return null}},set(key,value){try{localStorage.setItem(key,value)}catch{}}};
  let language=storage.get('nantara-language')==='id'?'id':'en';
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
    localized.forEach(el=>el.textContent=el.dataset[lang]);
    document.querySelector('.locale').dataset.language=lang;
    document.querySelectorAll('[data-lang]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===lang)));
    storage.set('nantara-language',lang);labels();renderStage();
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
})();
