$(document).ready(function() {
  $('.no-fb-text').click(function(){
    $('.no-facebook').css('display','inherit');
  });

  $('.close').click(function(){
  	$('.no-facebook').css('display','none');
  });

  $('.review1').click(function(){
    $('.mode').css('display','inherit');
    $('.james').css('display','inherit');
  });

  $('.close').click(function(){
  	$('.james').css('display','none');
    $('.mode').css('display','none');
  });

  $('.first, .second, .third, .money1').click(function(){
  	$(this).toggleClass('clicked');
  });

});

