document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-btn');
  let currentLang = localStorage.getItem('portfolio-lang') || 'ar';
  
  // Update UI on load
  updateLanguage(currentLang);
  document.body.className = `lang-${currentLang}`;

  // Language switch logic
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      
      // Update language
      updateLanguage(currentLang);
      
      // Update body class for RTL/LTR
      document.body.className = `lang-${currentLang}`;
      
      // Save preference
      localStorage.setItem('portfolio-lang', currentLang);
      
      // Update active button
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  function updateLanguage(lang) {
    // Update all translatable elements
    document.querySelectorAll('[data-ar]').forEach(el => {
      if (lang === 'ar' && el.hasAttribute('data-ar')) {
        el.innerHTML = el.getAttribute('data-ar');
      } else if (lang === 'fr' && el.hasAttribute('data-fr')) {
        el.innerHTML = el.getAttribute('data-fr');
      } else if (lang === 'en' && el.hasAttribute('data-en')) {
        el.innerHTML = el.getAttribute('data-en');
      }
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Create floating bubbles dynamically (optional enhancement)
  const bubbleContainer = document.querySelector('.ocean-bubbles');
  for (let i = 0; i < 5; i++) {
    const bubble = document.createElement('div');
    bubble.style.position = 'absolute';
    bubble.style.borderRadius = '50%';
    bubble.style.background = 'rgba(224, 247, 250, 0.2)';
    bubble.style.width = Math.random() * 30 + 10 + 'px';
    bubble.style.height = bubble.style.width;
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.bottom = '-50px';
    bubble.style.animation = `floatUp ${Math.random() * 10 + 10}s infinite ease-in`;
    bubble.style.opacity = Math.random() * 0.4 + 0.2;
    bubbleContainer.appendChild(bubble);

    // Add keyframes dynamically
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatUp {
        0% { transform: translateY(0) rotate(0deg); opacity: ${bubble.style.opacity}; }
        100% { transform: translateY(-100vh) rotate(${Math.random() * 360}deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
});
