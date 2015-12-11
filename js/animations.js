$(document).ready(function() {


    $( "#clickme" ).click(function() {
      $( "#userSelection" ).effect("shake", {
      times:10
    }, 800)
  //$( "#userSelection" ).animate({
    //marginTop: "60px",
    //opacity: 0.0,
  //}, 300 );
});

  $( "#dontclickme" ).click(function() {
    $( "#compSelection" ).effect("shake", {
      times:10
    }, 800)

    //.animate({

    //marginTop: "60px",
    //opacity: 0.0,
  //}, 300 );
});

  
});