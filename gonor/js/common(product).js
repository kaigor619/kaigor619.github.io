$(document).ready(function(){

$("#carousel-shares-case").owlCarousel({
    items:1,
    loop:true,
    center:true,
    mouseDrag:true,
    touchDrag:true,
    dots:false,
    autoplay:true,
    smartSpeed:700,
});


// Удаление знака "Равно" в карусели
    if($(window).width() <= 768)
    {
       $('.carousel-block-share span').css('display','none');
       $('.carousel-block-share h1').html('Бесплатная доставка');
       $('.model.case').css('display','none');
    } else {
       $('.carousel-block-share span').css('display','block');
       $('.carousel-block-share h1').html('Бесплатная<br />доставка');
       $('.model.case').css('display','block');
    }
$( window ).resize(function() {
	if($(window).width() <= 768)
    {
       $('.carousel-block-share span').css('display','none');
       $('.carousel-block-share h1').html('Бесплатная доставка');
       $('.model.case').css('display','none');
    } else {
       $('.carousel-block-share span').css('display','block');
       $('.carousel-block-share h1').html('Бесплатная<br />доставка');
       $('.model.case').css('display','block');
    }
});

// Выравнивание списка Пк
	var numLeft=100;
for(let i=0;i<$('.model-menu li.model-link .sub__content').length;i++){
	if(i==5){
		numLeft=numLeft+100;
		$('.model-menu li.model-link .sub__content').eq(i).css('left',numLeft+'px');
	}
	else if(i==8){
		$('.model-menu li.model-link').eq(9).css('position','static');
		$('.model-menu').css('position','relative');
		$('.model-menu li.model-link .sub__content').eq(8).css('right','0px');
		// numleft=0;
		// $('.model-menu li.model-link .sub__content').css('transform','translateX(0%)')
	}
	else{
		numLeft=numLeft-100;
		$('.model-menu li.model-link .sub__content').eq(i).css('left',numLeft+'px');
	}
	
	
	
}


// Количество
for(let i=0;i<$('.product__number .number__block').length;i++){
$('.product__number .number__block').eq(i).click(function(){
  if(i==1) return;
  else{
    let number=+$('.product__number .number__block').eq(1).text();
    if(i==2){  
      number++;
      if(number<=1) {
      number=1;
    }
    }
    else if(i==0){
      number--;
     if(number<=1) {
      number=1;
    }
    }

    $('.product__number .number__block').eq(1).html(number);   
  }
});
}

// Материал
for(let i=0;i<$('.product__material .product__material__block .material__block').length;i++){
  $('.product__material .product__material__block .material__block').eq(i).click(function(){
    $('.product__material .product__material__block .material__block').removeClass('active');
    $(this).addClass('active');
  });
  // $('.product__material .product__material__block .material__block').eq(i).mouseover(function(){
  //   $('.product__material .product__material__block .material__block').removeClass('active');
  //   $(this).addClass('active');
    
  // });  
}
// Размеры 
for(let i=0;i<$('  .product__size .product__size__cell').length;i++){
  $('.product__size .product__size__cell').eq(i).click(function(){
    $('.product__size .product__size__cell').removeClass('active');
    $(this).addClass('active');
  });
}


// Звездочки
for(let i=0;i<$('.product__reviews .reviews__evaluation span i').length;i++){
  $('.product__reviews .reviews__evaluation span i').eq(i).click(function(){
    $('.product__reviews .reviews__evaluation span i').removeClass('active');
    let number=$(this).index();
    number++;
    for(let b=0;b<number;b++){
        $('.product__reviews .reviews__evaluation span i').eq(b).addClass('active');
    }
    
  });

}






});