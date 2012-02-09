(function ($) {
	$(document).ready(function (){
		$(document).waitForImages(function () {

			$('.makuhari-slideshow').waypoint(function(event, direction){
				if (direction == 'down') {
					$('#logo-dark, .makuhari-left, .makuhari-right').fadeIn('fast');
				} else {
					$('#logo-dark, .left, .right').fadeOut('fast');
				}
			}, {offset: 50});
			$('.romshu-slideshow').waypoint(function(event, direction){
				if (direction == 'down') {
					$('.romshu-left, .romshu-right').fadeIn('fast');
					$('.makuhari-left, .makuhari-right').fadeOut('fast');
				} else {
					$('#logo-light, .makuhari-left, .makuhari-right').fadeOut('fast');
				}
			}, {offset: 50});

			$('#down, #work').click(function(){
				$(window).scrollTo($('.makuhari-slideshow'), 700);
			});	
			$('.left').click(function(){
				$(this).next('div').cycle('prev');
			});
			$('.right').click(function(){
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
				};
				resize();
				win.resize(resize);

				$(".slides-container").cycle({
					fx: 'scrollHorz',
					timeout: 0,
					fit: 1,
					slideResize: 0
				});
				
			};

			$(init);

		});
	});
})(jQuery);