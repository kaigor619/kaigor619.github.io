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


// Создание Модели для планшетов Select Model

 // Открывающий список
 $('.select-model .select-model-main').each(function(i){
	$(this).click(function(e){
		e.preventDefault();

	$('.select-model .select-model-main .drop-model').eq(i).slideToggle();
});



 });





// // Марка

$('.model .model-menu .model-link-a').each(function(i){
	if(i==0){
		return;
	}
	else{
	$(this).clone().removeClass('model-link-a')
	.appendTo('.drop-model.model-content');
	}

});

	$('.drop-model.model-content a').each(function(i){
		$(this).click(function(e){
				e.preventDefault();
				$('.slct').eq(0).html(this.innerHTML);

				// Модель
				$('.drop-model.submodel-content').empty();
				$('.sub__list').eq(i).find('.sub__list__block a').clone()
				.appendTo('.drop-model.submodel-content');
				$('.slct').eq(1).html($('.drop-model.submodel-content a').eq(0).html());
				$('.drop-model.submodel-content a').click(function(e){
					e.preventDefault();
				$('.slct').eq(1).html(this.innerHTML);	
				});
			});
	});
	


// Сортировка
$('.box-modal .ok').css('display','none');

// // Открывающийся Список
	if($(window).width() > 768){
		$('.sub__list__sort').each(function(i){
			$(this).click(function(e){
			e.preventDefault();
			$('.sub__sort').eq(i).slideToggle();
				$('.sub__list__sort').eq(i).find('.sub__sort li').each(function(a){
					$(this).click(function(){
					$('.sorting .main-word span').eq(i).html($(this).text());
					});
				});
			});
		});	
		
	}
else{
		$('.sub__list__sort').each(function(i){
			$(this).click(function(e){
			e.preventDefault();
			$('.box-modal .sort__modal').remove();
			$(this).find('.sub__sort').clone().removeClass('sub__sort').addClass('sort__modal')
			.appendTo('.box-modal');
			$('#exampleModal').arcticmodal();
			$('.box-modal .sort__modal li').each(function(a){
				$(this).click(function(v){
				v.preventDefault();
				$('.box-modal .sort__modal li .ok').remove();
				$('.box-modal .ok').clone().css('display','inline').appendTo(this);
				$('.sorting .main-word span').eq(a).html($(this).find('a').text());
				$('#exampleModal').arcticmodal('close');
				});
			});
			
			});
		});	
}


});