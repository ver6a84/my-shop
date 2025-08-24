function showContact() {
    const contact = document.querySelector('.contact-menu');
    const contactBtn = document.querySelector('.contact-btn');
    const closeContact = document.querySelector('.close-contact');
    contactBtn.addEventListener('click', () => {
    contact.classList.add('active');
    });
    closeContact.addEventListener('click', () => {
    contact.classList.remove('active');
    });
};
showContact();
function loginForm() {
    const userLogin = document.querySelector('.login-form');
    const accountBtn = document.querySelector('.account-btn');
    accountBtn.addEventListener('click', () => {
    userLogin.classList.toggle('active');
    });
};    
loginForm();
function burgerMenu() {
const burgerMenu = document.querySelector('.nav-menu-items');
const burgerBtn = document.querySelector('.burger');
burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});
};
burgerMenu();
document.addEventListener('click', (e) => {
  const wrapper = document.querySelector('.login-form-wrapper');
  const btn = document.querySelector('.account-btn');
  if (!wrapper.contains(e.target) && !btn.contains(e.target)) {
    wrapper.classList.remove('active');
  }
});


