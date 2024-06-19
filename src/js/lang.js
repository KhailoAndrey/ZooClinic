export function changeLanguage(button) {
  var buttons = document.querySelectorAll('.language-switcher button');
  buttons.forEach(function (btn) {
    btn.classList.remove('active');
  });
  button.classList.add('active');
}

window.changeLanguage = changeLanguage;

document.querySelectorAll('.lang-switch-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    document.querySelectorAll('.lang-switch-btn span').forEach(function (span) {
      span.textContent = span.textContent === 'RU' ? 'UA' : 'RU';
    });
  });
});
