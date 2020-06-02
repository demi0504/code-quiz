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
const totalScore = document.getElementById("total-score");
const scoreContainer = document.querySelector(".score-container");
const initialsBox = document.querySelector(".initials");
const initialsTextInput = document.querySelector("#initials-text");
const initialsForm = document.querySelector("#initials-form");
const initials = [];
const initialsList = document.querySelector("#highscores-list");

//Object array of questions and answers
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

//Check if user answer matches correct answer
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

//Deduct 5 seconds from time
function answerIsWrong() {
    count -= 5;
}

//Final score percentage
function finalScore(){
    questionContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    initialsBox.classList.remove('hide');
    const scorePercent = Math.round(100 * score/myQuestions.length);
    totalScore.innerHTML += "<p>"+ scorePercent +"</p>";

}


//Store scores function
function storeScores() {
    localStorage.setItem("initials", JSON.stringify(initials));
  }
  
  initialsForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var initialsText = initialsTextInput.value.trim();
  
    // Return from function early if submitted initials text is blank
    if (initialsText === "") {
      return;
    }
  
    // Add new initials text and clear input
    initials.push(initialsText);
    initialsTextInput.value = "";
  
    renderInitials();
    storeScores();
  });

  function renderInitials() {
    initialsList.innerHTML = "";
    for (var i = 0; i < initials.length; i++) {
        var initial = initials[i];

        var li = document.createElement("li");
        li.textContent = initial;
        li.setAttribute("data-index", i);

        initialsList.appendChild(li);
    }
  }

 
