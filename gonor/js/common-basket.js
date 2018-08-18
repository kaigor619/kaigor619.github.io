$(document).ready(function(){

$('.close-main').each(function(i){
	$(this).click(function(){
			$('.basket-main__product').eq($(this).index()).remove();
		if($('.basket-main__product').length == 0){
		$('.right .btn-issue').addClass("disabled");
		$('.basket-main .basket-empty-wrapp').css('display','block');
	}
	});



});






$('.close__product').each(function(){
	$(this).click(function(){
		$(this).parent().remove();
		if($('.basket__mobile .product__basket').length == 0){
			$('.basket__mobile .basket-empty-wrapp').css('display','block');
		$('.basket__mobile .product__pay-main .btn-issue').addClass("disabled");
	}
	});
});




$('.close__delete').click(function(){
	$('.basket-main__product').remove();
	$('.right .btn-issue').addClass("disabled");
	$('.basket-main .basket-empty-wrapp').css('display','block');	
});


});