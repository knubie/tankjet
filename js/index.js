(function ($) {
	$(document).ready(function () {
		var win = $(window),
				sc = $(".slides-container");
		function init() {
			function resize() {
				$(".resize-me").fit(win.width(), win.height(), (1024/768))
				$(".resize-me").centerCropFit(win.width(), win.height())
				$(".slides-container, .img-container").css("width", $(window).width());
				$(".slides-container, .img-container").css("height", $(window).height());
				function centerImages() {
					$(".center-me").css('margin-top', function() {
						return (win.height() / 3) - ($(this).height() / 2);
					});
					$(".logo").css('margin-left', function() {
						return (win.width() / 2) - ($(this).width() / 2);
					});
				};
				centerImages();
			};
			resize();
			win.resize(resize);

			$(".slides-container").cycle({
				fx: 'scrollLeft',
				fit: 1,
				slideResize: 1
			});
			
		};

		$(init);

	});
})(jQuery);