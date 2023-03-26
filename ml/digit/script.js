let isPredicting = false;

function predict() {
  if (!isPredicting) {
    return;
  }

  const input = [];

  // Get the current frame from the video capture
  const image = capture.toImage();

  // Convert the image to grayscale and resize to 28x28 pixels
  const grayscale = image.grayscale();
  const resized = grayscale.resize(28, 28);

  // Flatten the image pixel values and normalize to between 0 and 1
  resized.each((val) => {
    input.push(val / 255);
  });

  // Make a prediction with the neural network
  nn.predict(input, (err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(results);
  });

  // Call predict() again to make continuous predictions
  setTimeout(predict, 50);
}

// Start capturing video
capture.start(() => {
  console.log('Capture started');

  // Start making predictions
  isPredicting = true;
  predict();
});
