// DOM variables
var timerEl = document.querySelector("#time");
var startBtn = document.querySelector("#startBtn");
var quizArea = document.querySelector(".quizArea");
var nav = document.querySelector(".nav");
var feedback = document.querySelector("#feedback");
var form = document.querySelector("#form");
var sumbitBtn = document.querySelector("#submitBtn");
//quiz state variables
var timeLeft = 75;
var i = 0;
var lastResponse = 0;
var score = 0;
var timeInterval;

var questions  =[
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<head>", "<meta>", "<style>"],
        correctAnswer: 0
    },

    {
        question: "Which symbol is used for commenting in JavaScript?",
        choices: ["<!--", "/*", "//", "*!"],
        correctAnswer: 2
    },

    {
        question:"What if you use parseInt() to convert a string containing decimal value?",
        choices: ["It returns the decimal values in string form", "It returns only the integer portion of the number", "Throws Error", "None of the above"],
        correctAnswer: 1
    },

    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["booleans", "other arrays", "numbers and strings", "all of the above"],
        correctAnswer: 3
    },

    {
        question: "Commonly used data types DO NOT include:",
        choices: ["booleans", "strings", "alerts", "numbers"],
        correctAnswer: 2
    }
];

var start = function(){
    // hide start page
    startPage.style.display = "none";
    quizArea.style.display = "block";
    form.style.display = "none";
    // start timer
    countdown();
    showQuestion();
};


var countdown = function() {
    timerEl.textContent = timeLeft;
    //timer logic
    timeInterval = setInterval(function () {
        if (timeLeft === 0) {
           
           endGame();
            ///call endgame function
        }
        timerEl.textContent = timeLeft;
        timeLeft --;
    }, 1000);
};


var endGame = function(){
    //stop timer
    clearInterval(timeInterval);
    timerEl.textContent = "";

    //clear quizarea
    quizArea.style.display = "none";

    //show score
    form.style.display = "block";
    feedback.textContent = "";
    //show forms
    
}

var saveScore = function(event){
    event.preventDefault()
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    var initials = document.querySelector("#initials").value;
    var newScore={
        score: timeLeft,
        initials: initials
    }
    highscores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(highscores));

}

// get value from input
//make sure input tage isnt empty
//pull item highscores from localstorage  or []
//create new obj for the current use
//var newscore = {
   // score:,
   // initials:
//}
//push obj to var of highscores
//set item highscores back inside of local storage


var checkAnswer = function(){
    console.log("this", this)
    var userAnswer = this.value;

    if (userAnswer !== questions[i].correctAnswer ) {
        console.log("wrong")
        feedback.textContent ="wrong"
        timeLeft-=15;
    }else{
        feedback.textContent ="wrong"

        console.log("correct")
    };

    //move to next question
    i++;
//check to see if we ran out of questions
    if (i===questions.length) {
        //end game function
       endGame();
    }else{
        showQuestion();
    }



}


var showQuestion = function () {
    //clear out quizarea div 
    quizArea.innerHTML = "";
    // create question elements. there's already a div with the class quizArea in HTML
    var questionEl = document.createElement("h2");
    questionEl.textContent = questions[i].question;
    quizArea.appendChild(questionEl);
    
   for (j=0; j < questions[i].choices.length; j++) {
    console.log("choice", questions[i].choices[j])

        var answerEl = document.createElement("button");
        answerEl.setAttribute("value", j);
        answerEl.setAttribute("class", "answer");
        answerEl.onclick = checkAnswer;
        answerEl.textContent = questions[i].choices[j];
        quizArea.appendChild(answerEl);
    };

    feedback.textContent= "";
};


//onclick event listner, start
startBtn.addEventListener("click", start)
sumbitBtn.addEventListener("click", saveScore);


//keep track of questions = 1






//questions[track].questions render this
    // dynamic h2 element 
//loop questions[track].choices render
    //- create dynamic button elements
    //-attach onlcik attribute to button  (function check answer)

//function checkAnswer
// check our answer
//if incorrect - 5 from time
// track++
//


