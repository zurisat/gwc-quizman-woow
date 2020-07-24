//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var troyellaScore = 0;
var relsiScore = 0;
var chaylorScore = 0;
var zepayScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", troyella);
q1a2.addEventListener("click", zepay);
q1a3.addEventListener("click", chaylor);
q1a4.addEventListener("click", relsi);

q2a1.addEventListener("click", troyella);
q2a2.addEventListener("click", chaylor);
q2a3.addEventListener("click", relsi);
q2a4.addEventListener("click", zepay);

q3a1.addEventListener("click", relsi);
q3a2.addEventListener("click", troyella);
q3a3.addEventListener("click", chaylor);
q3a4.addEventListener("click", zepay);

q4a1.addEventListener("click", chaylor);
q4a2.addEventListener("click", troyella);
q4a3.addEventListener("click", relsi);
q4a4.addEventListener("click", zepay);

q5a1.addEventListener("click", troyella);
q5a2.addEventListener("click", zepay);
q5a3.addEventListener("click", relsi);
q5a4.addEventListener("click", chaylor);

//#TODO: Define quiz functions here
function troyella() {
  troyellaScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}
function zepay() {
  zepayScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}
function relsi() {
  relsiScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}
function chaylor() {
  chaylorScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}

function updateResult() {
  var result = document.getElementById("result");
  if (troyellaScore >= 3) {
    result.innerHTML = "Congrats! You got Troy and Gabriella! You live life looking through rose tinted lenses and are the main character in your life. You attract other people to you because of your uniqueness and tendency to be different than the 'Status Quo’. Sometimes you may be a little shy but once people get to know you, you open up!";
    } else if (zepayScore >= 3) {
    result.innerHTML = "Congrats! You got Zeke and Sharpay, what an iconic duo ! :) You ara a confident individual who other people look up to. You may not realise it, but you are a natural leader. You are not afraid to speak your mind and stand up for what you believe in! You are FABULOUS!";
  } else if (relsiScore >= 3) {
    result.innerHTML = "You got Kelsi and Ryan! You are an incredibly talented person, but you don’t always have the confidence. You tend to hide who you really are or pretend to be someone else to satisfy others. Don’t be afraid to speak up, people will listen and see how incredible you are!";
  } else if (chaylorScore >= 3) {
    result.innerHTML = "Congrats! You got Chad and Taylor! You may look and act like a complete jokester but you have a serious and wise side too. People appreciate you for your wit and good advice. Your voice sometimes overpowers other people in the room. Taking up space is good, but don’t trample over everyone!";
  } else {
    result.innerHTML = "CONGRATS! You got Mrs. Darbus… Now don’t be DRAMATIC! Mrs. Darbus honestly deserves more hype :) The Darbus gang is vibing at a level higher than everyone else in High School Musical. Try again! Maybe you’ll get a couple, maybe not.";
  }
}
