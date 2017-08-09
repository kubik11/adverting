$(function() {

	$(document).ready(function(){
		var screenW;
		
		//Carousel

		$('.owl-carousel').owlCarousel({
		loop: true,
		//dots: false,
		nav: true,
		smartSpeed: 700,
		items: 1,
		responsive : {
    // breakpoint from 0 up
    0 : {
        dots: true
    },
    // breakpoint from 480 up
    480 : {
        
    },
    // breakpoint from 768 up
    1300 : {
        dots: false
    	}
		},
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		});

		//equalHeights
		$('.sc-slogans-inner').equalHeights();
		$('.offer-text').equalHeights();
		$('.team-text').equalHeights();
		$('.sc-slogans-inner .h2').equalHeights();
		//$('#Capa_1').children().children().css('fill', '#ffc000');
		$('.footer-icons a:last-child').hover( function(){
				$(this).children().css('src', '../fonts/google-plus-logo.svg');
		}, function(){
				$(this).children().css('src', '../fonts/google-plus-logo2.svg');
		});



// Repleace element
	$.fn.swap = function(b) {
    b = $(b)[0];
    var a = this[0],
        a2 = a.cloneNode(true),
        b2 = b.cloneNode(true),
        stack = this;

    a.parentNode.replaceChild(b2, a);
    b.parentNode.replaceChild(a2, b);

    stack[0] = a2;
    return this.pushStack( stack );
	};

	window.onresize = resS;
	var currentHam = document.querySelector('.inner-top-line');
	function resS(){
		screenW = window.innerWidth ;
		if (screenW < 1202 && inCurrHam()){
			phone();
		}
		if(screenW > 1202){
			desktop();
		}
		if(screenW < 768){
			$('form').parent().parent().parent().removeClass('no-gutter');
		}
		if(screenW > 768){
			$('form').parent().parent().parent().addClass('no-gutter');
		}
	}
	setTimeout(resS, 100);
	function inCurrHam(){
			var trigger;
			for( var i = 0; i < currentHam.children.length; i++){
				if (currentHam.children[i].classList.contains('ham')){
					trigger = false;
				}
				else{
					trigger =  true;
				}
			}
			return trigger;
		}
	var trigg = false;
	function desktop(){
		if(trigg){
		var hamburger = document.querySelector('.hamburger');
		hamburger.classList.remove('ham');
		$('.button').swap('.logo');
		trigg = false;
		}
	}
	
	function phone(){
		if(!trigg){
			var hamburger = document.querySelector('.hamburger');
			hamburger.classList.add('ham');
			hamburger.classList.add('hamburger--collapse');
			$('.logo').swap('.button');
			trigg = true;
		}
		

	}
// Repleace element


//mobile menu
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		if ($(this).hasClass('is-active')){
			var div = $('<div></div>').addClass('overlay');
			$('.inner-top-line nav').clone().appendTo(div);
			$('.homePage').addClass('blure');
			$('.homePage').append(div);
		}else{
			$('.overlay').remove();
			$('.homePage').removeClass('blure');

		}


	});




// SCROLL EVENT
	$(window).scroll(function(){
		var $scroll = $(window).scrollTop();

		if($scroll >= 60){
			$('.top-line').addClass('fixed');
		}
		else{
			$('.top-line').removeClass('fixed');
		}
});

	

	});

});
