function Info(btn) {
  const info = btn.parentElement.nextElementSibling;
  const card = btn.parentElement.parentElement;
  const btnOpn = btn;
  
  if (info.style.display === "none") {
    card.style.height = "auto";
    info.style.display = "block";
    btnOpn.innerText = "Fechar";
  } else {
    info.style.display = "none";
    card.style.height = "520px";
    btnOpn.innerText = "Ver Mais";
  }
}

function comprar(btn) {
  const card = btn.parentElement.parentElement;
  const nomeCarro = card.querySelector('h3').innerText;
  const preco = card.getAttribute('data-preco');
  
  
  document.getElementById('detalhesCarro').innerHTML = `
    <h3>${nomeCarro}</h3>
    <p> Parabéns pela escolha!</p>
    <p><strong> Valor:</strong> R$ ${parseInt(preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
  `;
  
  document.getElementById('valorTotal').innerText = `R$ ${parseInt(preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;
  

  document.getElementById('modalCompra').style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  
  setTimeout(() => document.getElementById('nomeCliente').focus(), 300);
}

function fecharModal() {
  document.getElementById('modalCompra').style.display = 'none';
  document.body.style.overflow = 'auto';
}

function confirmarCompra() {
  const nome = document.getElementById('nomeCliente').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const email = document.getElementById('email').value.trim();
  
  if (!nome || !telefone || !email) {
    alert(' Preencha todos os campos obrigatórios!');
    return;
  }
  
  
  const mensagem = `Olá`;
  

  const numeroWhatsApp = "5514991630339";
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  
 
  document.getElementById('modalCompra').innerHTML = `
    <div class="modal-content">
      <h2> Compra Confirmada!</h2>
      <div style="text-align: center; margin: 20px 0;">
        <span style="font-size: 60px;"></span>
      </div>
      <p><strong>Obrigado ${nome}!</strong></p>
      <p> Já enviamos sua solicitação para nossa equipe</p>
      <p> Abrindo WhatsApp em 3 segundos...</p>
      <button onclick="fecharModal()" class="btn-confirmar" style="background: linear-gradient(135deg, #28a745, #20c997);">Fechar</button>
    </div>
  `;
  
  
  setTimeout(() => {
    window.open(urlWhatsApp, '_blank');
  }, 2000);
  
  
  setTimeout(() => {
    document.getElementById('nomeCliente').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
  }, 500);
}


window.onclick = function(event) {
  const modal = document.getElementById('modalCompra');
  if (event.target === modal) fecharModal();
}


document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') fecharModal();
});