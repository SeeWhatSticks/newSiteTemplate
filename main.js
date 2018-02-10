document.addEventListener("DOMContentLoaded", function() { initialise(); }, false);

var reportKeyboardEvents = false;

function initialise() {
  window.addEventListener('keydown', function(event) {
              handleKeydown(event);
            }, false);
  window.addEventListener('keyup', function (event) {
              handleKeyup(event);
            }, false);
}

function handleKeydown(event) {
  switch (event.keyCode) {
    case 32:
      break;
    default:
      if (reportKeyboardEvents) {
        console.log("KeyDown: " + event.keycode);
      }
      break;
  }
}
function handleKeyup(event) {
  switch (event.keyCode) {
    case 32:
      break;
    default:
      if (reportKeyboardEvents) {
        console.log("Keyup: " + event.keycode);
      }
      break;
  }
}