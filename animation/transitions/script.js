document.getElementById('apply').addEventListener('click', function() {
    // Get the values from the form
    const property = document.getElementById('property').value;
    const duration = document.getElementById('duration').value + 's';
    const timingFunction = document.getElementById('timing-function').value;
    const delay = document.getElementById('delay').value + 's';
    
    // Generate the transition string
    const transitionValue = `${property} ${duration} ${timingFunction} ${delay}`;
    
    // Apply transition to the preview box
    const previewBox = document.getElementById('preview-box');
    previewBox.style.transition = transitionValue;
    
    // Modify the hover state dynamically based on the selected property
    previewBox.style[property] = getHoverValue(property);
  
    // Display the generated CSS code
    const cssCode = `#preview-box {\n  transition: ${transitionValue};\n}\n\n#preview-box:hover {\n  ${property}: ${getHoverValue(property)};\n}`;
    document.getElementById('generated-css').value = cssCode;
  });
  
  // Function to return the appropriate hover value based on the property
  function getHoverValue(property) {
    switch (property) {
      case 'background-color':
        return '#2ecc71';
      case 'width':
        return '200px';
      case 'height':
        return '200px';
      case 'border-radius':
        return '50px';
      case 'opacity':
        return '0.5';
      default:
        return '';
    }
  }
  
  // Copy the generated CSS to clipboard
  document.getElementById('copy').addEventListener('click', function() {
    const cssCode = document.getElementById('generated-css');
    cssCode.select();
    document.execCommand('copy');
    alert('CSS copied to clipboard!');
  });
  