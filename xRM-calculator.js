let pctXRM = 100;
let oneRM = 0;

function calculator(){
  event.preventDefault();
  //setup
  let inputWeight = parseFloat(document.getElementById('weight').value);
  let inputReps = parseInt(document.getElementById('reps').value);

  //set 1RM
  if(inputReps == 1){
    oneRM = inputWeight;
  }else if (inputReps == 2){
    oneRM = inputWeight * 1.03;
  }else if (inputReps == 3){
    oneRM = inputWeight * 1.06;
  }else if (inputReps == 4){
    oneRM = inputWeight * 1.09;
  }else if (inputReps == 5){
    oneRM = inputWeight * 1.12;
  }else if (inputReps == 6){
    oneRM = inputWeight * 1.18;
  }else if (inputReps == 7){
    oneRM = inputWeight * 1.215;
  }else if (inputReps == 8){
    oneRM = inputWeight * 1.25;
  }else if (inputReps == 9){
    oneRM = inputWeight * 1.3;
  }else if (inputReps == 10){
    oneRM = inputWeight * 1.34;
  }else if (inputReps == 11){
    oneRM = inputWeight * 1.38;
  }else if (inputReps == 12){
    oneRM = inputWeight * 1.43;
  }

  //set xRM
  oneRM = oneRM
  let twoRM = oneRM * 0.975;
  let threeRM = oneRM * 0.95;
  let fourRM = oneRM * 0.925;
  let fiveRM = oneRM * 0.9;
  let sixRM = oneRM * 0.85;
  let sevenRM = oneRM * 0.825;
  let eightRM = oneRM * 0.8;
  let nineRM = oneRM * 0.775;
  let tenRM = oneRM * 0.75;
  let elevenRM = oneRM * 0.725;
  let twelveRM = oneRM * 0.7;

  //display stats in html
  document.getElementById("1rm").innerHTML = "1RM = " + oneRM.toFixed(2);
  document.getElementById("2rm").innerHTML = "2RM = " + twoRM.toFixed(2);
  document.getElementById("3rm").innerHTML = "3RM = " + threeRM.toFixed(2);
  document.getElementById("4rm").innerHTML = "4RM = " + fourRM.toFixed(2);
  document.getElementById("5rm").innerHTML = "5RM = " + fiveRM.toFixed(2);
  document.getElementById("6rm").innerHTML = "6RM = " + sixRM.toFixed(2);
  document.getElementById("7rm").innerHTML = "7RM = " + sevenRM.toFixed(2);
  document.getElementById("8rm").innerHTML = "8RM = " + eightRM.toFixed(2);
  document.getElementById("9rm").innerHTML = "9RM = " + nineRM.toFixed(2);
  document.getElementById("10rm").innerHTML = "10RM = " + tenRM.toFixed(2);
  document.getElementById("11rm").innerHTML = "11RM = " + elevenRM.toFixed(2);
  document.getElementById("12rm").innerHTML = "12RM = " + twelveRM.toFixed(2);
}
