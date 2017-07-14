var mq768 = window.matchMedia('(min-width:768px)');
$('#sobremiText').hide();
function mediaQueries(mq){
  if(mq.matches){
    $('#sobremi').append('<div class="video col m12"><iframe width="100%" height="400" src="https://www.youtube.com/embed/rGdgmNZcZoQ?list=PLvq-jIkSeTUbFYbzpJFN1GLMBZnm9hX5G" frameborder="0" allowfullscreen></iframe></div>');
  }
  else{
    $('#sobremiText').show();
  }
}

mediaQueries(mq768);
mq768.addListener(mediaQueries);
