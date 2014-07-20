  
var $ready = $('.ryu-ready');
var $still = $('.ryu-still');
var $ryuThrow = $(".ryu-throwing");
var $hadouken = $(".hadouken");
var $cool = $(".ryu-cool");
var $ryu_actions = $(".ryu-action");
var $streetLogo = $("#streetLogo");
var $madeWith = $("#madeWith");
var $jqueryLogo = $("#jqueryLogo");


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
    $('#groove')[0].pause();
    $("#groove")[0].volume = 0.5;
    $('#groove')[0].play();
}


//********** OVERLAY START SCREEN *************//

$("#overlay").on("click", function() {
 	$(this).hide();
 	playStartSound();
 	playIntroSound();
	$(".instructions").hide();
	$("#instructions_toggle").hide();
	$streetLogo.fadeIn(2500, function() {
		$streetLogo.fadeOut(1000);
		$madeWith.fadeIn(2500, function() {
			$madeWith.fadeOut(1000);
			$jqueryLogo.fadeIn(2500, function() {
				$jqueryLogo.fadeOut(1000);
				$(".instructions").fadeIn(1000);
				$("#instructions_toggle").fadeIn(1000);
			});
		});
	});
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
    $ryu_actions.hide();
    $still.show();
  })
  .mousedown(function() {
  	playHadouken();
  	$ryu_actions.hide();
  	$ryuThrow.show();
  	$hadouken.finish().show().animate(
  		{"left":"300px"}, 300, 
  		function() { 
  			$(this).stop();
  			$(this).hide(); 
  			$(this).css("left", "-212px"); 
  		}
  	);
  })
  .mouseup(function() {
  	$ryu_actions.hide();
  	$ready.show();
  });

  $(document).on("keydown", function(event) {
  			if (event.keyCode === 88) {
  				$cool.show();
  				$ryuThrow.hide();
  				$ready.hide();
  				$still.hide();
  				$("#intro_sound")[0].pause();
  				$("#intro_sound")[0].load();
  				playGroove();
  			}
  });


    $(document).on("keyup", function(event) {
  		if (event.keyCode === 88) {
  			$ready.hide(); 
			$still.show(); 
			$ryuThrow.hide();
			$hadouken.hide();
			$cool.hide();
			$("#groove")[0].pause();
			$("#groove")[0].load();
  		}
  });


