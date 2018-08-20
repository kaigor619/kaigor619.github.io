$(document).ready(function(){
// 
$('.delivery__block').find('.open-list').eq(0).css('margin-top','0');


	$('.open-list').each(function(i){
		$(this).click(function(){
			$(this).find('ul').slideToggle();
			$('.open-list').not($(this)).find('ul').fadeOut();
			$(this).find('li').each(function(a){
				$(this).click(function(){
					$('.open-list').eq(i).find('span').text($(this).text()).css('color','black');
				});
			});
		});
	});

	$('.checkbox__block').each(function(i){
		$(this).find('.delivery__block').click(function(){
			$('.checkbox__block').eq(i).find('.delivery__block').not($(this)).find('.div-checkbox').removeClass('active');
			$(this).find('.div-checkbox').addClass('active');
		});
	});


	$(".issue-tabs").not(":first").hide();
$(".issue__delivery .delivery__block").click(function() {
	$(".issue-tabs").hide().eq($(this).index()).fadeIn();
}).eq(0).find('.div-checkbox').addClass("active");


$("#phone").inputmask("+380(99) 999-9999", { greedy: false,
"onincomplete": function(){ $(this).addClass("input-unvalid");},
"oncleared": function(){ $(this).removeClass("input-unvalid");},
"oncomplete": function(){ $(this).removeClass("input-unvalid");}
});


// Корзина пуста
$('.close__product').each(function(i){
	$(this).click(function(){
	$('.product__basket').eq(i).remove();	
	// $(this).parent().remove();
	if($('.product__basket').length == 0){
	$('.issue .btn-issue').addClass("disabled");
	$('.issue  .basket-empty-wrapp').addClass('active');
	$('#total-price').text('0 грн');
	$('#total-delivery').text('0 грн');
}
});
})


    if($(window).width() <= 300){
    	$('.close__product').appendTo('.between-two');
    }
    $(window).resize(function(){
    if($(window).width() <= 300){
    	$('.close__product').appendTo('.between-two');
    }
    else{
    	$('.close__product').insertAfter('.between-two');
    }
    });







});