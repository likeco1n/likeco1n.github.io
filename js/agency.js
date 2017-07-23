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
            $('#particleground-background canvas')
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
        // $(this).text(
        //   event.strftime('%D days %H.%M.%S')
        // );
        console.info('got here');
        var units = ['days', 'hours', 'minutes', 'seconds'];
        for (var i = 0; i < units.length; i ++) {
            var unit = units[i];
            // console.info('event.offset[unit]', event.offset[unit]);
            $(this).find('.' + unit + ' > .number').text(event.offset[unit])
        }
      });


})(jQuery); // End of use strict

// offset: {
//        seconds     : '{int} Seconds left for the next minute',
//        minutes     : '{int} Minutes left for the next hour',
//        hours       : '{int} Hours left until next day',
//        days        : '{int} Days left until next week',
//        daysToWeek  : '{int} Days left until next week',
//        daysToMonth : '{int} Days left until next month',
//        weeks       : '{int} Weeks left until the final date',
//        weeksToMonth: '{int} Weeks left until the next month',
//        months      : '{int} Months left until final date',
//        years       : '{int} Years left until final date',
//        totalDays   : '{int} Total amount of days left until final date',
//        totalHours  : '{int} Total amount of hours left until final date',
//        totalMinutes: '{int} Total amount of minutes left until final date',
//        totalSeconds
