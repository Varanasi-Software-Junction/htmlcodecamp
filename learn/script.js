let algorithms = [];
let programs = [];

// Load Algorithms and Programs from JSON files
async function loadData() {
    // Fetching the algorithms
    const algorithmResponse = await fetch('algorithms.json');
    algorithms = await algorithmResponse.json();

    // Fetching the programs
    const programsResponse = await fetch('programs.json');
    programs = await programsResponse.json();

    displayAlgorithms();
}

// Display the list of algorithms
function displayAlgorithms() {
    const algorithmList = document.getElementById('algorithm-list');
    algorithmList.innerHTML = ''; // Clear the list
    algorithms['algorithms'].forEach(algorithm => {
        const li = document.createElement('li');
        li.textContent = algorithm;
        li.onclick = () => displayPrograms(algorithm);
        algorithmList.appendChild(li);
    });
}

// Display the list of programs for the selected algorithm
function displayPrograms(selectedAlgorithm) {
    const programList = document.getElementById('program-list');
    programList.innerHTML = ''; // Clear the previous list

    programs['programs'].forEach(program => {
        if (program.algorithm === selectedAlgorithm) {
            const li = document.createElement('li');
            li.textContent = program.program;
            li.onclick = () => loadProgramCode(program.file);
            programList.appendChild(li);
        }
    });
}

// Load the code for a selected program from its JSON file
async function loadProgramCode(filename) {
    // alert(filename);
    try {
        const response = await fetch(`${filename}`);
        const programData = await response.json();

        const codeContainer = document.getElementById('code-container');
        codeContainer.innerHTML = ''; // Clear previous code

        const description = document.createElement('p');
        description.textContent = programData.description || 'No description available';

        const complexity = document.createElement('p');
        complexity.textContent = `Time Complexity: ${programData.complexity || 'N/A'}`;

        const codeBlock = document.createElement('div');
        codeBlock.classList.add('code-block');

        // Ensure programData.code exists and is an object
        if (programData.code && typeof programData.code === 'object') {
            // Load the program code files dynamically for each language
            for (let [language, codeFile] of Object.entries(programData.code)) {
                const codeTitle = document.createElement('h3');
                codeTitle.textContent = `Code in ${language}:`;

                const codeElement = document.createElement('pre');

                // Fetch the code from the respective JSON file for each language
                const codeResponse = await fetch(`data/${codeFile}`);
                const codeData = await codeResponse.json();

                codeElement.textContent = codeData.code || 'Code not available';

                const copyButton = document.createElement('button');
                copyButton.textContent = 'Copy to Clipboard';
                copyButton.onclick = () => copyToClipboard(codeData.code);

                codeBlock.appendChild(codeTitle);
                codeBlock.appendChild(codeElement);
                codeBlock.appendChild(copyButton);
            }
        } else {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'No code available for this program.';
            codeBlock.appendChild(errorMessage);
        }

        codeContainer.appendChild(description);
        codeContainer.appendChild(complexity);
        codeContainer.appendChild(codeBlock);
    } catch (error) {
        console.error('Error loading the program code:', error);
        const codeContainer = document.getElementById('code-container');
        codeContainer.innerHTML = '<p>Error loading the program. Please try again.</p>';
    }
}

// Function to copy code to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Code copied to clipboard!');
    }).catch(err => {
        console.error('Error copying text: ', err);
    });
}

// Filter both algorithm and program lists based on the search input
function filterContent() {
    const searchQuery = document.getElementById('search-box').value.toLowerCase();
    const algorithmList = document.getElementById('algorithm-list');
    const programList = document.getElementById('program-list');

    // Filter algorithms
    algorithmList.innerHTML = '';
    algorithms['algorithms'].forEach(algorithm => {
        if (algorithm.toLowerCase().includes(searchQuery)) {
            const li = document.createElement('li');
            li.textContent = algorithm;
            li.onclick = () => displayPrograms(algorithm);
            algorithmList.appendChild(li);
        }
    });

    // Filter programs
    programList.innerHTML = '';
    programs['programs'].forEach(program => {
        if (program.program.toLowerCase().includes(searchQuery) || program.algorithm.toLowerCase().includes(searchQuery)) {
            const li = document.createElement('li');
            li.textContent = program.program;
            li.onclick = () => loadProgramCode(program.file);
            programList.appendChild(li);
        }
    });
}


// Initialize the data loading
loadData();
