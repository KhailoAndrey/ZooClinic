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
    nextEl: '.moreBtn',
  },
});
const nextButtons = document.querySelectorAll('.btnY');
nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    swiper.slideNext();
  });
});

const swiper2 = new Swiper('.serts-swiper-container', {
  loop: true,
  slidesPerView: 3,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
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

document.addEventListener('DOMContentLoaded', () => {
    const openPopupButtons = document.querySelectorAll('.header__filii, .header__contacts-item-btn');
    const popups = document.querySelectorAll('.filii-popap, .popap-phone');

    // Функция для переключения видимости попапа
    const togglePopup = (popup) => {
        if (popup.classList.contains('hidden')) {
            popup.classList.remove('hidden');
            setTimeout(() => {
                popup.classList.add('show');
                openPopupButtons.forEach(button => button.classList.add('active')); // Добавляем класс active при открытии попапа
            }, 10); // Небольшая задержка для срабатывания анимации
        } else {
            popup.classList.remove('show');
            setTimeout(() => {
                popup.classList.add('hidden');
                openPopupButtons.forEach(button => button.classList.remove('active')); // Убираем класс active при закрытии попапа
            }, 500); // Время должно совпадать с transition-duration в CSS
        }
    };

    // Открыть/закрыть попап по клику на кнопку
    openPopupButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Останавливаем всплытие события
            togglePopup(popups[index]);
        });
    });

    // Закрыть попап при клике вне его области
    document.addEventListener('click', (e) => {
        popups.forEach((popup, index) => {
            if (!popup.contains(e.target) && !openPopupButtons[index].contains(e.target)) {
                if (!popup.classList.contains('hidden')) {
                    togglePopup(popup);
                }
            }
        });
    });

    // Закрыть попап по нажатию клавиши Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            popups.forEach((popup, index) => {
                if (!popup.classList.contains('hidden')) {
                    togglePopup(popup);
                    openPopupButtons[index].blur(); // Убираем фокус со всех кнопок
                }
            });
        }
    });
});



