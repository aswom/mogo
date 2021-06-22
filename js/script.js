new Swiper('.image-slider',
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



//   $(document).ready(function(){
//      $('.flexslider').flexslider({
//    // namespace:"flex-",
//    animation: "slide"
//  });
//});

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

