$(document).ready(function(){

	for(let i=0;i<$('.close-main').length;i++){
$('.close-main').eq(i).click(function(){
		$('.basket-main__product').eq($(this).index()).remove();
	if($('.basket-main__product').length == 0){
	$('.right .btn-issue').addClass("disabled");
	
	$('.basket-main .basket-empty-wrapp').css('display','block');
}
});
}




for(let a=0;a<$('.close__product').length;a++){
$('.close__product').eq(a).click(function(){
	$(this).parent().remove();
	if($('.basket__mobile .product__basket').length == 0){
		$('.basket__mobile .basket-empty-wrapp').css('display','block');
	$('.basket__mobile .product__pay-main .btn-issue').addClass("disabled");
}
});
}

$('.close__delete').click(function(){
	$('.basket-main__product').remove();
	$('.basket-main .basket-empty-wrapp').css('display','block');	
});


});