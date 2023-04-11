// Get the video element from the HTML page
const video = document.getElementById('qr-video');

// Get the canvas element from the HTML page
const canvas = document.getElementById('qr-canvas');

// Get the div element where the decoded QR code will be displayed
const qrResult = document.getElementById('qr-result');

// Get the start and stop buttons from the HTML page
const startScannerButton = document.getElementById('start-scanner');
const stopScannerButton = document.getElementById('stop-scanner');

// Set up a variable to hold the QR code scanner
let qrCodeScanner;

// Add an event listener to the start button to start the QR code scanner
startScannerButton.addEventListener('click', () => {
  // Create a new QR code scanner object
  qrCodeScanner = new QrCode();

  // Start the QR code scanner
  qrCodeScanner.start(
    {
      // Set the video element as the source of the camera stream
      videoSource: video,

      // Set the canvas element as the target for the captured image
      canvasElement: canvas,

      // Set the callback function to be called when a QR code is detected
      onScan: (qrCodeResult) => {
        // Display the decoded QR code result in the div element
        qrResult.innerHTML = qrCodeResult;

        // Stop the QR code scanner
        qrCodeScanner.stop();
        
        // Disable the stop button and enable the start button
        stopScannerButton.disabled = true;
        startScannerButton.disabled = false;
      },
    },
    (error) => {
      // Display an error message if the QR code scanner could not be started
      console.error(error);
    }
  );

  // Enable the stop button and disable the start button
  stopScannerButton.disabled = false;
  startScannerButton.disabled = true;
});

// Add an event listener to the stop button to stop the QR code scanner
stopScannerButton.addEventListener('click', () => {
  // Stop the QR code scanner
  qrCodeScanner.stop();

  // Disable the stop button and enable the start button
  stopScannerButton.disabled = true;
  startScannerButton.disabled = false;
});
