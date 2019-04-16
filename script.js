var gryffindorScore = 0;
var slytherinScore = 0;
var hufflepuffScore = 0;
var ravenclawScore = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

q1a1.addEventListener("click", gryffindor1);
q1a2.addEventListener("click", slytherin1);
q1a3.addEventListener("click", hufflepuff1);
q1a4.addEventListener("click", ravenclaw1);


function gryffindor1(event) {
    gryffindorScore += 1;
    updateResult();
}

function slytherin1(event) {
    slytherinScore += 1;
    updateResult();
} 

function hufflepuff1(event) {
    hufflepuffScore += 1;
    updateResult();
  }

function ravenclaw1(event) {
    ravenclawScore += 1;
    updateResult();
  }

// You'll need to update the function below depending on the number of questions you ask. 
function updateResult() {
  var result = document.getElementById("result");
  if (gryffindorScore == 1) {
    result.innerHTML = "Gryffindor!";
  } else if(slytherinScore == 1) {
     result.innerHTML = "Slytherin!";
  } else if(hufflepuffScore == 1) {
    result.innerHTML = "Hufflepuff!";
  } else if(ravenclawScore == 1) {
    result.innerHTML = "Ravenclaw!";
  } else {
   result.innerHTML = "Hmmm.. I'm not sure";
  }
}