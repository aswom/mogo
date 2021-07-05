//(function () {
//   const burger = document.querySelector('.burger');
//   burger.addEventListener('click', () => {
//      burger.classList.toggle('burger_active');
//   });
//}());
$(document).ready(function () {
   $('.burger').click(function (event) {
      $('.burger,.r-menu').toggleClass('active');
   });

});


$(document).ready(function () {
   $('.title').click(function (event) {
      if ($('.what-item2').hasClass('one')) {
         $('.title').not($(this)).removeClass('active');
         $('.p').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});



new Swiper('.test-items',
   {
      //arrow
      navigation:
      {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
      },
      // navigation
      pagination: {
         el: '.swiper-pagination',
         //bulleti
         clickable: true,
         //dinamik bullet
         dynamicBullets: true,
         //castom bullet
         renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
         },
      },
});





//$(document).ready(function(){
//	$('.slider').slick({
//		arrows:true,
//		dots:true,
//		slidesToShow:3,
//		autoplay:true,
//		speed:1000,
//		autoplaySpeed:800,
//		responsive:[
//			{
//				breakpoint: 768,
//				settings: {
//					slidesToShow:2
//				}
//			},
//			{
//				breakpoint: 550,
//				settings: {
//					slidesToShow:1
//				}
//			}
//		]
//	});
//});

