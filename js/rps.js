var rpsArray = ['Squirtle', 'Charmander', 'Bulbasaur'];
var rand = Math.floor(Math.random() * rpsArray.length);
var compChoice = rpsArray[rand];
var userChoice;
var userScore = 0;
var compScore = 0;
var roundnum = 1;
var yourWins = 0;
var compWins = 0;


$("#Squirtle").click(function(event) {
    event.preventDefault();
    userChoice = "Squirtle";
    console.log(userChoice);
    decider(userChoice);
});

$("#Charmander").click(function(event) {
    event.preventDefault();
    userChoice = "Charmander";
    console.log(userChoice);
    decider(userChoice)
});

$("#Bulbasaur").click(function(event) {
    event.preventDefault();
    userChoice = "Bulbasaur";
    console.log(userChoice);
    decider(userChoice)
});

function decider(choice, compChoice) {

    switch (choice) {
        case "Squirtle":
            if (compChoice === "Bulbasaur") {
                // alert("Bulbasaur beats Squirtle! You Lose!");
                compScore++;
                updateScores();
                roundnum++;
                $("#userSelection").fadeOut(500);
                setTimeout(function() {
                    subsequentRounds("Computer Wins")
                }, 1500);
            } else if (compChoice === "Squirtle") {
                //alert("Draw!");
                roundnum++;
                $("#userSelection").fadeOut(500);
                $("#compSelection").fadeOut(500);
                setTimeout(function() {
                    subsequentRounds("Draw")
                }, 1500);
            } else if (compChoice === "Charmander") {
                //alert("Squirtle beats Charmander! You Win!");
                userScore++;
                updateScores();
                roundnum++;
                $("#compSelection").fadeOut(500);

                setTimeout(function() {
                    subsequentRounds("You Win")
                }, 1500);
            }
            break;
        case "Charmander":
            if (compChoice === "Charmander") {
                roundnum++;
                $("#userSelection").fadeOut(500);
                $("#compSelection").fadeOut(500);
                setTimeout(function() {
                    subsequentRounds("Draw")
                }, 1500);
            } else if (compChoice === "Bulbasaur") {
                userScore++;
                updateScores();
                roundnum++;
                $("#compSelection").fadeOut(500);
                setTimeout(function() {
                    subsequentRounds("You Win")
                }, 1500);
            } else if (compChoice === "Squirtle") {

                compScore++;
                updateScores();
                roundnum++;
                $("#userSelection").fadeOut(500);
                setTimeout(function() {
                    subsequentRounds("Computer Wins")
                }, 1500);
            }
            break;
        case "Bulbasaur":
            if (compChoice === "Squirtle") {
                userScore++;
                updateScores();
                roundnum++;
                $("#compSelection").fadeOut(500);
                setTimeout(function() {
                    subsequentRounds("You Win")
                }, 1500);
            } else if (compChoice === "Charmander") {
                compScore++;
                updateScores();
                roundnum++;
                $("#userSelection").fadeOut(500);
                setTimeout(function() {
                    subsequentRounds("Computer Wins")
                }, 1500);
            } else if (compChoice === "Bulbasaur") {
                roundnum++;
                $("#compSelection").fadeOut(500);
                $("#userSelection").fadeOut(500);
                setTimeout(function() {
                    subsequentRounds("Draw")
                }, 1500);
            }
            break;
    }
}

function newCompChoice() {
    rand = Math.floor(Math.random() * rpsArray.length);
    compChoice = rpsArray[rand];
    console.log(compChoice);
    return compChoice;
}

function updateScores() {
    $("#userScore").text(userScore);
    $("#compScore").text(compScore);
}

function isGameOver() {
    if (roundnum >= 11) {
        endOfGameView();

    } else {
        round();
    }
}