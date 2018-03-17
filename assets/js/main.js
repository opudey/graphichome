(function ($) {
	"use strict";


    jQuery(document).ready(function($){

		$('.photo-gallery').masonry();
		// $('.menu-button').click(function(){
			// $('.mainmenu').addClass('active');
		// });
		$('.menu-button').on('click', function(){
			$('.mainmenu').addClass('active');
		});
		$('.close-button').on('click', function(){
			$('.mainmenu').removeClass('active');
		});
		// $().click(function(){
			// $('.mainmenu').removeClass();
		// });
		$('.hd-social-list li .fa-search').click(function(){
			$('.hd-social-list li input').css({'width' : '110px'});
			$('.hd-social-list li i.fa-search').css({'display':'none','padding':'7px'});
			$('.hd-social-list li i.fa-close').css({'display' : 'block'});
		});
		$('.hd-social-list li .fa-close').click(function(){
			$('.hd-social-list li input').css({'width' : '0'});
			$('.hd-social-list li i.fa-search').css({'display' : 'block'});
			$('.hd-social-list li i.fa-close').css({'display' : 'none'});
		});


    });


    jQuery(window).load(function(){

		

    });


}(jQuery));	