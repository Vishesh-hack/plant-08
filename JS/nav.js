document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const backdrop = document.querySelector('.nav-backdrop');

    if (!toggle || !nav || !backdrop) {
        return;
    }

    const openNav = () => {
        document.body.classList.add('nav-open');
        toggle.setAttribute('aria-expanded', 'true');
    };

    const closeNav = () => {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        if (document.body.classList.contains('nav-open')) {
            closeNav();
        } else {
            openNav();
        }
    });

    backdrop.addEventListener('click', closeNav);

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeNav);
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeNav();
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && document.body.classList.contains('nav-open')) {
            closeNav();
        }
    });
});
