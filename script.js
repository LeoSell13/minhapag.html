// Seleciona o botão e a div de mensagem
const btn = document.getElementById('msgBtn');
const divMsg = document.getElementById('mensagem');

btn.addEventListener('click', () => {
  // Exibe uma mensagem ao clicar
  divMsg.textContent = 'Olá! Seja bem-vindo(a) ao meu site 🎉';
});
