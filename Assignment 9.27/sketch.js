function setup(){
  createCanvas(600,500);
}

function draw(){
  line(width/2,0,width/2,height);
  line(0,height/3,width/2,height/3);
  line(width*5/6,0,width*5/6,height);
}

function mouseMoved(){
  if(mouseX < width/2 && mouseX > 0 &&
  mouseY < height/3 && mouseY > 0){
    fill(255,0,0);
    rect(0,0,width/2,height/3);
  }
  else{
    fill(255,255,255);
    rect(0,0,width/2,height/3);
  }
  if(mouseX < width/2 && mouseX > 0 &&
  mouseY < height && mouseY > height/3){
    fill(0,255,0);
    rect(0,height/3,width/2,height*2/3);
  }
  else{
    fill(255,255,255);
    rect(0,height/3,width/2,height*2/3);
  }
  if(mouseX < width*5/6 && mouseX > width/2 &&
  mouseY > 0 && mouseY < height){
    fill(0,0,255);
    rect(width/2,0,width*1/3,height);
  }
  else{
    fill(255,255,255);
    rect(width/2,0,width*1/3,height);
  }
  if(mouseX < width && mouseX > width*5/6 &&
  mouseY > 0 && mouseY < height){
    fill(255,0,255);
    rect(width*5/6,0,width/6,height);
  }
  else{
    fill(255,255,255);
    rect(width*5/6,0,width/6,height);
  }
}