$( document ).ready(function() {

  let $profile = $('.story-profile'),
      $cards = $('.story-card');

  $('.story-card').each( function(){
    let $card = $(this);
    $card.click( function(){
      let target = $card.data('target');
      $profile.removeClass('active');
      $cards.removeClass('active');
      $card.addClass('active');
      $( '#' + target ).addClass('active');
    })
  })

});
