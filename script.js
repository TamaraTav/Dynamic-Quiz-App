const  questionsContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const submitButton = document.getElementById("submitBtn");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

fetch("questions.json")
    .then((response) => response.json())
    .then((questions) => startQuiz(questions));

function startQuiz(questions) {
    displayQuestion(questions[currentQuestionIndex]);

    submitBtn.addEventListener("click", function() {
        const selectedOption = document.querySelector(
            `input[name="option"]:checked`);
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const correctAnswer = questions[currentQuestionIndex].correctAnswer;

            if (userAnswer === correctAnswer) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion(questions[currentQuestionIndex]);
            } else {
                endQuiz();
            }

            scoreElement.textContent = score;
        }
    })
}

function displayQuestion(questionObj) {
    questionsContainer.textContent = questionObj.question;

    optionsContainer.innerHTML = "";
    // აქ ვაკეთებ ძველი პასუხების განულებას

    questionObj.options.forEach((option, index) => {
        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "option";
        radioBtn.value = option;
        radioBtn.id = `option${index}`;

        const label = document.createElement("label");
        label.textContent = option;
        label.htmlFor = `option${index}`;

        optionsContainer.appendChild(radioBtn);
        optionsContainer.appendChild(label);
    })
}

function endQuiz() {
    questionsContainer.innerHTML = "<h2>Quiz Completed !</h2>";
    optionsContainer.innerHTML = "";
}