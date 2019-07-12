$(document).ready(()=>{
    $('.menu').find('a').click(function(){
        // this.style.color="red";
        let id=this.getAttribute('to');
        let top=$(`#${id}`).offset().top;
        $('html, body').animate({scrollTop: top},700);
    });
});