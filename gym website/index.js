// index.js

// Example: Initialize a simple image carousel
const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showImage(index) {
    carouselImages.forEach((img, idx) => {
        img.style.display = (idx === index) ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showImage(currentIndex);
}

setInterval(nextImage, 3000); // Change image every 3 seconds
