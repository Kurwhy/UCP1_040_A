let currentIndex = 0;
const images = [
    "u1.jpg",
    "u2.jpg",
    "u3.jpg"
];

function showCurrentImage() {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showCurrentImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showCurrentImage();
}

showCurrentImage();

