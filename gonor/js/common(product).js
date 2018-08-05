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
$(".number__input").keypress(function(event) {
  return /\d/.test(String.fromCharCode(event.keyCode));
});



});