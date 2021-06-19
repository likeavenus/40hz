export default function Header() {

   const header = document.querySelector('.header');
   const menuBtn = document.querySelector('.header__menu-btn');
   const menu = document.querySelector('.header__menu');
   const main = document.querySelector('.main');
   const headerBtn = document.querySelector('.header-btn');
   const popup = document.querySelector('.popup');

   let pageOffset;

   menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
   });

   headerBtn.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      menu.classList.remove('active');
      popup.classList.add('popup--active');
      main.classList.add('main--blured');
      main.style.position = 'relative';
      main.style.overflow = 'auto';
   });

   window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
         header.classList.add('scrolled');
      } else {
         header.classList.remove('scrolled');
      }
   });
};


/** TODO
 * Добавить class active к пунктам меню при скроле и нажатии
 */
