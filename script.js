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
  for (let index = 1; index <= 10; index += 1) {
    const radioRate = document.createElement('input');
    radioRate.type = 'radio';
    radioRate.value = index;
    radioRate.name = 'rate';
    const labelRate = document.createElement('label');
    labelRate.innerText = index;
    divRate.appendChild(radioRate);
    divRate.appendChild(labelRate);
  }
}
addRate();

const btnSubmit = document.getElementById('submit-btn');
const checkAgreement = document.getElementById('agreement');
function btnEnable(event) {
  if (event.target.checked) {
    btnSubmit.removeAttribute('disabled');
  } else {
    btnSubmit.setAttribute('disabled', true);
  }
}
checkAgreement.addEventListener('change', btnEnable);

const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
function countTextArea(event) {
  const limit = 500;
  const { textLength } = event.target;
  const rest = limit - textLength;
  counter.textContent = rest;
}

const inputs = document.querySelectorAll('input');
function checkNameFromInputs(inputsReceived, type) {
  let inputsChecked = [];
  for (let i = 0; i < inputsReceived.length; i += 1) {
    if (inputsReceived[i].name === type && inputsReceived[i].checked) {
      inputsChecked.push(inputsReceived[i].value);
    }
  }
  inputsChecked = inputsChecked.join(', ');
  return inputsChecked;
}

const obsTextarea = document.querySelector('.textarea');
const formUser = document.querySelector('#evaluation-form');
function generateForm(user) {
  const { name, lastName, email, house, family, subject, evaluation } = user;
  formUser.innerHTML = '';
  formUser.innerHTML += (`<span class='newForm'>Nome: ${name.value} ${lastName.value}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Email: ${email.value}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Casa: ${house.value}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Família: ${family}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Matérias: ${subject}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Avaliação: ${evaluation}</span>`);
  formUser.innerHTML += (`<span class='newForm'>Observações: ${obsTextarea.value}</span>`);
}

function getInformation() {
  const user = {
    name: document.querySelector('#input-name'),
    lastName: document.querySelector('#input-lastname'),
    email: document.querySelector('#input-email'),
    house: document.querySelector('#house'),
    family: checkNameFromInputs(inputs, 'family'),
    subject: checkNameFromInputs(inputs, 'content'),
    evaluation: checkNameFromInputs(inputs, 'rate'),
  };
  generateForm(user);
}

window.onload = () => {
  counter.textContent = 500;
  textarea.addEventListener('input', countTextArea);
  formUser.addEventListener('submit', getInformation);
};
