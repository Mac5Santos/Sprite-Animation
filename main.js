var tID; //we will use this variable to clear the setInterval()
(function () {
	window.addEventListener('keydown', function (e) {
		  if (e.keyCode == 39) {
		    console.log('Hooray!')
		  }
		});
})();

function stopAnimate() {
  clearInterval(tID);
} //end of stopAnimate()


function animateScript() {

  var position = 115; //start position for the image slicer
  const interval = 100; //100 ms of interval for the setInterval()
  const diff = 115; //diff as a variable for position offset
  
  tID = setInterval(() => {
  
    document.getElementById("main").style.backgroundPosition =
      `-${position}px 0px`;
    //we use the ES6 template literal to insert the variable "position"
    
    if (position < 920) {
      position = position + diff;
    }
    //we increment the position by 256 each time
    else {
      position = 115;
    }
    //reset the position to 256px, once position exceeds 1536px
    
  }, interval); //end of setInterval
} //end of animateScript()
