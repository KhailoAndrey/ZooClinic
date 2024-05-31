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
    nextEl: '.btnY',
  },
});
const slideNumber = 3;
const nextButtons = document.querySelectorAll('.moreBtn');
nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    swiper.slideTo(slideNumber);
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

document.addEventListener('DOMContentLoaded', () => {
  const openFormOverlayButtons = document.querySelectorAll('.form-popap-btn');
  const formOverlay = document.querySelector('.overlay-container');
  const backdropOverlay = document.querySelector('.backdrop-overlay');
  const backdropOverlaySubmit = document.querySelector('.backdrop-overlay-submit');
  const closeButtons = document.querySelectorAll('.close-img, .back-btn a');

  // Функция для показа оверлея
  const showOverlay = (overlay) => {
    formOverlay.classList.remove('hidden');
    setTimeout(() => {
      overlay.classList.add('show');
    }, 10);
  };

  // Функция для скрытия оверлея
  const hideOverlay = (overlay) => {
    overlay.classList.remove('show');
    setTimeout(() => {
      if (!backdropOverlay.classList.contains('show') && !backdropOverlaySubmit.classList.contains('show')) {
        formOverlay.classList.add('hidden');
      }
    }, 500); // Соответствие длительности перехода
  };

  // Показываем первый оверлей по клику на кнопку
  openFormOverlayButtons.forEach(button => {
    button.addEventListener('click', () => {
      showOverlay(backdropOverlay);
      button.blur(); // Убираем фокус с кнопки
    });
  });

  // Обработка отправки формы
   document.addEventListener('submit', (e) => {
    if (e.target.matches('#overlay-contact-form, #contact-form')) {
      e.preventDefault(); // Предотвращаем фактическую отправку формы
      hideOverlay(backdropOverlay);
      setTimeout(() => {
        showOverlay(backdropOverlaySubmit);
      }, 500); // Ждем пока первый оверлей скроется
    }
  });

  // Закрытие оверлеев по нажатию клавиши Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (backdropOverlay.classList.contains('show')) {
        hideOverlay(backdropOverlay);
      } else if (backdropOverlaySubmit.classList.contains('show')) {
        hideOverlay(backdropOverlaySubmit);
      }
    }
  });

  // Закрытие оверлеев при клике вне области контента
  formOverlay.addEventListener('click', (e) => {
    if (e.target === backdropOverlay && backdropOverlay.classList.contains('show')) {
      hideOverlay(backdropOverlay);
    } else if (e.target === backdropOverlaySubmit && backdropOverlaySubmit.classList.contains('show')) {
      hideOverlay(backdropOverlaySubmit);
    }
  });

  // Закрытие оверлеев при клике на кнопки закрытия или ссылку "Назад до головної"
  closeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      hideOverlay(backdropOverlaySubmit);
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.getElementsByClassName('close-img')[0];
  
  document.querySelectorAll('.zoomable-image').forEach(img => {
    img.onclick = function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
    }
  });
  
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.coop-vacan-item');

  items.forEach(item => {
    const plusBtn = item.querySelector('.plus-btn');
    const minusBtn = item.querySelector('.minus-btn');
    const opis = item.querySelector('.coop-vacan-item-opis');

    plusBtn.addEventListener('click', function () {
      // Закрываем все остальные элементы
      items.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.coop-vacan-item-opis');
          otherItem.querySelector('.plus-btn');
          otherItem.querySelector('.minus-btn'); 
        }
      });

      // Открываем текущий элемент
      opis.classList.remove('hidden');
      plusBtn.classList.add('hidden');
      minusBtn.classList.remove('hidden');
      item.classList.add('vacan-open');
    });

    minusBtn.addEventListener('click', function () {
      // Закрываем текущий элемент
      opis.classList.add('hidden');
      plusBtn.classList.remove('hidden');
      minusBtn.classList.add('hidden');
      item.classList.remove('vacan-open');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Получаем все кнопки с классом vacan-btn-link
    const vacanBtnLinks = document.querySelectorAll('.vacan-btn-link');
    const vacanFormSubmit = document.querySelector('.vacan-form-submit');
    const closeButton = vacanFormSubmit.querySelector('.vacan-form-submit-btn-close');
    
    vacanBtnLinks.forEach(function(button) {
        button.addEventListener('click', function() {
            // Находим соответствующие элементы
            const parent = button.closest('.coop-vacan-item');
            const opis = parent.querySelector('.coop-vacan-item-opis');
            const minusBtn = parent.querySelector('.minus-btn');
            const plusBtn = parent.querySelector('.plus-btn');

            // Добавляем/убираем классы hidden
            opis.classList.add('hidden');
            parent.classList.remove('vacan-open');
            minusBtn.classList.add('hidden');
            plusBtn.classList.remove('hidden');
            vacanFormSubmit.classList.remove('hidden');
        });
    });

    // Добавляем обработчик события на кнопку закрытия
    closeButton.addEventListener('click', function() {
        // Логирование для отладки
        console.log('Close button clicked:', closeButton);

        // Добавляем класс hidden к vacan-form-submit
        vacanFormSubmit.classList.add('hidden');
    });
});


