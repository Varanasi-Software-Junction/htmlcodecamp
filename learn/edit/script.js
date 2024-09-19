function parseJSON() {
    const input = document.getElementById('json-input').value;
    const output = document.getElementById('json-output');

    try {
        const parsed = JSON.parse(input);
        const formatted = JSON.stringify(parsed, null, 2);
        output.innerHTML = `<code class="json">${formatted}</code>`;
        hljs.highlightElement(output.querySelector('code'));
        output.style.color = 'black';
    } catch (e) {
        output.textContent = 'Invalid JSON: ' + e.message;
        output.style.color = 'red';
    }
}

function exportJSON() {
    const json = document.getElementById('json-input').value;
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
    URL.revokeObjectURL(url);
}

function importJSON() {
    const fileInput = document.getElementById('import-file');
    const file = fileInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        const content = event.target.result;
        document.getElementById('json-input').value = content;
        parseJSON(); // Optional: Automatically parse and display the imported JSON
    };
    reader.readAsText(file);
}
