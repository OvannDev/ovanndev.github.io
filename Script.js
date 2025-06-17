document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const icon = darkModeToggle.querySelector('i');

  // Cek preferensi dark mode
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    icon.classList.replace('bx-moon', 'bx-sun');
  }

  // Toggle dark mode
  darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      icon.classList.replace('bx-moon', 'bx-sun');
    } else {
      localStorage.setItem('darkMode', 'disabled');
      icon.classList.replace('bx-sun', 'bx-moon');
    }
  });
});
