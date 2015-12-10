$(document).ready(function() {


    $( "#clickme" ).click(function() {
  $( "#userSelection" ).animate({
    marginTop: "60px",
    opacity: 0.0,
  }, 300 );
});

  $( "#dontclickme" ).click(function() {
  $( "#compSelection" ).animate({
    marginTop: "60px",
    opacity: 0.0,
  }, 300 );
});

  
});