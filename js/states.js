$( document ).ready(function() {

  let $profile = $('.state-profile'),
      $links = $('.state-nav .nav-link');

  $links.each( function(){
    let $link = $(this);
    $link.click( function(){
      let target = $link.data('target');
      console.log(target);
      $profile.removeClass('active');
      $links.removeClass('active');
      $link.addClass('active');
      $( '#' + target ).addClass('active');
    })
  })

});
