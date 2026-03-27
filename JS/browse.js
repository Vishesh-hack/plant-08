// Browse page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const mainHeader = document.querySelector('header');
    const scrollHeader = document.querySelector('.scroll-header');

    if (mainHeader && scrollHeader) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                mainHeader.style.opacity = '0';
                mainHeader.style.pointerEvents = 'none';
                scrollHeader.classList.add('visible');
            } else {
                mainHeader.style.opacity = '1';
                mainHeader.style.pointerEvents = 'auto';
                scrollHeader.classList.remove('visible');
            }
        });
    }
});