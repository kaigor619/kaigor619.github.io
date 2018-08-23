$(document).ready(function(){

$('.product__size .product__size__cell').each(function(i){
  $(this).click(function(){
    $('.product__size .product__size__cell').removeClass('active');
    $(this).addClass('active');
  });
});


});