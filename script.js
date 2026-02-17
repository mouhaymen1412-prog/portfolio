document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-btn');
  let currentLang = localStorage.getItem('portfolio-lang') || 'ar';

  // Apply initial language
  updateLanguage(currentLang);
  document.body.className = `lang-${currentLang}`;

  // Language switch
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      updateLanguage(currentLang);
      document.body.className = `lang-${currentLang}`;
      localStorage.setItem('portfolio-lang', currentLang);
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  function updateLanguage(lang) {
    // Update greeting & name
    document.querySelectorAll('.greeting').forEach(el => {
      if (lang === 'ar') el.textContent = el.getAttribute('data-ar') || '';
      else if (lang === 'fr') el.textContent = el.getAttribute('data-fr') || '';
      else if (lang === 'en') el.textContent = el.getAttribute('data-en') || '';
    });

    document.querySelectorAll('.name').forEach(el => {
      if (lang === 'ar') el.textContent = el.getAttribute('data-ar') || '';
      else if (lang === 'fr') el.textContent = el.getAttribute('data-fr') || '';
      else if (lang === 'en') el.textContent = el.getAttribute('data-en') || '';
    });

    // Update project titles & descriptions
    document.querySelectorAll('.project-title').forEach(el => {
      if (lang === 'ar') el.textContent = el.getAttribute('data-ar') || '';
      else if (lang === 'fr') el.textContent = el.getAttribute('data-fr') || '';
      else if (lang === 'en') el.textContent = el.getAttribute('data-en') || '';
    });

    document.querySelectorAll('.project-desc').forEach(el => {
      if (lang === 'ar') el.textContent = el.getAttribute('data-ar') || '';
      else if (lang === 'fr') el.textContent = el.getAttribute('data-fr') || '';
      else if (lang === 'en') el.textContent = el.getAttribute('data-en') || '';
    });

    document.querySelectorAll('.local-note').forEach(el => {
      if (lang === 'ar') el.textContent = el.getAttribute('data-ar') || '';
      else if (lang === 'fr') el.textContent = el.getAttribute('data-fr') || '';
      else if (lang === 'en') el.textContent = el.getAttribute('data-en') || '';
    });

    // Update all other translatable elements
    document.querySelectorAll('[data-ar]').forEach(el => {
      const ar = el.getAttribute('data-ar');
      const fr = el.getAttribute('data-fr');
      const en = el.getAttribute('data-en');

      if (lang === 'ar' && ar) el.innerHTML = ar;
      else if (lang === 'fr' && fr) el.innerHTML = fr;
      else if (lang === 'en' && en) el.innerHTML = en;
    });
  }

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 90,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll progress indicator (optional enhancement)
  const progress = document.querySelector('.scroll-indicator .progress');
  if (progress) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progress.style.width = `${scrollPercent}%`;
    });
  }

  // Fade-in on scroll (intersection observer)
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('fade-in');
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // Add fade-in class for CSS
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
});
