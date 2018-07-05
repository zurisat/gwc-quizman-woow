var gryffindorScore = 0;
var slytherinScore = 0;
var hufflePuffScore = 0;
var ravenClawScore = 0;

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

q1a1.addEventListener("click", gryffindor);
q1a2.addEventListener("click", slytherin);
q1a3.addEventListener("click", scoreFirstQuestion);
q1a4.addEventListener("click", scoreFirstQuestion);

function gryffindor(event) {
    gryffindorScore += 1;
    console.log("gryffindor");
    
}

function slytherin(event) {
    slytherinScore += 1;
    console.log("slytherin");
  } 
function hufflePuff(event) {
    hufflePuffScore += 1;
    console.log("huffle Puff");
  }
function ravenClaw(event) {
    ravenClawScore += 1;
    console.log("raven Claw");
  }
  var result = document.getElementById("result");
  result.innerHTML = selected;
}