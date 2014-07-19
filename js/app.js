  
var $ready = $('.ryu-ready');
var $still = $('.ryu-still');
var $ryuThrow = $(".ryu-throwing");
var $hadouken = $(".hadouken");
var $cool = $(".ryu-cool");
var $ryu_actions = $(".ryu-action");

 function playHadouken() {
  $("#hadouken-sound")[0].volume = 0.5;
  $("#hadouken-sound")[0].load();
  $("#hadouken-sound")[0].play();
  }

  function playGroove() {
    $("#groove")[0].volume = 0.5;
    $('#groove')[0].play();
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


