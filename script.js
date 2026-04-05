// === Theme Toggle ===
const themeToggle = document.getElementById('theme-toggle');
function setDarkMode(dark) {
  document.body.classList.toggle('light', !dark);
  document.body.classList.toggle('dark', dark);
  localStorage.setItem('preferred-theme', dark ? 'dark' : 'light');
}
const saved = localStorage.getItem('preferred-theme');
setDarkMode(saved ? saved === 'dark' : true);
themeToggle.addEventListener('click', () => {
  setDarkMode(!document.body.classList.contains('dark'));
});

// === Language Switcher ===
const langBtns = document.querySelectorAll('.lang-btn');
let currentLang = localStorage.getItem('portfolio-lang') || 'ar';
function updateLang(lang) {
  // Update html/lang and dir
  document.documentElement.lang = lang;
  document.body.classList.forEach(c => {
    if(c.startsWith('lang-')) document.body.classList.remove(c);
  });
  document.body.classList.add('lang-' + lang);
  document.body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  // All elements with data-*
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    // Input, textarea placeholder or value
    if(el.placeholder !== undefined) {
      el.placeholder = el.getAttribute('data-' + lang) || el.placeholder;
    } else if(el.value !== undefined && el.tagName === 'INPUT') {
      el.value = el.getAttribute('data-' + lang) || el.value;
    } else {
      el.innerHTML = el.getAttribute('data-' + lang) || el.innerHTML;
    }
  });
  // Mark active btn
  langBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
}
langBtns.forEach(btn => {
  btn.addEventListener('click', () => updateLang(btn.dataset.lang));
});
updateLang(currentLang);

// === Navbar smooth scroll & active section ===
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    if(link.hash) {
      e.preventDefault();
      document.querySelector(link.hash).scrollIntoView({behavior: "smooth"});
      history.replaceState(null, null, link.hash);
    }
  });
});

// === Fade-in On Scroll ===
function inViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 32 && rect.bottom > 80;
}
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    if(inViewport(el)) el.classList.add('in-view');
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// === Contact Form (demo) ===
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert(
    currentLang === 'ar' ? 'تم إرسال رسالتك (نموذج تجريبي).' : 
    currentLang === 'fr' ? 'Votre message a été envoyé (démo).' : 
    'Your message has been sent (demo).'
  );
});
