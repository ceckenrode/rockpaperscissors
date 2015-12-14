$(document).ready(function() {
 selectStartView();

$(".aButton").click(function(event) {
  event.preventDefault();
  round();
  $(".aButton").off();

  $(".aButton").click(function(event) {
    selectStarterBulbView();
});

});


function round () {
  selectRoundView();
  selectScoreView();
  selectStarterView();
}

});