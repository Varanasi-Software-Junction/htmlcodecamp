const arrayContainer = document.getElementById('array-container');
const stepsdiv=document.getElementById("stepsofsorting");
const swapCountDisplay = document.getElementById('swap-count');
const loopCountDisplay = document.getElementById('loop-count');
const favicon = document.getElementById('favicon');
const image = document.querySelector('.side-image');
const numberInput = document.getElementById('number-input');
const startButton = document.querySelector('button');
let array = [];
let moves = []; // To store the moves and markers
let boxWidth = 60; // Width of each div
let gap = 10; // Gap between divs

// Create the array based on user input or generate a random array
function createArray() {
    const input = numberInput.value;
    console.log("Input: ", input);
    array = [];
    moves = []; // Clear moves from any previous run
    arrayContainer.innerHTML = ''; // Clear previous array visuals

    if (input) {
        array = input.split(',').map(Number); // Split input and convert to numbers
        console.log("Array: ", array);
    } else {
        // If no input, generate random numbers
        for (let i = 0; i < 10; i++) {
            array.push(Math.floor(Math.random() * 100) + 1);
        }
    }

    // Create divs for each array element
    for (let i = 0; i < array.length; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.left = `${i * (boxWidth + gap)}px`; // Initial horizontal position
        box.style.top = '0px'; // Initial vertical position
        box.textContent = array[i];
        arrayContainer.appendChild(box);
    }
}

// Perform bubble sort and store the moves
function bubbleSort() {
    // stepsdiv.re
    for (let i = 0; i < array.length - 1; i++) {
        // Store outer loop marker
        moves.push([-1, i]); // Using -1 to indicate an outer loop marker

        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Store the swap in the moves array (i and j are the indices)
                moves.push([j, j + 1]);

                let newmove=`${j} <--> ${j+1}`;
                // alert(stepsdiv);
                let x=document.createElement("li");
                x.textContent=newmove;
                stepsdiv.appendChild(x);


                // Swap the actual array values
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        // alert("Loop done");
    }
}

// Animate the stored moves
function animateMoves() {
    let noofswaps = 0, loopcount = 0;; // Counter for number of swaps
    let boxes = document.querySelectorAll('.box'); // Use querySelectorAll for a static NodeList
    let moveIndex = 0;

    function animate() {
        if (moveIndex >= moves.length) {
            // Sorting is complete
            image.style.animation = 'relaxed 2s infinite';
            numberInput.disabled = false;
            startButton.disabled = false;
            return; // Stop when all moves are done
        }

        const [i, j] = moves[moveIndex];

        // Handle outer loop marker visualization
        if (i === -1) {
            // Highlight the outer loop index
            loopcount++;
            loopCountDisplay.textContent = `Loops : ${loopcount}`;

            boxes[j].classList.add('outer-loop-active'); // Highlight outer loop index

            setTimeout(() => {
                boxes[j].classList.remove('outer-loop-active'); // Remove highlight after delay
                moveIndex++; // Move to next animation step
                animate(); // Recursively call animate for next move
            }, 1000); // Delay for outer loop marker
            return; // Wait for marker animation to complete
        }

        // Handle swap visualization
        boxes[i].classList.add('active');
        boxes[j].classList.add('active');

        // Move both boxes up
        boxes[i].style.top = '-50px';
        boxes[j].style.top = '-50px';

        setTimeout(() => {
            // Swap the horizontal positions visually
            const tempLeft = boxes[i].style.left;
            boxes[i].style.left = boxes[j].style.left;
            boxes[j].style.left = tempLeft;

            // Swap the actual DOM elements
            arrayContainer.insertBefore(boxes[j], boxes[i]); // Move box[j] before box[i]

            // Refresh the boxes NodeList after the swap
            boxes = document.querySelectorAll('.box');

            setTimeout(() => {
                // Move them down again
                boxes[i].style.top = '0px';
                boxes[j].style.top = '0px';

                boxes[i].classList.remove('active');
                boxes[j].classList.remove('active');

                // Increment the swap counter
                noofswaps++;
                swapCountDisplay.textContent = `Swaps: ${noofswaps}`;

                moveIndex++;
                animate(); // Recursively call animate for next move
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

// Initialize with inquisitive animation
image.style.animation = 'inquisitive 2s infinite';