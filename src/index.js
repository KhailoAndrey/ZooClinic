// ---Banner slider---

new Swiper('.swiper', {
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
    delay: 10000,
    // stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  speed: 10000,
  effect: 'slide',
  // crossFade: true,
});

// ------