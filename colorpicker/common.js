var mouse={
	pageX:function(b){
	var a,c,d;d=b||event;return null==d.pageX&&null!=d.clientX?(a=document.body,c=document.documentElement,b=c.scrollLeft||a&&a.scrollLeft||0,b=d.clientX+b-(c.clientLeft||a.clientLeft||0)):d.pageX},

	pageY:function(b){var a,c,d;d=b||event;return null==d.pageX&&null!=d.clientX?(a=document.body,c=document.documentElement,b=c.scrollTop||a&&a.scrollTop||0,b=d.clientY+b-(c.clientTop||a.clientTop||0)):d.pageY}},

	Obj={
		positX:function(b){var a,c;a=0;c=b.getBoundingClientRect();b=document.body;a=document.documentElement;a=c.left+(a.scrollLeft||b&&b.scrollLeft||0)-(a.clientLeft||b.sclientLeft||0);return Math.round(a)},
		positY:function(b){var a,c;a=0;c=b.getBoundingClientRect();b=document.body;a=document.documentElement;a=c.top+(a.scrollTop||b&&b.scrollTop||0)-(a.clientTop||b.sclientTop||0);return Math.round(a)}};


    function runOnKeys() {
      var hide_e=27;
	     var ok=13;
	     var show=[17, 18, 67]

       var pressed = {};


           document.onkeydown = function(e) {
						if (e.which == 27) {
							 if(picker.elems.main_pickr.classList.contains('active'))
							 	 picker.elems.cancel.click();
							 
						  } else if (e.which == 13) {
						  if(picker.elems.main_pickr.classList.contains('active'))
						   picker.elems.save.click();
						  } else if (e.ctrlKey && e.altKey && e.which == 67) {
						    picker.on();
						  }
						  else if (e.which==37 || e.which==38 || e.which==39 || e.which==40) {
						  	if(picker.elems.main_pickr.classList.contains('active')){
						  		Block.cPos_key(e);
						  	}
						  }    

           };

         }


function check_type(value){
	var obj_type_color=['rgb','hsl'];
	var type;

	for(var i=0;i<obj_type_color.length;i++){
		if(value.indexOf(obj_type_color[i])>=0){
			type=obj_type_color[i]+"a";
		}
	}
	if(value.indexOf('#')>=0){
		type='hex';
	}
	return type;
}



