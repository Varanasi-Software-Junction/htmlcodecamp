const synth = window.speechSynthesis;
const voiceSelect = document.getElementById('voiceSelect');
const speakButton = document.getElementById('speakButton');
let voices = [];

// Populate the voice list
function populateVoiceList() {
  voices = synth.getVoices();
  voiceSelect.innerHTML = '';  // Clear the select element

  voices.forEach(voice => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute('data-voice', voice.name);
    voiceSelect.appendChild(option);
  });
}

// Ensure voices are loaded
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = populateVoiceList;
}

function speakText() {
  const text = document.getElementById('textInput').value;

  // Error handling for empty input
  if (!text) {
    alert('Please enter some text.');
    return;
  }

  // Check if the browser is already speaking
  if (synth.speaking) {
    console.error('Already speaking');
    return;
  }

  if (text !== '') {
    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-voice');
    
    // Find and set the selected voice
    utterThis.voice = voices.find(voice => voice.name === selectedVoice);
    
    // Optional: Set pitch and rate
    utterThis.pitch = 1;
    utterThis.rate = 1;

    // Disable the button while speaking
    speakButton.disabled = true;

    // Event listener for when the speech finishes
    utterThis.onend = function() {
      speakButton.disabled = false;
      console.log('Speech finished');
    };

    // Event listener for speech synthesis error
    utterThis.onerror = function(event) {
      console.error('SpeechSynthesisUtterance.onerror', event);
      speakButton.disabled = false;
    };

    // Speak the text
    synth.speak(utterThis);
  }
}
