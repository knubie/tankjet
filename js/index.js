(function ($) {
	$(document).ready(function (){
		$(document).waitForImages(function () {

			$('.makuhari-slideshow').waypoint(function(event, direction){
				if (direction == 'down') {
					alert('scrolled to coool place');
				}
			});

			var win = $(window),
					sc = $(".slides-container");
			function init() {
				function resize() {
					$(".resize-me").fit(win.width(), win.height(), (1024/768))
					$(".resize-me").centerCropFit(win.width(), win.height())
					$(".slides-container, .img-container").css("width", $(window).width());
					$(".slides-container, .img-container").css("height", $(window).height());
					$(".center-me").css('margin-top', function() {
						return (win.height() / 3) - ($(this).height() / 2);
					});
				};
				resize();
				win.resize(resize);

				$(".slides-container").cycle({
					fx: 'scrollLeft',
					fit: 1,
					slideResize: 0
				});
				
			};

			$(init);

		});
	});
})(jQuery);