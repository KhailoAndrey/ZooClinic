const swiper = new Swiper('.slider', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  // loopAdditionalSlides: 0,
  speed: 5000,
  autoplay: false,
  // autoplay: {
  //   delay: 5000,
  //   // disableOnInteraction: false,
  // },
  // effect: 'fade',
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
  // fadeEffect: {
  //   crossFade: true,
  // },
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
// setTimeout(() => {
//   swiper.params.autoplay = {
//     delay: 5000, // Устанавливаем задержку между сменой слайдов
//     disableOnInteraction: false,
//   };
//   swiper.autoplay.start(); // Запускаем автоплей
// }, 10000); // 10 секунд
const slideNumber = 3;
const nextButtons = document.querySelectorAll('.moreBtn');
nextButtons.forEach(button => {
  button.addEventListener('click', () => {
    swiper.slideTo(slideNumber);
  });
});

// свайпер сертификатов
const swiper2 = new Swiper('.serts-swiper-container', {
  loop: true,
  // slidesPerView: 3,
  effect: 'coverflow',
  speed: 2000,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      // spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
  },
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

// свайпер отзывов
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

// раскрытие закрытие вопрос-ответ
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

// модалка филий
document.addEventListener('DOMContentLoaded', () => {
  const openPopupButtons = document.querySelectorAll(
    '.header__filii, .header__contacts-item-btn'
  );
  const popups = document.querySelectorAll('.filii-popap, .popap-phone');

  // Функция для переключения видимости попапа
  const togglePopup = popup => {
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
    button.addEventListener('click', e => {
      e.stopPropagation(); // Останавливаем всплытие события
      togglePopup(popups[index]);
    });
  });

  // Закрыть попап при клике вне его области
  document.addEventListener('click', e => {
    popups.forEach((popup, index) => {
      if (
        !popup.contains(e.target) &&
        !openPopupButtons[index].contains(e.target)
      ) {
        if (!popup.classList.contains('hidden')) {
          togglePopup(popup);
        }
      }
    });
  });

  // Закрыть попап по нажатию клавиши Esc
  document.addEventListener('keydown', e => {
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

// показ оверлеев
document.addEventListener('DOMContentLoaded', () => {
  const openFormOverlayButtons = document.querySelectorAll(
    '.form-popap-btn, .btn-contact-mob, .burg-visit-btn'
  );
  const formOverlay = document.querySelector('.overlay-container');
  const backdropOverlay = document.querySelector('.backdrop-overlay');
  const backdropOverlaySubmit = document.querySelector(
    '.backdrop-overlay-submit'
  );
  const closeButtons = document.querySelectorAll(
    '.close-img, .cls-btn, .back-btn a'
  );

  // Функция для показа оверлея
  const showOverlay = overlay => {
    formOverlay.classList.remove('hidden');
    setTimeout(() => {
      overlay.classList.add('show');
    }, 10);
  };

  // Функция для скрытия оверлея
  const hideOverlay = overlay => {
    overlay.classList.remove('show');
    setTimeout(() => {
      if (
        !backdropOverlay.classList.contains('show') &&
        !backdropOverlaySubmit.classList.contains('show')
      ) {
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
  document.addEventListener('submit', e => {
    if (e.target.matches('#overlay-contact-form, #contact-form')) {
      e.preventDefault(); // Предотвращаем фактическую отправку формы
      hideOverlay(backdropOverlay);
      setTimeout(() => {
        showOverlay(backdropOverlaySubmit);
      }, 500); // Ждем пока первый оверлей скроется
    }
  });

  // Закрытие оверлеев по нажатию клавиши Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (backdropOverlay.classList.contains('show')) {
        hideOverlay(backdropOverlay);
      } else if (backdropOverlaySubmit.classList.contains('show')) {
        hideOverlay(backdropOverlaySubmit);
        document.activeElement.blur();
      }
    }
  });

  // Закрытие оверлеев при клике вне области контента
  formOverlay.addEventListener('click', e => {
    if (
      e.target === backdropOverlay &&
      backdropOverlay.classList.contains('show')
    ) {
      hideOverlay(backdropOverlay);
    } else if (
      e.target === backdropOverlaySubmit &&
      backdropOverlaySubmit.classList.contains('show')
    ) {
      hideOverlay(backdropOverlaySubmit);
    }
  });

  // Закрытие оверлеев при клике на кнопки закрытия или ссылку "Назад до головної"
  closeButtons.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      if (backdropOverlay.classList.contains('show')) {
        hideOverlay(backdropOverlay);
      } else if (backdropOverlaySubmit.classList.contains('show')) {
        hideOverlay(backdropOverlaySubmit);
        document.activeElement.blur();
      }
    });
  });
});

// модалка сертификатов
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close-img-btn');

  document.querySelectorAll('.zoomable-image').forEach(img => {
    img.onclick = function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
    };
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
});

// блок вакансий
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
          // otherItem.querySelector('.coop-vacan-item-opis');
          // otherItem.querySelector('.plus-btn');
          // otherItem.querySelector('.minus-btn');
          otherItem.classList.add('hidden');
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
      items.forEach(otherItem => {
        otherItem.classList.remove('hidden');
      });
    });
  });
});

