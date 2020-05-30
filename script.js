const startButton = document.querySelector("#startBtn");
const beginQuizEl = document.querySelector(".beginQuiz");
const countdown = document.querySelector("#timer");
const questionContainer = document.querySelector(".question-container");
const question = document.querySelector("#question");
const choices = document.querySelector("#choices");
const choiceA = document.querySelector("#a");
const choiceB = document.querySelector("#b");
const choiceC = document.querySelector("#c");
const totalScore = document.querySelector("#scoreContainer");
const intialsBox = document.querySelector("#initialsForm");

//object of questions and answers
const myQuestions = [
    {
        question : "How many computer programming languages are there?",
        answers: {
            a: "Under 50",
            b: "Roughly 400",
            c: "Over 700"
        },
        correctAnswer: "c"
    },
    {
        question: "Who was the first computer programmer?",
        answers: {
            a: "Bill Gates",
            b: "Ada Lovelace",
            c: "Niklaus Wirth",
        },
        correctAnswer: "b"
    }, 
    {
        question: "What are semantic elements?",
        answers: {
            a: "A semantic element clearly describes its meaning to both the browser and the developer.",
            b: "In HTML this refers to div tags.",
            c: "They help to style certain HTML tags.",
        },
        correctAnswer: "a"
    }
];

//Function for start button to initiate quiz questions
startButton.addEventListener('click', startQuiz);
function startQuiz() {
    console.log('started');
    startButton.classList.add('hide');
    beginQuizEl.classList.add('hide');
    nextQuestion();
}

//Function to show next question
function nextQuestion() {
    questionContainer.classList.add('show');
    question.replaceChild(myQuestions.question[0]);
}