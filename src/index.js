// ---Banner slider---

const swiper = new swiper('.swiper', {
  direction: 'vertical',
  loop: true,
  initialSlide: 0,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    verticalClass: 'swiper-pagination-vertical'	
  },
  autoplay: {
    delay: 1000,
    // stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  speed: 3000,
  effect: 'fade',
  crossFade: true,
});

// ------