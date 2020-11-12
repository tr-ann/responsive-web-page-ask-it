require('./styles/main.scss');
require('./shared/footer/facebook-logo.svg');
require('./shared/footer/twitter-logo.svg');
require('./shared/footer/linkedin-logo.svg');
require('./shared/footer/pinterest-logo.svg');
require('./shared/footer/mail.svg');

let menuIcon = document.querySelector('.header__menu');
menuIcon.addEventListener('click', toggleHeaderMenu);

function toggleHeaderMenu() {
  let menu = document.querySelector('.header__mobile-navigation');
  if (menu.classList.contains('header__mobile-navigation_show')) {
    menu.classList.remove('header__mobile-navigation_show');
  } else {
    menu.classList.add('header__mobile-navigation_show');
  }
}
