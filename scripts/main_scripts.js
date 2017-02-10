var current_page = 0;
var menu_open = false;
var lock = false;
var menu_lock = false;
var max_pages = 5;
var page_3_color = "#e5557e";
var page_3_slide = 1;
var page_3_max = 6;
var page_4_slide = 1;
var page_4_max = 5;
var min_scroll_length = 100;

function unlock(){
	lock = false;
}

function toggleMenu(){
	if( menu_lock ) return;
	if( menu_open == true ){
		menu_open = false;
		menu_lock = true;
		$(".menu_bar").removeClass("rotate");
		$("#menu_white_background").fadeOut(300);
		$("#header_logo_wrapper h1").removeClass("active");
		$("#side_navigation").removeClass("behind");
		$("#menu .hexagon,#menu #menu_header_circle,#menu .line_1, #menu .line_2, #menu .line_3, #menu h3, #menu h2").removeClass("active");
		setTimeout(function() {
			$('#menu_tree').css('display', 'none');
			menu_lock = false;
		}, 300);
	}else{
		menu_open = true;
		$('#menu_tree').css('display', 'block');
		$(".menu_bar").addClass("rotate");
		$("#menu_white_background").fadeIn(300);
		$("#header_logo_wrapper h1").addClass("active");
		$("#side_navigation").addClass("behind");
		$("#menu .hexagon, #menu #menu_header_circle,#menu .line_1, #menu .line_2, #menu .line_3, #menu h3, #menu h2").addClass("active");
	}
}

function openPage( page_number ){
	setTimeout( function(){
		current_page = page_number;
		$("#page_" + page_number).addClass("active_page");
	}, 1000)
}

function closePage( page_number ){
	lock = true;
	setTimeout(unlock, 1200);
	$("#page_" + page_number).removeClass("active_page");
}

function jumpToPage( page_number ){
	if(lock || (page_number == current_page)) return;
	closePage(current_page);
	if(menu_open == true){
		toggleMenu();
	}
	if( page_number == 1){
		$("body").css("background-color", "#0a236b");
		$("#header_logo_wrapper h1").addClass("hidden");
		$("#menu_icon img, #header_logo_wrapper img").removeClass("active");
		$("#menu_icon #icon_1").addClass("active");
		$('.side_circle').removeClass("active");
		$('#side_circle_1').addClass("active");
		$('.menu_item .hexagon, .menu_item h3').removeClass("current_page");
		$('#page_1_link_hex, #page_1_link').addClass("current_page");
		openPage(1);
	}else if( page_number == 2 ){
		$("body").css("background-color", "#38c2a6");
		$("#header_logo_wrapper h1").removeClass("hidden");
		$("#menu_icon img, #header_logo_wrapper img").removeClass("active");
		$("#menu_icon #icon_2, #header_logo_wrapper #header_logo_2").addClass("active");
		$('.side_circle').removeClass("active");
		$('#side_circle_2').addClass("active");
		$('.menu_item .hexagon, .menu_item h3').removeClass("current_page");
		$('#page_2_link_hex, #page_2_link').addClass("current_page");
		openPage(2);
	}else if( page_number == 3 ){
		$("body").css("background-color", page_3_color);
		$("#header_logo_wrapper h1").removeClass("hidden");
		$("#menu_icon img, #header_logo_wrapper img").removeClass("active");
		$("#menu_icon #icon_3, #header_logo_wrapper #header_logo_3").addClass("active");
		$('.side_circle').removeClass("active");
		$('#side_circle_3').addClass("active");
		$('.menu_item .hexagon, .menu_item h3').removeClass("current_page");
		$('#page_3_link_hex, #page_3_link').addClass("current_page");
		openPage(3);
	}else if( page_number == 4 ){
		$("body").css("background-color", "#9e8fdd");
		$("#header_logo_wrapper h1").removeClass("hidden");
		$("#menu_icon img, #header_logo_wrapper img").removeClass("active");
		$("#menu_icon #icon_4, #header_logo_wrapper #header_logo_4").addClass("active");
		$('.side_circle').removeClass("active");
		$('#side_circle_4').addClass("active");
		$('.menu_item .hexagon, .menu_item h3').removeClass("current_page");
		$('#page_4_link_hex, #page_4_link').addClass("current_page");
		openPage(4);
	}else if( page_number == 5 ){
		$("body").css("background-color", "#4b816f");
		$("#header_logo_wrapper h1").removeClass("hidden");
		$("#menu_icon img, #header_logo_wrapper img").removeClass("active");
		$("#menu_icon #icon_5, #header_logo_wrapper #header_logo_5").addClass("active");
		$('.side_circle').removeClass("active");
		$('#side_circle_5').addClass("active");
		$('.menu_item .hexagon, .menu_item h3').removeClass("current_page");
		$('#page_5_link_hex, #page_5_link').addClass("current_page");
		openPage(5);
	}
}

