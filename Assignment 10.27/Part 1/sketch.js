var x = 0;
var y = 0;
var xspeed = 2;
var yspeed = 3;

function setup(){
	createCanvas(500,500);
	background(100);
}

function preload(){
	bounce = loadSound('ballbounce.wav');
}

function draw(){
	makeCircles();
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

function makeCircles(){
	background(255);
	for(i = 0; i < 5; i++){
		ellipse(10*i,30*i,50,50);
	}
}

function bounceSound(){
	bounce.setVolume(0.5);
	bounce.play();
}