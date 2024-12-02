function carregarCarrinho() {
  const conteudoCarrinho = document.getElementById('conteudoCarrinho');
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  conteudoCarrinho.innerHTML = '';

  if (carrinho.length === 0) {
    conteudoCarrinho.innerHTML = '<p>O carrinho está vazio.</p>';
    return;
  }

  carrinho.forEach((produto, index) => {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('carrinho-item');
    produtoDiv.innerHTML = `
      <input type="checkbox" class="checkbox" id="checkbox${index}" onclick="atualizarTotal()" checked>
      <div class="produto-info">
        <img src="../pag d comp/img/comprar1.png" alt="${produto.nome}" class="imagem-carrinho" />
        <div>
          <p><strong>${produto.nome}</strong></p>
          <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
          <div class="quantity-controls">
            <button onclick="alterarQuantidade(${index}, -1)">-</button>
            <input type="text" value="${produto.quantidade}" readonly />
            <button onclick="alterarQuantidade(${index}, 1)">+</button>
          </div>
        </div>
      </div>
    `;
    conteudoCarrinho.appendChild(produtoDiv);
  });

  atualizarTotal(); // Atualiza o total ao carregar o carrinho
}

function atualizarTotal() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  let total = 0;
  let quantidadeItens = 0;

  const checkboxes = document.querySelectorAll('.carrinho-item input[type="checkbox"]');

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      const produto = carrinho[index];
      total += produto.preco * produto.quantidade;
      quantidadeItens += produto.quantidade;
    }
  });

  document.getElementById('totalBarra').textContent = total.toFixed(2);
  document.getElementById('quantidadeItens').textContent = quantidadeItens;
}

function alterarQuantidade(index, change) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const produto = carrinho[index];

  produto.quantidade += change;
  if (produto.quantidade < 1) produto.quantidade = 1; // Impede quantidade menor que 1

  carrinho[index] = produto;
  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  carregarCarrinho(); // Atualiza o carrinho na página
}

function removerDoCarrinho(id) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho = carrinho.filter(item => item.id !== id);

  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  carregarCarrinho(); // Atualiza o carrinho na página
  atualizarTotal(); // Recalcula o total após a remoção
}

function selecionarTodosItens() {
  const checkbox = document.getElementById('selecionarTudo');
  const checkboxes = document.querySelectorAll('.carrinho-item input[type="checkbox"]');

  checkboxes.forEach(cb => {
    cb.checked = checkbox.checked;
  });

  atualizarTotal(); // Atualiza o total após a seleção/deseleção
}

function excluirSelecionados() {
  const checkboxes = document.querySelectorAll('.carrinho-item input[type="checkbox"]');
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Remove os itens selecionados
  checkboxes.forEach((cb, index) => {
    if (cb.checked) {
      carrinho.splice(index, 1);
    }
  });

  localStorage.setItem('carrinho', JSON.stringify(carrinho));

  carregarCarrinho(); // Atualiza a interface após excluir
}

function finalizarCompra() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  if (carrinho.length === 0) {
    alert('O carrinho está vazio.');
    return;
  }

  alert('Compra finalizada com sucesso!');
  localStorage.removeItem('carrinho');
  carregarCarrinho(); // Atualiza o carrinho
  atualizarTotal(); // Atualiza o total após finalizar a compra
}

carregarCarrinho(); // Carrega o carrinho ao abrir a página
