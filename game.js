
document.addEventListener("DOMContentLoaded", function() {
    
    var greaterThanButton = document.getElementById("greater-than");
    var equalToButton = document.getElementById("equal-to");
    var lesserThanButton = document.getElementById("lesser-than");
  
   
    function handleOptionsButtonClick(event) {
      var relation = event.target.id;
      
      var number1 = parseInt(document.getElementById("number1").textContent);
      var number2 = parseInt(document.getElementById("number2").textContent);
      var correctRelation;
  
      
      if (number1 > number2) {
        correctRelation = "greater-than";
      } else if (number1 === number2) {
        correctRelation = "equal-to";
      } else {
        correctRelation = "lesser-than";
      }
  
     
      if (relation === correctRelation) {
       
        increaseScore();
        console.log("Correct answer! Score increased.");
      } else {
        console.log("Incorrect answer. Try again.");
      }
    }
  
    
    greaterThanButton.addEventListener("click", handleOptionsButtonClick);
  
   
    equalToButton.addEventListener("click", handleOptionsButtonClick);
  
    
    lesserThanButton.addEventListener("click", handleOptionsButtonClick);
  });
  
  
  function increaseScore() {
   
    var scoreBoard = document.getElementById("score-board");
    
    var currentScore = parseInt(scoreBoard.textContent);
   
    var newScore = currentScore + 1;
    
    scoreBoard.textContent = newScore;
  }
  

// Iteration 4: Build a timer for the game
var timerElement = document.getElementById("timer");
var startTime = Date.now();

function updateTimer() {
  var currentTime = Date.now();
  var elapsedTime = currentTime - startTime;
  var seconds = Math.floor(elapsedTime / 1000);

 
  timerElement.textContent =  seconds ;

  
  if (seconds >= 10) {
    clearInterval(timerInterval);
    console.log("Timer stopped after 10 seconds.");
    window.location.href = "gameover.html";
  }
}

// Update the timer every second
var timerInterval = setInterval(updateTimer, 1000);

