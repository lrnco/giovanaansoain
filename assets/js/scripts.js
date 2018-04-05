$(document).ready(function(){
	'use strict';

	// animação do scroll
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
	  // Prevent default anchor click behavior
	  event.preventDefault();

	  // Store hash
	  var hash = this.hash;

	  // Using jQuery's animate() method to add smooth page scroll
	  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	  $('html, body').animate({
	    scrollTop: $(hash).offset().top
	  }, 800, function(){

	    // Add hash (#) to URL when done scrolling (default click behavior)
	    window.location.hash = hash;
	  });
	} // End if
	});

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
