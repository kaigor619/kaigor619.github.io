$(document).ready(function(){
// Табы
$(".design__block").hide();
$('.design__img').hide();
$('.comment').hide();
var mas=['именной чехол','именную футболку','именной свитшот','именную чашку'];
$(".design .design__what.main ul li").click(function() {
	$(".design .design__what.main ul li").removeClass("active").eq($(this).index()).addClass("active");
	$(".design__block").hide().eq($(this).index()).fadeIn();
	$('.design__img').hide().eq($(this).index()).fadeIn();
	$('.comment').fadeIn();
	$('.comment p span').text(mas[$(this).index()]);
	$('.design').css('margin-bottom','50px');
});	

	// Открывающие списки
	$('.design .design__what').each(function(a){
		$(this).click(function(){
			$('.design .design__what').not($('.design .design__what').eq(a)).find('ul').fadeOut();
			$(this).find('ul').slideToggle();
			$(this).find('ul li').each(function(i){
				$(this).click(function(){
				$('.design .design__what').eq(a).find('ul li').removeClass('active');
				$(this).addClass('active');
				$('.design .design__what').eq(a).find('span').text($(this).text()).css('color','#000');
			});
			});	

			
		});
	});



// Куда отправить
$('.where .word__wrapper').each(function(){
		$(this).click(function(){
		$('.div-checkbox').removeClass('active');
		$(this).find('.div-checkbox').addClass('active');
	});
});

// Загрузка файлов
;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));

// Маска для номера телефона
$("#phone").inputmask("+380(99) 999-9999", { greedy: false,
"onincomplete": function(){ $(this).addClass("input-unvalid");},
"oncleared": function(){ $(this).removeClass("input-unvalid");},
"oncomplete": function(){ $(this).removeClass("input-unvalid");}
});

// Маска для Email
$('#email').inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: "lower"
      }
    }
  });


});