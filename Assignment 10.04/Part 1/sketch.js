function setup(){
	createCanvas(600,600);
	background(10,10,10);
}

function draw(){
	push();
		fill(125,0,0);
		translate(50,height/3);
		rotate(0.2*PI);
		rect(0,0,40,50);
	pop();
	push();
		fill(135,10,10);
		translate(100,height/3);
		rotate(-0.4*PI);
		rect(0,0,80,100);
	pop();
	push();
		fill(150,20,20);
		translate(250,height/3);
		rotate(-0.3*PI);
		rect(0,0,100,130);
	pop();
	push();
		fill(170,30,30);
		translate(400, height/3);
		rotate(0.15*PI);
		rect(50,50,130,170);
	pop();
}