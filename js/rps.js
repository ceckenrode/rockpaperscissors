$(document).ready(function() {
  var rpsArray = ['rock', 'paper', 'scissors'];
  var rand = Math.floor(Math.random()*rpsArray.length);
  var compChoice = rpsArray[rand];
  var userChoice;
  var userScore = 0;
  var compScore = 0;
  var roundsPlayed = 0;
  var yourWins = 0;
  var compWins = 0;
  var draws = 0;

  $("#rock").click(function(event) {
    event.preventDefault();
    userChoice = "rock";
    console.log(userChoice);
    decider(userChoice);
  });

  $("#paper").click(function(event) {
    event.preventDefault();
    userChoice = "paper";
    console.log(userChoice);
    decider(userChoice)
  });

  $("#scissors").click(function(event) {
    event.preventDefault();
    userChoice = "scissors";
    console.log(userChoice);
    decider(userChoice)
  });

  function decider(choice) {
    newCompChoice();

    switch(choice) {
    case "rock":
        if (compChoice === "paper") {
          alert("Paper beats Rock! You Lose!");
          compScore++;
          updateScores();
        } else if (compChoice === "rock") {
          alert("Draw!");
        } else if (compChoice === "scissors") {
          alert("Rock beats Scissors! You Win!");
          userScore++;
          updateScores();
        }
        break;
    case "paper":
        if (compChoice === "paper") {
          alert("Draw!");
        } else if (compChoice === "rock") {
          alert("Paper beats Rock! You Win!");
          userScore++;
          updateScores();
        } else if (compChoice === "scissors") {
          alert("Scissors beats Paper! You Lose!");
          compScore++;
          updateScores();
        }
        break;
    case "scissors":
        if (compChoice === "paper") {
          alert("Scissors beats Paper! You Win!");
          userScore++;
          updateScores();
        } else if (compChoice === "rock") {
          alert("Rock beats Scissors! You Lose!");
          compScore++;
          updateScores();
        } else if (compChoice === "scissors") {
          alert("Draw!");
        }
        break;    
      }
    }
   
  function newCompChoice() {
  rand = Math.floor(Math.random()*rpsArray.length);
  compChoice = rpsArray[rand];
  console.log(compChoice);
  return compChoice;
  }

  function updateScores() {
    $("#userScore").text(userScore);
    $("#compScore").text(compScore);
  }

  

});