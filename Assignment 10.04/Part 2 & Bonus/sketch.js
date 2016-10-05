var rotation = 0;

function setup(){
	createCanvas(1200,600);
	background(10,10,10);
}

function draw(){
	for (var i=1; i<4; i+=1){
		push();
			translate((width/4)*i, height/2);
			rotation = map(mouseX, 0, width, 0, 2*PI);
			rotate(i*PI);
			rotate(rotation);
			rect(0,0,40,40);
		pop();
	}
}