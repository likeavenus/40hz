export default function Animation() {
   const animItems = document.querySelectorAll('.anim-items');

   if (animItems.length > 0) {
      window.addEventListener('scroll', animOnScroll);

      function animOnScroll() {
         for (let i = 0; i < animItems.length; i++) {

            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffsetTop = offset(animItem).top;
            const animStart = 4;

            let animItemPiont = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
               animItemPiont = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffsetTop - animItemPiont) && pageYOffset < (animItemOffsetTop + animItemHeight)) {
               animItem.classList.add('visible');
            } else {
               if (animItem.classList.contains('anim-hide')) {
                  animItem.classList.remove('visible');
               }
            }
         }
      }

      function offset(el) {
         const rect = el.getBoundingClientRect(),
            scrollTop = window.pageYOffset || document.documentElement.scrollTop,
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
         return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
      }

      setTimeout(() => {
         animOnScroll();
      }, 300);
   }
}