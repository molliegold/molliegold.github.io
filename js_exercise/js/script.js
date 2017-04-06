$(document).ready(function() {
	//append new element
	for (j = 0; j < 100; j++) {
		for (i = 0; i < 20; i++) {
			$('body').append('<div class="element" style="left:' + i*5 + 'vw; top:' + j*50 + 'px;""></div>');
		// console.log("element " + j + i + " added");
		}
	}

	//calling x amount of our function
	for (i = 0; i <30; i++){
		drawRandomObject();
	}


	// //mouse interaction
	// $('.element').mouseover(function() {
	// 	$(this).css('background-color','black');
	// });

	// $('.element').mouseout(function() {
	// 	$(this).css('background-color','yellow');
	// });

});

//create function OUTSIDE of doc.ready function
function drawRandomObject(){
	//call random value between 0 and 100 to rw and rh
	var rx = Math.floor(Math.random()*100);
	var ry = Math.floor(Math.random()*100);
	
	console.log("rx: " + rx + " ry: " + ry);

	var color = "black";
	if (ry < 50) {
		color = "red";
	}
	else if (rx < 50) {
		color = "white";
	}
	else {
		color = "blue";
	}

	$('body').append('<div class="element random" style="left:' + rx + 'vw; top:' + ry + 'vh; background-color:' + color + ';"></div>');
}