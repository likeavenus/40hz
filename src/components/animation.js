export default function Animation() {
   const animItems = document.querySelectorAll('.anim-items');

   if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);

      function animOnScroll() {
         for (let i = 0; i < animItems.length; i++) {

            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPiont = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
               animItemPiont = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPiont) && pageYOffset < (animItemOffset + animItemHeight)) {
               animItem.classList.add('visible');
            } else {
               animItem.classList.remove('visible');
            }
         }
      }

      function offset(el) {
         const rect = el.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
         return { top: rect.top + scrollTop }
      }

      setTimeout(() => {
         animOnScroll();
      }, 300);
   }
}