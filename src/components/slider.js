import Swiper, { Navigation, Pagination, beforeSlideChangeStart } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function Slider() {
    const swiperReviews = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        calculateHeight:true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          slideChangeTransitionStart: function () {
            const currentSlide = document.querySelector('.swiper-slide.swiper-slide-active .slider__slide');
            if (currentSlide) {
              document.querySelector('.reviews .swiper-wrapper').style.height = `${currentSlide.offsetHeight}px`;
            }
            
          },
          beforeInit: function() {
            const currentSlide = document.querySelector('.swiper-slide.swiper-slide-active .slider__slide');
            if (!currentSlide && window.innerWidth <= 1280) {
              document.querySelector('.reviews .swiper-wrapper').style.height = `520px`;
            }
          }
        },
    });
};