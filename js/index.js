(function ($) {
	$(document).ready(function (){
		$(document).waitForImages(function () {

		if ( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) ) {
			$('.slide-up, .slide-down').hide();
		} else {
	  	$(window).mousemove(function(e){
				if (e.clientX < 350) {
					$('.left').fadeIn(300);
				} else {
					$('.left').fadeOut(300);
				}
				if (($(window).width() - e.clientX) < 350) {
					$('.right').fadeIn(300);
				} else {
					$('.right').fadeOut(300);
				}
				if (e.clientY < 350) {
					$('.slide-up').fadeIn(300);
				} else {
					$('.slide-up').fadeOut(300);
				}
				if (($(window).height() - e.clientY) < 350) {
					$('.slide-down').fadeIn(300);
				} else {
					$('.slide-down').fadeOut(300);
				}
		  });
		}

		$('.makuhari-slideshow').waypoint(function(event, direction){
			if (direction == 'down') {
				$('#logo-dark').fadeIn('fast');
				$('#work').css('background-color', '#333333').css('color', '#ffffff');
				$('#about, #contact').attr('style', '');
  			$('.pelotero-slideshow').cycle(0);  
			} else {
				$('#logo-dark').fadeOut('fast');
				$('#work').attr('style', '');
  			$('.makuhari-slideshow').cycle(0);  
			}
		}, {offset: $(window).height()/2});
		$('.pelotero-slideshow').waypoint(function(event, direction){
			if (direction == 'down') {
  			$('.makuhari-slideshow').cycle(0);  
			} else {
  			$('.pelotero-slideshow').cycle(0);  
			}
		}, {offset: $(window).height()/2});
		$('.romshu-slideshow').waypoint(function(event, direction){
			if (direction == 'down') {
  			$('.pelotero-slideshow').cycle(0);  
			} else {
  			$('.romshu-slideshow').cycle(0);  
			}
		}, {offset: $(window).height()/2});
		$('.trilectables-slideshow').waypoint(function(event, direction){
			if (direction == 'down') {
  			$('.romshu-slideshow').cycle(0);  
			} else {
  			$('.trilectables-slideshow').cycle(0);  
			}
		}, {offset: $(window).height()/2});
		$('.domesticated-slideshow').waypoint(function(event, direction){
			if (direction == 'down') {
  			$('.domesticated-slideshow').cycle(0);  
			} else {
  			$('.domesticated-slideshow').cycle(0);  
			}				
		}, {offset: $(window).height()/2});
		$('.logo-slideshow').waypoint(function(event, direction){
			if (direction == 'down') {
  			$('.logos-slideshow').cycle(0);  
			} else {
  			$('.logos-slideshow').cycle(0);  
			}				
		}, {offset: $(window).height()/2});
		var scroll_to = function (target, dur) {
			if (target.length) {
				var top = target.offset().top;
				$('html,body').animate({scrollTop: top}, dur);
				return false;
			}
		}
		$('#down, #work').click(function(){
			scroll_to($('.makuhari-slideshow'), 700);
			$('#about, #contact').attr('style', '');
			$('.contact-slide').fadeOut(700);
			$('.about-slide').fadeOut(700);
			$('body').css('overflow', 'scroll');
		});	
		$('#logo-dark').click(function() {
			scroll_to($('.home-slide'), 700);
			$(this).fadeOut(700);
			$('.about-slide').fadeOut(700);
			$('.contact-slide').fadeOut(700);
			$('body').css('overflow', 'scroll');
		});
		$('#logo-white').click(function() {
			scroll_to($('.home-slide'), 700);
			$('.about-slide').fadeOut(700);
			$('.contact-slide').fadeOut(700);
		});
		$('#about').click(function() { 
				$('#logo-dark').fadeIn('fast');
				$('#contact, #work').attr('style', '');
				$(this).css('background-color', '#333333').css('color', '#ffffff');
  			$('.about-slide').fadeIn(700);
  			$('.contact-slide').fadeOut(700);
  			$('body').css('overflow', 'hidden');
		}); 
		$('#contact').click(function() { 
				$('#logo-dark').fadeIn('fast');
				$('#about, #work').attr('style', '');
				$(this).css('background-color', '#333333').css('color', '#ffffff');
  			$('.about-slide').fadeOut(700);
  			$('.contact-slide').fadeIn(700);
  			$('body').css('overflow', 'hidden');
		}); 
		$('.left').click(function(){
			var that = $(this);
			scroll_to(that.next().next('div'), 700);
			$(this).next().next('div').cycle('prev');
		});
		$('.right').click(function(){
			var that = $(this);
			console.log(that.prev('a').prev('div'));
			scroll_to(that.next('div'), 700);
			$(this).next('div').cycle('next');
		});
		$('.slides-container').click(function(){
			$(this).prev().click();
		})
		$('.slide-down').click(function () {
			// var that = $(this).next().next().next('div');
			console.log($(this).parent().next('div'));
			scroll_to($(this).parent().next('div'), 700);
		});
		$('.slide-up').click(function () {
			var that = $(this).next().next().next('div');
			console.log(that);
			scroll_to($(this).parent().prev('div'), 700);
		});
		$('.slide-show-links > a').not('.slide-down').click(function() {
			var that = $(this);
			scroll_to(that.parent().parent().parent('div'), 700);
			$(this).parent().parent().parent('div').cycle(parseInt($(this).attr('data-slide')));  
		})

		var sc = $(".slides-container");
		function init() {
			function resize() {
				if ( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) ) {
					var winHeight = $(window).innerHeight()+182;
				} else {
					var winHeight = $(window).innerHeight();
				}
				var winWidth = $(window).innerWidth();
				$(".slides-container, .img-container").css("width", winWidth);
				$(".slides-container, .img-container").css("height", winHeight);
				$(".resize-me").fit(winWidth, winHeight, (1024/768))
				$(".resize-me").centerCropFit(winWidth, winHeight)
				$("#down, .slide-down, .slide-up").css("left", function(){
					return (winWidth/2) - ($(this).width()/2);
				});
				$(".center-me").css('margin-top', function() {
					return (winHeight / 2) - ($(this).height() / 2);
				});
				$(".slide-ctrl").css("top", function() {
					return (winHeight/2) - ($(this).innerHeight()/2);
				})
				$('.bottom').css('margin-bottom', function(){
					return 0 - $(this).height();
				});
			};
			resize();
			$(window).resize(resize);

			$(".slides-container").cycle({
				fx: 'scrollHorz',
				timeout: 0,
				fit: 1,
				slideResize: 0
			});
			$('.home-illos').cycle({
				fx: 'fade',
				timeout: 5000,
				fit: 1,
				slideResize: 0
			})
			
		};

		$(init);

		});
	});
})(jQuery);