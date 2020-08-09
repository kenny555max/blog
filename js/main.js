$(function(){
    $('.set-bg').each(function(){
        let bg = $(this).data('setbg')
        $(this).css({
            'background-image': 'url(' + bg + ')'
        });
    });

    $('.card-All').owlCarousel({
        loop: true,
        autoplay: true,
        nav: false,
        dots: false,
        smartspeed: 1200,
        responsive:{
            0: {
                items: 1,
            },
            500: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3
            }
        }
    });

});

$(document).ready(function(){
    AOS.init({
        duration: 2000
    })
})