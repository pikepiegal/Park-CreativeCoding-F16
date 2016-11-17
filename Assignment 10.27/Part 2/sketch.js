var ballArray = [];

function setup(){

	createCanvas(500,500);

	ballArray[0] = new Ball(width/20,height);
	ballArray[1] = new Ball(width*2/20,height*19/20);
	ballArray[2] = new Ball(width*3/20,height*18/20);
	ballArray[3] = new Ball(width*4/20,height*17/20);
	ballArray[4] = new Ball(width*5/20,height*16/20);
	ballArray[5] = new Ball(width*6/20,height*15/20);
	ballArray[6] = new Ball(width*7/20,height*14/20);
	ballArray[7] = new Ball(width*8/20,height*13/20);
	ballArray[8] = new Ball(width*9/20,height*12/20);
	ballArray[9] = new Ball(width*10/20,height*11/20);
	ballArray[10] = new Ball(width*11/20,height*10/20);
	ballArray[11] = new Ball(width*12/20,height*9/20);
	ballArray[12] = new Ball(width*13/20,height*8/20);
	ballArray[13] = new Ball(width*14/20,height*7/20);
	ballArray[14] = new Ball(width*15/20,height*6/20);
	ballArray[15] = new Ball(width*16/20,height*5/20);
	ballArray[16] = new Ball(width*17/20,height*4/20);
	ballArray[17] = new Ball(width*18/20,height*3/20);
	ballArray[18] = new Ball(width*19/20,height*2/20);
	ballArray[19] = new Ball(width,height/20);

}

function draw() {

	for(var i = 0; i < ballArray.length; i++){
		ballArray[i].animate();
		ballArray[i].display();
	}
}

class Ball {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 20;
		this.height = 20;
		this.velocity = {
			x: 5,
			y: 5
		};
	}

	animate() {
		if (this.x > 500 || this.x < 0) {
			this.velocity.x = -this.velocity.x;
		} 

		if (this.y > 500 || this.y < 0) {
			this.velocity.y = -this.velocity.y;
		}

		this.x += this.velocity.x;
		this.y += this.velocity.y;
		
	}

	display() {
		ellipse(this.x, this.y, this.width, this.height);
	}
}