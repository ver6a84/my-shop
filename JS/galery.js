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
/*function regMenu() {
    const account = document.querySelector('.account-menu');
    const accountBtn = document.querySelector('.account-btn');
    accountBtn.addEventListener('click', () => {
    account.classList.toggle('visible');
    })
};

regMenu();
document.addEventListener('click', (e) => {
  if (!e.target.closest('.account-btn') && !e.target.closest('.contact-btn')) {
    document.querySelectorAll('.visible').forEach((el) => {
      el.classList.remove('visible');
    });
  }
});*/
const burgerMenu = document.querySelector('.nav-menu-items')
const burgerBtn = document.querySelector('.burger');
burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  burgerMenu.classList.toggle('active');
});


