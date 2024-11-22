// Selecionar os elementos da mensagem
const messageContainer = document.getElementById('message-container');
const messageText = document.getElementById('message-text');
const backToHomeLink = document.createElement('a'); // Criar um link dinamicamente

// Configurar o link "Voltar à página de início"
backToHomeLink.href = "#"; // Substitua pelo URL da página inicial
backToHomeLink.textContent = "Voltar à página de início?";
backToHomeLink.style.marginLeft = "10px"; // Espaço entre as mensagens
backToHomeLink.style.textDecoration = "underline"; // Destaque o link
backToHomeLink.style.color = "#007bff"; // Cor azul para o link

// Função para exibir a mensagem
function showMessage(message) {
    messageContainer.style.display = 'block';
    messageText.textContent = message;

    // Adicionar o link ao container
    if (!messageContainer.contains(backToHomeLink)) {
        messageContainer.appendChild(backToHomeLink);
    }

    // Ocultar após 5 segundos
    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 5000);
}

// Função para salvar o cadastro no localStorage
function saveToLocalStorage(nome, email, senha) {
    const users = JSON.parse(localStorage.getItem('users')) || []; // Recupera usuários existentes ou inicia vazio

    // Verifica se o usuário já está cadastrado
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return 'exists'; // Usuário já cadastrado
    }

    // Adiciona o novo usuário
    users.push({ nome, email, senha });
    localStorage.setItem('users', JSON.stringify(users)); // Salva no localStorage
    return 'saved'; // Cadastro realizado
}

// Evento de submissão do formulário
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmSenha = document.getElementById('confirm-senha').value.trim();

    // Validação básica
    if (!nome || !email || !senha || !confirmSenha) {
        showMessage('Preencha todos os campos!');
        return;
    }

    if (senha !== confirmSenha) {
        showMessage('As senhas não conferem!');
        return;
    }

    // Salva no localStorage e verifica resultado
    const result = saveToLocalStorage(nome, email, senha);

    if (result === 'exists') {
        showMessage('Bem-vindo de novo!');
    } else if (result === 'saved') {
        showMessage('Cadastro realizado com sucesso!');
    }

    // Limpar os campos do formulário após o cadastro
    document.querySelector('form').reset();
});



// Função para alternar visibilidade da senha
document.querySelectorAll('.eye-icon').forEach(eyeIcon => {
    eyeIcon.addEventListener('click', function() {
        // Obtém o campo de senha associado
        const passwordField = this.previousElementSibling;
        
        // Verifica se a senha está visível ou não
        if (passwordField.type === "password") {
            passwordField.type = "text"; // Torna a senha visível
            this.innerHTML = '&#128065;'; // Muda o ícone para "olho aberto"
        } else {
            passwordField.type = "password"; // Torna a senha invisível
            this.innerHTML = '&#128064;'; // Muda o ícone para "olho fechado"
        }
    });
});
function toggleSearchBar() {
    const searchInput = document.getElementById("searchInput");
    // Alterna a exibição do campo de pesquisa
    if (searchInput.style.display === "none") {
        searchInput.style.display = "block";
        searchInput.focus(); // Coloca o foco no campo de pesquisa automaticamente
    } else {
        searchInput.style.display = "none";
    }
}