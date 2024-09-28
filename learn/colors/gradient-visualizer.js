const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const shapeSelect = document.getElementById('shape');
const sizeSelect = document.getElementById('size');
const previewBox = document.getElementById('previewBox');
const cssCode = document.getElementById('cssCode');

// Function to update the gradient preview and CSS code
function updateGradient() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    const shape = shapeSelect.value;
    const size = sizeSelect.value;

    const gradient = `radial-gradient(${shape} ${size}, ${color1}, ${color2})`;

    // Update the preview box's background
    previewBox.style.background = gradient;

    // Update the CSS code output
    cssCode.textContent = `background: ${gradient};`;
}

// Add event listeners to inputs
color1Input.addEventListener('input', updateGradient);
color2Input.addEventListener('input', updateGradient);
shapeSelect.addEventListener('change', updateGradient);
sizeSelect.addEventListener('change', updateGradient);

// Initialize with default values
updateGradient();