function changeDesignPreview( slide_number ){
	if( slide_number == 1){
		$(".design_slide").removeClass("active");
		$("#design_slide_1").addClass("active");
	}else if( slide_number == 2 ){
		$(".design_slide").removeClass("active");
		$("#design_slide_2").addClass("active");
	}else if( slide_number == 3 ){
		$(".design_slide").removeClass("active");
		$("#design_slide_3").addClass("active");
	}else if( slide_number == 4 ){
		$(".design_slide").removeClass("active");
		$("#design_slide_4").addClass("active");
	}else if( slide_number == 5 ){
		$(".design_slide").removeClass("active");
		$("#design_slide_5").addClass("active");
	}
}
function changeWebPreview( slide_number ){
	if( slide_number == 1){
		$(".web_slide").removeClass("active");
		$("#web_slide_1").addClass("active");
		page_3_color = "#e5557e";
		$("body").css("background-color", page_3_color);
		$(".web_slide .shadow_box").css("background-color", page_3_color);
	}else if( slide_number == 2 ){
		//FIG
		$(".web_slide").removeClass("active");
		$("#web_slide_2").addClass("active");
		page_3_color = "#4774c5";
		$("body").css("background-color", page_3_color);
		$(".web_slide .shadow_box").css("background-color", page_3_color);
	}else if( slide_number == 3 ){
		//urbanHive
		$(".web_slide").removeClass("active");
		$("#web_slide_3").addClass("active");
		page_3_color = "#12a26d";
		$("body").css("background-color", page_3_color);
		$(".web_slide .shadow_box").css("background-color", page_3_color);
	}else if( slide_number == 4 ){
		//Neep
		$(".web_slide").removeClass("active");
		$("#web_slide_4").addClass("active");
		page_3_color = "#be80bd";
		$("body").css("background-color", page_3_color);
		$(".web_slide .shadow_box").css("background-color", page_3_color);
	}else if( slide_number == 5 ){
		//Rowing
		$(".web_slide").removeClass("active");
		$("#web_slide_5").addClass("active");
		page_3_color = "#604c4c";
		$("body").css("background-color", page_3_color);
		$(".web_slide .shadow_box").css("background-color", page_3_color);
	}else if( slide_number == 6 ){
		//Rohlfs
		$(".web_slide").removeClass("active");
		$("#web_slide_6").addClass("active");
		page_3_color = "#631b1d";
		$("body").css("background-color", page_3_color);
		$(".web_slide .shadow_box").css("background-color", page_3_color);
	}
}
function changeDesignRight(){
	page_4_slide++;
	if(page_4_slide > page_4_max){
		page_4_slide = 1;
	}
	changeDesignPreview(page_4_slide);
}
function changeDesignLeft(){
	page_4_slide--;
	if(page_4_slide < 1){
		page_4_slide = page_4_max;
	}
	changeDesignPreview(page_4_slide);
}
function changeWebRight(){
	page_3_slide++;
	if(page_3_slide > page_3_max){
		page_3_slide = 1;
	}
	changeWebPreview(page_3_slide);
}
function changeWebLeft(){
	page_3_slide--;
	if(page_3_slide < 1){
		page_3_slide = page_3_max;
	}
	changeWebPreview(page_3_slide);
}

function scrollUp(){
	if(current_page > 1){
		jumpToPage(current_page - 1);
	}
}
function scrollDown(){
	if(current_page < max_pages){
		jumpToPage(current_page + 1);
	}
}

$(window).bind('mousewheel DOMMouseScroll', function(event){
    if(lock || menu_open) return;
	if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
		scrollUp();
    }
    else {
		scrollDown();
    }
});

$(document).keydown(function(e) {
	if(lock || menu_open || $("input,textarea").is(":focus")) return;
	switch(e.which) {
		case 38: // up
			scrollUp();
			break;
		case 40: // down
			scrollDown();
			break;
			
		case 37: // left
			if(current_page == 3) changeWebLeft(); 
			if(current_page == 4) changeDesignLeft(); 
			break;
		case 39: // right
			if(current_page == 3) changeWebRight(); 
			if(current_page == 4) changeDesignRight(); 
			break;
			
		default: return;
	}
});
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);
var xDown = null;                                                        
var yDown = null;                                                        
function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }
	if(lock || menu_open || $("input,textarea").is(":focus")) return;
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if ( Math.abs( xDiff ) < Math.abs( yDiff ) ) {
        if ( yDiff > 0) {
            /* up swipe */
			scrollDown();
        } else if(yDiff < 0) { 
            /* down swipe */
			scrollUp();
        }
    }
	if ( Math.abs( yDiff ) < Math.abs( xDiff ) ) {
        if ( xDiff < 0) {
            /* left swipe */
			if(current_page == 3) changeWebLeft(); 
			if(current_page == 4) changeDesignLeft(); 
			console.log('Here');
        } else if ( xDiff > 0) { 
            /* right swipe */
			if(current_page == 3) changeWebRight(); 
			if(current_page == 4) changeDesignRight(); 
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

$(function(){
	$("#email_form").submit(function(e) {
		var url = "./libs/email.php";
		$.ajax({
			type: "POST",
			url: url,
			data: $("#email_form").serialize(),
			success: function(data){
				$("#form_submit_button_wrapper").html(data);
			}
		});
		e.preventDefault();
	});
	
	$('body').imagesLoaded( { background: true }, function() {
		setTimeout(function(){
			$('#loading_screen').fadeOut(400, function(){
				$('#header_logo_wrapper, #side_navigation, #menu').removeClass("loading");
			});
			jumpToPage(1);
		}, 1000);
	});
});