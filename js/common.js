$(document).ready(function(){

	$('span.trigger').click(function(){
		$(this).siblings('.hidden_wrap').addClass('active');
	})
	$('.calc span.trigger').click(function(){
		$('.hidden_wrap').removeClass('active');
		$(this).siblings('.hidden_wrap').addClass('active');
	})
	$('.hidden_wrap .close').click(function(){
		$(this).parent('.hidden_wrap').removeClass('active');
	})
	$('.popup .close').click(function(){
		$(this).closest('.popup').hide();
		$('#popup_background').hide();
		let reloadVideo = $('.modal-video').attr("src");
		$('.modal-video').attr('src', reloadVideo);
	})
	$('#mobileMenuTrigger').click(function(){
		$('#mobileMenu').toggleClass('active');
	})
	$('#mobileMenu .close').click(function(){
		$('#mobileMenu').toggleClass('active');
	})
	$('#self_trade-button').click(function(){
		$(this).addClass('active');
		$('#auto_trade-button').removeClass('active');
		$('#self_trade-content').addClass('active');
		$('#auto_trade-content').removeClass('active');
		$('.hidden_wrap').removeClass('active');
	})
	$('#auto_trade-button').click(function(){
		$(this).addClass('active');
		$('#self_trade-button').removeClass('active');
		$('#self_trade-content').removeClass('active');
		$('#auto_trade-content').addClass('active');
		$('.hidden_wrap').removeClass('active');
	})


	$('.videos_slider-wrap').slick({
		slidesToShow: 3,
  		slidesToScroll: 1,
  		dots:true,
  		arrows:true
	})
	

	if ($(window).width()<961) {
		$('.videos_slider-wrap').slick('unslick');
	}

	$(window).resize(function(){
		if ($(window).width()<961) {
			$('.videos_slider-wrap').slick('unslick');
		}
	})


	$('section.test button').click(function(){
		$(this).closest('.test_slide','section.test').next('.test_slide').addClass('active')
	})

	var clock = $('section.promo .clock_wrap').FlipClock({
		clockFace : "DailyCounter",
		autoStart: false,
		countdown: true,
		language: 'ru-ru'

	});
	var dt = "January 30 2020 00:00:00";
	var first = new Date(dt);
	var last = Date.now();
	var remaining = first - last;
	remaining /= 1000;
	clock.setTime(remaining);
	clock.setCountdown(true);
	clock.start();


	$('#videoPopup').click(function(){
		$('#videoWrap').show();
		$('#popup_background').show();
	})
	$('#popupLoginTrigger').click(function(){
		$('#loginWindow').show();
		$('#popup_background').show();
	})
	$('#getRegistrationLoginWindow').click(function(){
		$('#loginWindow').hide();
		$('#registration').show();
	})
	$('#popupRegistrationTrigger').click(function(){
		$('#registration').show();
		$('#popup_background').show();
	})
	$('#getLoginWindowRegistrationForm').click(function(){
		$('#registration').hide();
		$('#loginWindow').show();
	})
})