var picker = {
	S: 0,
	V: 100,
	H:0,
	type_val: "hex",
	opacity_val: 1,
	rgb_val:[255,255,255],
	syncCurrColor:[],
	syncFunc:[],
	syncCustomColor:[],
	prev_color:'',
	callSave:[],
	main_color: false,

	// Элементы
	elems:{
			line: document.getElementById("ss_line"),
			line_slider: document.getElementById("line_circle"),

			block: document.getElementById("block_picker"),
			block_circle: document.getElementById("picker_circle"),

			line_opacity:  document.getElementById("opacity_color"),
			opacity_slider:  document.getElementById("opacity_circle"),

			curr_color_block: document.getElementById("out_color"),
			last_color_block: document.getElementById("last_color"),

			hex_elems:document.getElementsByClassName('hex_text_value')[0],
			rgba_elems:document.getElementsByClassName('rgba_text_value'),
			rgba_a: document.getElementById("rgba_text_opacity"),
			hsla_elems:document.getElementsByClassName('hsla_text_value'),
			hsla_a: document.getElementById("hsla_text_opacity"),

			btn_select_color:document.getElementsByClassName('btn_select_color'),
			btn_copy_color:document.getElementById("copy_color"),

			save:document.getElementById("btn_color_ok"),
			cancel:document.getElementById("btn_color_cancel"),
			w_type_values:document.getElementsByClassName("type_val_color"),

			main_pickr:document.getElementById("picker"),


	},
	on:function(){
		this.elems.main_pickr.classList.add('active');
	},
	off:function(){
		this.elems.main_pickr.classList.remove('active');
	},

	init: function () {
    Line.init(picker.elems);
    Block.init(picker.elems);
    Opacity_line.init(picker.elems);


    // Click type button
    picker.events.btn_select_color();

 		picker[picker.type_val].change();

 		// Нажатие на Копирование цвета
 		picker.events.copy_color();


 		// Нажатие на прошлый цвет
 		picker.events.last_color_click();

 		// Кастомные цвета
 		Description_Color.init();

		// Сохранить
		picker.events.save();

		// Отменить
		picker.events.cancel();

		// Показать Палитру с помощью клавишей
		runOnKeys();


},

personal_options:function(color){
		var obj=picker.syncCurrColor;
		var funcs=picker.syncFunc;
		var funcs_custom=picker.syncCustomColor;
		// var color=picker[picker.type_val].copy();

		if(obj.length!=0){
			for(var i=0;i<obj.length;i++){
				for(var x=0;x<obj[i].elems.length;x++){
					obj[i].elems[x].style.cssText=String(obj[i].property+" : "+color);
				}
			}
		}
		if(funcs.length!=0){
			for(var i=0;i<funcs.length;i++){
				funcs[i](color);
			}
		}
		if(funcs_custom.length!=0){
			for(var i=0;i<funcs_custom.length;i++){
				funcs_custom[i](color);
			}
		}
},
filling_color:function(obj){

	var val=obj.val;

	var type=check_type(val);
	// picker.main_color=(obj.main_color==undefined) ? false : obj.main_color;
	picker.main_color=(obj.main_color==undefined) ? false : obj.main_color;
	if(picker.main_color==true){
		picker.prev_color=val;
	}
	// picker.main_color=obj.main_color;
	picker.elems.last_color_block.style.backgroundColor=val;
	picker.elems.last_color_block.setAttribute('val',val);
	picker.syncCurrColor=(obj.sync_color==undefined) ? [] : obj.sync_color;
	picker.syncFunc=(obj.sync_func==undefined) ? [] : obj.sync_func;
	picker.callSave=(obj.call_save==undefined) ? [] : obj.call_save;
	picker[type].fill(val, type);


},
// RGBA
rgba:{

	'change':function(){
		picker.events.change_input(picker.elems.rgba_elems, picker.elems.rgba_a, function(mas_val){
			return convert.rgbaToHsv([mas_val['r'], mas_val['g'], mas_val['b']]);
		},
		function(mas_val){
			return [mas_val['r'], mas_val['g'], mas_val['b']];
		});
	},
	changeHSV:function(val){

			var hsv=convert.rgbaToHsv([picker.rgb_val[0], picker.rgb_val[1], picker.rgb_val[2]]);

			picker.S=hsv.s;
			picker.V=hsv.v;
			picker.H=hsv.h;

			picker.all_styles();
	},
	write:function(){
		var elements=picker.elems.rgba_elems;
		for(var i=0;i<elements.length;i++){
			elements[i].value=picker.rgb_val[i];
		}
	},
	opacity:function(){
		picker.elems.rgba_a.value=picker.opacity_val;
	},
	copy:function(){
		var rgba=picker.rgb_val;
		if(picker.opacity_val==1){
			return "rgb("+rgba[0]+", "+rgba[1]+", "+rgba[2]+")";
		}
		else
		return "rgba("+rgba[0]+", "+rgba[1]+", "+rgba[2]+", "+picker.opacity_val+ ")";
	},
	get_arr:function(str){


	var rgb_arr = str.substring(str.indexOf('(')+1, str.length-1)
         .replace(/ /g, '')
         .split(',');


  var rgba_a;

		if(str.indexOf('rgba') >=0 && rgb_arr[3]){
			rgba_a=parseFloat(rgb_arr[3]);
			rgb_arr.splice(-1, 1);
		}
		else
			rgba_a=1;

		for(var i=0;i<rgb_arr.length;i++){
			rgb_arr[i]=parseInt(rgb_arr[i]);
		}

		var rgba_obj={
			rgb:rgb_arr,
			opacity:rgba_a,
		}
			return rgba_obj;

	},
	fill:function(val, type){
		var rgba=picker[type].get_arr(val);
		picker.opacity_val=rgba.opacity;
		picker.rgb_val=rgba.rgb;
		picker.change_type(type);
		picker[type].write();
		picker[type].opacity();
		picker[type].changeHSV(val);
	}
},
// HSLA
hsla:{

	'change':function(){
		picker.events.change_input(picker.elems.hsla_elems, picker.elems.hsla_a, function(mas_val){
				return convert.hslTohsb(mas_val['h'], mas_val['s'], mas_val['l']);
			}, function(mas_val){
				return convert.hsv_rgb(picker.H,picker.S,picker.V);
		});
	},
	changeHSV:function(val){
			var hsv=convert.hslTohsb(val[0], val[1], val[2]);
			picker.S=hsv.s;
			picker.V=hsv.v;
			picker.H=hsv.h;

			picker.rgb_val=convert.hsv_rgb(picker.H,picker.S,picker.V);
			picker.all_styles();
	},

	write:function(){
		var elements=picker.elems.hsla_elems;

		// var mas_hsl=convert.hsl(picker.rgb_val);
		var mas_hsl=convert.hsb_hsl(picker.H, picker.S, picker.V);
		for(var i=0;i<elements.length;i++){
			elements[i].value=mas_hsl[i];
		}

	},
	opacity:function(){
		picker.elems.hsla_a.value=picker.opacity_val;
	},
	copy:function(){
		var mas_hsl=convert.hsb_hsl(picker.H, picker.S, picker.V);
		if(picker.opacity_val==1){
			return "hsl("+mas_hsl[0]+", "+mas_hsl[1]+"%, "+mas_hsl[2]+"%)";
		}
		else
		 return "hsla("+mas_hsl[0]+", "+mas_hsl[1]+"%, "+mas_hsl[2]+"%, "+picker.opacity_val+")";
	},
	get_arr:function(str){

	var hsl_arr = str.substring(str.indexOf('(')+1, str.length-1)
         .replace(/ /g, '')
         .split(',');

  var hsla_a;

		if(str.indexOf('hsla') >=0 && hsl_arr[3]){
			hsla_a=parseFloat(hsl_arr[3]).toFixed(2);
			hsl_arr.splice(-1, 1);
		}
		else
			hsla_a=1;

		for(var i=0;i<hsl_arr.length;i++){
			hsl_arr[i]=parseInt(hsl_arr[i]);
		}

		var hsla_obj={
			hsl:hsl_arr,
			opacity:hsla_a,
		}
			return hsla_obj;
	},
	fill:function(val, type){
		var hsla=picker[type].get_arr(val);

		picker.opacity_val=hsla.opacity;
		picker.change_type(type);
		picker[type].opacity();
		picker[type].changeHSV(hsla.hsl);

		var elements=picker.elems.hsla_elems;
		for(var i=0;i<elements.length;i++){
			elements[i].value=hsla.hsl[i];
		}
	}
},

// HEX
hex:{

	'change':function(){

		picker.elems.hex_elems.onkeyup=function(){
			if(Description_Color.status==false){
      		Description_Color.elems.wrap_content.classList.remove('active');
    	}
    	var value=this.value;
			picker[picker.type_val].changeHSV(value);
		}
	},
	changeHSV:function(value){
			var rgba=convert.hex_rgba(value);
			picker.rgb_val=rgba.slice(0,3);
			picker.opacity_val=parseFloat(rgba[3]).toFixed(2);

			var hsv=convert.rgbaToHsv(picker.rgb_val);
			picker.S=hsv.s;
			picker.V=hsv.v;
			picker.H=hsv.h;
			picker.all_styles();
	},
	write:function(){
		var value=convert.RGBAToHexA(picker.rgb_val[0], picker.rgb_val[1], picker.rgb_val[2], picker.opacity_val);
		if(value.length==9){
			if(value.slice(-2)=='ff')
				value= value.substring(0, 7);
		}
		


		picker.elems.hex_elems.value=value;

	},
	opacity:function(){
		var value=convert.RGBAToHexA(picker.rgb_val[0], picker.rgb_val[1], picker.rgb_val[2], picker.opacity_val);
		if(value.length==9){
			if(value.slice(-2)=='ff')
				value= value.substring(0, 7);
		}
		


		picker.elems.hex_elems.value=value;
	},
	copy:function(){
		var value=picker.elems.hex_elems.value;
		if(value.length==9){
			if(value.slice(-2)=='ff')
				return value.substring(0, 7);
		}
		return picker.elems.hex_elems.value;
	},
	fill:function(val, type){
		picker.change_type(type);
		picker.elems.hex_elems.value=val;
		picker[picker.type_val].changeHSV(val);
	},
},



all_styles:function(){
	picker.style.block();
	picker.style.curr_block();
	picker.style.block_circle();
	picker.style.pos_line_slider();
	picker.style.pos_block_circle();
	picker.style.pos_opacity_line();
},
style: {
	block:function(){
		picker.elems.block.style.background = "linear-gradient(to top, rgb(0, 0, 0), transparent), linear-gradient(to left, rgb( " + convert.hsv_rgb(picker.H,100,100) + "), rgb(255, 255, 255))";
	},
	curr_block:function(){
		picker.elems.curr_color_block.style.backgroundColor= "rgba("+picker.rgb_val+","+picker.opacity_val+")";
		picker.personal_options(picker[picker.type_val].copy());


	},
	block_circle:function(){
		picker.elems.block_circle.style.backgroundColor="rgb("+picker.rgb_val+")";
	},
	pos_line_slider:function(){
	picker.elems.line_slider.style.left=Math.abs((picker.H-360)*(Line.w/360))+"px";
	},
	pos_block_circle:function(){
		picker.elems.block_circle.style.left=Block.pxX*picker.S+"px";
		picker.elems.block_circle.style.top=Block.pxY*Math.abs(picker.V-100)+"px";
	},
	pos_opacity_line:function(){
		picker.elems.opacity_slider.style.left=(picker.opacity_val*Opacity_line.x)/0.01+"px";
	}

},
change_type:function(type){
			var types=picker.elems.w_type_values;
			var btn_types=picker.elems.btn_select_color;

			for(var i=0;i<types.length; i++){
				if(types[i].getAttribute('type-color')==type){
					types[i].classList.add('active');
					btn_types[i].classList.add('active');
				}
				else{
					types[i].classList.remove('active');
					btn_types[i].classList.remove('active');
				}
			}

			picker.type_val=type;
			picker[picker.type_val].change();

},
events:{

	// Нажатие на OK
	save:function(){
		picker.elems.save.onclick=function(){
			picker.off();
			var color=picker[picker.type_val].copy();
			for(var i=0;i<picker.callSave.length;i++){
				picker.callSave[i](color);
			}
	picker.syncCurrColor=[];
	picker.syncFunc=[];
	picker.prev_color='';
	picker.callSave=[];
	picker.main_color= false;
		}
	},
	// Нажатие на Cancel
	cancel:function(){
		picker.elems.cancel.onclick=function(){
			if(picker.main_color==true){
				picker.personal_options(picker.prev_color);
					picker.syncCurrColor=[];
					picker.syncFunc=[];
					picker.prev_color='';
					picker.callSave=[];
					picker.main_color= false;		
			}

			picker.off();
		}
	},

	// Кнопки для изменения типа цвета
	btn_select_color:function(){
		var btn_types=picker.elems.btn_select_color;

		for(var i=0;i<btn_types.length;i++){
			btn_types[i].onclick=function(){
				var type=this.getAttribute("type-color");
				picker.change_type(type);
				picker[type].write();
				picker[type].opacity();
				picker.personal_options(picker[picker.type_val].copy());
			}
		}
	},

	change_input:function(elements, rgba_opacity, filter, get_val){

	var mas_val=new Array();
	for(var i=0;i<elements.length;i++){
		var name=elements[i].getAttribute('name');
		mas_val[name]=parseFloat(elements[i].value);
	}
		for(var i=0;i<elements.length;i++){
			elements[i].onkeydown=function(evt){
				if(Description_Color.status==false){
		    		Description_Color.elems.wrap_content.classList.remove('active');
	    	}

			var key = evt.charCode || evt.keyCode || 0;

    	return (key == 8 ||
            key == 9 ||
            key == 46 ||
            key == 110 ||
            key == 190 ||
            (key >= 35 && key <= 40) ||
            (key >= 48 && key <= 57) ||
            (key >= 96 && key <= 105));
			}
			elements[i].onkeyup=function(){
				var curr_val=this.value;
				var curr_name=this.getAttribute('name');
				mas_val[curr_name]=parseFloat(curr_val);

				var hsv=filter(mas_val);

				picker.S=hsv.s;
				picker.V=hsv.v;
				picker.H=hsv.h;


				picker.rgb_val=get_val(mas_val);
				picker.all_styles();	
			}
		}

		// Opacity


		rgba_opacity.onkeyup=function(){
			if(Description_Color.status==false){
      		Description_Color.elems.wrap_content.classList.remove('active');
    	}
			var curr_val=this.value;
			curr_val=curr_val>=1 ? 1 : curr_val;
			curr_val=curr_val<=0 ? 0 : curr_val;
			picker.opacity_val=curr_val;
			picker.style.pos_opacity_line();
			picker.style.curr_block();


		}

},
copy_color:function(){

	var hidden_input = document.createElement("input");

	picker.elems.btn_copy_color.onclick=function(){
		var copy_res=picker[picker.type_val].copy();
		hidden_input.value=copy_res;
		document.body.appendChild(hidden_input);
		hidden_input.focus();
  	hidden_input.select();
  	if(document.execCommand('copy')==true){
			// alert(copy_res);
  		var copy_block=this.parentElement;
  		copy_block.classList.add('title');

  		setTimeout(function(){
  			copy_block.classList.remove('title');
  		},1000);
  	}
		document.body.removeChild(hidden_input);
	}
},

last_color_click:function(){
	picker.elems.last_color_block.onclick=function(){
		var val=this.getAttribute('val');
		var type=check_type(val);
		picker[type].fill(val, type);
	}
}

}


};












