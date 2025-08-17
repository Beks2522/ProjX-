// Theme toggle with localStorage
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') root.classList.add('light');

themeToggle?.addEventListener('click', () => {
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});

// Simple IntersectionObserver for reveal-on-scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Demo: like counter buttons
document.querySelectorAll('.icon-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const span = btn.querySelector('span');
    if (!span) return;
    const n = parseInt(span.textContent || '0', 10);
    span.textContent = n + 1;
    btn.classList.add('pulse');
    setTimeout(() => btn.classList.remove('pulse'), 300);
  });
});
