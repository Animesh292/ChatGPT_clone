// JavaScript code to add the "scrolled" class to the body on scroll
window.addEventListener('scroll', function() {
  var body = document.querySelector('body');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});
