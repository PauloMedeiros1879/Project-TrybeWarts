const formLogin = document.querySelector('.trybewarts-login');
function validateFormLogin(event) {
  const email = event.target[0];
  const password = event.target[1];
  if (email.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Email ou senha inválidos.');
    return;
  }
  alert('Olá, Tryber!');
}
formLogin.addEventListener('submit', validateFormLogin);
