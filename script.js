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

const divRate = document.querySelector('#rate');
function addRate() {
  for(let index = 1; index <= 10; index += 1) {
    const radioRate = document.createElement('input')
    radioRate.type = 'radio';
    radioRate.value = index;
    radioRate.name = 'rate';
    divRate.appendChild(radioRate);
  }
  
  
}
addRate();