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

// Video pop-up controls
function openDemo() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('demoVideo');
  modal.style.display = 'flex';
  video.play();
}

function closeDemo() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('demoVideo');
  video.pause();
  video.currentTime = 0;
  modal.style.display = 'none';
}

// Close video modal
window.addEventListener('click', (e) => {
  const modal = document.getElementById('videoModal');
  if (e.target === modal) {
    closeDemo();
  }
});