// блок вакансий
document.addEventListener('DOMContentLoaded', function () {
  // Получаем все кнопки с классом vacan-btn-link
  const vacanBtnLinks = document.querySelectorAll('.vacan-btn-link');
  const vacanFormSubmit = document.querySelector('.vacan-form-submit');
  const closeButton = vacanFormSubmit.querySelector(
    '.vacan-form-submit-btn-close'
  );
  const closeVacanOverlay = document.querySelector('.vacan-overlay-close');
  const vacanSubmitOverlay = document.querySelector('.vacan-submit-overlay');
  const vacanBtnLinkSubmit = document.querySelector('.vacan-btn-link-submit');
  const openFormButton = document.querySelector('.open-form');
  const items = document.querySelectorAll('.coop-vacan-item');

  vacanBtnLinks.forEach(function (button) {
    button.addEventListener('click', function () {
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
  closeButton.addEventListener('click', function () {
    // Добавляем класс hidden к vacan-form-submit
    vacanFormSubmit.classList.add('hidden');
    items.forEach(otherItem => {
      otherItem.classList.remove('hidden');
    });
  });

  function validateForm() {
    // Получаем значения полей формы
    const name = document.getElementById('vacan-name').value.trim();
    const phone = document.getElementById('vacan-phone').value.trim();
    const privacyPolicy = document.getElementById(
      'vacan-privacy-policy'
    ).checked;

    // Проверяем, что все обязательные поля заполнены
    if (name && phone && privacyPolicy) {
      // Если все поля заполнены, возвращаем true
      return true;
    } else {
      // Если какое-то обязательное поле не заполнено, возвращаем false
      return false;
    }
  }
  vacanBtnLinkSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    // Проверяем заполнение обязательных полей перед отправкой формы
    if (validateForm()) {
      // Если форма валидна, добавляем класс hidden к vacan-form-submit
      vacanFormSubmit.classList.add('hidden');
      items.forEach(otherItem => {
        otherItem.classList.remove('hidden');
      });
      // Убираем класс hidden с vacan-submit-overlay
      vacanSubmitOverlay.classList.remove('hidden');
    } else {
      // Если форма не валидна, выводим сообщение об ошибке
      alert('Please fill in all required fields.');
    }
  });
  // Добавляем обработчик события на кнопку открытия формы
  openFormButton.addEventListener('click', function () {
    // Показываем форму сабмита
    vacanFormSubmit.classList.remove('hidden');
  });
  closeVacanOverlay.addEventListener('click', function () {
    vacanSubmitOverlay.classList.add('hidden');
  });
});

// открытие закрытие бургер меню
document.querySelectorAll('.burger-mob-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    document.querySelector('.burger-overlay').classList.remove('hidden');
  });
});

document
  .querySelector('.burger-btn-close')
  .addEventListener('click', function () {
    document.querySelector('.burger-overlay').classList.add('hidden');
  });

document.querySelectorAll('.burger-overlay a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('.burger-overlay').classList.add('hidden');
  });
});

// открытие попапа филии на мобилке
document.addEventListener('DOMContentLoaded', () => {
  const filMobBtn = document.querySelector('.fil-mob-btn');
  const filMobPopap = document.querySelector('.fil-mob-popap');
  const imgShow = filMobBtn.querySelector('.show');
  const imgHidden = filMobBtn.querySelector('.hidden');

  function openPopup() {
    filMobPopap.classList.remove('hidden');
    imgShow.classList.add('hidden');
    imgHidden.classList.remove('hidden');
  }

  function closePopup() {
    filMobPopap.classList.add('hidden');
    imgShow.classList.remove('hidden');
    imgHidden.classList.add('hidden');
  }

  filMobBtn.addEventListener('click', function () {
    if (filMobPopap.classList.contains('hidden')) {
      openPopup();
    } else {
      closePopup();
    }
  });

  // Закрытие попапа при клике вне его области (используем mousedown вместо click)
  document.addEventListener('click', function (event) {
    if (
      !filMobPopap.contains(event.target) &&
      !filMobBtn.contains(event.target)
    ) {
      closePopup();
    }
  });
});

// открытие закрытие соцсетей
document.addEventListener('DOMContentLoaded', () => {
  const smsPopapBtn = document.querySelector('.sms-popap-btn');
  const smsPopap = document.querySelector('.sms-popap');
  const smsCloseBtn = smsPopap.querySelector('button');

  smsPopapBtn.addEventListener('click', function () {
    smsPopap.classList.remove('hidden');
  });

  smsCloseBtn.addEventListener('click', function () {
    smsPopap.classList.add('hidden');
  });
  // Закрытие попапа при клике вне его области
  document.addEventListener('click', function (event) {
    if (
      !smsPopap.contains(event.target) &&
      !smsPopapBtn.contains(event.target)
    ) {
      smsPopap.classList.add('hidden');
    }
  });
});

