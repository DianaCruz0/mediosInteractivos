var x, y, z;

function setup() {
  createCanvas(400,400);
 frameRate(40);
  x = width / 2
  y = height;
  z = width;
}

function draw() {
  //Fondo
  var rec = 1;
  for (var posy = 0; posy < height; posy = posy + rec) {
    noStroke();
    fill(40, 0, posy-100);
    rect(0, posy, width, rec);
  }

  //Cohete-Luna
  fill(225);
  ellipse(200*width/400, 400*height/400, 400*width/400, 400*height/400);
  fill(170, 170, 170);
  ellipse(100*width/400, 300*height/400, 35*width/400, 35*height/400);
  ellipse(220*width/400, 260*height/400, 30*width/400, 30*height/400);
  ellipse(300*width/400, 340*height/400, 45*width/400, 45*height/400);
  ellipse(50*width/400, 400*height/400, 55*width/400, 55*height/400);
  ellipse(190*width/400, 380*height/400, 25*width/400, 25*height/400);
  ellipse(340*width/400, 270*height/400, 15*width/400, 15*height/400);
  ellipse(390*width/400, 390*height/400, 35*width/400, 35*height/400);
  ellipse(150*width/400, 220*height/400, 20*width/400, 20*height/400);
  fill(96, 92, 88);
  ellipse(100*width/400, 300*height/400, 30*width/400, 30*height/400);
  ellipse(220*width/400, 260*height/400, 25*width/400, 25*height/400);
  ellipse(300*width/400, 340*height/400, 40*width/400, 40*height/400);
  ellipse(50*width/400, 400*height/400, 50*width/400, 50*height/400);
  ellipse(190*width/400, 380*height/400, 20*width/400, 20*height/400);
  ellipse(340*width/400, 270*height/400, 10*width/400, 10*height/400);
  ellipse(390*width/400, 390*height/400, 30*width/400, 30*height/400);
  ellipse(150*width/400, 220*height/400, 15*width/400, 15*height/400);
  noStroke();
  fill(221, 23, 23);
  arc(199*width/400, (y + 40)*height/400, 20*width/400, 40*height/400, PI, 25);
  fill(249, 129, 30);
  arc(199*width/400, (y + 40)*height/400, 10*width/400, 30*height/400, PI, 25);
  fill(221, 23, 23);
  arc(199*width/400, (y + 40)*height/400, 5*width/400, 20*height/400, PI, 25);
  fill(229, 220, 48);
  triangle(180*width/400, (y + 20)*height/400, 220*width/400, (y + 20)*height/400, 200*width/400, (y - 20)*height/400);
  triangle(185*width/400, y*height/400, 215*width/400, y*height/400, 200*width/400, (y - 30)*height/400);
  rect(187*width/400, (y + 30)*height/400, 24*width/400, 10*height/400);
  fill(29, 29, 147);
  rect(186*width/400, y*height/400, 27*width/400, 30*height/400);
  fill(225);
  ellipse(200*width/400, (y + 15)*height/400, 18*width/400, 18*height/400);
  y = y - 4;
  //if (y < 0) {
    //y = height;
  
  fill(239,47,15,200);
  ellipse(z*width/400, (z - 150)*height/400, 40*width/400, 40*height/400);
  fill(234,95,17,200);
  ellipse(z*width/400, (z - 150)*height/400, 32*width/400, 32*height/400);
  fill(58, 45, 16);
  ellipse(z*width/400, (z - 150)*height/400, 24*width/400, 24*height/400);
  fill(102, 85, 47);
  ellipse(z*width/400, (z - 140)*height/400, 5*width/400, 5*height/400);
  fill(102, 85, 47);
  ellipse((z - 5)*width/400, (z - 155)*height/400, 7*width/400, 7*height/400);
  fill(102, 85, 47);
  ellipse((z + 6)*width/400, (z - 149)*height/400, 8*width/400, 8*height/400);
  fill(102, 85, 47);
  ellipse((z + 5)*width/400, (z - 157)*height/400, 3*width/400, 3*height/400);
  z = z - 4;
  //if (z < 0) {
    //z = width;
  


  if (frameCount <= 570) {
    if (frameCount % 2 == 0) {
    //saveCanvas("Miflipbook" + frameCount, 'jpg');
    }
  }
  //print(frameCount);
}