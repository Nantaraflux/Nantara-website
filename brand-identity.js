(()=>{
  const root=document.documentElement;
  function syncIcon(){
    const dark=root.dataset.theme==='dark';
    document.querySelectorAll('link[rel="icon"],link[rel="shortcut icon"],link[rel="apple-touch-icon"]').forEach(icon=>{
      const next=(dark?'favicon-white.png':'favicon.png')+'?v=transparent20260921';
      if(icon.getAttribute('href')!==next)icon.setAttribute('href',next);
      icon.setAttribute('type','image/png');
    });
  }
  syncIcon();
  new MutationObserver(syncIcon).observe(root,{attributes:true,attributeFilter:['data-theme']});
})();
