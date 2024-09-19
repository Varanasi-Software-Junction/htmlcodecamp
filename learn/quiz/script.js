let questions = [];
let currentQuestionIndex = 0;
let startTime;
let timerInterval;

function loadQuestions() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            questions = data;
        });
}

function startQuiz() {
    document.querySelector('.start-btn').style.display = 'none';
    document.querySelector('#quiz').style.display = 'block';
    document.querySelector('.btn-container').style.display = 'block';
    document.querySelector('#timer').style.display = 'block';
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
    displayQuestion();
}

function displayQuestion() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    if (questions.length === 0) return;

    const q = questions[currentQuestionIndex];
    let questionHTML = `<div class="question">${currentQuestionIndex + 1}. ${q.question}</div>`;
    q.options.forEach((option, i) => {
        questionHTML += `
            <label class="option">
                <input type="radio" name="question${currentQuestionIndex}" value="${option}">
                ${option}
            </label>
        `;
    });
    quizContainer.innerHTML = questionHTML;

    // Show or hide buttons based on the current question
    document.querySelector('.prev-btn').style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    document.querySelector('.next-btn').style.display = currentQuestionIndex < questions.length - 1 ? 'inline-block' : 'none';
    document.querySelector('.submit-btn').style.display = currentQuestionIndex === questions.length - 1 ? 'inline-block' : 'none';
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function submitQuiz() {
    clearInterval(timerInterval);
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        }
    });
    
    const totalQuestions = questions.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(2);
    const timeTaken = document.getElementById('timer').innerText.replace('Time: ', '');

    document.getElementById('result').innerText = `You scored ${score} out of ${totalQuestions} (${percentage}%). Time taken: ${timeTaken}`;
}

function updateTimer() {
    const now = new Date();
    const elapsed = Math.floor((now - startTime) / 1000);
    const minutes = String(Math.floor(elapsed / 60)).padStart(2, '0');
    const seconds = String(elapsed % 60).padStart(2, '0');
    document.getElementById('timer').innerText = `Time: ${minutes}:${seconds}`;
}

// Load questions when the page is loaded
window.onload = loadQuestions;
