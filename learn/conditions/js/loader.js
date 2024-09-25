document.addEventListener('DOMContentLoaded', () => {
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-content');
    const demoTitle = document.getElementById('demo-title');
    const demoDescription = document.getElementById('demo-description');
    const programSelect = document.getElementById('program-select');
    const programCode = document.getElementById('program-code');
    const programOutput = document.getElementById('program-output');
    const runButton = document.getElementById('run-program');

    // Load blog post content from JSON
    fetch('demos/blogPost.json')
        .then(response => response.json())
        .then(data => {
            const post = data.post;
            postTitle.textContent = post.title;

            // Create sections for the blog post
            post.sections.forEach(section => {
                const sectionElement = document.createElement('div');
                const heading = document.createElement('h2');
                heading.textContent = section.heading;
                const content = document.createElement('p');
                content.textContent = section.content;

                sectionElement.appendChild(heading);
                sectionElement.appendChild(content);
                postContent.appendChild(sectionElement);
            });

            // Set demo title and description
            demoTitle.textContent = post.demo.title;
            demoDescription.textContent = post.demo.description;
        })
        .catch(error => console.error('Error loading blog post:', error));

    // Load demo programs from JSON
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
        .catch(error => console.error('Error loading demo programs:', error));

    // Run the selected program
    runButton.addEventListener('click', () => {
        const code = programCode.value;
        if (code) {
            try {
                // Clear previous output
                programOutput.textContent = '';

                // Redirect console.log output to the output area
                console.log = function(output) {
                    programOutput.textContent += output + '\n';
                };

                eval(code); // Run the code entered by the user
            } catch (error) {
                programOutput.textContent = `Error: ${error.message}`;
            }
        } else {
            programOutput.textContent = 'Please select a program to run.';
        }
    });
});