var Description_Color={
	elems:{
		// Кастомные цвета
		w_colors: document.getElementsByClassName('opacity_client_color'),
		colors: document.getElementsByClassName('client_color'),

		// Панель
		label: document.getElementById('label_descr_color'),
		picker_custom:document.getElementById('client_c_color_descr'),
		edit: document.getElementById('descr_c_pencil'),
		remove: document.getElementById('descr_c_delete'),



		content: document.getElementById('descr_custom_color'),
		wrap_content: document.getElementById("w_descr_custom_color"),

		// Изменение настроек
		w_btns:	document.getElementById("w_descr_btns_save"),
		save:document.getElementById('descr_save_c_color'),
		cancel:document.getElementById('descr_cancel_c_color'),

		// Удаление цвета
		remove_window:	document.getElementById('w_warning_delete'),
		yes:document.getElementById("descr_del_color"),
		no:document.getElementById("descr_del_c_color"),

		// Создание цвета
		save_window:document.getElementById('w_save_c_color'),
		add_color:document.getElementById('add_new_color'),
		save_save:document.getElementById('btn_save_c_color'),
		save_cancel:document.getElementById('btn_del_c_color'),


	},
	// windows:[this.elems.save_window, this.elems.remove_window , this.elems.w_btns],
	index:0,
	label:"",
	status:false,


	init:function(){
		this.windows=[this.elems.save_window, this.elems.remove_window , this.elems.w_btns];
		this.click_c_color();
		this.add_custom_color();
		this.save();
		this.edit();
		this.cancel();
		this.remove();

	},
	remove_windows:function(){
		var windows=this.windows;
		for(var s=0;s<windows.length;s++){
			windows[s].classList.remove('active');
		}
	},
	show_main_window:function(){
		this.elems.wrap_content.classList.add('active');
	},
	// Нажатие на кастомный цвет
	click_c_color:function(){
		var self=this;
		var colors=this.elems.colors;
		for(var i=0;i<colors.length;i++ ){
			colors[i].onclick=function(){
				var label=this.getAttribute('name-custom');
				var index=this.getAttribute('index');
				var val=this.getAttribute('val');
				var type=check_type(val);
				picker[type].fill(val, type);

				self.remove_windows();
				self.elems.content.classList.remove("active");

				self.show_main_window();

				self.elems.picker_custom.style.backgroundColor=val;
				self.elems.label.value=label;
				self.elems.label.setAttribute('readonly', '');

				self.index=index;
				self.label=label;

				self.status=false;
			}
		}
	},
	edit:function(){
		var self=this;
		function sync_custom(color){
			self.elems.picker_custom.style.backgroundColor=color;
		}
		this.elems.edit.onclick=function(){
			self.remove_windows();
			self.show_main_window();

			self.elems.w_btns.classList.add('active');
			self.elems.content.classList.add("active");
			self.elems.label.focus();
			self.elems.label.removeAttribute('readonly');
			picker.syncCustomColor=[sync_custom];
			self.status=true;

		}
	},
	save:function(){
		var self=this;
		var colors=this.elems.colors;
		this.elems.save.onclick=function(){

			var index=self.index;
			self.label=self.elems.label.value;
			var rgba=picker.rgba.copy();

			
			for(var i=0;i<colors.length;i++){
				if(colors[i].getAttribute('index')==index){
					colors[i].setAttribute('name-custom',self.label);
					colors[i].setAttribute('val',picker[picker.type_val].copy());
					colors[i].style.backgroundColor=picker[picker.type_val].copy();
				}
			}
			self.elems.picker_custom.style.backgroundColor=picker[picker.type_val].copy();
			self.remove_windows();
			self.elems.content.classList.remove("active");
			self.elems.label.setAttribute('readonly','');
			self.status=false;
			picker.syncCustomColor=[];

		}
	},
	cancel:function(){
		var self=this;
		this.elems.cancel.onclick=function(){
		// self.elems.remove.click();
			var label=self.label;
			var colors=self.elems.colors;
			// self.elems.w_btns.classList.remove('active');
			self.remove_windows();

			self.elems.content.classList.remove('active');
			self.elems.label.value=label;

			for(var i=0;i<colors.length;i++){
				if(colors[i].getAttribute('index')==self.index){
					var val=colors[i].getAttribute('val');

				}
			}
			self.elems.picker_custom.style.backgroundColor=val;
			self.elems.label.setAttribute('readonly','');

			self.status=false;
			picker.syncCustomColor=[];
		}
	},
	remove:function(){
		var self=this;
		var colors=this.elems.colors;
		this.elems.remove.onclick=function(){
			// self.elems.w_btns.classList.remove('active');
			self.remove_windows();
			self.elems.remove_window.classList.add('active');
			self.elems.content.classList.add('active');


			// Если Да
			self.elems.yes.onclick=function(){
				// self.elems.remove_window.classList.remove('active');
				self.remove_windows();
				for(var i=0;i<colors.length;i++){
					if(colors[i].getAttribute("index")==self.index){
						var parent=colors[i].parentNode.parentNode;
						parent.removeChild(colors[i].parentNode);
					}
				}
				self.elems.wrap_content.classList.remove('active');

			}

			// Если Нет
			self.elems.no.onclick=function(){
				// self.elems.remove_window.classList.remove('active');
				self.remove_windows();
				self.elems.content.classList.remove('active');
			}
		}
	},
	sync_custom:function(color){
		this.elems.picker_custom.style.backgroundColor=color;
	},
	add_custom_color:function(){
		var self=this;
		var colors=this.elems.w_colors;

		function sync_custom(color){
			self.elems.picker_custom.style.backgroundColor=color;
		}
		this.elems.add_color.onclick=function(){
			var index=colors.length-1;
			var color=picker[picker.type_val].copy();
			self.remove_windows();

			self.elems.wrap_content.classList.add('active');
			self.elems.save_window.classList.add('active');
			self.elems.content.classList.add('active');


			self.label="Color "+(index+1);
			self.index=index;

			self.elems.picker_custom.style.backgroundColor=picker.rgba.copy();
			self.elems.label.value="Color "+(index+1);
			self.elems.label.focus();
			self.elems.label.removeAttribute('readonly');

			picker.syncCustomColor=[sync_custom];
			self.status=true;

		};

		self.elems.save_save.onclick=function(){
			for(var i=0;i<colors.length;i++){
				if(colors[i].classList.contains('example')){
					var new_color=colors[i].cloneNode(true);
					var parent=colors[i].parentNode;
					new_color.classList.remove('example');
				}
			}
			var index=colors.length-1;
			parent.insertBefore(new_color, self.elems.add_color);
			var child=new_color.firstElementChild;
			child.setAttribute('index', index);
			child.setAttribute('name-custom', self.elems.label.value);
			var color=picker[picker.type_val].copy();
			child.setAttribute('val', color);
			child.style.backgroundColor=picker[picker.type_val].copy();
			self.elems.colors=document.getElementsByClassName("client_color");
			self.click_c_color();
			self.remove_windows();
			self.elems.content.classList.remove('active');
		};
		self.elems.save_cancel.onclick=function(){
			self.remove_windows();
			self.elems.wrap_content.classList.remove('active');
			self.elems.content.classList.remove('active');
		}
	}
}














