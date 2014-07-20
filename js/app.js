  
var $ready = $('.ryu-ready');
var $still = $('.ryu-still');
var $ryuThrow = $(".ryu-throwing");
var $hadouken = $(".hadouken");
var $cool = $(".ryu-cool");
var $ryu_actions = $(".ryu-action");
var $streetLogo = $("#streetLogo");
var $madeWith = $("#madeWith");
var $jqueryLogo = $("#jqueryLogo");


// Play intro music
function playIntroSound() {
	$("#intro_sound")[0].volume = 0.5;
	$("#intro_sound")[0].play();
}


// Play start sound on
function playStartSound() {
	$("#start_sound")[0].volume = 1;
	$("#start_sound")[0].play();
} 

// Play Hadouken sound
 function playHadouken() {
  $("#hadouken-sound")[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $("#hadouken-sound")[0].play();
  }

// Play groove sound
function playGroove () {
    $('#hadouken-sound')[0].pause();
    $('#intro_sound')[0].pause();
    $("#groove")[0].volume = 0.5;
    $('#groove')[0].play();
}

// Starts the intro animations and intro sound
function beginIntro() {
	// Begin intro song
	playIntroSound();
	// Fade in the street fighter logo 
	$streetLogo.fadeIn(2500, function() {
		// Then fade out the street fighter logo
		$streetLogo.fadeOut(1000);
		// Fade in "Made with"
		$madeWith.fadeIn(3000, function() {
			// Then fade out "Made With"	
			$madeWith.fadeOut(1000);
			// fade in Jquery logo
			$jqueryLogo.fadeIn(3000, function() {
				// Then fade out Jquery logo
				$jqueryLogo.fadeOut(1000);
				// fade in the instructions and toggle button
				$(".instructions").fadeIn(1000);
				$("#instructions_toggle").fadeIn(1000);
			});
		});
	});
}


//********** OVERLAY START SCREEN  *************//

// Click even on the overlay screen
$("#overlay").on("click", function() {
 	// When clicked hide overlay screen
 	$(this).hide();
 	// When click play that start sound function
 	playStartSound();
 	// After Overlay is hidden by click event, play intro animation
 	beginIntro();
 	// Hide Insturctions from showing
	$(".instructions").hide();
	$("#instructions_toggle").hide();
});

//********** INSTRUCTIONS TOGGLE BUTTON *************//

$("#instructions_toggle").on("click", function() {
	$(".instructions").toggle();
});

//********** BEGGINING OF RYU ACTIONS *************//

  // When the mouse enters the ryu container
  $('.ryu').mouseenter(function() {
    // Hide all of Ryu's actions
    $ryu_actions.hide();
    // Show Ryu's ready stance
    $ready.show();
  })
  // When the mouse leaves the Ryu container
  .mouseleave(function() {
    // Hide all of Ryu's actions
    $ryu_actions.hide();
    // Show still image of Ryu
    $still.show();
  })
  // When you press down on the mouse
  .mousedown(function() {
  	// Play Houdouken sound
  	playHadouken();
  	// Hide all of Ryu's action
  	$ryu_actions.hide();
  	// Show Ryu's throw animation
  	$ryuThrow.show();
  	// Show Hadouken fireball and animate it from left to right
  	$hadouken.finish().show().animate(
  		{"left":"300px"}, 300, 
  		function() { 
  			// Stop the animation
  			$(this).stop();
  			// Hide Haouken fireball
  			$(this).hide();
  			// Reset fireball back to it's orginal location 
  			$(this).css("left", "-212px"); 
  		}
  	);
  })
  // When you life of the mouse button
  .mouseup(function() {
  	// Hide all of Ryu's actions
  	$ryu_actions.hide();
  	// Show ready stance
  	$ready.show();
  });

  // Watch the document for a key down event
  $(document).on("keydown", function(event) {
  			// If "X" which equals 88 is pressed 
  			if (event.keyCode === 88) {
  				//Hide Ryu's actions
  				$ryu_actions.hide();
  				// Show cool Ryu
  				$cool.show();
  				// Play groove sound
  				playGroove();
  			}
  });

  	// Watch the document for user to let off key
    $(document).on("keyup", function(event) {
  		// If "X" which equals 88 stops being pressed on
  		if (event.keyCode === 88) {
  			// Hide Ryu's action
  			$ryu_actions.hide();
			// Show Ryu's still image
			$still.show(); 
			// pause the groove sound
			$("#groove")[0].pause();
			// load it back up to the beggining
			$("#groove")[0].load();
  		}
  });


