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

document.addEventListener('DOMContentLoaded', function () {
  const blocks = document.querySelectorAll('.ques-main-block-item');

  blocks.forEach(block => {
    const plusBtn = block.querySelector('.plus-btn');
    const minusBtn = block.querySelector('.minus-btn');
    const openAnswer = block.querySelector('.open-answer');

    plusBtn.addEventListener('click', function () {
      // Закрываем все остальные блоки
      blocks.forEach(otherBlock => {
        if (otherBlock !== block) {
          otherBlock.querySelector('.open-answer').classList.add('hidden');
          otherBlock.querySelector('.plus-btn').classList.remove('hidden');
          otherBlock.querySelector('.minus-btn').classList.add('hidden');
        }
      });

      // Открываем текущий блок
      openAnswer.classList.remove('hidden');
      plusBtn.classList.add('hidden');
      minusBtn.classList.remove('hidden');
    });

    minusBtn.addEventListener('click', function () {
      // Закрываем текущий блок
      openAnswer.classList.add('hidden');
      plusBtn.classList.remove('hidden');
      minusBtn.classList.add('hidden');
    });
  });
});