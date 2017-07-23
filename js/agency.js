// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // particle background
    $('#particleground-background').particleground({
        dotColor: '#fed136'
    });
    function resizeParticleGround() {
        setTimeout(function () {
            $('#particleground-background')
                .width($('header').width())
                .height($('header').height());
        })
    }
    $(window).resize(resizeParticleGround)
    resizeParticleGround();

    // Countdown timer
    $('#small-timer').countdown('2017/07/30', function(event) {
        $(this).text(
          event.strftime('%D days %H:%M:%S')
        );
      });
    $('#big-timer').countdown('2017/07/30', function(event) {
        $(this).text(
          event.strftime('%D days %H:%M:%S')
        );
      });


})(jQuery); // End of use strict
