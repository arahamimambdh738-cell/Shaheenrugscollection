// 🔐 Content Protection Script
document.addEventListener('contextmenu', event => event.preventDefault());
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});

// 📸 HERO SLIDER LOGIC
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function changeSlide() {
    // Remove active class from current
    slides[currentSlide].classList.remove('active');
    
    // Calculate next slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to next
    slides[currentSlide].classList.add('active');
}

// Change image every 4 seconds
setInterval(changeSlide, 4000);

console.log("Shaheen Rugs: Slider & Scripts Loaded");