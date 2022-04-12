var screen0El = document.querySelector("#screen0");
var screen0ButtonEl = screen0El.querySelector("#startButton");
var screen1El = document.querySelector("#screen1");
var screen1ButtonEl = screen1El.querySelector("button");
var screen2El = document.querySelector("#screen2");
var screen2ButtonEl = screen2El.querySelector("button");
var questionEl = document.querySelector("#question");
var answersEl= document.querySelector("#possibleAnswers");
const highScoresButton= document.querySelector("#highscores");
var countdownTimer= document.querySelector(".timer");
var hide=document.querySelector(".hide");
var score=document.querySelector(".score");

const questions = [
   {
       question:"What super villain once broke Batman's back, leaving him crippled and wheelchair-bound?",
       answers:["a. Joker ", "b. Killer Croc", "c. Bane", "d. Ra's Al Ghul"],
       answer: 2
   } ,
   {
    question:" What were the names of Bruce Wayne's parents?",
    answers:["a. Thomas and Martha Wayne ", "b. Wayne and Alice", "c. George and Elaine", "d. James and Elizabeth"],
    answer: 0
} ,
{
    question:"Who is credited with creating Batman?",
    answers:["a. Joe shuster ", "b. Bob Kane ", "c. Jerry Siegel", "d. Jack Kirby "],
    answer: 1
} ,
{
    question:" What Batman villain formerly worked as a zoologist?",
    answers:["a. Killer Croc  ", "b. Man-Bat ", "c. The Penguin ", "d. Poison-Ivy",],
    answer: 1
} ,
{
    question:"What year was the character of Robin first introduced?",
    answers:["a. 1940 ", "b. 1950 ", "c. 1960 ", "d. 1970"],
    answer: 0
} ,
{
    question:" In Detective Comics #267, a magical Kobold from another dimension decides to help Batman fight crime--what is his name?",
    answers:["a. Martian Manhunter ", "b. Bat Dwarf ", "c. Bat-Mite ", "d. Mr. Mxyztplk"],
    answer: 2
} ,
{
    question:"The original Batgirl was related to what familiar Batman character?",
    answers:["a. Batwoman ", "b. Mr. Freeze ", "c. Catwoman ", "d. The Penguin"],
    answer: 0
} ,
{
    question:"Which of these Bat-villains was introduced first?",
    answers:["a. The Riddler ", "b. Mr. Freeze ", "c. Catwoman ", "d. The Penguin"],
    answer: 2
} ,
{
    question:"What was Alfred the butler's original family name?",
    answers:["a. Chatsworth", "b. Beagle ", "c. Windham ", "d. Pennyworth"],
    answer: 3
} ,
{
    question:"What was Bat-hound's name?",
    answers:["a. lucky", "b. ace ", "c. champ ", "d. burt"],
    answer: 1
}
];
var currentQuestion= 0;
var timer= 100;
var myScore=0;
var myInterval= null
var dynamicElements = [
  screen0El,
  screen1El,
  screen2El,
]
  function init() {
    setEventListeners();
  }
  function checkAnswer(selection, answer){
    if (selection===answer){
      populateQuestion()
      myScore+=10;
      score.innerHTML= "Score: " + myScore;
    }
    else{
      populateQuestion()
      timer-= 10;
      countdownTimer.innerHTML="Time: " + timer ;

    }
  }
  function myTimer(){
    if (timer<1 ){
      clearInterval(myInterval);
    }
    else {
      timer--;
      countdownTimer.innerHTML="Time: " + timer ;

    }
  }
  function startNew(){
    score.innerHTML= "Score: " + myScore;
    myInterval= setInterval(myTimer,1000);
    countdownTimer.innerHTML="Time: " + timer ;
    console.log("are we here");
    screen0El.classList.toggle("hide");
    screen2El.classList.toggle("hide");
      screen1El.classList.toggle("hide");
      currentQuestion=0;
      populateQuestion(currentQuestion);
  }

  function populateQuestion() {
    var questionObj = questions[currentQuestion];
    answersEl.innerHTML = "";
    questionEl.textContent = questionObj.question;
    var ans= questionObj.answers[questionObj.answer];
    questionObj.answers.forEach(function (question) {
      var li = document.createElement("li");
      li.addEventListener("click", function (){
        checkAnswer(question,ans);
      });
      li.textContent = question;
      answersEl.appendChild(li);
    });
    if (currentQuestion === questions.length - 1) {
      currentQuestion = 0;
    } else {
      currentQuestion++;
    }
  }
 
  function setEventListeners() {
    screen0ButtonEl.addEventListener("click", function () {
      setState(1);
    });
    screen1ButtonEle.addEventListener("click", function () {
      setState(2);
    });
    screen2ButtonEle.addEventListener("click", function () {
      setState(0);
    });
    answersEl.addEventListener("click", function (evt) {
      var target = evt.target;
      if (target.matches("li")) {
        window.alert(target.innerText);
      }
    });
  }
  
  function setState(state) {
    console.log("State: " + state)
    switch (state) {
        case 1:
            startNew();
            break;
       
    }
  }
  init();
     


  

 