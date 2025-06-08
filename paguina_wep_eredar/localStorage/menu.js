document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menuItems = document.querySelector('.menu-items');

    toggle.addEventListener('click', () => {
        menuItems.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.menu-global');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(14, 119, 181, 0.9)';
            nav.style.padding = '5px 0';
        } else {
            nav.style.backgroundColor = '#0e77b5';
            nav.style.padding = '0';
        }
    });

    // Enlaces internos con scroll suave
    document.querySelectorAll('.menu-item[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
