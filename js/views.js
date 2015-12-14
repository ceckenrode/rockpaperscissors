

  function selectStartView() {
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
      $(".displayContainer").fadeOut(1000, function() {
      $(".displayContainer").html(scoreViewHtml); 
     });

     $(".display").animate({backgroundColor: "#FFCB05"}, 500)
     $(".displayContainer").fadeIn(1000);
   }



