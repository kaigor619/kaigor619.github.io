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


// Создание Модели для планшетов Select Model

// Открывающий список
var numOfModel=$('.select-model .select-model-main');	
for(let i=0;i<numOfModel.length;i++){
$('.select-model .select-model-main').eq(i).click(function(e){
	e.preventDefault();
$('.select-model .select-model-main .drop-model').eq(i).slideToggle();
});
}
// Элементы списка


// Марка
for(let i=1;i<$('.model .model-menu .model-link-a').length;i++){
	$('.model .model-menu .model-link-a').eq(i).clone().removeClass('model-link-a')
	.appendTo('.drop-model.model-content');
}
for(let i=0;i<$('.drop-model.model-content a').length;i++){
	$('.drop-model.model-content a').eq(i).attr('num-model',i).click(function(e){
		e.preventDefault();
		$('.slct').eq(0).html(this.innerHTML);

		// Модель
		$('.drop-model.submodel-content').empty();
		$('.sub__list').eq($(this).index()).find('.sub__list__block a').clone()
		.appendTo('.drop-model.submodel-content');
		$('.slct').eq(1).html($('.drop-model.submodel-content a').eq(0).html());
		$('.drop-model.submodel-content a').click(function(e){
			e.preventDefault();
		$('.slct').eq(1).html(this.innerHTML);	
		})
	})
}

// Сортировка
$('.box-modal .ok').css('display','none');

// Открывающийся Список
	if($(window).width() > 768){
		for(let i=0;i<$('.main-word').length;i++){
			$('.sub__list__sort').eq(i).click(function(e){
			e.preventDefault();
			$(' .sub__sort').eq(i).slideToggle();
			for(let a=0;a<$('.sub__list__sort').eq(i).find('.sub__sort li').length;a++){
				$('.sub__list__sort').eq(i).find('.sub__sort li').eq(a).click(function(){
				$('.sorting .main-word span').eq(i).html($(this).html());
				});			
			}
			});	
		}
	}
else{
	for(let i=0;i<$('.main-word').length;i++){
		$('.sub__list__sort').eq(i).click(function(e){
		e.preventDefault();
		$('.box-modal .sort__modal').remove();
		$('.sub__list__sort').eq(i).find('.sub__sort').clone().removeClass('sub__sort').addClass('sort__modal')
		.appendTo('.box-modal');
		$('#exampleModal').arcticmodal();
		for(let a=0;a<$('.box-modal .sort__modal li').length;a++){
			$('.box-modal .sort__modal li').eq(a).click(function(e){
			e.preventDefault();
			$('.box-modal .sort__modal li .ok').remove();
			$('.box-modal .ok').clone().css('display','inline').appendTo(this);
			$('.sorting .main-word span').eq(i).html($(this).find('a').text());
			$('#exampleModal').arcticmodal('close');
			});
		}
		});	
	}

}













// Для модального окна

    









});