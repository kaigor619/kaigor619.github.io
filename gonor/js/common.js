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

$("#carousel-shares-case").owlCarousel({
    items:1,
    loop:true,
    center:true,
    mouseDrag:true,
    touchDrag:true,
    dots:true,
    autoplay:true,
    smartSpeed:700,


});

$(".carousel-top").owlCarousel({
    items:3,
    loop:true,
    center:true,
    mouseDrag:true,
    touchDrag:true,
    dots:true,
    autoplay:false,
    smartSpeed:700,
    dots:false,
    responsive:{
        578:{
            items:3
        },
        0:{
            items:1,
        },
    }


});

$('#ourWork').owlCarousel({
    items:4,
    loop:true,
    margin:5,
    center:true,
    mouseDrag:true,
    touchDrag:true,
    dots:true,
    autoplay:false,
    smartSpeed:700,
    dots:false,
    nav:true,
    navText:["<img src=\"img/left.png\"/>","<img src=\"img/right.png\"/>"],
    responsive:{
    0:{
        items:2,
    },     
    320:{
        items:2
    },   
    400:{
        items:2,
    },   
    576:{
        items:3,
    },
    768:{
        items:4,
    },
    992:{
        items:4,
    },
    1400:{
        items:5,
    },
    1600:{
        items:6,
    }    
},
});




// Боковое Меню
$('.burger').on('click',function(){
    $('.sidebar').css('left','0px');
    // $('.cover-background').css('opacity','1');

    $('.cover-background').on('click',function(){
        $('.sidebar').css('left','-250px');
        // $(this).css('opacity','0');       
    });

    $('.sidebar__close').on('click',function(){
    $('.sidebar').css('left','-250px');
    // $('.cover-background').css('opacity','0');
});


});



// Табы
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
                    arrows:false,
                    slidesToShow: 5,

                }

            },
            {
                breakpoint:822,
                settings:{
                    vertical:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows:true,
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





// $(window).resize(function(){
//       let win = $(window);
//       if (win.width() <= 576) { 
//         // $('.top__menu').addClass('slider');
//             $('.top__menu').slick({
//             infinite: false,
//             arrows:true,
//             prevArrow:'<div class="left__top__arrow"><img src="img/left.png"/></div>',
//             nextArrow:'<div class="right__top__arrow"><img src="img/right.png"/></div>'
//             }); 

//             $('.top__menu').on('afterChange', function(event, slick, currentSlide){
//   if (currentSlide == 5) { alert("ggrr");}
// }); 
//        }
//        else {
//         $('.top__menu').removeClass('slider');
//         $('.top__menu').removeClass('slick-initialized');
//         $('.top__menu').removeClass('slick-slider');


//        }
// });














});