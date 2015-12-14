$(document).ready(function() {
  //selectStartView();

$(".aButton").click(function(event) {
  event.preventDefault();
  round();
});
});

function round () {
  selectRoundView();
  selectScoreView();
}