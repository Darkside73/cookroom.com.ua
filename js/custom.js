
/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */
// $(document).ready(function () {
//     var wow = new WOW(
//             {
//                 boxClass: 'wow', // animated element css class (default is wow)
//                 animateClass: 'animated', // animation css class (default is animated)
//                 offset: 100, // distance to the element when triggering the animation (default is 0)
//                 mobile: false        // trigger animations on mobile devices (true is default)
//             }
//     );
//     wow.init();
// });


//owl carousel for work
// $(document).ready(function () {

//     $("#work-carousel").owlCarousel({
//         // Most important owl features
//         items: 4,
//         itemsCustom: false,
//         itemsDesktop: [1199, 3],
//         itemsDesktopSmall: [980, 3],
//         itemsTablet: [768, 3],
//         itemsTabletSmall: false,
//         itemsMobile: [479, 1],
//         singleItem: false,
//         startDragging: true,
//         autoPlay: 6000
//     });

// });


$(function () {
  $("[data-toggle=popover]").popover();
  $("[data-toggle=tooltip]").tooltip();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#logoImage').attr('src', '/img/logo_small.png');
      $('#main-nav').addClass('sticky');
    } else {
      $('#logoImage').attr('src', '/img/logo.png');
      $('#main-nav').removeClass('sticky');
    }
  });
});

