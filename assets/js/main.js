// EMCC site — shared behavior

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const headerInner = document.querySelector('.header-inner');
  if (toggle && headerInner) {
    toggle.addEventListener('click', () => {
      headerInner.classList.toggle('open');
    });
    headerInner.querySelectorAll('.nav-links a').forEach((link) => {
      link.addEventListener('click', () => headerInner.classList.remove('open'));
    });
  }

  // Highlight active nav link based on current page
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });

  // Footer year
  document.querySelectorAll('.js-year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  // Contact form (front-end only demo — wire up to a backend or form service later)
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const status = contactForm.querySelector('.form-status');
      status.textContent = 'Jazakum Allahu khayran! Your message has been received — we will get back to you soon.';
      status.classList.add('show', 'ok');
      contactForm.reset();
    });
  }
});
