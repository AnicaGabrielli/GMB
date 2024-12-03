const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

let currentSlide = 0;

function updateSlide() {
  document.getElementById("slide-content").textContent = slides[currentSlide];
  document.getElementById("prev-btn").disabled = currentSlide === 0;
  document.getElementById("next-btn").disabled = currentSlide === slides.length - 1;
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlide();
  }
}

updateSlide();
