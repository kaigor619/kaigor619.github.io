$(document).ready(function(){


 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });

$("#carousel").owlCarousel({


    items:1,
    loop:true,
    center:true,
    mouseDrag:true,
    touchDrag:true,
    dots:true,
    autoplay:false,
    smartSpeed:700,

});

$(".carousel-top").not('#carousel-top-cup').not('.carousel-top.case').owlCarousel({
    items:3,
    loop:true,
    center:true,
    mouseDrag:true,
    touchDrag:true,
    dots:true,
    autoplay:true,
    smartSpeed:700,
    dots:true,
    responsive:{
        578:{
            items:3
        },
        0:{
            items:1,
        },
    }


});
$("#carousel-top-cup").owlCarousel({
    items:2,
    loop:true,
    center:false,
    mouseDrag:true,
    touchDrag:true,
    dots:true,
    autoplay:true,
    smartSpeed:700,
    responsive:{
        578:{
            items:2
        },
        0:{
            items:1,
        },
    }


});
$(".carousel-top.case").owlCarousel({
    items:3,
    loop:true,
    center:false,
    mouseDrag:true,
    touchDrag:true,
    dots:true,
    autoplay:true,
    smartSpeed:700,
    responsive:{
        500:{
            items:3
        },
        0:{
            items:1,
        },
    }


});


$('#ourWork').owlCarousel({
    loop:true,
    margin:5,
    center:true,
    mouseDrag:true,
    touchDrag:true,
    autoplay:true,
    smartSpeed:700,
    dots:false,
    nav:true,
    navText:["<img src=\"img/left.png\"/>","<img src=\"img/right.png\"/>"],
    responsive:{
    0:{
        items:2,
    },        
    576:{
        items:3,
    },
    768:{
        items:4,
    },
    1300:{
        items:5,
    },
    1600:{
        items:8,
    }    
},
});




// Боковое Меню
$('.burger').on('click',function(){
    $('.sidebar').addClass('active');


    $('.sidebar__close').on('click',function(){
    $('.sidebar').removeClass('active');
});


});



// Табы
$('.top-link a').eq(0).css('border-top','none');
$('.top-link a').eq(4).css('border-bottom','none');
$('.carousel-top').not(":first").hide();
$('.top-link').click(function(e){
    e.preventDefault();
    $('.top-link a').removeClass('active').eq($(this).index()).addClass('active');
    $(".carousel-top").hide().eq($(this).index()).fadeIn('fast');

}).eq(0).find('a').addClass("active");



            $('.top__menu').slick({    
            infinite: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            vertical:true,
            arrows:false,
            prevArrow:'<button class="left__top__arrow"><img src="img/left.png"/></button>',
            nextArrow:'<button class="right__top__arrow"><img src="img/right.png"/></button>',
            responsive: [
            {
                breakpoint:822,
                settings:{
                    vertical:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:true,
                    // autoplay:true,
                    // autoplaySpeed:5000,

                }
            }

            ]
            }); 

            $('.top__menu').on('afterChange', function(event, slick, currentSlide){

  if ($('.top-link').eq(currentSlide)) { 
    $('.top-link a').removeClass('active').eq($('.top-link').eq(currentSlide).index()).addClass('active');
    $(".carousel-top").hide();
    $(".carousel-top").eq($('.top-link').eq(currentSlide).index()).fadeIn('fast');
}
}); 



});