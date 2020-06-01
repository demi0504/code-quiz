//HTML elements
const startButton = document.querySelector("#startBtn");
const beginQuizEl = document.querySelector(".beginQuiz");
const countdown = document.querySelector("#timer");
const questionContainer = document.querySelector(".question-container");
const choices = document.querySelector(".choice");
const question = document.querySelector("#question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const totalScore = document.querySelector(".score-container");
const intialsBox = document.querySelector("#initialsForm");

//object of questions and answers
const myQuestions = [
    {
        question: "How many computer programming languages are there?",
            choiceA: "Under 50", 
            choiceB: "Roughly 400", 
            choiceC: "Over 700", 
            correctAnswer: "C"
    },
    {
        question: "Who was the first computer programmer?",
            choiceA: "Bill Gates", 
            choiceB: "Ada Lovelace", 
            choiceC: "Niklaus Wirth", 
            correctAnswer: "B"
    }, 
    {
        question: "What are semantic elements?",
            choiceA: "A semantic element clearly describes its meaning to both the browser and the developer.",
            choiceB: "In HTML this refers to div tags.", 
            choiceC: "They help to style certain HTML tags.", 
            correctAnswer: "A"
    }
];
//Variables for functions
const lastQuestion = myQuestions.length - 1;
let runningQuestion = 0;
let endTime = 0;
let count = 30;
let timer;
let score = 0;

//Function to show next question
function showQuestion() {
    let q = myQuestions[runningQuestion];
    question.innerHTML = q.question;
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

//Function for start button to initiate quiz questions
startButton.addEventListener('click', startQuiz);
function startQuiz() {
    startButton.classList.add('hide');
    beginQuizEl.classList.add('hide');
    questionContainer.classList.remove('hide');
    showQuestion();
    renderTimer();
    timer = setInterval(renderTimer, 1000);
}

//Timer function
function renderTimer() {
    if (count >= endTime) {
        countdown.innerHTML = count;
        count--
    } else {
        count = 0;
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            showQuestion();
        } else {
            clearInterval(timer);
            finalScore();
        }
    }
}

//Check answer
function checkAnswer(answer) {
    if (answer == myQuestions[runningQuestion].correctAnswer) {
        score++
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    if(runningQuestion < lastQuestion) {
        runningQuestion++;
        showQuestion();
    } else {
        clearInterval(timer);
        finalScore();
    }
}

function answerIsCorrect() {
    console.log("youre right");
}

function answerIsWrong() {
    console.log("youre wrong");
}

//Final score percentage
function finalScore(){
    questionContainer.classList.add('hide');
    totalScore.classList.remove('hide');
    const scorePercent = Math.round(100 * score/myQuestions.length);
    totalScore.innerHTML += "<p>"+ scorePercent +"</p>";
}