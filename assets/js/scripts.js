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

	//form contato
	var formContact 	= $('.form');

	$( 'input' ).keypress( function (e) {
		if(e.which == 13) {
			formContact.submit();
			return false;
		}
    } );
	
	$('.f-name').mask('(00) 000 000 000');

	function validateForm(){
		var _toogle = false;
	   
		formContact.validate({
		 submitHandler: function( form ) {
	   
		  if( !_toogle ){
		   var datastring = $( form ).serialize();
			$.ajax({
				type: "POST",
				url: 'send_mail.php',
				data: datastring,
				dataType: "json",
				success: function(resp) {
					// console.log(resp.error)

					if (!resp.error){
						$( '.success' ).find('p').html( '' );
					    $( '.success' ).find('p').html( 'Sua mensagem foi enviada com sucesso<br>Em breve retornaremos<br>:)' );
						$( '.success' ).fadeIn();
						
						
					}else{
						onError(resp.message)
					}
					
				},
				error: function() {
					onError();
				}
			});

			formContact.find('button').html('aguarde');
		
			_toogle = true;

			}

			},
			ignore: '.ignore',
			errorElement: 'span',
			rules: {
				text: {
					required: true
				},
				phone: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				name: {
					required: true
				},
			},
			messages: {
				text: {
					required: "Por favor digite sua mensagem.",
				},
				phone: {
					required: "Por favor digite seu telefone.",
				},
				email: {
					required: "Por favor digite um email válido.",
					email: "Por favor digite um email válido."
				},
				name: {
					required: "Por favor digite seu nome.",
				},
			},
		});
	}


	function onError(message){
		$( '.success' ).find('p').html( '' );
		$( '.success' ).find('p').html( message || 'Ops!<br> Ocorreu um erro,<br> tente mais tarde.' );
		$( '.success' ).fadeIn();
	}
});