var Line={

	init: function (elem){
	var pst=0;

	var line=elem.line;
	var line_slider=elem.line_slider;
	var block=elem.block;

	var left, t;
	Line.w=parseInt(getComputedStyle(line).width);
	Line.h=parseInt(getComputedStyle(line).height);


	Line.posit = function (e){

		  left = mouse.pageX(e) - pst;

		  		// Проверка на границы ползунка
           left = (left < 0 ) ? 0 : left;
             left = (left > Line.w )? Line.w  : left;

               line_slider.style.left = left+"px";

                t =  Math.abs(Math.round(left / (Line.w/ 360))-360);
                   t = (t == 360)? 0 : t;



                     picker.rgb_val=convert.hsv_rgb(t,picker.S,picker.V);
                     picker.H = t;

                     	// Превращение
                       picker.style.block();
                       picker.style.curr_block();
                       picker.style.block_circle();


                       picker[picker.type_val].write();

	}
	// события перемещения по линии
      line_slider.onmousedown = function (){
      	if(Description_Color.status==false){
      		Description_Color.elems.wrap_content.classList.remove('active');
      	}
      	// Отступ Слева
	      pst = Obj.positX(line);

	         document.onmousemove = function(e){Line.posit(e);}

		}

         line_slider.onclick = Line.posit;

         line.onclick = function (e){
         	  if(Description_Color.status==false){
		      		Description_Color.elems.wrap_content.classList.remove('active');
		      	}
         	Line.posit(e);};

		   line.onmousedown = function (){
						if(Description_Color.status==false){
		      		Description_Color.elems.wrap_content.classList.remove('active');
		      	}
	         pst = Obj.positX(line);


			   document.onmousemove = function(e){Line.posit(e);}
	}
                 document.onmouseup = function (){
					 document.onmousemove = null;
					 line_slider.onmousemove = null;

					 }

}

}




















