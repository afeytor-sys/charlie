// ─── NAV: hamburger ───
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── NAV: shrink on scroll ───
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) nav.style.padding = window.scrollY > 50
    ? '0.75rem 2.5rem' : '';
});

// ─── Highlight active nav link ───
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === page) a.classList.add('active');
  });
})();

// ─── Scroll reveal ───
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 70);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
revealEls.forEach(el => revealObs.observe(el));

// ─── Contact form ───
function sendForm() {
  const required = ['fname','lname','email','service','ort','message'];
  for (const id of required) {
    const el = document.getElementById(id);
    if (el && !el.value.trim()) {
      el.focus();
      el.style.borderColor = '#e05c00';
      setTimeout(() => el.style.borderColor = '', 2000);
      return;
    }
  }
  document.getElementById('formContent').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}
