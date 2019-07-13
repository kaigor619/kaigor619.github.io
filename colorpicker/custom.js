$(document).ready(function(){

// function myStyle(elems, color){
// 	$(elems).css('background-color',color);
// }
function show(color){
	$('.my_color_value').val(color);
}


	$('.my_swatch').click(function(){
		var bg=$(this).css('background-color');
		var mas={property:"background-color", elems:[this]};
		// var obj_1={property:"color", elems:[this]};
		var obj={
			val: bg,
			main_color: true,
			call_save: [],
			sync_color: [mas],
			sync_func:[show],
		}

		picker.filling_color(obj);
		picker.on();
	});
	$('.my_swatch').click();
});
