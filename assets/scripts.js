// Splash Screen Logic
window.addEventListener('load', function () {
  setTimeout(function () {
    const splashOverlay = document.getElementById('splashOverlay');
    if (splashOverlay) {
      splashOverlay.classList.add('fade-out');
      setTimeout(function () {
        splashOverlay.style.display = 'none';
      }, 800);
    }
  }, 2500);
});
setTimeout(function () {
  const splashOverlay = document.getElementById('splashOverlay');
  if (splashOverlay) {
    splashOverlay.classList.add('fade-out');
    setTimeout(function () {
      splashOverlay.style.display = 'none';
    }, 800);
  }
}, 8000);

// 原本的 carousel 等功能

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

      // 視差滾動效果
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const storyBg = document.querySelector('.story-bg');
      storyBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // 時間軸動畫
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });

    
    // 聊天功能
    const chatWidget = document.getElementById('chatWidget');
    const chatIcon = document.getElementById('chatIcon');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatInputField = document.getElementById('chatInputField');
    const chatSend = document.getElementById('chatSend');

    chatWidget.addEventListener('click', () => {
      chatWidget.classList.toggle('expanded');
      chatIcon.style.display = chatWidget.classList.contains('expanded') ? 'none' : 'block';
      chatMessages.classList.toggle('show');
      chatInput.classList.toggle('show');
    });

    chatSend.addEventListener('click', sendMessage);
    chatInputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
      const message = chatInputField.value.trim();
      if (message) {
        const userMessage = document.createElement('div');
        userMessage.className = 'chat-message user';
        userMessage.textContent = message;
        chatMessages.appendChild(userMessage);
        chatInputField.value = '';

        // 模擬回覆
        setTimeout(() => {
          const botMessage = document.createElement('div');
          botMessage.className = 'chat-message bot';
          botMessage.textContent = '感謝您的訊息！我們的設計顧問會盡快與您聯繫。';
          chatMessages.appendChild(botMessage);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
      }
    }

});
