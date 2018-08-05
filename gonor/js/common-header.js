$(document).ready(function(){
$('.burger').on('click',function(){
    $('.sidebar').addClass('active');
    $('.sidebar__close').on('click',function(){
    $('.sidebar').removeClass('active');
});

});
});

