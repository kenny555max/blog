$(document).ready(function(){

    $(window).on('load', function(){
        $('.loader').fadeOut()
        $('.preloader').fadeOut('slow')
    })
    
    
    let closeBtn = $('.closeBtn')
    let modal = $('#simpleModal')
    let Cancel = $('.cancel')

    $('.signup').on('click', function(){
        modal.show()
        // modal.css({
        //     'display': 'block'
        // });
    });



    closeBtn.on('click', function(){
        modal.hide()
    });

    
    $(window).on('click', function(){
        // modal.hide()
        // modal.css({
        //     'display': 'none'
        // });
    });

    Cancel.on('click', function(){
        modal.hide()
    });

    let btnSubmit = $('.subBtn');
    let name = $('.name');
    let email = $('.email');
    let message = $('.message');

    $('.subBtn').on('click', function(){
        if($('.name' == 'kenny')){
            alert('sent')
        }else(
            alert('not message')
        )
    })

    $('.banner-img').each(function () {
        let bg = $(this).data('setbg');
        $(this).css(
            'background-image', 'url(' + bg  + ')');
    });

    $('.tab-img-set').each(function () {
        let bg = $(this).data('setbg');
        $(this).css(
            'background-image', 'url(' + bg  + ')');
    });

    $('.panel-img').each(function () {
        let bg = $(this).data('setbg');
        $(this).css(
            'background-image', 'url(' + bg  + ')');
    });

    $(".panel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 1,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        // navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'], 
    });




    $(".tab-img").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 1,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        // navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'], 
    });



    $(".banner-sec").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 1,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'], 
    });



    let contentSec = $('.content-sec')
    let tpNav = $('.tpNav')
    let top = $('.top-top')
    $(window).scroll(function(){
        let wScroll = $(this).scrollTop();

        if(wScroll > 100){
            tpNav.addClass('tpscroll');
            top.addClass('top-scroll');
        }else{
            tpNav.removeClass('tpscroll');
            top.removeClass('top-scroll');
        };


    


    contentSec.css({
        'opacity': wScroll / 12 + '%'
    })

    })


    $(window).scroll(function(){
        if($(window).scrollTop() > 200){
            $('.back-to-top').fadeIn('slow')
        }else(
            $('.back-to-top').fadeOut('slow')
        );


        if($(window).scrollTop() > 300){
            $('.img-Box').each(function(i){
                setTimeout(function(){
                    $('.img-Box').eq(i).addClass('inside')
                }, 100 * (i))
            })
        }else(
            $('.img-Box').removeClass('inside')
        )


        if($(window).scrollTop() > $(".img-sect").offset().top-($(window).height()/2)){
            $('.img-Boxes').each(function(i){
                setTimeout(function(){
                    $('.img-Boxes').eq(i).addClass('inside')
                }, 100 * (i))
            })
        }else(
            $('.img-Boxes').removeClass('inside')
        )


        $('.back-to-top').on('click', function(e){
            e.preventDefault()
            $('html, body').animate(
                {
                    scrollTop: 0
                },
                1500,
                'easeInOutExpo'
            );
            return false
        });
    })



    $(".product-hovering").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 3,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        responsive: {
            500: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });




    $(".card-wrapper").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 3,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        responsive: {
            500: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    });

})







var tabButtons = document.querySelectorAll('.tabContainer .buttonContainer button')
var tabPanel = document.querySelectorAll('.tabContainer .tabPanel')

function showPanel (panelIndex,colorCode){
    tabButtons.forEach(function(tabPanel){
        tabPanel.style.backgroundColor = 'colorCode';
        // tabPanel.style.color = 'purple'
    });
    tabButtons[panelIndex].style.backgroundColor= 'black';
    tabButtons[panelIndex].style.color= 'floralwhite';

    tabPanel.forEach(function(tabPanel){
        tabPanel.style.display = 'none';
        tabPanel.style.backgroundColor = 'colorCode';
        tabPanel.style.color = 'black'
    });
    tabPanel[panelIndex].style.display = 'block';
    // tabPanel[panelIndex].style.backgroundColor = 'red';
}

