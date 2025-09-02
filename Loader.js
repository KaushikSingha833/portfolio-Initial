window.addEventListener('load', function() {
    const loader = document.getElementById('loading-overlay');
    
    loader.style.transition = 'opacity 0.5s ease';
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500); 
  });

  
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const loader = document.getElementById('loading-overlay');
      loader.style.display = 'flex';
      loader.style.opacity = '1'; 
      const href = this.href;
      setTimeout(() => {
        window.location.href = href;
      }, 1000);
    });
  });