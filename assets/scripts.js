document.addEventListener('DOMContentLoaded', function () {
  const carousels = document.querySelectorAll('[data-carousel]');

  carousels.forEach((carousel) => {
    const track = carousel.querySelector('.work-style-track');
    const slides = Array.from(track.querySelectorAll('img'));
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    let currentIndex = 0;

    if (slides.length === 0) return;

    slides.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
      dotsContainer.appendChild(dot);
    });

    function updateCarousel() {
      const width = carousel.clientWidth;
      track.style.transform = `translateX(${-currentIndex * width}px)`;
      dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    function moveToPrevious() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    }

    function moveToNext() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    }

    prevButton.addEventListener('click', moveToPrevious);
    nextButton.addEventListener('click', moveToNext);

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
  });
});
