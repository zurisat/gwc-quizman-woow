var gryffindorScore = 0;
var slytherinScore = 0;
var hufflepuffScore = 0;
var ravenclawScore = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

q1a1.addEventListener("click", gryffindor);
q1a2.addEventListener("click", slytherin);
q1a3.addEventListener("click", hufflepuff);
q1a4.addEventListener("click", ravenclaw);

function gryffindor(event) {
    gryffindorScore += 1;
    console.log("gryffindor");
    updateResult()  
}

function slytherin(event) {
    slytherinScore += 1;
    console.log("slytherin");
    updateResult()
  } 

function hufflepuff(event) {
    hufflepuffScore += 1;
    console.log("hufflepuff");
    updateResult()
  }

function ravenclaw(event) {
    ravenclawScore += 1;
    console.log("ravenclaw");
    updateResult()
  }

function updateResult() {
  var result = document.getElementById("result");
  if (gryffindorScore >=1) {
    result.innerHTML = "Gryffindor!";
  } else if(slytherinScore >=1) {
     result.innerHTML = "Slytherin!";
  } else if(hufflepuffScore >=1) {
    result.innerHTML = "Hufflepuff!";
  } else {
   result.innerHTML = "Ravenclaw!";
  }
}