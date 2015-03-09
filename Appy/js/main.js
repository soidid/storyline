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

  var value = currentScroll - blockOffset + 203;
      value = (value > 20) ? value + 253 : value;

  if(value > height){
  	$("#Topbar-year").text("");
    value = height
  }
  
  //console.log(value+"<>"+height);

  if(value > 0){
  	$(".Line-follow").height(value);

  }else{
  	$("#Topbar-year").text("");
  }
  	

});

/* ----------------------------------
 *  Componet staging
 * ---------------------------------- */
function onComplete(){
    console.log("complete");
}
$( document ).ready(function() {

  $("#timeline-button").on("click",function () {
      $(".Menu").removeClass("is-show");
      $(".Wrapper").removeClass("is-hide");

      $(".Topbar-menuItem").removeClass("is-active");
      $("#timeline-button").addClass("is-active");
  });
  $("#key-button").on("click",function () {
      $(".Menu").addClass("is-show");
      $(".Wrapper").addClass("is-hide");

      $(".Topbar-menuItem").removeClass("is-active");
      $("#key-button").addClass("is-active");

      $('html, body').animate({scrollTop : 0}, 0);
  });

   
	// Controller
	var controller = new ScrollMagic({loglevel: 3});
    
    /* ------ 1 ------ */
    var TopField = $("#Topbar-year");

    $(".Info-year").each(function(index, obj){
    	var setText = function(){
    		TopField.text(obj.innerHTML);
    	}
    	
    	// Animatioin
		var RollIn = new TimelineMax({paused: true, repeat: 0});
			RollIn.set(TopField, {opacity:0.1, onStart:setText})
		          .to(TopField, 1, {opacity:1, ease:Power4.easeOut});
      
        if(index ===0 )// First year do not trigger
        	return;

		// Scene
		var sceneIn = new ScrollScene({triggerElement: obj, triggerHook: 'onLeave',})
					  .addTo(controller)
			          .setTween(RollIn.play());
    	
    });

    /* ------ 2 ------ */
    $(".Event").each(function(index, obj){
    	// Animatioin
		var RollIn = new TimelineMax({paused: true, repeat: 0});
			RollIn.set(obj, {opacity:0.1})
		          .to(obj, 1, {opacity:1, ease:Power4.easeOut});
        
        /* Choose other ease options at: http://greensock.com/jump-start-js#easing */
         
		// Scene
		var sceneIn = new ScrollScene({triggerElement: obj})
					  .addTo(controller)
			          .setTween(RollIn.play());
    	
    });

   
	
});



