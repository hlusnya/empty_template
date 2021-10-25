function formPosition(form) {
	var top =  window.pageYOffset || document.documentElement.scrollTop;
	//alert($(form).outerHeight());
	if ($(window).outerHeight() < $(form).outerHeight()) {
		top += 20;
	}
	else {
		top += $(window).outerHeight()/2-$(form).outerHeight()/2;
	}
	$(form).css({'top':top,	 'margin-left':($(window).width()-$(form).outerWidth())/2});								
}

	
$(function(){
					
	$('.but-zvonok').click(function(){
		formPosition('.popup-zvonok');
		$('.popup-zvonok').fadeIn(800);
		$('.popup_bg').fadeIn(800);
       
	})					
	
	
	$('.popup_bg, .popup_bg_desc, .popup .close').click(function(){
		$('.popup').fadeOut(500);
		$('.popup_bg').fadeOut(500);
		$('.popup_bg_desc').fadeOut(500);
	})

	$("input[name=phone]").mask("+7(999)999-99-99");
});


