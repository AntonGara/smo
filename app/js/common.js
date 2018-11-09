$(function() {

	var black = new Swiper('.black__container', {
		loop: true,
		speed: 800,
		simulateTouch: false,
		direction: 'vertical',
		pagination: {
		  el: '.black__pagination',
		  clickable: false,
		},
		breakpoints: {
		  768: {
			direction: 'horizontal',
		  }
		}
	});
	var white = new Swiper('.white__container', {
		loop: true,
		speed: 800,
		simulateTouch: false,
		direction: 'vertical',
		pagination: {
			el: '.white__pagination',
			clickable: false,
		},
		breakpoints: {
		  768: {
			direction: 'horizontal',
		  }
		}
	});

	$('.black__btn-prev').on('click', function(){
		black.slidePrev();
		white.slideNext();
	})
	$('.black__btn-next').on('click', function(){
		black.slideNext();
		white.slidePrev();
	})
	$('.white__btn-prev').on('click', function(){
		black.slidePrev();
		white.slideNext();
	})
	$('.white__btn-next').on('click', function(){
		black.slideNext();
		white.slidePrev();
	})
	$('#drop').on('click', function(e){
		e.preventDefault();
		$('.header__dropdown-list').toggleClass('active');
	})

	$('.popup-image').click(function(e){
		e.preventDefault();
		$('.modal__img img').attr('src', $(this).attr('href'));
		$('.modal__img').modal('show');
	})

});
