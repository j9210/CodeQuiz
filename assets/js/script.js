// DOM variables
var timerEl = document.querySelector("#time");
var startBtn = document.querySelector("#startBtn");
var quizArea = document.querySelector(".quizArea");
var nav = document.querySelector(".nav");
//quiz state variables
var timeLeft = 75;
var i = 0
var lastResponse = 0
var score = 0

var questions  =[
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<head>", "<meta>", "<style>"],
        correctAnswer: 1
    },

    {
        question: "Which symbol is used for commenting in JavaScript?",
        choices: ["<!--", "/*", "//", "*!"],
        correctAnswer: 3
    },

    {
        question:"What if you use parseInt() to convert a string containing decimal value?",
        choices: ["It returns the decimal values in string form", "It returns only the integer portion of the number", "Throws Error", "None of the above"],
        correctAnswer: 2
    },

    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["booleans", "other arrays", "numbers and strings", "all of the above"],
        correctAnswer: 4
    },

    {
        question: "Commonly used data types DO NOT include:",
        choices: ["booleans", "strings", "alerts", "numbers"],
        correctAnswer: 3
    }
];

var start = function(){
    // hide start page
    startPage.style.display = "none";
    quizArea.style.display = "block";
    // start timer
    countdown();
    showQuestion();
};

var countdown = function() {
    timerEl.textContent = timeLeft;
    //timer logic
    var timeInterval = setInterval(function () {
        if (timeLeft === 0) {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
        timerEl.textContent = timeLeft;
        timeLeft --;
    }, 1000);
};

var showQuestion = function () {
    // create question elements. there's already a div with the class quizArea in HTML
    var questionEl = document.createElement("h2");
    questionEl.textContent = questions[i].question;
    quizArea.appendChild(questionEl);
    
   for (j=0; j < questions[i].choices.length; j++) {
        var answerEl = document.createElement("button");
        answerEl.setAttribute("value", j);
        answerEl.setAttribute("class", "answer");
        answerEl.onclick = nextQuestion;
        answerEl.textContent = questions[i].choices[j];
        quizArea.appendChild(answerEl);
    };

   
};


//onclick event listner, start
startBtn.addEventListener("click", start)


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


