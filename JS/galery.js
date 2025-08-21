function showContact() {
    const contact = document.querySelector('.contact-menu');
    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('click', () => {
    contact.classList.toggle('visible');
    })
};
function regMenu() {
    const account = document.querySelector('.account-menu');
    const accountBtn = document.querySelector('.account-btn');
    accountBtn.addEventListener('click', () => {
    account.classList.toggle('visible');
    })
};
showContact();
regMenu();
document.addEventListener('click', (e) => {
  if (!e.target.closest('.account-btn') && !e.target.closest('.contact-btn')) {
    document.querySelectorAll('.visible').forEach((el) => {
      el.classList.remove('visible');
    });
  }
});

