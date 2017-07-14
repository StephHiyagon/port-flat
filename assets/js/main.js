$(".scroll").hide();
$(".name").hide();
$(".prof").hide();
$(".in").hide();
$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).fadeToggle( "fast", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$(".shadow").click(function(){
  $( ".menu" ).fadeToggle( "fast", function() {
  $( ".cross" ).hide();
  $( ".hamburger" ).show();
  });
})

$( ".cross" ).click(function() {
$( ".menu" ).fadeToggle( "fast", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

$(".portada1").on({
    mouseover:function(){
      $('.info').fadeOut("1500");
      $('.in').fadeIn("1500");
    },
    mouseout:function(){
      $('.info').fadeIn("1500");
      $('.in').fadeOut("1500");
    }
  })

$(window).scroll(function(e) {
    const cursorY = $(window).scrollTop();
    console.log(cursorY);
    if (cursorY >= 550) {
      console.log("entraste");
      $('.scroll').show();
      $('.initial').hide();
    } else {
      $('.scroll').hide();
      $('.initial').show();
    }
  });


$(document).ready(function(){
      $(".name").fadeIn(1500);
      $(".prof").fadeIn(1500);
      $('.seccion').scrollSpy();

    
    });
