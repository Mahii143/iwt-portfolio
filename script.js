$(document).ready(function(){
	$('#menu').click(function(){
		$(this).toggleClass('fa-times');
		$('.menu-navbar').toggleClass('toggle');
	});
	
	//when load or scroll the menu should go invisible	
	$(window).on('scroll load',function(){
		$('#menu').removeClass('fa-times');
		$('.menu-navbar').removeClass('toggle');
	});

	//smooth scrolling
	$('a[href*="#"]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });

});