// speech-to-text.js

// Check if the browser supports the Web Speech API
if (!('webkitSpeechRecognition' in window)) {
    alert("Sorry, your browser does not support the Web Speech API. Please use Google Chrome.");
} else {
    const recognition = new webkitSpeechRecognition(); // Create a new instance of the Web Speech API
    recognition.interimResults = true; // Allow interim results (partial recognition)
    recognition.lang = 'en-US'; // Set language for recognition

    const toggleBtn = document.getElementById('toggleBtn');
    const output = document.getElementById('output');
    let isListening = false; // Track listening state

    // Start or stop listening when the button is clicked
    toggleBtn.addEventListener('click', () => {
        if (isListening) {
            recognition.stop(); // Stop recognition
            toggleBtn.textContent = 'Start Listening'; // Update button text
        } else {
            recognition.start(); // Start recognition
            toggleBtn.textContent = 'Stop Listening'; // Update button text
        }
        isListening = !isListening; // Toggle listening state
    });

    // Handle recognition results
    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript; // Get the transcript of recognized speech
        }
        output.value = transcript; // Display the transcript in the textarea
    };

    // Handle errors
    recognition.onerror = (event) => {
        console.error('Error occurred in recognition: ' + event.error); // Log errors
        toggleBtn.textContent = 'Start Listening'; // Reset button text
        isListening = false; // Reset listening state
    };

    // Reset the button when recognition ends
    recognition.onend = () => {
        toggleBtn.textContent = 'Start Listening'; // Reset button text
        isListening = false; // Reset listening state
    };
}
