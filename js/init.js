(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {

  // Set up card descriptions on click
  $(document).on('click', '.card', function() {
    var info = $(this).find(".card-reveal");
    $(info).show();
    $(info).css({"-webkit-transform":"translateY(-100%)"});
  });

  // Make sure all cards are of matching heights
  $(".p-card").matchHeight();

});
