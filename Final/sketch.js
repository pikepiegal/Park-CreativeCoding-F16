var planetsData;
var planetsArray = [];

var img;

function preload() {

	planetsData = loadJSON("planets.JSON");

	img = loadImage("sun.jpg");
}

function setup () {

	createCanvas( windowWidth, windowHeight, WEBGL);

	for (var i = 0; i < planetsData.planet.length; i++) {
		var planet = new Planet(planetsData.planet[i].name, planetsData.planet[i].radius, planetsData.planet[i].axialTilt, planetsData.planet[i].orbitIncline, planetsData.planet[i].orbitPeriod, planetsData.planet[i].rotationPeriod, planetsData.planet[i].distance);
		planetsArray.push(planet);
	}

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}

function draw () {

	background(0);
	camera(0, 0, mouseX * 80);

	//pointLight(255,255,255,0,0,0);
	//directionalLight(250, 250, 250, 0, 0, 0);

	push();
		texture(img);
		rotateY(frameCount * 1.461);
		sphere(109, 24, 16);
	pop();

	// push();
	// 	translate(10000,1000,-50000);
	// 	texture(img);
	// 	rotateY(frameCount * 1.461);
	// 	sphere(500, 24, 16);
	// pop();

	for (var i = 0; i < planetsArray.length; i++) {
		push();
		planetsArray[i].animate();
		planetsArray[i].display();
		pop();
	}

}

class Planet {

	constructor (name, radius, axialTilt, orbitIncline, orbitPeriod, rotationPeriod, distance) {
		this.color = color(random(0,255),random(0,255),random(0,255));
		this.distance = 800 * parseFloat(distance);
		this.tubeRadius = parseFloat(radius) / 2000;
		this.orbitIncline = parseFloat(orbitIncline);
		this.orbitPeriod = parseFloat(orbitPeriod);
		this.name = name;
	}

	animate () {

		rotateY(frameCount * this.orbitPeriod * 0.5);

	}

	display () {
		fill(this.color)
		console.log("drawing " + this.name + "(" + this.distance + ", " + this.tubeRadius + ", " + this.orbitPeriod + ")");

		rotateX(this.orbitIncline);
		torus(this.distance, this.tubeRadius, 120, 70);
	}
}

// class Star {
// 	constructor () {
//
// 	}
//
// 	animate () {
//
// 	}
//
// 	display() {
//
// 	}
// }
