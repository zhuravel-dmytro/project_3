$(function(){




    $('.slider_inner, .news_slider-inner').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        infinite: false
    });

$('.header_btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
})





});