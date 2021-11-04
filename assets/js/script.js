window.addEventListener('scroll', function () {
  var nav = document.querySelector('nav');
  var windowPosition = window.pageYOffset > 0;
  nav.classList.toggle('navbarScroll', windowPosition);
})