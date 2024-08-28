//Uses the Math object to generate a random number between 1 - 100 and stores this in a variable
var secretNumber = Math.round(Math.random()*99+1);

document.getElementById("feedback").disabled = "true";
document.getElementById("userGuess").focus();

/*
* This function will get the users guess from the HTML input element with id userGuess.
* It then compares the guess to the secretNumber generated above and gives appropriate feedback.
*/
function checkGuess() {
  var guess = document.getElementById("userGuess").value;
  var feedbackText = "'" + guess + "' does not make sense to me.";
  document.getElementById("userGuess").value = "";
  
  if (guess > secretNumber){
    feedbackText = "Less than " + guess;
  }

  if (guess < secretNumber){
    feedbackText = "Greater than " + guess;
  }

  if (guess == " "){
    feedbackText = "You didn't guess anything!"
  }
  
  if(guess < 1 || guess > 100){
    feedbackText = guess + " isn't valid!"
  }
  
  if (guess == secretNumber){
    document.getElementById("feedback").value="Congratulations! " + guess + " is correct!";
    alert("Well done - the mystery number is " + secretNumber + "! \n\nPress this button to reload the page for another game.");
    feedbackText = " ";
    location.reload();
  }

  document.getElementById("feedback").value = feedbackText; 
  document.getElementById("userGuess").focus();
}
