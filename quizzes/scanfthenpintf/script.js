let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];
let questions = [];

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle both questions and their options
function shuffleQuestionsAndOptions() {
    // Shuffle questions
    shuffleArray(questions);

    // Shuffle options for each question
    questions.forEach(question => {
        const optionEntries = Object.entries(question.options);
        shuffleArray(optionEntries);

        // Rebuild the options object after shuffling
        question.options = Object.fromEntries(optionEntries);
    });
}

// Load questions from questions.json and initialize the quiz
function loadQuestions() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            questions = data; // Store the questions from JSON file
            shuffleQuestionsAndOptions(); // Randomize the questions and options
            loadQuestion(); // Load the first question
        })
        .catch(error => {
            console.error('Error loading questions:', error);
        });
}

// Load a question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    //document.getElementById("question").textContent = `${currentQuestionIndex + 1} of ${questions.length}  ${currentQuestion.question}`;
    document.getElementById("question").innerHTML = `${currentQuestionIndex + 1} of ${questions.length}  ${currentQuestion.question}`;

    const optionsForm = document.getElementById("options-form");
    optionsForm.innerHTML = ''; // Clear previous options

    // Loop through options and create radio buttons
    for (const [key, value] of Object.entries(currentQuestion.options)) {
        const label = document.createElement("label");
        label.textContent = value;

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "option";
        radio.value = key;

        label.prepend(radio);
        optionsForm.appendChild(label);
        optionsForm.appendChild(document.createElement("br"));
    }

    // Re-enable the next button when an option is selected
    const radios = optionsForm.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            document.getElementById("next-btn").disabled = false;
        });
    });
}

// Move to the next question
function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const selectedValue = selectedOption.value;
        const currentQuestion = questions[currentQuestionIndex];

        selectedAnswers.push({
            question: currentQuestion.question,
            selectedAnswer: Number(selectedValue),
            correctAnswer: Number(currentQuestion.answer),
            options: currentQuestion.options,
            explanation: currentQuestion.explanation
        });
//alert(`Correct ${selectedValue===currentQuestion.answer} ${selectedValue},${currentQuestion.answer}`);
        if (Number(selectedValue) === Number(currentQuestion.answer)) {
            score++;
          //  alert(score);
            
        }
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Load the next question
        document.getElementById("next-btn").disabled = true; // Disable next button again until selection
    } else {
        endQuiz(); // Show the results
    }
}

// Display the results
function endQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("score").textContent = score;

    const resultTableBody = document.getElementById("result-table-body");
    resultTableBody.innerHTML = ''; // Clear previous results

    selectedAnswers.forEach((entry, index) => {
        const row = document.createElement("tr");

        // Question Number
        const cellQuestionNo = document.createElement("td");
        cellQuestionNo.textContent = index + 1;
        row.appendChild(cellQuestionNo);

        // Question Text
        const cellQuestion = document.createElement("td");
        cellQuestion.textContent = entry.question;
        row.appendChild(cellQuestion);

        // Options
        const cellOptions = document.createElement("td");
        const optionsText = Object.entries(entry.options)
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');
        cellOptions.textContent = optionsText;
        row.appendChild(cellOptions);

        // Selected Answer
        const cellSelectedAnswer = document.createElement("td");
        cellSelectedAnswer.textContent = entry.selectedAnswer;
        row.appendChild(cellSelectedAnswer);

        // Result (Correct or Incorrect)
        const cellResult = document.createElement("td");
        if (entry.selectedAnswer === entry.correctAnswer) {
            cellResult.textContent = "Correct";
            cellResult.classList.add("correct-answer");
        } else {
            cellResult.textContent = "Incorrect";
            cellResult.classList.add("incorrect-answer");
        }
        row.appendChild(cellResult);

        // Explanation
        const cellExplanation = document.createElement("td");
        cellExplanation.textContent = entry.explanation;
        row.appendChild(cellExplanation);

        resultTableBody.appendChild(row);
    });
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];
    shuffleQuestionsAndOptions(); // Randomize questions and options again
    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
    document.getElementById("next-btn").disabled = true; // Disable next button initially
}

// Initialize the quiz
function initQuiz() {
    loadQuestions(); // Load questions from the JSON file and start the quiz
}

window.onload = initQuiz;
