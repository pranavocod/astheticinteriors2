// Mobile nav
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');
toggle?.addEventListener('click', () => links.classList.toggle('is-open'));
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('is-open')));

// Portfolio filters
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.card');
filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const f = btn.dataset.filter;
    cards.forEach(c => {
      c.classList.toggle('is-hidden', f !== 'all' && c.dataset.cat !== f);
    });
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.section, .strip, .hero__content');
revealEls.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => io.observe(el));

// Form
const form = document.getElementById('quoteForm');
const msg = document.getElementById('formMsg');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  if (!data.name || !data.email || !data.message) {
    msg.textContent = 'Please complete name, email and project details.';
    msg.style.color = '#e57373';
    return;
  }
  msg.style.color = '';
  msg.textContent = `Thank you, ${data.name.split(' ')[0]}. We will be in touch within two business days.`;
  form.reset();
});
