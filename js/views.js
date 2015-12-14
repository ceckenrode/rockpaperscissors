var currentView;

function selectStartView() {
    currentView = "startView";
    $(".displayContainer").fadeOut(500, function() {
        $(".displayContainer").html(startViewHtml);
    });

    $(".display").animate({
        backgroundColor: "#FFCB05"
    }, 1000)
    $(".displayContainer").fadeIn(500);
}

var startViewHtml = "<div class='pokeball'>";
startViewHtml += "<div class='top'>";
startViewHtml += "<div class='middle_circle'>";
startViewHtml += "<div class='white_in'><\/div>";
startViewHtml += "<\/div>";
startViewHtml += "<\/div>";
startViewHtml += "<div class='bottom'><\/div>";
startViewHtml += "<\/div>";
startViewHtml += "<p class='pokelogofont'>Pokémon Rock Paper Scissors<\/p>";
startViewHtml += "<p class='pretendo'>Press A to begin!<\/p>";

var roundViewHtml = "<h1 class=\"round\">Round <span id=\"roundnum\"><\/span><\/h1>";

function selectRoundView() {
    currentView = "roundView";
    $(".displayContainer").fadeOut(1000, function() {
        $(".displayContainer").html(roundViewHtml);
        $("#roundnum").text(roundnum);
    });

    $(".display").animate({
        backgroundColor: "#FFCB05"
    }, 500)
    $(".displayContainer").fadeIn(1000);
}

var winLossDrawHtml = "<h1 class=\"winLossDraw\"><\/h1>";


var scoreViewHtml = "<div class=\"scoreboard\">";
scoreViewHtml += "<h3>Player Score <span id=\"userScore\">0<\/span><\/h3>";
scoreViewHtml += "<h3>Computer Score <span id=\"compScore\">0<\/span><\/h3>";
scoreViewHtml += "<\/div>";

function selectScoreView() {
    currentView = "scoreView";
    $(".displayContainer").fadeOut(1000, function() {
        $(".displayContainer").html(scoreViewHtml);
        $("#userScore").text(userScore);
        $("#compScore").text(compScore);
    });

    $(".display").animate({
        backgroundColor: "#FFCB05"
    }, 500)
    $(".displayContainer").fadeIn(1000);
}

var chooseStarterCharViewHtml = "<div class=\"pokeDescript\">";
chooseStarterCharViewHtml += " <span class=\"glyphicon glyphicon-triangle-left\"><\/span>";
chooseStarterCharViewHtml += "<img src=\"images\/CharmanderSprite.gif\" height=\"42\" width=\"42\"><span class=\"glyphicon glyphicon-triangle-right\"><\/span>";
chooseStarterCharViewHtml += "<div class=\"chatbox-bottom\">";
chooseStarterCharViewHtml += "<p>Charmander: This fire-type Pokémon is strong against plant types, but weak against water types.<\/p>";
chooseStarterCharViewHtml += "<\/div>";
chooseStarterCharViewHtml += "<\/div>";

var charDescript = "Charmander: This fire-type Pokémon is strong against plant types, but weak against water types."

function selectStarterView() {
    currentView = "selectStart";
    $(".displayContainer").fadeOut(1000, function() {
        $(".displayContainer").html(chooseStarterCharViewHtml);
        $(".displayContainer").fadeIn(1000);
    });
    selectStarterCharView();
    /*$("body").off();
     $(".leftclick").click(function(event) {
      selectStarterSquirtView();
      });
     $(".aButton").click(function(event) {
          chooseThisYes("Charmander", "fire");;
  });
      $(".rightclick").click(function(event) {
      selectStarterBulbView();
    }); */
}

var chooseStarterBulbViewHtml = "<div class=\"pokeDescript\">";
chooseStarterBulbViewHtml += "<span class=\"glyphicon glyphicon-triangle-left\"><\/span>";
chooseStarterBulbViewHtml += "<img src=\"images\/BulbasaurSprite.gif\" height=\"38\" width=\"37\"><span class=\"glyphicon glyphicon-triangle-right\"><\/span>";
chooseStarterBulbViewHtml += "<div class=\"chatbox-bottom\">";
chooseStarterBulbViewHtml += "<p>Bulbasaur: This grass-type Pokémon is strong against water types, but weak against fire types.<\/p>";
chooseStarterBulbViewHtml += "<\/div>";
chooseStarterBulbViewHtml += "<\/div>";

var bulbDescript = "Bulbasaur: This grass-type Pokémon is strong against water types, but weak against fire types.";

function selectStarterBulbView() {
    currentView = "chooseBulb";
    $(".displayContainer img").attr('src', 'images/BulbasaurSprite.gif');
    $(".chatbox-bottom p").fadeOut(100, function() {
        $(".chatbox-bottom p").text(bulbDescript);
    });
    $(".bButton").off();
    $(".aButton").off();
    $(".upclick").off();
    $(".downclick").off();
    $(".chatbox-bottom p").fadeIn(100)
    $(".leftclick").off();
    $(".aButton").click(function(event) {
        chooseThisYes("Bulbasaur", "grass");;
    });
    $(".leftclick").click(function(event) {
        selectStarterCharView();
    });
    $(".rightclick").off();
    $(".rightclick").click(function(event) {
        selectStarterSquirtView();
    });
};

