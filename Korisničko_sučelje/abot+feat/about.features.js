$(document).ready(function(){

	$('.preloader').fadeOut('slow');

	var windowHeight=$(window).height();
	var windowScrollPosTop=$(window).scrollTop();
	var windowScrollPosBottom=windowHeight+windowScrollPosTop;

	$.fn.reavelOnScroll=function(direction,speed){

		return this.each(function(){

			var objectOffest=$(this).offset();
			var objectOffestTop=objectOffest.top;




			if(!$(this).hasClass("hidden")){

				if(direction == "right"){

					$(this).css({"opacity":0,
						"right":"700px"});

				}else{
					$(this).css({"opacity":0,
						"right":"-700px"});
				}

				$(this).css("opacity",0).addClass("hidden");

			}
			

			

			if(!$(this).hasClass("animatation-complete")){
				if(windowScrollPosBottom > objectOffestTop){
				$(this).animate({"opacity":1,"right":0},speed).addClass("animation-complete");
				}
			}

		});

	}

	

	$(window).scroll(function(){

		 windowHeight=$(window).height();
		 windowScrollPosTop=$(window).scrollTop();
		 windowScrollPosBottom=windowHeight+windowScrollPosTop;
		
		$(".prva").reavelOnScroll("left",4000);

		$(".features").reavelOnScroll("right",2000);

	});
	



	

});