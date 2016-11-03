var x = 0;
var y = 0;
var xspeed = 2;
var yspeed = 3;

function setup(){
	createCanvas(500,500);
	background(25);
}

function preload(){
	bounce = loadSound('ballbounce.wav');
}

function draw(){
	makeCircle();
	x = x + xspeed;

	if(x > 500 || x < 0){
		xspeed = -xspeed;
		bounceSound();
	}

	y = y + yspeed;

	if(y > 500 || y < 0){
		yspeed = -yspeed;
		bounceSound();
	}
}

function makeCircle(){
	background(255);
	ellipse(x,y,75,75);
}

function bounceSound(){
	bounce.setVolume(0.5);
	bounce.play();
}