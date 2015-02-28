'use strict';

/* ----------------------------------
 *  Timeline 
 * ---------------------------------- */

$( window ).scroll(function() {

  //Current height
  var height = $(".History").height();
  $(".Line").height(height);
  
  ///

  var currentScroll = $(window).scrollTop();
  var blockOffset = $(".History").offset().top;

  var value = currentScroll - blockOffset + 403;
      value = (value > height) ? height : value;
  
  //console.log(value+"<>"+height);

  if(value > 0)
  	$(".Line-follow").height(value);

});

/* ----------------------------------
 *  Componet staging
 * ---------------------------------- */
function onComplete(){
    console.log("complete");
}
$( document ).ready(function() {

    

	// Controller
	var controller = new ScrollMagic({loglevel: 3});
    


    $(".Event").each(function(index, obj){
    	// Animatioin
		/*
		var RollIn = new TimelineMax({paused: true, repeat: 0});
			RollIn.set(obj, {marginLeft: "-100px"})
		          .to(obj, 1, {marginLeft: "30%", ease:Power4.easeOut});
        */
		var RollIn = new TimelineMax({paused: true, repeat: 0});
			RollIn.set(obj, {left: "-50%"})
		          .to(obj, 1, {marginLeft: "5%", ease:Power4.easeOut});
        /*
         * Choose other ease options at: http://greensock.com/jump-start-js#easing
         */
		// Scene
		var sceneIn = new ScrollScene({triggerElement: obj})
					  .addTo(controller)
			          .setTween(RollIn.play());

	    
	    // // Animatioin
		// var RollOut = new TimelineMax({paused: true});
		// 	RollOut.set(obj, {marginLeft: "30%"})
		// 	       .to(obj, 2, {marginLeft: "-100px", ease:Power2.easeInOut, onComplete: onComplete});
    
		// // Scene
		// var sceneOut = new ScrollScene({triggerElement: obj, triggerHook: 'onLeave'})
		// 			  .addTo(controller)
		// 	          .setTween(RollOut.play());
	    
    	
    });

    /*
    $(".People").each(function(index, obj){
    	// Animatioin
		
		var RollIn = new TimelineMax({paused: true, repeat: 0});
			RollIn.set(obj, {opacity: "0"})
			      .to(obj, 2, {opacity: "100", ease:Power4.easeOut});

		// Scene
		var sceneIn = new ScrollScene({triggerElement: obj})
					  .addTo(controller)
			          .setTween(RollIn.play());

    });
    */

    
   
   
	
	
});



