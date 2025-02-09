const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');



registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function toggleinverse(event) {
    event.preventDefault();
    const inscrire_container = document.getElementById('inscrire-container');
    const form_container = document.getElementById('form-container');

    inscrire_container.classList.toggle('hidden');
    form_container.classList.toggle('hidden');
}
document.getElementById('inscrire_mobile').addEventListener('click', toggleinverse);
