$(document).ready(function () {
  $('.slider').slick({
    prevArrow:
      '<img class="slider_arrow slider_arrow-left" src="images/icons/arrow-left.png"/>',
    nextArrow:
      '<img class="slider_arrow slider_arrow-right" src="images/icons/arrow-right.png"/>',
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  })

  $('#header_burger').on('click', function () {
    $('#fullscreen_menu').addClass('active')
    $(document.body).css('overflow', 'hidden')
  })

  $('#fullscreen_menu_close').click(function () {
    $(document.body).css('overflow', 'scroll')
    $('#fullscreen_menu').removeClass('active')
  })
})
