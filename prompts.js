async function copyText(text){
  if(navigator.clipboard && window.isSecureContext){
    await navigator.clipboard.writeText(text);
    return;
  }
  const ta=document.createElement('textarea');
  ta.value=text; ta.setAttribute('readonly','');
  ta.style.position='fixed'; ta.style.opacity='0';
  document.body.append(ta); ta.select(); document.execCommand('copy'); ta.remove();
}

document.addEventListener('click',async e=>{
  const btn=e.target.closest('[data-copy]');
  if(!btn) return;
  const target=document.getElementById(btn.dataset.copy);
  if(!target) return;
  const original=btn.textContent;
  try{
    await copyText(target.textContent.trim());
    btn.textContent='コピーしました';
    btn.classList.add('copied');
    setTimeout(()=>{btn.textContent=original;btn.classList.remove('copied');},1400);
  }catch(err){
    btn.textContent='コピーできませんでした';
    setTimeout(()=>btn.textContent=original,1600);
  }
});

if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
}
