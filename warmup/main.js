var x = 0;
var total = 0;
var lastSecond = 0;
function setup() {
	createCanvas(640, 480);
}

function draw() {
	background(204);
	x = x + 0.1;
	if (x > width) {
		x = 0;
	}
	line(x, 0, x, height);  
	var s = second();
	if(s - lastSecond >= 1) {
		total++;
		lastSecond = s;
	}
	text("Current second: \n" + total, 5, 50);
}

function doAction() {
		
}