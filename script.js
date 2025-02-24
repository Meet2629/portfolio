// Dark Mode and Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️'; // Change icon to sun when in dark mode
  } else {
    themeToggleBtn.textContent = '🌙'; // Change icon to moon when in light mode
  }
});

// Animation for Skills and Projects Cards
window.addEventListener('scroll', () => {
  const skillCards = document.querySelectorAll('.skill-card');
  const projectCards = document.querySelectorAll('.project-card');

  skillCards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.style.transform = 'scale(1)';
      card.style.opacity = '1';
    }
  });

  projectCards.forEach(card => {
    if (card.getBoundingClientRect().top < window.innerHeight - 100) {
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
    }
  });
});
