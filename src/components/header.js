export default function Header() {

   const header = document.querySelector('.header');
   const menuBtn = document.querySelector('.header__menu-btn');
   const menu = document.querySelector('.header__menu');
   const main = document.querySelector('.main');
   const headerBtn = document.querySelector('.header-btn');
   const popup = document.querySelector('.popup');

   menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
   });

   headerBtn.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      menu.classList.remove('active');
      popup.classList.add('popup--active');
      main.classList.add('main--blured', 'main--cropped');
      main.style.position = 'relative';
      main.style.overflow = 'auto';
      header.classList.add('header--hidden');
   });

   window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
         header.classList.add('scrolled');
      } else {
         header.classList.remove('scrolled');
      }
   });

   (function () {
      const section = document.querySelectorAll('section');
      let sections = {};

      Array.prototype.forEach.call(section, function (e) {
         sections[e.id] = e.offsetTop;
      });

      window.onscroll = function () {
         let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
         for (let i in sections) {
            if (sections[i] <= scrollPosition + 420) {
               document.querySelector('.active').setAttribute('class', ' ');
               document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
         }
      };
   })();
};
