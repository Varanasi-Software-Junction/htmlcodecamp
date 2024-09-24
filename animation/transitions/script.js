let transitionCount = 0;

document.getElementById('add-transition').addEventListener('click', function() {
  transitionCount++;
  
  const transitionForm = document.createElement('div');
  transitionForm.innerHTML = `
    <label for="property-${transitionCount}">Property to Transition:</label>
    <select id="property-${transitionCount}">
      <option value="background-color">Background Color</option>
      <option value="width">Width</option>
      <option value="height">Height</option>
      <option value="border-radius">Border Radius</option>
      <option value="opacity">Opacity</option>
    </select>

    <label for="start-value-${transitionCount}">Start Value:</label>
    <input type="text" id="start-value-${transitionCount}" placeholder="e.g. #e74c3c or 100px">

    <label for="end-value-${transitionCount}">End Value:</label>
    <input type="text" id="end-value-${transitionCount}" placeholder="e.g. #2ecc71 or 200px">

    <label for="duration-${transitionCount}">Duration (s):</label>
    <input type="number" id="duration-${transitionCount}" value="1" step="0.1">

    <label for="timing-function-${transitionCount}">Timing Function:</label>
    <select id="timing-function-${transitionCount}">
      <option value="ease">Ease</option>
      <option value="linear">Linear</option>
      <option value="ease-in">Ease-in</option>
      <option value="ease-out">Ease-out</option>
      <option value="ease-in-out">Ease-in-out</option>
    </select>

    <label for="delay-${transitionCount}">Delay (s):</label>
    <input type="number" id="delay-${transitionCount}" value="0" step="0.1">
  `;
  document.getElementById('transition-list').appendChild(transitionForm);
});

document.getElementById('apply').addEventListener('click', function() {
  const previewBox = document.getElementById('preview-box');
  let transitionStyles = '';
  let hoverStyles = '';
  
  for (let i = 1; i <= transitionCount; i++) {
    const property = document.getElementById(`property-${i}`).value;
    const startValue = document.getElementById(`start-value-${i}`).value;
    const endValue = document.getElementById(`end-value-${i}`).value;
    const duration = document.getElementById(`duration-${i}`).value + 's';
    const timingFunction = document.getElementById(`timing-function-${i}`).value;
    const delay = document.getElementById(`delay-${i}`).value + 's';
    
    // Apply starting values
    previewBox.style[property] = startValue;

    // Build the transition and hover styles
    transitionStyles += `${property} ${duration} ${timingFunction} ${delay}, `;
    hoverStyles += `${property}: ${endValue};\n  `;
  }

  // Apply the transition styles and hover styles to the preview box
  previewBox.style.transition = transitionStyles.slice(0, -2); // Remove trailing comma
  previewBox.addEventListener('mouseenter', function() {
    previewBox.style.cssText += hoverStyles;
  });

  // Generate the CSS for the user to copy
  const generatedCSS = `
#preview-box {
  transition: ${transitionStyles.slice(0, -2)};
}

#preview-box:hover {
  ${hoverStyles}
}`;
  document.getElementById('generated-css').value = generatedCSS;
});

// Copy the generated CSS
document.getElementById('copy').addEventListener('click', function() {
  const cssCode = document.getElementById('generated-css');
  cssCode.select();
  document.execCommand('copy');
  alert('CSS copied to clipboard!');
});
