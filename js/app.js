  
var $ready = $('.ryu-ready');
var $still = $('.ryu-still');
var $ryuThrow = $(".ryu-throwing");
var $hadouken = $(".hadouken");
var $cool = $(".ryu-cool");
var $ryu_actions = $(".ryu-action");

	 
function playStartSound() {
	$("#start_sound")[0].volume = 1;
	$("#start_sound")[0].play();
}

 function playHadouken() {
  $("#hadouken-sound")[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $("#hadouken-sound")[0].play();
  }

 var grooveSound = false;
function playGroove () {
  grooveSound = !grooveSound;
  if (grooveSound) {
    $('#groove')[0].pause();
    // $('#cool')[0].load()
    $('#groove')[0].play();
  }
}

  $('.ryu').mouseenter(function() {
    $ryu_actions.hide();
    $ready.show();
  })
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
  				playGroove();
  			}
  });


    $(document).on("keyup", function(event) {
  		if (event.keyCode === 88) {
  			$ready.show(); 
			$still.hide(); 
			$ryuThrow.hide();
			$hadouken.hide();
			$cool.hide();
			$("#groove")[0].pause();
			$("#groove")[0].load();
  		}
  });



	$("#overlay").on("click", function() {
	 	$(this).hide();
	 	playStartSound();
	 	$(".instructions").show();
	 	$("#instructions_toggle").show();
	 });


	$("#instructions_toggle").on("click", function() {
		$(".instructions").toggle();
	});

