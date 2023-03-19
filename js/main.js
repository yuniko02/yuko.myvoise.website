$(function($) {
    $(".slider").slick({
        arrows: true,
        autoplay: true,
        adaptiveHeight: true,
        dots: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,

        responsive:[
            {
                breakpoint:501,
                settings:{
                    arrows: false,
                    dots: true,
                    slidersToShow: 1,
                },
            },
        ],
    });

    $('.slider2').slick({
        arrows: true,
        autoplay: true,
        adaptiveHeight: true,
        dots: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 3,
        rtl: true,
    });
    
    $("#back-top").hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $("#back-top").fadeIn(1000);
        } else {
            $("#back-top").fadeOut();
        }
    });
    $("#back-top").click(function () {
        $("body,html").animate({scrollTop: 0}, 500);
        return false;
    });

});