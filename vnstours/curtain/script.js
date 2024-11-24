let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  
  // Move to the next slide
  currentSlide = (currentSlide + 1) % totalSlides;
  
  // Show the next slide
  slides[currentSlide].classList.add('active');
}

// Change slides every 4 seconds (sync with curtain animation)
setInterval(showNextSlide, 4000);
