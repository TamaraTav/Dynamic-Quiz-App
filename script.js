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


}

function displayQuestion(questionObj) {
    questionsContainer.textContent = questionObj.question;

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