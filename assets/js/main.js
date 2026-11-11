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

  // Contact form — submits to Formspree, which emails EMCC directly
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = contactForm.querySelector('.form-status');
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          status.textContent = 'Jazakum Allahu khayran! Your message has been sent — we will get back to you soon.';
          status.classList.remove('error');
          status.classList.add('show', 'ok');
          contactForm.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (err) {
        status.textContent = "Something went wrong sending your message. Please email us directly at emccohio2020@gmail.com.";
        status.classList.remove('ok');
        status.classList.add('show', 'error');
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
});
