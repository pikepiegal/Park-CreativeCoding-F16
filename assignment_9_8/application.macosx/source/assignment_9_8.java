import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class assignment_9_8 extends PApplet {
  public void setup() {


//outline
line(100,150,137.5f,100);
line(137.5f,100,275,100);
line(275,100,325,150);
line(325,150,325,375);
line(325,375,275,425);
line(275,425,150,425);
line(150,425,100,375);
line(100,375,100,150);

//hairline
line(100,237.5f,137.5f,187.5f);
line(137.5f,187.5f,287.5f,187.5f);
line(287.5f,187.5f,325,150);

//glasses
rect(125,275,62.5f,50);
rect(237.5f,275,62.5f,50);
line(187.5f,275,237.5f,275);

//nose
line(225,300,225,350);
line(225,350,214,350);

//mouth
line(250,387.5f,187.5f,387.5f);
line(187.5f,387.5f,175,375);

//eyebrows
line(187.5f,250,137.5f,250);
line(137.5f,250,112.5f,275);
line(112.5f,275,137.5f,262.5f);
line(137.5f,262.5f,187.5f,262.5f);
line(187.5f,262.5f,187.5f,250);

line(237.5f,250,287.5f,250);
line(287.5f,250,312.5f,275);
line(312.5f,275,287.5f,262.5f);
line(287.5f,262.5f,237.5f,262.5f);
line(237.5f,262.5f,237.5f,250);
    noLoop();
  }

  public void settings() { size(425,500); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "assignment_9_8" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