var Opacity_line={

	init: function (elem){
	var pst=0;

	var line=elem.line_opacity;
	var line_slider=elem.opacity_slider;
	var block=elem.block;

	var left, t;
	var w=parseInt(getComputedStyle(line).width);
	var h=parseInt(getComputedStyle(line).height);

	Opacity_line.x=w/100;




	Opacity_line.posit = function (e){


		  left = mouse.pageX(e) - pst;

		  		// Проверка на границы ползунка
           left = (left < 0 ) ? 0 : left;
             left = (left > w )? w  : left;

               line_slider.style.left = left+"px";

               picker.opacity_val=(Math.floor(left/Opacity_line.x)*0.01).toFixed(2);

               picker.style.curr_block();
               picker[picker.type_val].opacity();




	}
	// события перемещения по линии
      line_slider.onmousedown = function (){
				if(Description_Color.status==false){
				      		Description_Color.elems.wrap_content.classList.remove('active');
		    }

      	// Отступ Слева
	      pst = Obj.positX(line);

	         document.onmousemove = function(e){Opacity_line.posit(e);}
		}

         line_slider.onclick = Opacity_line.posit;

         line.onclick = function (e){
					if(Description_Color.status==false){
					      		Description_Color.elems.wrap_content.classList.remove('active');
			    }
         	Opacity_line.posit(e);
         };

		   line.onmousedown = function (){
				if(Description_Color.status==false){
				      		Description_Color.elems.wrap_content.classList.remove('active');
		    }
	         pst = Obj.positX(line);

			   document.onmousemove = function(e){Opacity_line.posit(e);}
	}
                 document.onmouseup = function (){
					 document.onmousemove = null;
					 line_slider.onmousemove = null;

					 }

}

}





















	var Block = {

	init: function (elem) {

		var circle, block, colorO, bPstX, bPstY, bWi, bHe, cW, cH, pxY, pxX;

		 var block = elem.block;
		 var circle = elem.block_circle;


		    cW = circle.offsetWidth ;
	      cH = circle.offsetHeight;

		    bWi = block.offsetWidth;
	      bHe = block.offsetHeight;

	      Block.pxY = bHe / 100;
	      Block.pxX = bWi / 100;

	      Block.cPos = function (e, type){

	      	var top, left, S, V;

	      	document.ondragstart = function() { return false;}

	      	document.body.onselectstart = function() { return false; }

	      	bPstX = Obj.positX(block);
	      	bPstY = Obj.positY(block);

	      	left = mouse.pageX(e) - bPstX;


	      	top = mouse.pageY(e)  - bPstY;


	      	left = (left < 0)? 0 : left;

			 		left = (left > block.offsetWidth  )? block.offsetWidth  : left;
			 		// Проверка top

				 top = (top > block.offsetHeight  )? block.offsetHeight : top;
				 top = (top < 0)? 0 : top;



			 circle.style.left = left  + "px";
			 circle.style.top = top   + "px";

			 S = Math.ceil(left / Block.pxX) ;
			 V = Math.ceil(Math.abs(top / Block.pxY - 100));

			 picker.S = S;
			 picker.V = V;

			 picker.rgb_val=convert.hsv_rgb(picker.H,S,V);

			 picker.style.curr_block();
			 picker.style.block_circle();

			 picker[type].write();

				}
			Block.cPos_key=function(e){

					var top, left, S, V , b;

	      	bPstX = Obj.positX(block);
	      	bPstY = Obj.positY(block);
	      	var x=parseInt(getComputedStyle(circle).left);
	      	var y=parseInt(getComputedStyle(circle).top);

	      	if(e.which==37){
	      		x-=2;
	      	}
	      	else if(e.which==38){
	      		y-=2;
	      	}
	        else if(e.which==39){
	      		x+=2;
	      	}
	        else if(e.which==40){
	      		y+=2;
	      	}

	      	x = (x < 0)? 0 : x;

			 		x = (x > block.offsetWidth  ) ? block.offsetWidth  : x;
			 		// Проверка top

				 y = (y > block.offsetHeight  ) ? block.offsetHeight : y;
				 y = (y < 0)? 0 : y;

      	circle.style.left=x+"px";
      	circle.style.top=y+"px";

			 S = Math.ceil(x / Block.pxX) ;
			 V = Math.ceil(Math.abs(y / Block.pxY - 100));

			 picker.S = S;
			 picker.V = V;

			 picker.rgb_val=convert.hsv_rgb(picker.H,S,V);

			 picker.style.curr_block();
			 picker.style.block_circle();
			 var type=picker.type_val;
			 picker[type].write();

			}

			block.onclick = function(e){
				if(Description_Color.status==false){
				      		Description_Color.elems.wrap_content.classList.remove('active');
		    }
				Block.cPos(e, picker.type_val);

			}
			block.onmousedown  = function (){
				if(Description_Color.status==false){
				      		Description_Color.elems.wrap_content.classList.remove('active');
		    }
			document.onmousemove = function (e){
				Block.cPos(e, picker.type_val);
				}
			}



			document.onmouseup=function() {
				document.onmousemove = null;
				}




		}

		};










