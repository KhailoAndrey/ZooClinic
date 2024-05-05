// ---Banner slider---

// const swiper = new swiper('.swiper', {
//   direction: 'vertical',
//   loop: true,
//   initialSlide: 0,
//   slidesPerView: 1,
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: true,
//     verticalClass: 'swiper-pagination-vertical'
//   },
//   autoplay: {
//     delay: 1000,
//     // stopOnLastSlide: true,
//     disableOnInteraction: false,
//   },
//   speed: 3000,
//   effect: 'fade',
//   crossFade: true,
// });

// ------

const slides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function createPaginationButtons() {
  slides.forEach((slide, i) => {
    const button = document.createElement('div');
    button.classList.add('pagination-button');
    if (i === currentSlide) {
      button.classList.add('active');
    }
    button.addEventListener('click', () => {
      goToSlide(i);
    });
    pagination.appendChild(button);
  });
}

function updatePagination() {
  const buttons = document.querySelectorAll('.pagination-button');
  buttons.forEach((button, i) => {
    if (i === currentSlide) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function goToSlide(index) {
  currentSlide = index;
  const translateValue = -index * 100;
  document.querySelector(
    '.slide-container'
  ).style.transform = `translateY(${translateValue}%)`;
  showSlide(currentSlide);
  updatePagination();
  // Update the count span
  let countSpan = document.querySelector('.pagination .count');
  countSpan.textContent = ('0' + (currentSlide + 1)).slice(-2); // Update count to match slide index
}

createPaginationButtons();
// showSlide(currentSlide);

// setInterval(() => {
//     currentSlide = (currentSlide + 1) % slides.length;
//     goToSlide(currentSlide);
// }, 3000);
