$(document).ready(function(){	
$('.burger').on('click',function(){
    $('.sidebar').addClass('active');
    $('.sidebar__close').on('click',function(){
    $('.sidebar').removeClass('active');
});
});
for(let i=0;i<$('.add__wrapper').length;i++){
	$('.add__wrapper').eq(i).click(function(){
	$('.basket__aside').addClass('active');
	$('.background__cover').addClass('active');
	});	
}




$('.background__cover').click(function(e){
var target=$(e.target);
	if(!target.hasClass('background__cover')){
		return;
	}
	else{

	$('.basket__aside').removeClass('active');
	$(this).removeClass('active');
	}
});

$('.basket__aside  .close').click(function(){
$('.basket__aside').removeClass('active');
$('.background__cover').removeClass('active');
});
	// function moveBlock(i){
	// }
for(let i=0;i<$('.close__product').length;i++){
$('.basket__aside  .close__product').eq(i).click(function(){
		$(this).parent().remove();
	
	if($('.basket__aside  .product__basket').length == 0){
	$('.basket__aside  .product__pay .btn-issue').addClass("disabled");
	
}
});
}



});