// открытие закрытие телефонов
document.addEventListener('DOMContentLoaded', () => {
  const telPopapBtn = document.querySelector('.tel-popap-btn');
  const telPopap = document.querySelector('.tel-popap');
  const imgShow = telPopapBtn.querySelector('.show');
  const imgHidden = telPopapBtn.querySelector('.hidden');

  telPopapBtn.addEventListener('click', function () {
    telPopap.classList.toggle('hidden');
    imgShow.classList.toggle('hidden');
    imgHidden.classList.toggle('hidden');
  });

  // Закрытие попапа при клике вне его области
  document.addEventListener('click', function (event) {
    if (
      !telPopap.contains(event.target) &&
      !telPopapBtn.contains(event.target)
    ) {
      telPopap.classList.add('hidden');
      imgShow.classList.remove('hidden');
      imgHidden.classList.add('hidden');
    }
  });
});

// открытите/закрытие попапа филии в бургере
document.addEventListener('DOMContentLoaded', () => {
  const burgFiliiBtn = document.querySelector('.burg-filii-btn');
  const filBurgPopap = document.querySelector('.fil-burg-popap');

  function openPopup() {
    filBurgPopap.classList.remove('hidden');
  }

  function closePopup() {
    filBurgPopap.classList.add('hidden');
  }

  burgFiliiBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    if (filBurgPopap.classList.contains('hidden')) {
      openPopup();
    } else {
      closePopup();
    }
  });

  document.addEventListener('click', function (event) {
    if (
      !filBurgPopap.contains(event.target) &&
      !burgFiliiBtn.contains(event.target)
    ) {
      closePopup();
    }
  });
});

// открытите/закрытие попапа телефонов в бургере
document.addEventListener('DOMContentLoaded', () => {
  const burgTelBtn = document.querySelector('.burg-tel-btn');
  const telBurgPopap = document.querySelector('.tel-burg-popap');

  function openPopup() {
    telBurgPopap.classList.remove('hidden');
  }

  function closePopup() {
    telBurgPopap.classList.add('hidden');
  }

  burgTelBtn.addEventListener('click', function (event) {
    event.stopPropagation();
    if (telBurgPopap.classList.contains('hidden')) {
      openPopup();
    } else {
      closePopup();
    }
  });

  document.addEventListener('click', function (event) {
    if (
      !telBurgPopap.contains(event.target) &&
      !burgTelBtn.contains(event.target)
    ) {
      closePopup();
    }
  });
});

// открытие/закрытие оверлея карты
document.addEventListener('DOMContentLoaded', function () {
  const overlayMapContainer = document.querySelector('.overlay-map-container');
  const mapOverlayClose = document.querySelector('.map-overlay-close');
  const mapOverlay = document.querySelector('.map-overlay');
  const mapIframe = document.querySelector('.map-block-frame');

  // Функция для закрытия оверлея
  function closeOverlay() {
    overlayMapContainer.classList.add('hidden');
    mapIframe.src = 'about:blank'; // Очистить src iframe при закрытии
  }

  // Закрытие при клике на кнопку
  mapOverlayClose.addEventListener('click', closeOverlay);

  // Закрытие при нажатии на Esc
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeOverlay();
    }
  });

  // Закрытие при клике вне карты
  document.addEventListener('click', function (event) {
    if (overlayMapContainer.classList.contains('hidden')) return;

    if (!mapOverlay.contains(event.target)) {
      closeOverlay();
    }
  });

  // Обработчик кликов на ссылки для показа карт
  const showMapLinks = document.querySelectorAll('.show-map-link');
  showMapLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const mapUrl = link.getAttribute('data-map');
      if (mapUrl) {
        // Установим src iframe на пустое значение
        mapIframe.src = '';

        // Обновляем src только после того, как iframe станет пустым
        setTimeout(function () {
          mapIframe.src = mapUrl;
          overlayMapContainer.classList.remove('hidden');
        }, 300);
      }
    });
  });
});

// открытие/закрытие оверлея аптек
document.addEventListener('DOMContentLoaded', function () {
  const chooseBtn = document.querySelector('.pharm-choose-btn');
  const overlayContainer = document.querySelector('.pharm-choose-container');
  const closeButton = document.querySelector('.farm-overlay-close');
  const overlay = document.querySelector('.pharm-choose-overlay');

  function openOverlay() {
    overlayContainer.style.display = 'flex';
  }

  function closeOverlay() {
    overlayContainer.style.display = 'none';
  }

  chooseBtn.addEventListener('click', openOverlay);
  closeButton.addEventListener('click', closeOverlay);

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeOverlay();
    }
  });

  overlayContainer.addEventListener('click', function (event) {
    if (event.target === overlayContainer) {
      closeOverlay();
    }
  });

  overlay.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});

// показ интро видео
document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('intro-video');
  const videoContainer = document.getElementById('video-container');
  const sliderContainer = document.getElementById('slider-container');
  video.load();
  video.onended = function () {
    videoContainer.classList.add('hidden');
    sliderContainer.classList.remove('hidden');
  };
});
