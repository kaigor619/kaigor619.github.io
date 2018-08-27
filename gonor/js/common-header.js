$(document).ready(function(){

$('.burger').on('click', function(){
    $('.sidebar').addClass('active');
    $('.sidebar__close').on('click',function(){
    $('.sidebar').removeClass('active');
});
});



	jQuery('.product__add__btn').click(function(e){
	e.preventDefault();
	if(jQuery(window).width() > 576){
		jQuery('.basket__aside').addClass('active');
		jQuery('.background__cover').addClass('active');
	}	

	else{
		return;
	}

	});	





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


$('.close__product').each(function(){
	$(this).click(function(){
	$(this).parent().remove();
	if($('.product__basket').length == 0){
	$('.product__pay .btn-issue').addClass("disabled");
}
});
})




});

