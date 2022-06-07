import isEmail from 'validator/lib/isEmail';
const SEM = 'show-error-message';
const form = document.querySelector('.form');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const password2 = document.querySelector('.password2');
const submitEvent = (e) => {
    e.preventDefault();
    const target = e.target;
    hideErrorMessage(target);
    checkForEmptyFilelds(username, email, password, password2);
    checkEmail(email);
    checkequalPassword(password, password2);
    if (shouldSendForm(target))
        console.log('enviado');
};
form.addEventListener('submit', submitEvent);
function checkEmail(input) {
    if (!isEmail(input.value))
        showErroMessage(input, 'email invalido');
}
function checkequalPassword(password, password2) {
    if (password.value !== password2.value) {
        showErroMessage(password, 'senha diferentes');
        showErroMessage(password2, 'senha diferente');
    }
}
function checkForEmptyFilelds(...inputs) {
    inputs.forEach((input) => {
        if (!input.value)
            showErroMessage(input, 'o campo não pode estar vazio');
    });
}
function hideErrorMessage(form) {
    form
        .querySelectorAll('.' + SEM)
        .forEach((item) => item.classList.remove(SEM));
}
function showErroMessage(input, msg) {
    const formFields = input.parentElement;
    const errorMessage = formFields.querySelector('.error-message');
    errorMessage.innerText = msg;
    formFields.classList.add(SEM);
}
function shouldSendForm(form) {
    let sendForm = true;
    form.querySelectorAll('.' + SEM).forEach(() => (sendForm = false));
    return sendForm;
}
showErroMessage(username, 'mensagem');
hideErrorMessage(form);
//# sourceMappingURL=form.js.map