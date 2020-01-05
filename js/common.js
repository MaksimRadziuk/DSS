$(document).ready(function(){

	$('span.trigger').click(function(){
		$(this).siblings('.hidden_wrap').addClass('active');
	})
	$('.calc span.trigger').click(function(){
		$('.hidden_wrap').removeClass('active');
		$(this).siblings('.hidden_wrap').addClass('active');
	})
	$('.close').click(function(){
		$(this).parent('.hidden_wrap').removeClass('active');
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

})