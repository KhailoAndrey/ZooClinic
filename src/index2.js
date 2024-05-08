const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  speed: 1500,
    autoplay: {
     delay: 5000,
      },

  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
  //   mousewheel: {
  //     invert: true,
  //   },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    slideChange: function () {
      var swiper = this;
      var currentSlide = document.querySelector('.count');
      var slideNumber = (swiper.realIndex + 1).toString().padStart(2, '0');
      currentSlide.textContent = slideNumber;
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.btnY',
    // prevEl: '.swiper-button-prev',
  },
});
