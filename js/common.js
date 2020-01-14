$(document).ready(function(){

/*Открытие/Закрытие ховер контента Как это работает, Главная*/
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

/*Открытие/Закрытие мобильного меню*/
	$('#mobileMenuTrigger').click(function(){
		$('#mobileMenu').toggleClass('active');
	})
	$('#mobileMenu .close').click(function(){
		$('#mobileMenu').toggleClass('active');
	})

/*Управление табами Как это работает, Главная*/
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

/*Слайдер Видео на Главной*/
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
		if ($(window).width()>960) {
			$('.videos_slider-wrap').slick({
				slidesToShow: 3,
		  		slidesToScroll: 1,
		  		dots:true,
		  		arrows:true
			})
		}
	})

/*Перелистывание теста Главная*/
	$('section.test button').click(function(){
		$(this).closest('.test_slide','section.test').next('.test_slide').addClass('active')
	})

/*Обратный отсчет на главной странице*/
	var clock = $('section.promo .clock_wrap').FlipClock({
		clockFace : "DailyCounter",
		autoStart: false,
		countdown: true,
		language: 'ru-ru'

	});
	var dt = "January 30 2020 00:00:00"; /*Дата окончания отсчета*/
	var first = new Date(dt);
	var last = Date.now();
	var remaining = first - last;
	remaining /= 1000;
	clock.setTime(remaining);
	clock.setCountdown(true);
	clock.start();


/*Попап триггеры*/
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

/*Закрытие Попап*/
	$('.popup .close').click(function(){
		$(this).closest('.popup').hide();
		$('#popup_background').hide();
		let reloadVideo = $('.modal-video').attr("src");
		$('.modal-video').attr('src', reloadVideo);
	})

/*Скрипты на странице FAQ*/
	$('.answer_trigger').click(function(){
		$(this).siblings('p').toggleClass('active');
		$(this).children('span').toggleClass('active');
	})
	$('.question').click(function(){
		$(this).siblings('.answer').toggle();
	})

/*Скрипты на сранице Блог*/
	$('#blogNews').click(function(){
		$('.tab').removeClass('active');
		$(this).addClass("active");
		$('.blog_wrap').removeClass('active');
		$('#newsWrap').addClass("active");
	})
	$('#blogArticle').click(function(){
		$('.tab').removeClass('active');
		$(this).addClass("active");
		$('.blog_wrap').removeClass('active');
		$('#articleWrap').addClass("active");
	})
	$('#blogEvents').click(function(){
		$('.tab').removeClass('active');
		$(this).addClass("active");
		$('.blog_wrap').removeClass('active');
		$('#eventsWrap').addClass("active");
	})

})