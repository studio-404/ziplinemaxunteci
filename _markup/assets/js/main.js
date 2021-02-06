$(document).ready(function(){
	var windowWidth = $(window).outerWidth();
	var containerWidth = $(".mainContainer").outerWidth();
	var getMinusMainWidth = (windowWidth - containerWidth) / 2;
	
	$(".social-networks").css({width: getMinusMainWidth+"px", right: "-"+getMinusMainWidth+"px"});
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 250) {
        $("header").addClass("fixed");
        setTimeout(function(){
        	$(".fixed").css({top:'0px'});	
        }, 500);        
    }else{
    	$("header").removeClass("fixed");
    	$(".fixed").css({top:'-70px'});
    }
});