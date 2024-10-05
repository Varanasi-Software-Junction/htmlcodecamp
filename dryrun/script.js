function runFunction() {
    const functionCode = document.getElementById('functionCode').value;
    const outputDiv = document.getElementById('output');
  
    try {
      // Create a new function from the provided code
      const myFunction = new Function(functionCode);
  
      // Get the number of arguments the function expects
      const numArgs = myFunction.length;
  
      // Prompt the user for arguments if necessary
      if (numArgs > 0) {
        const args = [];
        for (let i = 0; i < numArgs; i++) {
          const argValue = prompt(`Enter argument ${i + 1}:`);
          args.push(argValue);
        }
  
        // Call the function with the provided arguments
        const result = myFunction(...args);
        outputDiv.textContent = `Result: ${result}`;
      } else {
        // Call the function without arguments
        const result = myFunction();
        outputDiv.textContent = `Result: ${result}`;
      }
    } catch (error) {
      outputDiv.textContent = `Error: ${error.message}`;
    }
  }
  
  // Attach event listener to the run button
  document.getElementById('runButton').addEventListener('click', runFunction);