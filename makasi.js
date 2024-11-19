$(document).ready(function () {
    $(window).on('load', function () {
        setTimeout(function () {
            $('.preloader').fadeOut(700)
        }, 800);

        setTimeout(function () {
            $('.container h1').addClass('slide')
        }, 2000);
        // $('.container h1').css('margin-bottom', '10px')
        setTimeout(function () {
            $('.container h3').addClass('slide');
        }, 3500);

        setTimeout(function () {
            $('.container .button-area').addClass('muncul');
        }, 5500);

    })

    // $('.container button').mouseenter(function () {
    //     $(this).addClass('hover')
    // });
    // $('.container button').mouseleave(function () {
    //     $(this).removeClass('hover')
    // })

});

// wah kayak kontol