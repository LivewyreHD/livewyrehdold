//Document Size Checker

$(document).ready(function() {
    // run test on initial page load
    checkSize();
    // run test on resize of the window
    $(window).resize(checkSize);
});

//Bounce function at media over 1010px

function checkSize(){
    if ($(".sizeTest").css("float") == "none" ){
    	// run bounce on .readmore if desktop
        $(".bounce").on('mouseenter mouseleave',function( e ) {
	  		var el = $(this);
	  		if(!el.data("bouncer")) el.effect("bounce", { direction:'right', distance:15, times:1 }, );
	  		el.data("bouncer", e.type=="mouseenter" ? true : false );
		});
    }
}