



// Smooth scrolling for internal navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navigation for external links (e.g., other pages)
document.querySelectorAll('nav a[href]').forEach(anchor => {
    if (!anchor.getAttribute('href').startsWith('#')) {
        anchor.addEventListener('click', function () {
            // Allow default behavior for external links
            // No e.preventDefault() here
        });
    }
});

// Toggle navigation menu for mobile view
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
