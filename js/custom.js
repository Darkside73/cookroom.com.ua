$(function () {

  $("[data-toggle=popover]").popover();
  $("[data-toggle=tooltip]").tooltip();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#logoImage').one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
        if ($(window).scrollTop() > 100)
          $('#logoImage').attr('src', '/img/logo_small.png');
      });
      $('#main-nav').addClass('sticky');
    } else {
      $('#logoImage').attr('src', '/img/logo.png');
      $('#main-nav').removeClass('sticky');
    }
  });

});

