document.addEventListener('DOMContentLoaded', () => {
  // Language switching
  const langButtons = document.querySelectorAll('.lang-btn');
  let currentLang = localStorage.getItem('portfolio-lang') || 'ar';
  
  updateLanguage(currentLang);
  updateBodyClass(currentLang);

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      updateLanguage(currentLang);
      updateBodyClass(currentLang);
      localStorage.setItem('portfolio-lang', currentLang);
      
      // Update active button
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  function updateLanguage(lang) {
    document.querySelectorAll('[data-ar]').forEach(el => {
      const ar = el.getAttribute('data-ar');
      const fr = el.getAttribute('data-fr');
      const en = el.getAttribute('data-en');
      
      if (lang === 'ar' && ar) el.innerHTML = ar;
      else if (lang === 'fr' && fr) el.innerHTML = fr;
      else if (lang === 'en' && en) el.innerHTML = en;
    });
  }

  function updateBodyClass(lang) {
    document.body.className = `lang-${lang}`;
  }

  // Scroll progress indicator
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.querySelector('.scroll-indicator .progress').style.width = `${scrollPercent}%`;
  });

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

  // Fade-in on scroll (simple version)
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
});
