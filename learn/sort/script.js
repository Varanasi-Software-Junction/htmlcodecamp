function createArray() {
    const input = numberInput.value;
    array = [];
    moves = []; // Clear moves from any previous run
    swapCount = 0;
    swapCountDisplay.textContent = 'Swaps: 0';
    arrayContainer.innerHTML = '';

    if (input) {
        array = input.split(',').map(Number); // Split input and convert to numbers
    } else {
        // If no input, generate random numbers
        for (let i = 0; i < 10; i++) {
            array.push(Math.floor(Math.random() * 100) + 1);
        }
    }

    console.log('Created array:', array); // Log created array

    for (let i = 0; i < array.length; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.left = `${i * (boxWidth + gap)}px`; // Initial horizontal position
        box.style.top = '0px'; // Initial vertical position
        box.textContent = array[i];

        arrayContainer.appendChild(box);
    }
}

function bubbleSort() {
    console.log('Before sorting:', array); // Log before sorting
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Store the swap in the moves array
                moves.push([j, j + 1]);

                // Swap the actual array values
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                // Increment the swap counter
                swapCount++;
            }
        }
    }
    swapCountDisplay.textContent = `Swaps: ${swapCount}`; // Update swap count display
    console.log('After sorting:', array); // Log after sorting
    console.log('Moves:', moves); // Log moves array
}

function animateMoves() {
    const boxes = document.getElementsByClassName('box');
    let moveIndex = 0;

    console.log('Animating moves...'); // Log animation start

    function animate() {
        if (moveIndex >= moves.length) {
            // Change image animation to relaxed state
            image.style.animation = 'relaxed 2s infinite'; 
            setTimeout(() => {
                // Return to inquisitive state after some time
                image.style.animation = 'inquisitive 2s infinite'; 
            }, 3000); // Time before switching back to inquisitive animation
            // Enable inputs and button after sorting
            numberInput.disabled = false;
            startButton.disabled = false;
            return; // Stop when all moves are done
        }

        const [i, j] = moves[moveIndex];
        boxes[i].classList.add('active');
        boxes[j].classList.add('active');

        // Move both boxes up
        boxes[i].style.top = '-50px';
        boxes[j].style.top = '-50px';

        setTimeout(() => {
            // Swap the horizontal positions
            const tempLeft = boxes[i].style.left;
            boxes[i].style.left = boxes[j].style.left;
            boxes[j].style.left = tempLeft;

            setTimeout(() => {
                // Move them down again
                boxes[i].style.top = '0px';
                boxes[j].style.top = '0px';

                boxes[i].classList.remove('active');
                boxes[j].classList.remove('active');

                moveIndex++;
                animate();
            }, 500); // Delay before moving down
        }, 500); // Delay before swapping
    }

    animate();
}

// Function to start sorting
function startSorting() {
    createArray(); // Create or reset the array
    bubbleSort(); // Perform bubble sort and store the moves
    favicon.href = 'favicon_active.gif'; // Change favicon to active state
    image.style.animation = 'active 2s infinite'; // Set active animation
    numberInput.disabled = true; // Disable input field
    startButton.disabled = true; // Disable button
    setTimeout(() => {
        animateMoves(); // Start animating the moves
    }, 500); // Delay before starting animation
}
