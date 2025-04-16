const scroll = document.querySelector('.scroll');
const scrollArea = document.createElement('div');
scrollArea.classList.add('scroll-area');

scroll.appendChild(scrollArea);

scrollArea.addEventListener('mouseenter', () => {
    scroll.style.overflowY = 'auto'; 
});

// scrollArea.addEventListener('mouseleave', () => {
//     scroll.style.overflowY = 'hidden'; 
// });
