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
    // console.log(cursorY);
    if (cursorY >=1) {
      console.log("entraste");
      $('.scroll').show();
      $('.initial').hide();
    } else {
      $('.scroll').hide();
      $('.initial').show();
    }
  });

//carrusel

$( () => {
  var numeroSlide=1;
  var formatear=false;
  var cantImg=$("#slide ul li").length;
  console.log(cantImg);
  // $("#slide ul li").css({width:(cantImg*50)+"%"});


  $("#indicator li").click(function(){
    var role=$(this).attr("role-slide");
    console.log("role",role);

    // $("#slide ul li").css({display:"none"});
    $("#slide ul li").hide();
    $("#slide ul li:nth-child("+ role +")").fadeIn();
    $("#indicator li").css({opacity:".5"});
    // $("#indicator li:nth-child("+ role +")").css({opacity:"1"});
    $(this).css({opacity:"1"});
    console.log(this);
    formatear=true;
    numeroSlide=role;
  });

  function avanzar(){
    if(numeroSlide>=cantImg){
      numeroSlide=1;
    }else{
      numeroSlide++;
    }
    // $("#slide ul li").css({display:"none"});
    $("#slide ul li").hide();
    $("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();
    $("#indicator li").css({opacity:".5"});
    $("#indicator li:nth-child("+ numeroSlide +")").css({opacity:"1"});
    formatear=true;
    console.log("numeroSlide",numeroSlide)
  }

  $("#right").click(function(){
    avanzar();
    formatear=true;
  });

  $("#left").click(function(){
    if(numeroSlide<=1){
      numeroSlide=cantImg;
    }else{
      numeroSlide--;
    }
    $("#slide ul li").css({display:"none"});
    $("#slide ul li:nth-child("+ numeroSlide +")").fadeIn();
    $("#indicator li").css({opacity:".5"});
    $("#indicator li:nth-child("+ numeroSlide +")").css({opacity:"1"});

    console.log("numeroSlide",numeroSlide)
    formatear=true;
  });

  setInterval(function(){
    if(formatear){
      formatear=false
    }else{
      avanzar();
    }

  },4200);//el metodo hide() y fadeIn() tienen 400ms por defecto...en total demora 5 segundos

});


 $('.seccion i').on("click", function(e) {
   e.preventDefault();
    console.log("desplaza");
    var height= $(".scroll").outerHeight(true);
    console.log(height);
    var target ='#'+ $(this).attr("role-data");
    console.log(target);

    $('html,body').animate({scrollTop: $(target).offset().top - height*2}, 2000);
    return false;

   });

   $('.menu li').on("click", function(e) {
     e.preventDefault();
      console.log("desplaza");
      var height= $(".scroll").outerHeight(true);
      console.log(height);
      var target ='#'+ $(this).attr("role-menu");
      console.log(target);

      $('html,body').animate({scrollTop: $(target).offset().top - height}, 2000);
      return false;

     });



$(document).ready(function(){
      $(".name").fadeIn(1500);
      $(".prof").fadeIn(1500);
      // $('.seccion').scrollSpy();

    });
