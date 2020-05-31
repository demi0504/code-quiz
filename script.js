

const startButton = document.querySelector("#startBtn");
const beginQuizEl = document.querySelector(".beginQuiz");
const countdown = document.querySelector("#timer");
const questionContainer = document.querySelector(".question-container");
const choices = document.querySelector(".choice");
const question = document.querySelector("#question");
const choiceA = document.querySelector("#a");
const choiceB = document.querySelector("#b");
const choiceC = document.querySelector("#c");
const totalScore = document.querySelector("#scoreContainer");
const intialsBox = document.querySelector("#initialsForm");

//object of questions and answers
const myQuestions = [
    {
        question: "How many computer programming languages are there?",
            a: "Under 50",
            b: "Roughly 400",
            c: "Over 700",
            correctAnswer: 'c'
    },
    {
        question: "Who was the first computer programmer?",
            a: "Bill Gates",
            b: "Ada Lovelace",
            c: "Niklaus Wirth",
            correctAnswer: 'b'
    }, 
    {
        question: "What are semantic elements?",
            a: "A semantic element clearly describes its meaning to both the browser and the developer.",
            b: "In HTML this refers to div tags.",
            c: "They help to style certain HTML tags.",
            correctAnswer: 'a'
    }
];

let shuffledQuestions, currentQuestionIndex;
let quizTime = 90;

//Function for start button to initiate quiz questions
startButton.addEventListener('click', startQuiz);
function startQuiz() {
    // console.log('started');
    startButton.classList.add('hide');
    beginQuizEl.classList.add('hide');
    shuffledQuestions = myQuestions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove('hide');
    nextQuestion();
    // timerBegin();
}

//Function to show next question
function nextQuestion() { 
    showQuestion(shuffledQuestions[currentQuestionIndex]); 
}

function showQuestion() {
    question.innerHTML = myQuestions[0].question;
    choiceA.innerHTML = myQuestions[0].a;
    choiceB.innerHTML = myQuestions[0].b;
    choiceC.innerHTML = myQuestions[0].c;
    currentQuestionIndex++;
    // nextQuestion();
}

//Timer function
// function timerBegin() {
//     timer.innerHTML = quizTime;
//     for ()
// }
//check answer
function checkAnswer(answer) {
    if(answer === myQuestions[shuffledQuestions].correctAnswer){
        totalScore++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
}

function answerIsCorrect() {
    choices.style.backgroundColor = "#3CB371";
}

function answerIsWrong() {
    choices.style.backgroundColor = "#FF0000";
}