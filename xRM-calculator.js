function calculator(){
  let inputWeight = document.getElementById('weight').value;
  let inputReps = document.getElementById('reps').value;
  number = inputWeight * inputReps;
  document.getElementById('display').innerHTML = number;
}
