let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll('.slider-item');
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  document.getElementById('slider-wrapper').style.transform = 'translateX(' + (-currentSlide * 100) + '%)';
}