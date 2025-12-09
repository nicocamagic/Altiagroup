// Simple navigation script: mobile toggle + mark active page
document.addEventListener('DOMContentLoaded', function () {
    const navList = document.querySelector('.nav-list');
    const links = document.querySelectorAll('.nav-list a');

    // close mobile menu on link click
    links.forEach(link => {
        link.addEventListener('click', function () {
            if (navList) navList.classList.remove('show');
        });
    });

    // mark active link based on filename
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(link => {
        const hrefFile = link.getAttribute('href').split('/').pop();
        if (hrefFile === currentFile) link.classList.add('active');
    });

    // mobile toggle
    const toggle = document.querySelector('.nav-toggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            if (navList) navList.classList.toggle('show');
        });
    }
});
