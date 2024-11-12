// Quando o formulário de login for enviado
document.querySelector('button').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário
   
    // Pegue os valores dos campos de email e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const lembrar = document.getElementById('lembre-me').checked;
   
    // Salve os dados no localStorage, se o checkbox "Lembre-me" estiver marcado
    if (lembrar) {
        localStorage.setItem('email', email); // Salva o email no localStorage
        localStorage.setItem('senha', senha); // Salva a senha (se necessário, mas é recomendável não salvar senha diretamente)
        localStorage.setItem('lembrar', true); // Marca o estado de lembrar
    } else {
        localStorage.removeItem('email');
        localStorage.removeItem('senha');
        localStorage.removeItem('lembrar');
    }
   
    // Exibir a mensagem de sucesso
    const successMessage = document.getElementById('loginSuccessMessage');
    successMessage.style.display = 'block'; // Torna a mensagem visível
   
    // Limpar os campos de login após o sucesso
    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
   
    // Opcional: esconder a mensagem após alguns segundos
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 3000); // A mensagem ficará visível por 3 segundos
});

// Quando a página carregar, verifique o localStorage
window.onload = function() {
    const emailSalvo = localStorage.getItem('email');
    const senhaSalva = localStorage.getItem('senha');
    const lembrarSalvo = localStorage.getItem('lembrar') === 'true';

    if (lembrarSalvo) {
        document.getElementById('email').value = emailSalvo || '';
        document.getElementById('senha').value = senhaSalva || '';
        document.getElementById('lembre-me').checked = true;
    }
}
