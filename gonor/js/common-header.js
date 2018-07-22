$(document).ready(function(){
$('.burger').on('click',function(){
    $('.sidebar').css('left','0px');


    $('.sidebar__close').on('click',function(){
    $('.sidebar').css('left','-250px');
});


});

});

