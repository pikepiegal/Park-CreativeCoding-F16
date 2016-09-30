var offset = 2.5;
var spacing = 10;

function setup(){
  createCanvas(1200,600);
  background(125);
}

function draw(){
  for (var i = 0; i < 10; i+=1) {
  	for (var j = 10; j < 38; j+=1){
      line(i, j*spacing, width/4-offset*j, j*spacing);
      line(width/4-offset*j, j*spacing, width/3, height/8 + j*spacing);
      line(width/3, height/8 + j*spacing, width*3/5, j*spacing - height/7);
      line(width*3/5, j*spacing - height/7, width*4/5-offset*j, j*spacing);
      line(width*4/5-offset*j, j*spacing, width, j*spacing);
  	}
  }
}