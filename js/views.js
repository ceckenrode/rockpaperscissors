var currentView;

  function selectStartView() {
    currentView = "startView";
     $(".displayContainer").fadeOut(500, function() {
      $(".displayContainer").html(startViewHtml); 
     });

     $(".display").animate({backgroundColor: "#FFCB05"}, 1000)
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

var roundViewHtml = "<h1 class=\"round\">Round <span id=\"roundnum\">1<\/span><\/h1>";
          
function selectRoundView() {
      currentView = "roundView";
      $(".displayContainer").fadeOut(1000, function() {
      $(".displayContainer").html(roundViewHtml); 
     });

     $(".display").animate({backgroundColor: "#FFCB05"}, 500)
     $(".displayContainer").fadeIn(1000);
   }

var scoreViewHtml = "<div class=\"scoreboard\">";
scoreViewHtml += "<h3>Player Score <span id=\"userScore\">0<\/span><\/h3>";
scoreViewHtml += "<h3>Computer Score <span id=\"userScore\">0<\/span><\/h3>";
scoreViewHtml += "<\/div>";

function selectScoreView() {
      currentView = "scoreView";
      $(".displayContainer").fadeOut(1000, function() {
      $(".displayContainer").html(scoreViewHtml); 
     });

     $(".display").animate({backgroundColor: "#FFCB05"}, 500)
     $(".displayContainer").fadeIn(1000);
   }

var chooseStarterCharViewHtml = "<div class=\"pokeDescript\">";
chooseStarterCharViewHtml += " <span class=\"glyphicon glyphicon-triangle-left\"><\/span>";
chooseStarterCharViewHtml += "<img src=\"images\/charmanderSprite.gif\" height=\"42\" width=\"42\"><span class=\"glyphicon glyphicon-triangle-right\"><\/span>";
chooseStarterCharViewHtml += "<div class=\"chatbox-bottom\">";
chooseStarterCharViewHtml += "<p>Charmander: This fire-type Pokémon is strong against plant types, but weak against water types.<\/p>";
chooseStarterCharViewHtml += "<\/div>";
chooseStarterCharViewHtml += "<\/div>";

var charDescript = "Charmander: This fire-type Pokémon is strong against plant types, but weak against water types."

function selectStarterView() {
      currentView = "chooseChar";
      $(".displayContainer").fadeOut(1000, function() {
      $(".displayContainer").html(chooseStarterCharViewHtml); 
     });

     $(".display").animate({backgroundColor: "#FFCB05"}, 500)
     $(".displayContainer").fadeIn(1000);
     $(".leftclick").off();
     $(".leftclick").click(function(event) {
      selectStarterSquirtView();
      });
     $(".rightclick").off();
      $(".rightclick").click(function(event) {
      selectStarterBulbView();
    });
   }

var chooseStarterBulbViewHtml = "<div class=\"pokeDescript\">";
chooseStarterBulbViewHtml += "<span class=\"glyphicon glyphicon-triangle-left\"><\/span>";
chooseStarterBulbViewHtml += "<img src=\"images\/bulbasaurSprite.gif\" height=\"38\" width=\"37\"><span class=\"glyphicon glyphicon-triangle-right\"><\/span>";
chooseStarterBulbViewHtml += "<div class=\"chatbox-bottom\">";
chooseStarterBulbViewHtml += "<p>Bulbasaur: This plant-type Pokémon is strong against water types, but weak against fire types.<\/p>";
chooseStarterBulbViewHtml += "<\/div>";
chooseStarterBulbViewHtml += "<\/div>";

var bulbDescript = "Bulbasaur: This plant-type Pokémon is strong against water types, but weak against fire types.";

function selectStarterBulbView() {
      currentView = "chooseBulb";
      $(".displayContainer img").attr('src', 'images/bulbasaurSprite.gif');
      $(".chatbox-bottom p").fadeOut(100, function() {
        
        $(".chatbox-bottom p").text(bulbDescript);
      });
      $(".chatbox-bottom p").fadeIn(100)
      $(".leftclick").off();
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
      $(".displayContainer img").attr('src', 'images/charmanderSprite.gif');
      $(".chatbox-bottom p").fadeOut(100, function() {
        $(".chatbox-bottom p").text(charDescript);
      });
      $(".chatbox-bottom p").fadeIn(100);
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
chooseStarterSquirtViewHtml += "<img src=\"images\/squirtleSprite.gif\" height=\"43\" width=\"39\"><span class=\"glyphicon glyphicon-triangle-right\"><\/span>";
chooseStarterSquirtViewHtml += "<div class=\"chatbox-bottom\">";
chooseStarterSquirtViewHtml += "<p>Squirtle: This water-type Pokémon is strong against fire types, but weak against plant types.<\/p>";
chooseStarterSquirtViewHtml += "<\/div>";
chooseStarterSquirtViewHtml += "<\/div>";

var squirtDescript = "Squirtle: This water-type Pokémon is strong against fire types, but weak against plant types."

function selectStarterSquirtView() {
      currentView = "chooseSquirt"
      $(".displayContainer img").attr('src', 'images/squirtleSprite.gif');
      $(".chatbox-bottom p").fadeOut(100, function() {
      $(".chatbox-bottom p").html(squirtDescript);
      });
      $(".chatbox-bottom p").fadeIn(100);
      $(".leftclick").off();
      $(".leftclick").click(function(event) {
      selectStarterBulbView();
    });
      $(".rightclick").off();
      $(".rightclick").click(function(event) {
      selectStarterCharView();
    });
      };


