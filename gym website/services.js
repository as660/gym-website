// services.js

// Example: Toggle service details on click
const serviceItems = document.querySelectorAll('.service-item');

serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        const details = item.querySelector('ul');
        if (details) {
            details.classList.toggle('visible');
        }
    });
});

