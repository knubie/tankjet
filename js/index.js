(function ($) {
	$(document).ready(function (){
		$(document).waitForImages(function () {

			$('.home-slideshow').waypoint(function(event, direction){
				if (direction == 'left') {
					$('#logo-dark, .makuhari-left, .makuhari-right').fadeIn('fast');
					$('#navigation > a > div:first').css('background-color', '#333333').css('color', '#ffffff');
				} else {
					$('#logo-dark, .left, .right').fadeOut('fast');
					$('#navigation > a > div:first').attr('style', '');
				}
			}, {offset: 50});
			$('.makuhari-slideshow').waypoint(function(event, direction){
				if (direction == 'down') {
					$('#logo-dark, .makuhari-left, .makuhari-right').fadeIn('fast');
					$('#navigation > a > div:first').css('background-color', '#333333').css('color', '#ffffff');
				} else {
					console.log('scrolling up makuhari')
					$('#logo-dark, .left, .right').fadeOut('fast');
					$('#navigation > a > div:first').attr('style', '');
				}
			}, {offset: 50});
			$('.pelotero-slideshow').waypoint(function(event, direction){
				if (direction == 'down') {
					$('.pelotero-left, .pelotero-right').fadeIn('fast');
					$('.makuhari-left, .makuhari-right').fadeOut('fast');
				} else {
					$('.pelotero-left, .pelotero-right').fadeOut('fast');
					$('.makuhari-left, .makuhari-right').fadeIn('fast');
				}
			}, {offset: 50});
			$('.romshu-slideshow').waypoint(function(event, direction){
				if (direction == 'down') {
					$('.romshu-left, .romshu-right').fadeIn('fast');
					$('.pelotero-left, .pelotero-right').fadeOut('fast');
				} else {
					$('.romshu-left, .romshu-right').fadeOut('fast');
					$('.pelotero-left, .pelotero-right').fadeIn('fast');
				}
			}, {offset: 50});

			$('#down, #work').click(function(){
				$(window).scrollTo($('.makuhari-slideshow'), 700);
			});	
			$('#about').click(function() { 
    			$(window).scrollTo($('.home-slideshow'), 700);
    			$('.home-slideshow').cycle(1);  
			}); 
			$('#contact').click(function() { 
    			$(window).scrollTo($('.home-slideshow'), 700);
    			$('.home-slideshow').cycle(2);  
			}); 
			$('.left').click(function(){
				var that = $(this);
				$(window).scrollTo(that.next('div'), 700);
				$(this).next('div').cycle('prev');
			});
			$('.right').click(function(){
				var that = $(this);
				$(window).scrollTo(that.prev('div'), 700);
				$(this).prev('div').cycle('next');
			});

			var win = $(window),
					sc = $(".slides-container");
			function init() {
				function resize() {
					$(".slides-container, .img-container").css("width", $(window).width());
					$(".slides-container, .img-container").css("height", $(window).height());
					//$(window).scrollTo($('.slides-container:in-viewport'), 0);
					$(".resize-me").fit(win.width(), win.height(), (1024/768))
					$(".resize-me").centerCropFit(win.width(), win.height())
					$("#down").css("left", function(){
						return (win.width()/2) - ($(this).width()/2);
					})
					$(".center-me").css('margin-top', function() {
						return (win.height() / 2) - ($(this).height() / 2);
					});
					$(".slide-ctrl").css("top", function() {
						return (win.height()/2) - ($(this).height()/2);
					})
					$('.bottom').css('margin-bottom', function(){
						return 0 - $(this).height();
					});
				};
				resize();
				win.resize(resize);

				$(".slides-container").cycle({
					fx: 'scrollHorz',
					timeout: 0,
					fit: 1,
					slideResize: 0
				});
				$('.home-illos').cycle({
					fx: 'fade',
					timeout: 3,
					fit: 1,
					slideResize: 0
				})
				
			};

			$(init);

		});
	});
})(jQuery);