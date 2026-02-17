document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-btn');
  let currentLang = localStorage.getItem('portfolio-lang') || 'ar';

  updateLanguage(currentLang);
  document.body.className = `lang-${currentLang}`;

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
    // Greeting & Name
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

    // Project titles & desc
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

    // Timeline dates & titles
    document.querySelectorAll('[data-ar]').forEach(el => {
      const ar = el.getAttribute('data-ar');
      const fr = el.getAttribute('data-fr');
      const en = el.getAttribute('data-en');

      if (lang === 'ar' && ar) el.innerHTML = ar;
      else if (lang === 'fr' && fr) el.innerHTML = fr;
      else if (lang === 'en' && en) el.innerHTML = en;
    });

    // Footer copyright
    document.querySelectorAll('.footer-copyright').forEach(el => {
      if (lang === 'ar') el.textContent = el.getAttribute('data-ar') || '';
      else if (lang === 'fr') el.textContent = el.getAttribute('data-fr') || '';
      else if (lang === 'en') el.textContent = el.getAttribute('data-en') || '';
    });
  }

  // Smooth scroll
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

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(sec => {
    sec.classList.add('fade-in');
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(20px)';
    sec.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(sec);
  });

  const style = document.createElement('style');
  style.textContent = `.fade-in { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);
});
