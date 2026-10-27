const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle menu
menuIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
});

// Close menu
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
