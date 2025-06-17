// Toggle Dark/Light Mode  
const darkModeToggle = document.getElementById('darkModeToggle');  
const body = document.body;  

// Cek preferensi user dari localStorage  
if (localStorage.getItem('darkMode') === 'enabled') {  
  body.classList.add('dark-mode');  
}  

darkModeToggle.addEventListener('click', () => {  
  body.classList.toggle('dark-mode');  

  // Simpan preferensi di localStorage  
  if (body.classList.contains('dark-mode')) {  
    localStorage.setItem('darkMode', 'enabled');  
    darkModeToggle.innerHTML = "<i class='bx bx-sun'></i>";  
  } else {  
    localStorage.setItem('darkMode', 'disabled');  
    darkModeToggle.innerHTML = "<i class='bx bx-moon'></i>";  
  }  
});  
