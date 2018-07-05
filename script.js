var gryffindorScore = 0;
var slytherinScore = 0;
var hufflepuffScore = 0;
var ravenclawScore = 0;
var questionsAnswered = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

q1a1.addEventListener("click", gryffindor);
q1a2.addEventListener("click", slytherin);
q1a3.addEventListener("click", hufflepuff);
q1a4.addEventListener("click", ravenclaw);

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

q2a1.addEventListener("click", gryffindor);
q2a2.addEventListener("click", slytherin);
q2a3.addEventListener("click", hufflepuff);
q2a4.addEventListener("click", ravenclaw);

function gryffindor(event) {
    gryffindorScore += 1;
    console.log("gryffindor");
    questionsAnswered += 1;
  
}

function slytherin(event) {
    slytherinScore += 1;
    console.log("slytherin");
    questionsAnswered += 1;
  } 

function hufflepuff(event) {
    hufflepuffScore += 1;
    console.log("hufflepuff");
    questionsAnswered += 1;
  }

function ravenclaw(event) {
    ravenclawScore += 1;
    console.log("ravenclaw");
    questionsAnswered += 1;
  }

if(questionsAnswered = 2) {
   updateResult(); 
}

function updateResult() {
  var result = document.getElementById("result");
  if (gryffindorScore > slytherinScore & hufflepuffScore & ravenclawScore) {
    result.innerHTML = "Gryffindor!";
  } else if(slytherinScore > gryffindorScore & hufflepuffScore & ravenclawScore) {
     result.innerHTML = "Slytherin!";
  } else if(hufflepuffScore > slytherinScore & gryffindorScore & ravenclawScore) {
    result.innerHTML = "Hufflepuff!";
  } else if(ravenclawScore > slytherinScore & gryffindorScore & hufflepuffScore) {
    result.innerHTML = "Ravenclaw!";
  } else if(ravenclawScore & slytherinScore & gryffindorScore & hufflepuffScore = 0) {
    result.innerHTML = "";
  } else {
   result.innerHTML = "Not Sure!";
  }
}