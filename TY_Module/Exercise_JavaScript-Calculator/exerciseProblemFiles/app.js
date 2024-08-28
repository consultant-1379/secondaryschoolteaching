// (1) Create your variables, what do we need to remember?
var current = "0";

//Set initial screen value to 0
updateScreen();

//Update the calculator screen with the current number
function updateScreen(){
  document.getElementById("screen").innerHTML = current;
}

//Add number pressed by user to the calculator screen
function addToScreen(input){
  
  /* (2a)
    Add an onclick handler for this function to your keys
    Don't forget to do this for future functions!
  */

  /* (2b)
    Check if the current number is 0 -> eval(current)
    If it is, then this is a new number so set current to input
    If not then concatenate the input string to current
    Finally call the updateScreen() function to show the number
  */
  
}

//Clear current number on calculator screen
function clearScreen(){
  /* (3)
    Reset your variables to their original values and update the screen display
  */
}

//Given an operator as input, calculate and display the new running total
function calculate(operator){

  console.log("Operator clicked... "+operator);
  
  /* (4)
    Think carefully about how you want your calculator to work when an operator is pressed?
    
    What happens to the memory?
    What happens to the current number?
    Do we need to change any of the previous code to know whether we have a total on the screen?
    
  */
  

  /* (5)
    If the operator is =, then we need to reset the operator we're remembering to a + and reset current.
    If not we just need to remember what operator was pressed, +, -, / or x ?
  
  */
}

/* (6)
  Can you tidy up your code by creating some functions with descriptive names?
*/