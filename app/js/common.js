$(function() {

	$(document).ready(function(){

		//Carousel

		$('.owl-carousel').owlCarousel({
		loop: true,
		//dots: false,
		nav: true,
		smartSpeed: 700,
		items: 1,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		});

		//equalHeights
		$('.sc-slogans-inner').equalHeights();
		$('.offer-text').equalHeights();
		$('.team-text').equalHeights();
		$('#Capa_1').children().children().css('fill', '#ffc000');
	});

});
