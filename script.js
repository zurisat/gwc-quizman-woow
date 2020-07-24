//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var troyellaScore = 0;
var relsiScore = 0;
var chaylorScore = 0;
var sharpayScore = 0;

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
q1a1.addEventListener("click", troyellaScore);
q1a2.addEventListener("click", sharpayScore);
q1a3.addEventListener("click", chaylorScore);
q1a4.addEventListener("click", relsiScore);

q2a1.addEventListener("click", troyellaScore);
q2a2.addEventListener("click", chaylorScore);
q2a3.addEventListener("click", relsiScore);
q2a4.addEventListener("click", sharpayScore);

q3a1.addEventListener("click", relsiScore);
q3a2.addEventListener("click", troyellaScore);
q3a3.addEventListener("click", chaylorScore);
q3a4.addEventListener("click", sharpayScore);

q4a1.addEventListener("click", chaylorScore);
q4a2.addEventListener("click", troyellaScore);
q4a3.addEventListener("click", relsiScore);
q4a4.addEventListener("click", sharpayScore);

q5a1.addEventListener("click", troyellaScore);
q5a2.addEventListener("click", sharpayScore);
q5a3.addEventListener("click", relsiScore);
q5a4.addEventListener("click", chaylorScore);

//#TODO: Define quiz functions here
function troyella() {
  troyellaScore += 1;
  questionCount += 1;

  if (questionCount >= 5) {
    updateResult();
  }
}
function sharpay() {
  sharpayScore += 1;
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
    result.innerHTML = "troy and gabriella!";
  } else if (sharpayScore >= 3) {
    result.innerHTML = "sharpay";
  } else if (relsiScore >= 3) {
    result.innerHTML = "chelsi and ryan";
  } else if (chaylorScore >= 3) {
    result.innerHTML = "taylor and chad";
  } else {
    result.innerHTML = "blah blah";
  }
}
