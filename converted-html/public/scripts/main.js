$(document).ready(function() {

	$('#top5-list').children('li').first().children('a').addClass('active').next().addClass('is-open').show();
    
	$('#top5-list').on('click', 'li.top5 > a', function(e) {
		e.preventDefault();
    
	  	if (!$(this).hasClass('active')) {

		    $('#top5-list .is-open').removeClass('is-open').hide();
		    $(this).next().toggleClass('is-open').toggle();
		      
		    $('#top5-list').find('.active').removeClass('active');
		    $(this).addClass('active');
	  	} else {
	    	$('#top5-list .is-open').removeClass('is-open').hide();
	    	$(this).removeClass('active');
	  	}
	});

	$(".top5-why .block1 ol li ul li:first-child").on("click", function() {
		if ($(".top5-when > a").hasClass("active")) {
			// do nothing
		} else {
			$('#top5-list .is-open').removeClass('is-open').hide();
		    $(".top5-when > a").next().toggleClass('is-open').toggle();
		      
		    $('#top5-list').find('.active').removeClass('active');
		    $(".top5-when > a").addClass('active');
		}
	});
	$(".top5-why .block1 ol li ul li:last-child").on("click", function() {
		if ($(".top5-real-money > a").hasClass("active")) {
			// do nothing
		} else {
			$('#top5-list .is-open').removeClass('is-open').hide();
		    $(".top5-real-money > a").next().toggleClass('is-open').toggle();
		      
		    $('#top5-list').find('.active').removeClass('active');
		    $(".top5-real-money > a").addClass('active');
		}
	});

});