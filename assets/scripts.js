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
}, 800);

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

  const heroSlides = document.querySelectorAll('.hero-bg-carousel .bg-slide');
  if (heroSlides.length > 1) {
    let heroIndex = 0;
    setInterval(() => {
      heroSlides[heroIndex].classList.remove('active');
      heroIndex = (heroIndex + 1) % heroSlides.length;
      heroSlides[heroIndex].classList.add('active');
    }, 5200);
  }

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
    const chatToggle = document.getElementById('chatToggle');
    const chatPanel = document.getElementById('chatPanel');

    chatToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      chatWidget.classList.toggle('expanded');
      chatToggle.style.display = 'none';
    });

    document.addEventListener('click', (event) => {
      if (chatWidget.classList.contains('expanded') && !chatWidget.contains(event.target)) {
        chatWidget.classList.remove('expanded');
        chatToggle.style.display = '';
      }
    });

    function initPortfolioPage() {
      const portfolioSection = document.getElementById('portfolioGrid');
      if (!portfolioSection) return;

      const projectData = {
        '01': {
          title: '青山雅居',
          category: '居家現代',
          location: '台北市信義區',
          area: '45坪',
          style: '溫潤木質與深棕線條',
          desc: '本案位於台北市信義區，以溫潤木質與現代俐落線條為設計主軸。透過深棕色系的運用與自然光影的掌握，打造出既舒適又富有質感的居家場域。客廳以開放式設計突出空間流動性，臥房則強調私密性與放鬆氛圍。',
          highlights: [
            '頂級橡木傢俱搭配深棕色石材',
            '間接照明系統營造層次感',
            '開放式廚房設計與生活區完美融合',
            '訂製軟裝搭配提升質感',
            '環保建材與永續設計理念'
          ]
        },
        '02': {
          title: '木色時光',
          category: '居家現代',
          location: '台北市內湖區',
          area: '68坪',
          style: '溫潤木質與深棕線條',
          desc: '位於內湖的現代居家，以橡木與灰色系為主調。設計理念在於創造一個靜謐的私密空間，讓居住者能在忙碌的都市生活中找到寧靜。每一個角落都體現對細節的堅持，從傢俱選擇到光影配置。',
          highlights: [
            '環保橡木全室應用',
            '灰色系色彩層疊構圖',
            '低調黃銅配件點綴',
            '智能照明系統',
            '大面積儲納空間設計'
          ]
        },
        '03': {
          title: '漫步空間',
          category: '居家現代',
          location: '104臺北市中山區恆安里雙城街3巷十二號14F',
          area: '52坪',
          style: '溫潤木質與深棕線條',
          desc: '設計重點在於空間流動性的營造。通過高效的動線規劃，讓每個區域既獨立又相互連結。材質的對話與色彩的過渡，創造出既溫暖又不失現代感的生活場景。',
          highlights: [
            '開放式平面規劃',
            '多功能家具配置',
            '自然通風與採光設計',
            '色彩過渡的視覺層次',
            '內嵌式收納系統'
          ]
        },
        '04': {
          title: '菁英會所',
          category: '商務沈穩',
          location: '台北市大安區',
          area: '120坪',
          style: '高級會客與辦公空間',
          desc: '以深色木紋與高質感石材打造高端商務空間。沉穩的配色與精準的光影設計，完美詮釋了專業精神與高級品味的結合。會議室採用隱私保護設計，接待區展現企業形象。',
          highlights: [
            '沉香木質商業傢俱',
            '義大利進口石材應用',
            '專業級隔音系統',
            '商業照明設計',
            '無線簡報系統整合'
          ]
        },
        '05': {
          title: '企業總部',
          category: '商務沈穩',
          location: '台北市信義區',
          area: '180坪',
          style: '高級會客與辦公空間',
          desc: '企業形象的關鍵展示空間。運用冷色調石材與溫暖的間接照明營造信任感，結合企業品牌色彩與標誌元素融入空間設計，打造獨特的企業識別空間。',
          highlights: [
            '大規模接待大廳設計',
            '企業品牌色彩整合',
            '藝術品展示空間',
            '多功能會議室',
            '員工休閒區設計'
          ]
        },
        '06': {
          title: '私人辦公室',
          category: '商務沈穩',
          location: '104臺北市中山區恆安里雙城街3巷十二號14F',
          area: '85坪',
          style: '高級會客與辦公空間',
          desc: '為企業主打造獨特的行政辦公室。透過訂製傢俱與當代藝術品搭配，既維持專業氣質，又展現個人品味與社會地位象徵。設計強調隱私、舒適與效率。',
          highlights: [
            '訂製行政辦公傢俱',
            '當代藝術品收藏展示',
            '獨立會客區域',
            '智能辦公系統',
            '品茶區與放鬆空間'
          ]
        },
        '07': {
          title: '雲端居所',
          category: '輕奢雅居',
          location: '台北市信義區',
          area: '95坪',
          style: '精緻細節與自然材質',
          desc: '精緻與簡約完美平衡的設計典範。運用頂級石材、高級絲絨面料與柔和光影，打造出雅緻而不張揚的高質感生活場景。每一件傢俱都經過精心挑選，體現業主的生活品味。',
          highlights: [
            '進口義大利大理石應用',
            '頂級歐洲絲絨面料',
            '水晶吊燈與壁燈搭配',
            '藝術品收藏展示區',
            '私人酒窖設計'
          ]
        },
        '08': {
          title: '晶悅居邸',
          category: '輕奢雅居',
          location: '台北市大安區',
          area: '110坪',
          style: '精緻細節與自然材質',
          desc: '為業主創造絕對私密與豪華的臥房空間。透過頂級面料、低調金屬配飾與精心設計的智能燈光系統，營造完美的睡眠與放鬆環境。衣帽間設計滿足高端生活需求。',
          highlights: [
            '進口雲端絲棉寢具區',
            '低調金屬配飾細節',
            '智能調光與溫度系統',
            '開放式衣帽間',
            '獨立浴室與SPA區'
          ]
        },
        '09': {
          title: '藝術軒居',
          category: '輕奢雅居',
          location: '台北市信義區',
          area: '150坪',
          style: '精緻細節與自然材質',
          desc: '以藝術品收藏為核心的精緻居家設計。結合博物館級的展示手法與生活空間的設計，讓收藏成為空間的靈魂。每個展示區都配備專業照明與濕度控制，確保藝術品的安全與美觀。',
          highlights: [
            '博物館級展示照明',
            '溫濕度自動控制系統',
            '訂製美術櫃展示',
            '藝術品專業打光',
            '私人美術館概念設計'
          ]
        }
      };

      const filterBtns = document.querySelectorAll('.filter-btn');
      const portfolioItems = document.querySelectorAll('.portfolio-item');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
          const filter = this.getAttribute('data-filter');
          filterBtns.forEach(b => b.classList.remove('active'));
          this.classList.add('active');

          portfolioItems.forEach((item, index) => {
            const category = item.getAttribute('data-category');
            const isMatch = filter === 'all' || category === filter;
            item.classList.toggle('hidden', !isMatch);
            if (isMatch) {
              setTimeout(() => {
                item.style.animationDelay = `${index * 0.1}s`;
              }, 50);
            }
          });
        });
      });

      const portfolioDetail = document.getElementById('portfolioDetail');
      const detailClose = document.getElementById('detailClose');
      const overlayBtns = document.querySelectorAll('.overlay-btn');

      overlayBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          const projectId = this.getAttribute('data-project-id');
          const data = projectData[projectId];
          if (!data || !portfolioDetail) return;

          document.getElementById('detailImage').src = `./img/collection/${projectId}_1.jpg`;
          document.getElementById('detailCategory').textContent = data.category;
          document.getElementById('detailTitle').textContent = data.title;
          document.getElementById('detailLocation').textContent = data.location;
          document.getElementById('detailArea').textContent = data.area;
          document.getElementById('detailStyle').textContent = data.style;
          document.getElementById('detailDesc').textContent = data.desc;

          const highlightsList = document.getElementById('detailHighlights');
          highlightsList.innerHTML = '';
          data.highlights.forEach(highlight => {
            const li = document.createElement('li');
            li.textContent = highlight;
            highlightsList.appendChild(li);
          });

          portfolioDetail.classList.add('active');
          document.body.style.overflow = 'hidden';
        });
      });

      if (detailClose && portfolioDetail) {
        detailClose.addEventListener('click', function () {
          portfolioDetail.classList.remove('active');
          document.body.style.overflow = 'auto';
        });

        portfolioDetail.addEventListener('click', function (e) {
          if (e.target === this) {
            this.classList.remove('active');
            document.body.style.overflow = 'auto';
          }
        });

        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape') {
            portfolioDetail.classList.remove('active');
            document.body.style.overflow = 'auto';
          }
        });
      }
    }

    initPortfolioPage();

});
