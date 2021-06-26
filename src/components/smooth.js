import smoothscroll from 'smoothscroll-polyfill';
export default function Smooth() {
   smoothscroll.polyfill();
   const navbar = document.querySelectorAll('.navbar-nav a');
   const menuBtn = document.querySelector('.header__menu-btn');
   const menu = document.querySelector('.header__menu');

   for (const link of navbar) {
      link.addEventListener("click", clickHandler);
   }

   function clickHandler(e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      const offsetTop = document.querySelector(href).offsetTop - 55;
      if (menuBtn.classList.contains('active')) {
         menuBtn.classList.remove('active');
         menu.classList.remove('active');
      }

      scroll({
         top: offsetTop,
         behavior: "smooth"
      });
   }

};