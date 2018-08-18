$(document).ready(function(){


	jQuery('.add__wrapper').click(function(){
	if(jQuery(window).width() < 576){
		alert("fff");
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
	function moveBlock(i){
		$('.product__basket').eq(i).addClass('delete');	
	}

for(let i=0;i<$('.close__product').length;i++){
$(' .close__product').eq(i).click(function(){
	moveBlock(i);
	var timerId=setTimeout(function(){
		$('.product__basket').eq(i).remove();
	},1000);
	
	if($('.product__basket').length == 0){
	$('.product__pay .btn-issue').addClass("disabled");
}
});
}
});