$(document).ready(function(){

$("#carousel-shares-case").owlCarousel({
    items:1,
    loop:true,
    center:true,
    mouseDrag:true,
    touchDrag:true,
    dots:false,
    autoplay:false,
    smartSpeed:700,
});



// Удаление знака "Равно" в карусели
    if($(window).width() <= 768)
    {
       $('.carousel-block-share span').css('display','none');
       $('.carousel-block-share h1').html('Бесплатная доставка');
    } else {
       $('.carousel-block-share span').css('display','block');
       $('.carousel-block-share h1').html('Бесплатная<br />доставка');
    }
$( window ).resize(function() {
  if($(window).width() <= 768)
    {
       $('.carousel-block-share span').css('display','none');
       $('.carousel-block-share h1').html('Бесплатная доставка');
    } else {
       $('.carousel-block-share span').css('display','block');
       $('.carousel-block-share h1').html('Бесплатная<br />доставка');
    }
});


// Выравнивание списка Пк
 var numLeft=100;
  if($(window).width() >= 768){
  $('.model-menu li.model-link .sub__content').each(function(i){
    if(i==5){
    numLeft=numLeft+100;
    $('.model-menu li.model-link .sub__content').eq(i).css('left',numLeft+'px');
  }
  else if(i==8){
    $('.model-menu li.model-link').eq(9).css('position','static');
    $('.model-menu').css('position','relative');
    $('.model-menu li.model-link .sub__content').eq(8).css('right','0px');
  }
  else{
    numLeft=numLeft-100;
    $('.model-menu li.model-link .sub__content').eq(i).css('left',numLeft+'px');
  }
  }); 
}

// Количество
$('.product__number .number__block').eq(0).click(function(){
  var number=+$('.product__number .number__block').eq(1).text();
  number--;
  if(number<=1) {
      number=1;
    }
    $('.product__number .number__block').eq(1).html(number);  
});

$('.product__number .number__block').eq(2).click(function(){
  var number=+$('.product__number .number__block').eq(1).text();
  number++;
  if(number<=1) {
      number=1;
    }
   $('.product__number .number__block').eq(1).html(number); 
});




// Материал
$('.product__material .product__material__block .material__block').each(function(){
  $(this).click(function(){
    $('.product__material .product__material__block .material__block').removeClass('active');
    $(this).addClass('active');
  });
}); 

$('.product__size .product__size__cell').each(function(i){
  $(this).click(function(){
    $('.product__size .product__size__cell').removeClass('active');
    $(this).addClass('active');
  });
});


// Звездочки
$('.product__reviews .reviews__evaluation span i').each(function(i){

  $(this).click(function(){
    $('.product__reviews .reviews__evaluation span i').removeClass('active');
    var number=i;
    number++;

    for(var b=0;b<number;b++){
        $('.product__reviews .reviews__evaluation span i').eq(b).addClass('active');
    }
    $('.product__reviews .reviews__evaluation span i').each(function(a){

      $(this).addClass('active');
      if(a >= number){
        $(this).removeClass('active');
      }
    });
    
  });

});



});