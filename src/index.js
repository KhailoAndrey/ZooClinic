// ---Banner slider---

new Swiper('.banner__slider', {
  loop: true,
  initialSlide: 0,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 1000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },
  speed: 3000,
  effect: 'fade',
  crossFade: true,
});

// ------