// audio-recorder.js

// Get references to DOM elements
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const audioPlayback = document.getElementById('audioPlayback');
const downloadLink = document.getElementById('downloadLink');

let mediaRecorder;
let recordedChunks = [];

// Function to start recording
startBtn.addEventListener('click', async () => {
    // Request microphone access
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Create a new MediaRecorder instance
    mediaRecorder = new MediaRecorder(stream);

    // Event handler for data available
    mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
        }
    };

    // Event handler for when recording stops
    mediaRecorder.onstop = () => {
        const blob = new Blob(recordedChunks, { type: 'audio/webm' });
        const audioURL = URL.createObjectURL(blob);
        
        // Set the audio source to the recorded data
        audioPlayback.src = audioURL;
        audioPlayback.play();

        // Prepare the download link
        downloadLink.href = audioURL;
        downloadLink.download = 'recording.webm';
        downloadLink.style.display = 'block';
        downloadLink.innerText = 'Download Recording';
        
        // Reset recorded chunks for the next recording
        recordedChunks = [];
    };

    // Start recording
    mediaRecorder.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
});

// Function to stop recording
stopBtn.addEventListener('click', () => {
    mediaRecorder.stop();
    startBtn.disabled = false;
    stopBtn.disabled = true;
});
