var vertexArrayX = [0,];
var vertexArrayY = [windowHeight/8,];

function setup() {

	createCanvas(windowWidth, windowHeight);
}

function draw() {

}

class StellarLines{ 

	constructor() {

	}

	display() {

		beginShape(LINES);
		for (var i = 1; i < 7; i++) {
			vertex(vertexArrayX[i], vertexArrayY[i]);
		}
		endShape(); 

	}

}
