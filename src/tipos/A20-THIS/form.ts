import isEmail from 'validator/lib/isEmail';

const SEM = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  hideErrorMessage(this);
  checkForEmptyFilelds(username, email, password, password2);
  checkEmail(email);
  checkequalPassword(password, password2);
  if (shouldSendForm(this)) console.log('enviado');
});

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErroMessage(input, 'email invalido');
}
function checkequalPassword(
  password: HTMLInputElement,
  password2: HTMLInputElement,
) {
  if (password.value !== password2.value) {
    showErroMessage(password, 'senha diferentes');
    showErroMessage(password2, 'senha diferente');
  }
}

function checkForEmptyFilelds(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value) showErroMessage(input, 'o campo não pode estar vazio');
  });
}

function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SEM)
    .forEach((item) => item.classList.remove(SEM));
}
function showErroMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SEM);
}
function shouldSendForm(form: HTMLFormElement): boolean {
  let sendForm = true;
  form.querySelectorAll('.' + SEM).forEach(() => (sendForm = false));
  return sendForm;
}

showErroMessage(username, 'mensagem');
hideErrorMessage(form);
