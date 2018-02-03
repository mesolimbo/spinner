var COLORS =    [ 'gold', 'green', 'blue' ];
var WAIT_TIME = 1500; /* 1.5 seconds */

function setColor(color) {
  $('body').css('background-color', color);
}

function spin() {
  /* Clear screen */
  setColor('black');
  $('#clock').html('');

  /* Wait two seconds the pick a random color */
  setTimeout(
    function() {
      setColor(COLORS[Math.floor(Math.random() * COLORS.length)]);
      $('#clock').html('READY');
    },
    WAIT_TIME
  )
}

/* Pick a new color on click */
$(function() { $(document).on( 'click', spin); } );
