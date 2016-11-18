var mouseIsDown = false;

var ballArray = [];
var soundArray = [];

function preload() {

	for (i=1; i < 51; i++){

		soundArray.push(loadSound("Blips/Blip_Select" + i + ".wav"));
	}
}

function setup() {

	noStroke();
	createCanvas(windowWidth, windowHeight);

	masterVolume(0.5);
}

function draw() {

	if (mouseIsPressed) {

		mouseClicked();
	}

	//to clear trailing circles
	background(255);

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
		//this.tint = tint(255, random(0,255));
		this.x = x;
		this.y = y;
		this.width = 100;
		this.height = 100;
		this.velocity = {
			x: random(-5,5),
			y: random(-5,5)
		};
	}

	animate() {

		if (this.x > windowWidth || this.x < 0) {

			this.velocity.x = -this.velocity.x;
			//change color when hitting wall
			this.color = color(random(0,255),random(0,255),random(0,255));

			//random() returns a float. cast it as an int
			var sound = soundArray[int(random(0,49))];
			sound.play();
		} 

		if (this.y > windowHeight || this.y < 0) {

			this.velocity.y = -this.velocity.y;
			//change color when hitting wall
			this.color = color(random(0,255),random(0,255),random(0,255));

			var sound = soundArray[int(random(0,49))];
			sound.play();
		}

		this.x += this.velocity.x;
		this.y += this.velocity.y;
		
	}

	display() {

		fill(this.color);
		ellipse(this.x, this.y, this.width, this.height);

	}

}