var x, y, z;

function setup() {
  createCanvas(400, 400);
  x = width / 2
  y = height;
  z = width;
}

function draw() {
  background(200);
  //Fondo
  var rec = 1;
  for (var posy = 0; posy < height; posy = posy + rec) {
    noStroke();
    fill(posy, 0, posy);
    rect(0, posy, width, rec);
  }

  //Cohete-Luna
  fill(225);
  ellipse(200, 400, 400, 400);
  fill(170, 170, 170);
  ellipse(100, 300, 35, 35);
  ellipse(220, 260, 30, 30);
  ellipse(300, 340, 45, 45);
  ellipse(50, 400, 55, 55);
  ellipse(190, 380, 25, 25);
  ellipse(340, 270, 15, 15);
  ellipse(390, 390, 35, 35);
  ellipse(150, 220, 20, 20);
  fill(96, 92, 88);
  ellipse(100, 300, 30, 30);
  ellipse(220, 260, 25, 25);
  ellipse(300, 340, 40, 40);
  ellipse(50, 400, 50, 50);
  ellipse(190, 380, 20, 20);
  ellipse(340, 270, 10, 10);
  ellipse(390, 390, 30, 30);
  ellipse(150, 220, 15, 15);
  noStroke();
  fill(221, 23, 23);
  arc(199, y + 40, 20, 40, PI, 25);
  fill(249, 129, 30);
  arc(199, y + 40, 10, 30, PI, 25);
  fill(221, 23, 23);
  arc(199, y + 40, 5, 20, PI, 25);
  fill(229, 220, 48);
  triangle(180, y + 20, 220, y + 20, 200, y - 20);
  triangle(185, y, 215, y, 200, y - 30);
  rect(187, y + 30, 24, 10);
  fill(29, 29, 147);
  rect(186, y, 27, 30);
  fill(225);
  ellipse(200, y + 15, 18, 18);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  fill(58, 45, 16);
  ellipse(z, z - 150, 24, 24);
  fill(102, 85, 47);
  ellipse(z, z - 140, 5, 5);
  fill(102, 85, 47);
  ellipse(z - 5, z - 155, 7, 7);
  fill(102, 85, 47);
  ellipse(z + 6, z - 149, 8, 8);
  fill(102, 85, 47);
  ellipse(z + 5, z - 157, 3, 3);
  z = z - 3;
  if (z < 0) {
    z = width;
  }
  push();
  fill(279, 279, 138);
  translate(width * 0.2, height * 0.5);
  rotate(frameCount / 200.0);
  star(0, 0, 3, 20, 3);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);


}