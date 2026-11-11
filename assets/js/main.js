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

  // Contact form — opens the visitor's email client addressed to EMCC
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    const CONTACT_EMAIL = 'ahmiduwanur@gmail.com'; // TODO: swap back to emccohio2020@gmail.com after testing
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const subject = contactForm.querySelector('#subject').value;
      const message = contactForm.querySelector('#message').value.trim();

      const mailSubject = `EMCC Website Contact: ${subject}`;
      const mailBody = `${message}\n\n—\nFrom: ${name} (${email})`;
      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

      window.location.href = mailtoUrl;

      const status = contactForm.querySelector('.form-status');
      status.textContent = 'Your email app should now open with your message ready to send to EMCC — just hit send.';
      status.classList.add('show', 'ok');
      contactForm.reset();
    });
  }
});