var convert = {

	hsv_rgb: function (H,S,V){

	 var f , p, q , t, lH, R , G, B;

	  S /=100;
      V /=100;

	 lH = Math.floor(H / 60);

	  f = H/60 - lH;
        p = V * (1 - S);
         q = V *(1 - S*f);
	       t = V* (1 - (1-f)* S);

	  switch (lH){

	  case 0: R = V; G = t; B = p; break;
        case 1: R = q; G = V; B = p; break;
         case 2: R = p; G = V; B = t; break;
           case 3: R = p; G = q; B = V; break;
            case 4: R = t; G = p; B = V; break;
              case 5: R = V; G = p; B = q; break;
    }

	 return [parseInt(R*255), parseInt(G*255), parseInt(B*255)];
	 },

	hex: function (mas){
			   return "#"+mas[0].toString(16)+""+mas[1].toString(16)+""+mas[2].toString(16);
	 },
	RGBAToHexA : function(r,g,b,a) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  a = Math.round(a * 255).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
  if (a.length == 1)
    a = "0" + a;

  return "#" + r + g + b + a;
},
rgbaToHsv: function (mas) {
		var r=mas[0],
		g=mas[1],
		b=mas[2];

    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100)
    };
},
hslTohsb:function(h, s , l) {
	s=s/100;
	l=l/100;
  var t = s * (l<0.5 ? l : 1-l);
  var b = l+t;
  var c = l>0 ? 2*t/b : c;
c=c*100|0;
b=b*100|0;
  return {
  	'h':h,
  	's':c,
  	'v':b
  }
},
hsb_hsl:function(h,s,b) {
	h/=100;
	s/=100;
	b/=100;
  var l = (2 - s) * b / 2;
  var s = l&&l<1 ? s*b/(l<0.5 ? l*2 : 2-l*2) : s;
  return [parseInt(h*100),parseInt(s*100),parseInt(l*100)];
},
hex_rgba: function(hex) {
    var r,
      g,
      b,
      a;
    hex = hex.replace('#', '');
    if (3 === hex.length) {
      r = hex.charAt(0);
      g = hex.charAt(1);
      b = hex.charAt(2);
    } else if (4 === hex.length) {
      r = hex.charAt(0);
      g = hex.charAt(1);
      b = hex.charAt(2);
      a = hex.charAt(3);
    } else if (6 === hex.length) {
      r = hex.substring(0, 2);
      g = hex.substring(2, 4);
      b = hex.substring(4, 6);
    } else if (8 === hex.length) {
      r = hex.substring(0, 2);
      g = hex.substring(2, 4);
      b = hex.substring(4, 6);
      a = hex.substring(6, 8);
    } else {
      return '';
    }
    if ('undefined' === typeof a) {
      a = 'ff';
    }
    if (1 === r.length) {
      r += r;
    }
    if (1 === g.length) {
      g += g;
    }
    if (1 === b.length) {
      b += b;
    }
    if (1 === a.length) {
      a += a;
    }
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    a = parseInt(a, 16) / 255;

var obj={
	'rgb': [r,g,b],
	'a':a,
}
    return [r,g,b,a];
  }

	};


picker.init();