function selectStarterCharView() {
    currentView = "chooseChar";
    $("body").off();
    $(".displayContainer img").attr('src', 'images/CharmanderSprite.gif');
    $(".chatbox-bottom p").fadeOut(100, function() {
        $(".chatbox-bottom p").text(charDescript);
    });
    $(".chatbox-bottom p").fadeIn(100);
    $(".bButton").off();
    $(".aButton").off();
    $(".upclick").off();
    $(".downclick").off();
    $(".aButton").click(function(event) {
        chooseThisYes("Charmander", "fire");
    });
    $(".leftclick").off();
    $(".leftclick").click(function(event) {
        selectStarterSquirtView();
    });
    $(".rightclick").off();
    $(".rightclick").click(function(event) {
        selectStarterBulbView();
    });
};

var chooseStarterSquirtViewHtml = "<div class=\"pokeDescript\">";
chooseStarterSquirtViewHtml += "<span class=\"glyphicon glyphicon-triangle-left\"><\/span>";
chooseStarterSquirtViewHtml += "<img src=\"images\/SquirtleSprite.gif\" height=\"43\" width=\"39\"><span class=\"glyphicon glyphicon-triangle-right\"><\/span>";
chooseStarterSquirtViewHtml += "<div class=\"chatbox-bottom\">";
chooseStarterSquirtViewHtml += "<p>Squirtle: This water-type Pokémon is strong against fire types, but weak against plant types.<\/p>";
chooseStarterSquirtViewHtml += "<\/div>";
chooseStarterSquirtViewHtml += "<\/div>";

var squirtDescript = "Squirtle: This water-type Pokémon is strong against fire types, but weak against plant types."

function selectStarterSquirtView() {
    currentView = "chooseSquirt"
    $(".displayContainer img").attr('src', 'images/SquirtleSprite.gif');
    $(".chatbox-bottom p").fadeOut(100, function() {
        $(".chatbox-bottom p").html(squirtDescript);
    });
    $(".chatbox-bottom p").fadeIn(100);
    $(".bButton").off();
    $(".aButton").off();
    $(".upclick").off();
    $(".downclick").off();
    $(".aButton").click(function(event) {
        chooseThisYes("Squirtle", "water");;
    });
    $(".leftclick").off();
    $(".leftclick").click(function(event) {
        selectStarterBulbView();
    });
    $(".rightclick").off();
    $(".rightclick").click(function(event) {
        selectStarterCharView();
    });
};

function chooseThisYes(name, type) {
    $(".chatbox-bottom p").fadeOut(100, function() {
        $(".chatbox-bottom p").html("Choose " + name + " the " + type + " type?<br><span class='highlight'>Yes</span><br>No");
        $(".chatbox-bottom p").fadeIn(500);
        $(".upclick").off();
        $(".downclick").off();
        $(".upclick").click(function(event) {
            chooseThisYes(name, type);
        });
        $(".aButton").off();
        $(".aButton").click(function(event) {
            battleView(name);
            //userChoice = name;
            //decider(userChoice);
            //$(".displayContainer").fadeOut(20);
            //round();
        });

        $(".bButton").click(function(event) {
            if (currentView === "chooseSquirt") {
                $(".bButton").off();
                $(".chatbox-bottom p").fadeOut(100);
                selectStarterSquirtView();
            } else if (currentView === "chooseChar") {
                $(".chatbox-bottom p").fadeOut(100);
                selectStarterCharView();
            } else if (currentView === "chooseBulb") {
                $(".chatbox-bottom p").fadeOut(100);
                selectStarterBulbView();
            }
        });
        $(".downclick").click(function(event) {
            chooseThisNo(name, type);
            $(".aButton").off();
            $(".aButton").click(function(event) {
                if (currentView === "chooseSquirt") {
                    $(".bButton").off();
                    $(".chatbox-bottom p").fadeOut(100);
                    selectStarterSquirtView();
                } else if (currentView === "chooseChar") {
                    $(".chatbox-bottom p").fadeOut(100);
                    selectStarterCharView();
                } else if (currentView === "chooseBulb") {
                    $(".chatbox-bottom p").fadeOut(100);
                    selectStarterBulbView();
                }

            });
        });
    });

}

function battleView(name) {
    $(".aButton").off();
    var compChoice = newCompChoice();
    console.log(compChoice);
    var battleViewVs = "<img src=\"images\/" + name + "SpriteBack.gif\" width=\"80\" class=\"slideRight\" id=\"userSelection\">";
    battleViewVs += "<img src=\"images\/" + compChoice + "Sprite.gif\" width=\"70\" class=\"slideLeft\" id=\"compSelection\">";
    $(".display").addClass('displayBattle');

    $(".displayContainer").html(battleViewVs);
    setTimeout(function() {
        $("#userSelection").removeClass('slideRight');
        $("#compSelection").removeClass('slideLeft');
        decider(name, compChoice);
    }, 1000);
}

function chooseThisNo(name, type) {
    $(".chatbox-bottom p").fadeOut(100, function() {
        $(".chatbox-bottom p").html("Choose " + name + " the " + type + " type?<br>Yes<br><span class='highlight'>No</span>");
        $(".chatbox-bottom p").fadeIn(500);
        $(".upclick").click(function(event) {
            chooseThisYes(name, type);
        });
        $(".downclick").click(function(event) {
            chooseThisNo(name, type);
        });
    });

}

function endOfGameView() {
    var youWin = "<h1>You Win<\/h1>";
    var compWins = "<h1>Computer Wins<\/h1>";
    var draw = "<h1>Draw<\/h1>";
    var gameOver = "<h3>Game Over<\/h3>";
    if (userScore > compScore) {
        $(".displayContainer").html(youWin + gameOver);
    } else if (compScore > userScore) {
        $(".displayContainer").html(compWins + gameOver);
    } else {
        $(".displayContainer").html(draw + gameOver);

    }
}