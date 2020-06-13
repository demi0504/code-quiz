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
//Store Scores and User Initials from quiz
initialsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    storeScores();
});

function storeScores() {
    // get recentScores if there are any 
    var recentScores = localStorage.getItem("recentScores");
    debugger

    // get new initials
    var newInitials = initialsTextInput.value.trim(); 
    debugger
    // get new score
    var newScore = totalScore.innerText
    debugger

    // set variable to hold score object
    let newScoresObj;

    if (recentScores) {
        // parse scores array from local storage
        newScoresObj = JSON.parse(recentScores);
            newScoresObj[newInitials] =
                (newScoresObj.hasOwnProperty(newInitials) && newScoresObj[newInitials] > newScore) ?
                newScoresObj[newInitials] :
                newScore; 
        
    } else {
        // setup initial scores array
        newScoresObj = {
            [newInitials]: newScore
        };
    }
 
    // set localStorage "recentScores" to updated array of scores
    localStorage.setItem("recentScores", JSON.stringify(newScoresObj));

    // set variable to store the score content
    let scoreContent = '';

    for(i = 0; i < Object.keys(newScoresObj).length; i ++) {
        const currentInitials = Object.keys(newScoresObj)[i];

        const currentScore = newScoresObj[currentInitials];
        debugger
        // set up a string for the HTML and text of the new score
        scoreContent += '<li>' + currentInitials + ": " + currentScore + '</li>';
        initialsList.innerHTML = scoreContent;
    }

    // ES6 solution in place of for loop
    // Object.keys(newScoresObj).map((key, index) => {
    //     const currentInitials = key;
    //     const currentScore = newScoresObj[key];

    //     scoreContent += `<li>${currentInitials} : ${currentScore}</li>`;
    //     initialsList.innerHTML = scoreContent;
    // });
    
    initialsTextInput.value = "";
<<<<<<< HEAD
});


=======
}
>>>>>>> 11fbd0a79d948537e2fa10856a0f2004d8ed14b5







 
