$( document ).ready(function() {

    var miumiu = $(".miumiu");
    var text = $(".text");

	// Controller
	var controller = new ScrollMagic({loglevel: 3});
    
	// Animatioin
	var onStart = function(){
    	text.text("滾...滾...");
    }
	var onFinish = function(){
    	text.text("呼...好累");
    }

	var RollIn = new TimelineMax({paused: true});
		RollIn.set(miumiu, {marginLeft: 0, onStart: onStart})
		      .to(miumiu, 2, {marginLeft: "90%", ease:Power2.easeInOut, onComplete:onFinish});
    /*
     * Choose other ease options at: http://greensock.com/jump-start-js#easing
     */
    
	// Scene
	var sceneIn = new ScrollScene({triggerElement: ".miumiu", triggerHook: 'onEnter', offset: 203})
		.addTo(controller)
		.setTween(RollIn.play());
   
   
	
	
});