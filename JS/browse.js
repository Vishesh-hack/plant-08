// Browse page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Show loading UI
    if (typeof LoadingUI !== 'undefined') {
        LoadingUI.show();
    }

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

    // Hide loading UI with minimum delay for smooth animation
    if (typeof LoadingUI !== 'undefined') {
        setTimeout(() => {
            LoadingUI.hide();
        }, 500);
    }
});