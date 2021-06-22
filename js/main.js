$(document).ready(function(){
   $('.slider').slick({
     arrows:true,
		dots:true,
		slidesToShow:3,
		//autoplay:true,
		//speed:1000,
		//autoplaySpeed:800,
      responsive:[
{
    breakpoint: 768,
    settings: {
        slidesToShow:2
    }
},
{
    breakpoint: 550,
    settings: {
        slidesToShow:1
    }
}
]
      // centerMode: true,
      //centerPadding:'0px',
     // prevArrow: "<img src='/img/left-arrow-svgrepo-com.svg' width='20%' class='prev' alt='1'> ",
     // nextArrow:"<img src='/img/right-arrow-svgrepo-com.svg'  width='20%' class='next' alt='2'> "
   })
})