const swiper = new Swiper('.slider', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  loopAdditionalSlides: 0,
  speed: 7000,
  autoplay: {
    delay: 9000,
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
    el: '.pagination',
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

const swiper2 = new Swiper('.serts-swiper-container', {
  loop: true,
  // loopAdditionalSlides: 1,
  slidesPerView: 3,
  // speed: 7000,
  //   autoplay: {
  //    delay: 5000,
  // },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
    // stretch: '18px',
    depth: 100,
    scale: 1,
  },
  pagination: {
    el: '.pagin-btn-group',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    prevEl: '.serts-btn-prev',
    nextEl: '.serts-btn-next',
  },
});

const swiper3 = new Swiper('.review-swiper-container', {
  loop: true,
  slidesPerView: 1,
  speed: 2000,
  parallax: true,
  autoplay: {
    delay: 5000,
  },
  effect: 'slide',
  pagination: {
    el: '.review-swiper-pagin',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    prevEl: '.review-swiper-prev',
    nextEl: '.review-swiper-next',
  },
});
