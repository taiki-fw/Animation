
var login__btn = document.getElementById('login-btn');
var login__menu = document.getElementById('login-modal');

var close = document.getElementById('close');

login__btn.addEventListener('click', function() {
  login__menu.classList.add('is_open');
})

close.addEventListener('click', function() {
  login__menu.classList.remove('is_open');
})