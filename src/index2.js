const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
    loop: true,
    speed: 1000,
  autoplay: {
   delay: 5000,
    },
    effect: 'fade',
  fadeEffect: {
    crossFade: true
    },
//   mousewheel: {
//     invert: true,
//   },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },
//   parallax: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});