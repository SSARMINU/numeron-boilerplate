document.addEventListener("DOMContentLoaded", function() {
   
    var scoreBoard = document.getElementById("score-board");
  
   
    var score = 0;
  
    function updateScoreDisplay() {
      scoreBoard.textContent = score;
    }
  
    
    function handlePlayAgainButtonClick() {
      
      score = 0;
      updateScoreDisplay(); 
  
      
      console.log("Play again button clicked");
    }
  
    
    var playAgainButton = document.getElementById("play-again-button");
    playAgainButton.addEventListener("click", handlePlayAgainButtonClick);
    window.location.href = "game.html";
    
    updateScoreDisplay();
  });
  