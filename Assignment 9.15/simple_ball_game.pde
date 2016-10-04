int xPos;
int speed=1;
int xDir=-1;
int score=0;
int lives=5;
boolean lost=false;

void setup(){
  size (400,200);
  xPos=width/2;
  fill(255);
  textSize(15);
}

void draw(){
  background (0);
  ellipse(xPos, height/2, 40, 40);
  xPos=xPos+(speed*xDir);
  if (xPos > width-20 || xPos<20){
    xDir = -xDir;
  }
  text("score: " +score, width/7, height/7);
  text("lives: " +lives, width*6/7, height/7);
  if (lives<=0){
    textSize(20);
    text("Click to Restart", 125, 100);
    noLoop();
    lost=true;
    textSize(13);
  }
}

void mousePressed(){
  if (dist(mouseX, mouseY, xPos, height/2)<=20){
    score = score + speed;
    speed = speed + 1;
  }
  else{
    if (speed<1){
    speed=speed-1;
    }
    lives=lives-1;
  }
  if (lost==true){
    speed=1;
    lives=5;
    score=0;
    xPos=width/2;
    xDir=1;
    lost=false;
    loop();
  }
}