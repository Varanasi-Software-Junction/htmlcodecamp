const navick=document.getElementById("icon");
let n=1;
function changeIcon()
{
    
    if(n==1)
    {
        filename="me1.jpg";
        // console.log(filename);
    }
    else
    {
      filename="me.jpg";  
    }
    navick.href=filename;
    n=1-n;
console.log(filename,n);
}
setInterval("changeIcon()",5000);



// Toggle between Solid and Gradient mode





const toggleModeButton = document.getElementById('toggleMode');
const solidColor = document.getElementById('solidColor');
const gradientColor = document.getElementById('gradientColor');

toggleModeButton.addEventListener('click', () => {
    if (solidColor.style.display === 'none') {
        solidColor.style.display = 'block';
        gradientColor.style.display = 'none';
        toggleModeButton.textContent = 'Switch to Gradient Generator';
    } else {
        solidColor.style.display = 'none';
        gradientColor.style.display = 'block';
        toggleModeButton.textContent = 'Switch to Solid Generator';
    }
});

// Solid color logic (same as before)
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');
const colorDisplay = document.getElementById('colorDisplay');
const rgbCode = document.getElementById('rgbCode');
const hexCode = document.getElementById('hexCode');
const copyMessage = document.getElementById('copyMessage');

// Function to convert RGB to HEX
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

function updateColor() {
    const red = parseInt(redSlider.value);
    const green = parseInt(greenSlider.value);
    const blue = parseInt(blueSlider.value);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    const hexColor = rgbToHex(red, green, blue);
    colorDisplay.style.backgroundColor = rgbColor;
    rgbCode.textContent = `RGB: ${rgbColor}`;
    hexCode.textContent = `HEX: ${hexColor}`;
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
}

// Event listeners for the sliders
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
updateColor();

// Gradient color logic
const startColor = document.getElementById('startColor');
const endColor = document.getElementById('endColor');
const direction = document.getElementById('direction');
const gradientDisplay = document.getElementById('gradientDisplay');
const gradientCode = document.getElementById('gradientCode');
const copyGradientMessage = document.getElementById('copyGradientMessage');

function updateGradient() {
    const start = startColor.value;
    const end = endColor.value;
    const dir = direction.value;
    const gradient = `linear-gradient(${dir}, ${start}, ${end})`;
    gradientDisplay.style.backgroundImage = gradient;
    gradientCode.textContent = `CSS: ${gradient}`;
}

// Event listeners for gradient inputs
startColor.addEventListener('input', updateGradient);
endColor.addEventListener('input', updateGradient);
direction.addEventListener('change', updateGradient);
updateGradient();
