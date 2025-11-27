
function Info(btn) {
  const info = btn.parentElement.nextElementSibling
  const card = btn.parentElement.parentElement
  const btnOpn = btn
  if(info.style.display == "none"){
    card.style.height = "auto"
    info.style.display = "block";
    btnOpn.innerText = "Fechar" 
  }else{
    info.style.display = "none";
    card.style.height = "400px"
    btnOpn.innerText = "Ver Mais" 
  }
}
