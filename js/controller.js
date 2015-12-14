$(document).ready(function() {
    selectStartView();
    var myDataRef = new Firebase('https://pokemonrps.firebaseio.com/');

    $(".aButton").click(function(event) {
        event.preventDefault();
        round();
    });


});

function round() {
    $(".aButton").off();
    $(".displayContainer").empty();
    selectRoundView();
    selectScoreView();
    selectStarterView();
}

function subsequentRounds(winState) {
    currentView = "winLossDraw";
    $(".displayContainer").fadeOut(500, function() {
        $(".displayContainer").html(winLossDrawHtml);
        $(".winLossDraw").text(winState);
    });
    $(".displayContainer").fadeIn(500);
    setTimeout(isGameOver, 1500);
}