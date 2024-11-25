let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".wishlist-carousel");
  const totalSlides = slides.length;

  currentIndex += step;
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // If at the first slide, loop to the last
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  // Move the carousel by changing the transform property
  const carousel = document.querySelector(".carousel");
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Optional: Auto-slide every 3 seconds
setInterval(() => {
  moveSlide(1);
}, 3000);
