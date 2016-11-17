var mouseIsDown = false;

var ballArray = [];

function setup(){

	noStroke();
	createCanvas(windowWidth, windowHeight);

	// ballArray[0] = new Ball(200,400);
	// ballArray[1] = new Ball(300,150);
	// ballArray[2] = new Ball(150,200);

}

function draw() {

	if (mouseIsPressed) {
		mouseClicked();
	}

	//to clear trailing circles
	//background(255);

	for(var i = 0; i < ballArray.length; i++){
		ballArray[i].animate();
		ballArray[i].display();
	}

}

function mouseClicked() {

	var tempBall = new Ball(mouseX, mouseY);
	ballArray.push(tempBall);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Ball {
	constructor(x, y) {
		this.color = color(random(0,255),random(0,255),random(0,255));
		this.x = x;
		this.y = y;
		this.width = 10;
		this.height = 10;
		this.velocity = {
			x: random(-5,5),
			y: random(-5,5)
		};
	}

	animate() {
		if (this.x > windowWidth || this.x < 0) {
			this.velocity.x = -this.velocity.x;
		} 

		if (this.y > windowHeight || this.y < 0) {
			this.velocity.y = -this.velocity.y;
		}

		this.x += this.velocity.x;
		this.y += this.velocity.y;
		
	}

	display() {
		fill(this.color);
		ellipse(this.x, this.y, this.width, this.height);
	}
}