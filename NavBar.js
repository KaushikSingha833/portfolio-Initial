const sections = document.querySelectorAll('section, footer');
const navLinks = document.querySelectorAll('#header-right a');

window.addEventListener('scroll', () => {
  let current = '';

  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; 
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  
  
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) { 
    current = 'contact'; 
  }

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});