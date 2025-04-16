window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 80) {
        header.style.backgroundColor = '#222222'; 
    } else {
        header.style.backgroundColor = 'rgba(255, 0, 0, 0)';
    }
});