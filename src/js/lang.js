export function changeLanguage(button) {
  var buttons = document.querySelectorAll('.language-switcher button');
  buttons.forEach(function (btn) {
    btn.classList.remove('active');
  });
  button.classList.add('active');
}

window.changeLanguage = changeLanguage;

document
  .querySelector('.lang-switch-btn')
  .addEventListener('click', function () {
    var span = this.querySelector('span');
    span.textContent = span.textContent === 'RU' ? 'UA' : 'RU';
  });
