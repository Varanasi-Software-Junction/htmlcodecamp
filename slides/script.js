let slides = [];
let currentSlide = 0;
let isFlipping = false;
let autoSlideInterval;

// Fetch slide data from JSON file
document.addEventListener("DOMContentLoaded", () => {
    fetch('slides.json')
        .then(response => response.json())
        .then(data => {
            slides = data;
            showInitialSlides();
            startAutoSlide();
        })
        .catch(error => console.error('Error loading slides:', error));
});

// Initialize the first slide and its corresponding text
function showInitialSlides() {
    showSlideContent(0, 'picture1', 'name1', 'location1', 'description1');
    showSlideContent(1, 'picture2', 'name2', 'location2', 'description2');
}

// Function to show a slide's content in specific elements
function showSlideContent(index, pictureId, nameId, locationId, descriptionId) {
    const slide = slides[index];
    document.getElementById(pictureId).src = slide.picture;
    document.getElementById(nameId).textContent = slide.name;
    document.getElementById(locationId).textContent = slide.location;
    document.getElementById(descriptionId).textContent = slide.description || "No description available"; // Add default description
}

// Function to start automatic slide show
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
    }, 5000); // Change slides every 5 seconds
}

// Function to stop automatic slide show (optional)
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Flip to the next side of the cube
function nextSlide() {
    if (isFlipping) return; // Prevent flipping while another flip is in progress
    isFlipping = true;

    const cube = document.querySelector('.cube');
    const nextIndex = (currentSlide + 1) % slides.length;

    if (cube.classList.contains('flip-forward')) {
        // Going from text to image
        cube.classList.remove('flip-forward');
        cube.classList.add('flip-backward');

        setTimeout(() => {
            showSlideContent(nextIndex, 'picture1', 'name1', 'location1', 'description1');
            isFlipping = false;
            currentSlide = nextIndex;
        }, 1000);
    } else {
        // Going from image to text
        cube.classList.add('flip-forward');
        cube.classList.remove('flip-backward');

        setTimeout(() => {
            showSlideContent(nextIndex, 'picture2', 'name2', 'location2', 'description2');
            isFlipping = false;
        }, 1000);
    }
}

// Flip to the previous side of the cube
function prevSlide() {
    if (isFlipping) return; // Prevent flipping while another flip is in progress
    isFlipping = true;

    const cube = document.querySelector('.cube');
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;

    if (cube.classList.contains('flip-backward')) {
        // Going from text to image
        cube.classList.remove('flip-backward');
        cube.classList.add('flip-forward');

        setTimeout(() => {
            showSlideContent(prevIndex, 'picture1', 'name1', 'location1', 'description1');
            isFlipping = false;
            currentSlide = prevIndex;
        }, 1000);
    } else {
        // Going from image to text
        cube.classList.add('flip-backward');
        cube.classList.remove('flip-forward');

        setTimeout(() => {
            showSlideContent(prevIndex, 'picture2', 'name2', 'location2', 'description2');
            isFlipping = false;
        }, 1000);
    }
}
