/*Theme    : assan
 * Author  : Design_mylife
 * Version : V1.4
 *
 */


//sticky header on scroll
$(document).ready(function () {
    $(window).load(function () {
        $(".sticky").sticky({topSpacing: 0});
    });
});

/* ==============================================
 WOW plugin triggers animate.css on scroll
 =============================================== */
$(document).ready(function () {
    var wow = new WOW(
            {
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 100, // distance to the element when triggering the animation (default is 0)
                mobile: false        // trigger animations on mobile devices (true is default)
            }
    );
    wow.init();
});


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


//owl carousel for news
/*========tooltip and popovers====*/
$(document).ready(function () {
$("[data-toggle=popover]").popover();

$("[data-toggle=tooltip]").tooltip();
});

//transparent header

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.transparent-header').css("background", "#252525");
        } else {
            $('.transparent-header').css("background", "transparent");
        }
    });
});
