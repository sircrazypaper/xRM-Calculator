let pctXRM = 100;
let oneRM = 0;
let multiplier = 1;

function calculator(){
  //setup
  let inputWeight = document.getElementById('weight').value;
  let inputReps = document.getElementById('reps').value;

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
}
