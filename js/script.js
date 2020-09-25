$(window).on("load", function() {
	$(".loader .inner").fadeOut(300, function() {
		$(".loader").fadeOut(500);
	});
});

$(document).ready(function() {
	
	$('#slides').superslides({
		animation: 'fade',
		play: 5000,
		pagination: false
	})

	var typed = new Typed(".typed", {
		strings: ["Software Engineer", "Student"],
		typeSpeed: 150,
		loop: true,
		startDelay: 1500, 
	});

	$('.owl-carousel').owlCarousel({
    loop:true,
    items: 4,
    nav:false,
    autoplay: true,
    autoplayTimeout:2500,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        768:{
            items:3
        },
        938:{
        	items:4
        },
    }
	});

    var skillsTopOffset = $(".skillsSection").offset().top;

    $(window).scroll(function() {

    	if(window.pageYOffset > skillsTopOffset - $(window).height() + 100) {
	    	
	    	$('.chart').easyPieChart({
	        easing: 'easeInOut',
	        barColor: '#fff',
	        trackColor: 'black',
	        scaleColor: false,
	        lineWidth: 6,
	        size: 152,
	        onStep: function(from, to, percent) {
	        	$(this.el).find('.percent').text(Math.round(percent));
        		}
    		});
    	
    	}
    
    });

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
    	filter: '*',
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    });

    $("#filters a").click(function() {
    	$("#filters .current").removeClass("current");
    	$(this).addClass("current");

    	var selector = $(this).attr("data-filter");

    	$(".items").isotope( {
    	filter: selector,
    	animationOptions: {
    		duration: 1500,
    		easing: 'linear',
    		queue: false
    	}
    	});

    	return false;

    });

    $("#navigation li a").click(function(e) {
    	e.preventDefault();
    	var targetElement = $(this).attr("href");
    	var targetPosition = $(targetElement).offset().top;
    	$("html, body").animate({
    		scrollTop: targetPosition - 60
    	}, "slow");
    });

});