$(function() {
  var hovered = 'false';
  $('.stars span').mouseover(function(){
      if (hovered == 'false'){
        $('button').prop('disabled', true);
        $('.stars').removeClass('clicked');
        $(this).addClass('hover');
        $(this).prevAll().addClass('hover');
        $(this).nextAll().removeClass('hover');
      }
  })
  $('.stars span').click(function(){
    hovered = 'true';
    setTimeout(hover, 1000);
    $(this).addClass('hover');
    $('.stars').addClass('clicked');
    $('button').prop('disabled', false);
  });
  $('.stars').mouseleave(function(){
    if(!$('.stars').is('.clicked')){
      $('.stars span').removeClass('hover');
      $('button').prop('disabled', true);
    }
  });
  function hover(){
    hovered = 'false';
  }
});
