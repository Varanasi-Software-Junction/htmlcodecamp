document.addEventListener('DOMContentLoaded', () => {
    const programSelect = document.getElementById('program-select');
    const programCode = document.getElementById('program-code');
    const programOutput = document.getElementById('program-output');
    const runButton = document.getElementById('run-program');

    // Load the programs from the JSON file
    fetch('demos/programs.json')
        .then(response => response.json())
        .then(data => {
            const programs = data.programs;
            programs.forEach((program, index) => {
                const option = document.createElement('option');
                option.value = index;
                option.textContent = program.name;
                programSelect.appendChild(option);
            });

            // Display the selected program's code
            programSelect.addEventListener('change', function() {
                const selectedProgram = programs[this.value];
                if (selectedProgram) {
                    programCode.value = selectedProgram.code;
                    programOutput.textContent = ''; // Clear previous output
                }
            });
        })
        .catch(error => console.error('Error loading programs:', error));

    // Run the selected program
    runButton.addEventListener('click', () => {
        const code = programCode.value;
        if (code) {
            try {
                // Clear previous output
                programOutput.textContent = '';

                // Use eval to run the code
                console.log = function(output) {
                    programOutput.textContent += output + '\n';
                };

                eval(code);
            } catch (error) {
                programOutput.textContent = `Error: ${error.message}`;
            }
        } else {
            programOutput.textContent = 'Please select a program to run.';
        }
    });
});
