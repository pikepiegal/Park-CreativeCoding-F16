var vibes = 0;

var offset = 40;
var padding = 20;
var r = 20;

function setup(){
  createCanvas(1260,695);
}

function draw(){
  partyHard();
  while(vibes > 67){
    vibes = vibes - 68;
  }

  switch(vibes){
    case 0:
      background(0)
      for (var i = 0; i < 31; i+=1) {
        for (var j = 16; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255);
        }
      }
      break;
    case 1:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 15; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 2:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 3:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 4:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 5:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 6:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 7:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 8:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 9:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 10:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 4; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 11:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 4; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 12:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255,0,255    );
        }
      }
      break; 
    case 13:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255,0,255);
        }
      }
      break; 
    case 14:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255,0,255);
        }
      }
      break; 
    case 15:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255,0,255);
        }
      }
      break; 
    case 16:
      background(255);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255,0,255);
        }
      }
      break; 
    case 17:
      background(0)
      for (var i = 0; i < 31; i+=1) {
        for (var j = 16; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255);
        }
      }
      break;
    case 18:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 15; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 19:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 20:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 21:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 22:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 23:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 24:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 25:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 26:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 27:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 4; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 28:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 4; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 29:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(211,255,0);
        }
      }
      break; 
    case 30:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(211,255,0);
        }
      }
      break; 
    case 31:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(211,255,0);
        }
      }
      break; 
    case 32:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(211,255,0);
        }
      }
      break; 
    case 33:
      background(255);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(211,255,0);
        }
      }
      break; 
    case 34:
      background(0)
      for (var i = 0; i < 31; i+=1) {
        for (var j = 16; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255);
        }
      }
      break;
    case 35:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 15; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 36:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 37:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 38:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 39:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 40:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 41:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 42:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 43:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 44:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 4; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 45:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=2) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 4; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=4) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 46:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255,19,0);
        }
      }
      break; 
    case 47:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255,19,0);
        }
      }
      break; 
    case 48:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255,19,0);
        }
      }
      break; 
    case 49:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255,19,0);
        }
      }
      break; 
    case 50:
      background(255);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255,19,0);
        }
      }
      break; 
    case 51:
      background(0)
      for (var i = 0; i < 31; i+=1) {
        for (var j = 16; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(255);
        }
      }
      break;
    case 52:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 15; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 53:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 54:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 55:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 56:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 57:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 58:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break;
    case 59:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 60:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
        case 61:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 4; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 62:
      background(0);
      for (var i = 0; i < 31; i+=1) {
        for (var j = 14; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 13; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 12; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 11; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 10; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 9; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=3) {
        for (var j = 8; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 7; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 6; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 5; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 4; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      for (var i = 0; i < 31; i+=6) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
        }
      }
      break; 
    case 63:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(0,255,4);
        }
      }
      break; 
    case 64:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(0,255,4);
        }
      }
      break; 
    case 65:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(0,255,4);
        }
      }
      break; 
    case 66:
      background(0);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(0,255,4);
        }
      }
      break; 
    case 67:
      background(255);
      for (var i = 0; i < 35; i+=1) {
        for (var j = 0; j < 17; j+=1){
          rect((i * offset) + padding, (j * offset) + padding, r, r);
          fill(0,255,4);
        }
      }
      break; 
  }
}

function partyHard(){
  if(keyIsPressed){
    vibes+=0.5
  }
}