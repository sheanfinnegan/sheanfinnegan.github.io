$(document).ready(function () {
    $(window).on('load', function () {
        setTimeout(function () {
            $('.preloader').fadeOut(700)

        }, 800)

        setTimeout(function () {
            $('#home h2').addClass('munculshean')
            $('.pkanan').addClass('muncultext');
            $('.pkiri').addClass('muncultext');
        }, 1300)
    });

    $(window).scroll(function () {
        const wScroll = $(this).scrollTop();
        console.log(wScroll)
        if (wScroll > $('#project').offset().top - 350) {
            $('.cards').addClass('munculgambar')
        } else {
            $('.cards').removeClass('munculgambar')
        }
    })



    const toggle = $('#toggle-icon')
    $('#toggle-icon').click(function () {
        $(this).toggleClass('rotate-icon')

        if (toggle.hasClass('rotate-icon')) {
            $('.container .ulkedua').animate({
                width: '200px',
                opacity: 1
            }, 200)
            $('.container .ulkedua li').animate({
                opacity: 1
            }, 500)
        } else {
            $('.container .ulkedua').animate({
                width: '0px',
                opacity: 0
            }, 200)
            $('.container .ulkedua li').animate({
                opacity: 0
            }, 500)
        }
    })

    $('.container ul li a').mouseenter(function () {
        $(this).css('color', 'rgb(46, 199, 191)')
    })
    $('.container ul li a').mouseleave(function () {
        $(this).css('color', 'rgb(255, 255, 255)')
    })

    $('#home button').click(function (e) {
        $('#home p').slideToggle('slow');
        e.preventDefault();

    });

    $('#coming').on('click', function () {
        alert('Coming Soon!!');
    })

})