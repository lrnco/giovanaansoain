$(document).ready(function(){

	// slider
	$('.slider-testimonials').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	 	]
	});

	// menu mobile

	var btnMenu = $('.hamburger-box');
	var header = $('header');

	btnMenu.click(function(){
		console.log(btnMenu);
		if(header.hasClass('is-expanded')){
			header.removeClass('is-expanded');
			$('body').removeClass('no-scroll');
		}else{
			header.addClass('is-expanded');
			$('body').addClass('no-scroll');
		}
	});
});
