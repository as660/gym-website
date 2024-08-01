// about.js

// Example: Smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Expand/Collapse team member details
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
        const details = member.querySelector('.details');
        if (details) {
            details.classList.toggle('expanded');
        }
    });
});

