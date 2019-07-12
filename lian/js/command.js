$(document).ready(function(){
   
        	$('#burger').click(()=>{
				
				if($('.hide-menu').hasClass('active')){
					$('.hide-menu').removeClass('active');
				}
				else{
					$('.hide-menu').addClass('active');
				}
			});

	$('.arrow__circle').click(()=>{
		let height=parseFloat($('header').css('height'));
		$('html, body').animate({scrollTop: height},700);
	});
	$('.submit').click(()=>{
		let name=$('.input__text').val();
		let email=$('.email').val();
		let phone=$('.input__phone').val();
		let message=$('.textarea').val();
		if(name!='' && email!='' && phone!='' & message!=''){
			$('.submit').text('Ok');
		}
	});
});