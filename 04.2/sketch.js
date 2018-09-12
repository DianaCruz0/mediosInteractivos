//Variables Herramientas
var posXbot1 = 50;
var posYbot1 = 20;
var tamBot1 = 20;
var posXbot2 = 80;
var posYbot2 = 20;
var tamBot2 = 20;
var posXbot3 = 110;
var posYbot3 = 20;
var tamBot3 = 20;
var posXbot4 = 140;
var posYbot4 = 20;
var tamBot4 = 20;
var posXbot5 = 170;
var posYbot5 = 20;
var tamBot5 = 20;
var posXbot6 = 200;
var posYbot6 = 20;
var tamBot6 = 20;
var posXbot7 = 230;
var posYbot7 = 20;
var tamBot7 = 20;
var posXbot8 = 260;
var posYbot8 = 20;
var tamBot8 = 20;
var posXbot9 = 290;
var posYbot9 = 20;
var tamBot9 = 20;
var posXbot10 = 320;
var posYbot10 = 20;
var tamBot10 = 20;

//Variables Colores
var posXbotC1 = 50;
var posYbotC1 = 360;
var tamBotC1 = 20;
var posXbotC2 = 80;
var posYbotC2 = 360;
var tamBotC2 = 20;
var posXbotC3 = 110;
var posYbotC3 = 360;
var tamBotC3 = 20;
var posXbotC4 = 140;
var posYbotC4 = 360;
var tamBotC4 = 20;
var posXbotC5 = 170;
var posYbotC5 = 360;
var tamBotC5 = 20;
var posXbotC6 = 200;
var posYbotC6 = 360;
var tamBotC6 = 20;
var posXbotC7 = 230;
var posYbotC7 = 360;
var tamBotC7 = 20;
var posXbotC8 = 260;
var posYbotC8 = 360;
var tamBotC8 = 20;
var posXbotC9 = 290;
var posYbotC9 = 360;
var tamBotC9 = 20;
var posXbotC10 = 320;
var posYbotC10 = 360;
var tamBotC10 = 20;
var posXbotC11 = 350;
var posYbotC11 = 360;
var tamBotC11 = 20;

var her = 0
var col = 0

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  
  //Funcion para la estrella
  function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  } 
    
  //Botones Para Herramientas
  rect(posXbot1, posYbot1, tamBot1, tamBot1);
  rect(posXbot2, posYbot2, tamBot2, tamBot2);
  rect(posXbot3, posYbot3, tamBot3, tamBot3);
  rect(posXbot4, posYbot4, tamBot4, tamBot4);
  rect(posXbot5, posYbot5, tamBot5, tamBot5);
  rect(posXbot6, posYbot6, tamBot6, tamBot6);
  rect(posXbot7, posYbot7, tamBot7, tamBot7);
  rect(posXbot8, posYbot8, tamBot8, tamBot8);
  rect(posXbot9, posYbot9, tamBot9, tamBot9);
  rect(posXbot10, posYbot10, tamBot10, tamBot10);
  
  //Botones Para Colores
  push();
  noStroke();
  fill(80, 221, 221);
  rect(posXbotC1, posYbotC1, tamBotC1, tamBotC1);
  fill(255, 150, 150);
  rect(posXbotC2, posYbotC2, tamBotC2, tamBotC2);
  fill(221, 74, 165);
  rect(posXbotC3, posYbotC3, tamBotC3, tamBotC3);
  fill(77, 232, 106);
  rect(posXbotC4, posYbotC4, tamBotC4, tamBotC4);
  fill(244, 244, 96);
  rect(posXbotC5, posYbotC5, tamBotC5, tamBotC5);
  fill(247, 167, 78);
  rect(posXbotC6, posYbotC6, tamBotC6, tamBotC6);
  fill(247, 94, 94);
  rect(posXbotC7, posYbotC7, tamBotC7, tamBotC7);
  fill(115, 112, 242);
  rect(posXbotC8, posYbotC8, tamBotC8, tamBotC8);
  fill(210, 255, 123);
  rect(posXbotC9, posYbotC9, tamBotC9, tamBotC9);
  fill(162, 252, 222);
  rect(posXbotC10, posYbotC10, tamBotC10, tamBotC10);
  fill(255);
  rect(posXbotC11, posYbotC11, tamBotC11, tamBotC11);
  pop();

  if (mouseIsPressed) {

    //Herramientas
    if (her == 1) {
      ellipse(mouseX, mouseY, 20, 20);
      ellipse(mouseX + 10, mouseY, 20, 20);
      ellipse(mouseX, mouseY + 10, 20, 20);
      ellipse(mouseX + 10, mouseY + 10, 20, 20);
    }
    if (her == 2) {
      line(width / 2, height / 2, mouseX, mouseY);
      ellipse(width/2, height/2, 20,20);
      ellipse(mouseX, mouseY, 20, 20);
    }
    if (her == 3) {
      ellipse(mouseX, mouseY, 10,10);
      line(mouseX + 10, mouseY + 10, mouseX + 10, mouseY - 10);
      line(mouseX + 10, mouseY + 10, mouseX - 10, mouseY + 10);
      
    }
    if (her == 4) {
      ellipse(mouseX, mouseY, 20, 20);
      ellipse(mouseX+15, mouseY,20,20);
      triangle(mouseX-11, mouseY+2, mouseX+26, mouseY+2, mouseX+7, mouseY+25);
    }
    if (her == 5) {
      star(mouseX, mouseY, 10, 25, 5);
  
    }
    if (her == 6) {
      rect(mouseX,mouseY,20,20);
      rect(mouseX+10,mouseY+10,20,20);
      rect(mouseX-10,mouseY-10,20,20);
    }
    if (her == 7) {
      triangle(mouseX-11, mouseY+2, mouseX+26, mouseY+2, mouseX+7, mouseY+25);
      triangle(mouseX-11, mouseY+2, mouseX+26, mouseY+2, mouseX+7, mouseY-25);
    }
    if (her == 8) {
      ellipse(mouseX, mouseY, 20, 20);
      ellipse(mouseX + 10, mouseY + 10, 20, 20);
      ellipse(mouseX + 20, mouseY + 20, 20, 20);
      ellipse(mouseX + 30, mouseY + 30, 20, 20);
      ellipse(mouseX + 40, mouseY + 40, 20, 20);
    }
    if (her == 9) {
      line(mouseX + 10, mouseY + 10, mouseX - 10, mouseY - 10);
      line(mouseX + 10, mouseY + 10, mouseX + 10, mouseY - 10);
    }
    if (her == 10) {
      triangle(mouseX-11, mouseY+2, mouseX+26, mouseY+2, mouseX+7, mouseY-25);
      triangle(mouseX+5, mouseY-1, mouseX-20, mouseY-1, mouseX-1, mouseY+20);
      
    }

    //Botones Herramienta
    if (mouseX > posXbot1 && mouseX < posXbot1 + tamBot1 && mouseY > posYbot1 && mouseY < posYbot1 + tamBot1) {
      her = 1
    }
    if (mouseX > posXbot2 && mouseX < posXbot2 + tamBot2 && mouseY > posYbot2 && mouseY < posYbot2 + tamBot2) {
      her = 2
    }
    if (mouseX > posXbot3 && mouseX < posXbot3 + tamBot3 && mouseY > posYbot3 && mouseY < posYbot3 + tamBot3) {
      her = 3
    }
    if (mouseX > posXbot4 && mouseX < posXbot4 + tamBot4 && mouseY > posYbot4 && mouseY < posYbot4 + tamBot4) {
      her = 4
    }
    if (mouseX > posXbot5 && mouseX < posXbot5 + tamBot5 && mouseY > posYbot5 && mouseY < posYbot5 + tamBot5) {
      her = 5
    }
    if (mouseX > posXbot6 && mouseX < posXbot6 + tamBot6 && mouseY > posYbot6 && mouseY < posYbot6 + tamBot6) {
      her = 6
    }
    if (mouseX > posXbot7 && mouseX < posXbot7 + tamBot7 && mouseY > posYbot7 && mouseY < posYbot7 + tamBot7) {
      her = 7
    }
    if (mouseX > posXbot8 && mouseX < posXbot8 + tamBot8 && mouseY > posYbot8 && mouseY < posYbot8 + tamBot8) {
      her = 8
    }
    if (mouseX > posXbot9 && mouseX < posXbot9 + tamBot9 && mouseY > posYbot9 && mouseY < posYbot9 + tamBot9) {
      her = 9
    }
    if (mouseX > posXbot10 && mouseX < posXbot10 + tamBot10 && mouseY > posYbot10 && mouseY < posYbot10 + tamBot10) {
      her = 10
    }

    //Colores
    if (col == 1) {
      fill(80, 221, 221);
      stroke(80, 221, 221);
    }
    if (col == 2) {
      fill(255, 150, 150);
      stroke(255, 150, 150);
    }
    if (col == 3) {
      fill(221, 74, 165);
      stroke(221, 74, 165);
    }
    if (col == 4) {
      fill(77, 232, 106);
      stroke(77, 232, 106);
    }
    if (col == 5) {
      fill(244, 244, 96);
      stroke(244, 244, 96);
    }
    if (col == 6) {
      fill(247, 167, 78);
      stroke(247, 167, 78);
    }
    if (col == 7) {
      fill(247, 94, 94);
      stroke(247, 94, 94);
    }
    if (col == 8) {
      fill(115, 112, 242);
      stroke(115, 112, 242);
    }
    if (col == 9) {
      fill(210, 255, 123);
      stroke(210, 255, 123);
    }
    if (col == 10) {
      fill(162, 252, 222);
      stroke(162, 252, 222);
    }
    //Botones Color
    if (mouseX > posXbotC1 && mouseX < posXbotC1 + tamBotC1 && mouseY > posYbotC1 && mouseY < posYbotC1 + tamBotC1) {
      fill(80, 221, 221);
      col = 1;
    }
    if (mouseX > posXbotC2 && mouseX < posXbotC2 + tamBotC2 && mouseY > posYbotC2 && mouseY < posYbotC2 + tamBotC2) {
      fill(255, 150, 150);
      col = 2;
    }
    if (mouseX > posXbotC3 && mouseX < posXbotC3 + tamBotC3 && mouseY > posYbotC3 && mouseY < posYbotC3 + tamBotC3) {
      fill(221, 74, 165);
      col = 3;
    }
    if (mouseX > posXbotC4 && mouseX < posXbotC4 + tamBotC4 && mouseY > posYbotC4 && mouseY < posYbotC4 + tamBotC4) {
      fill(77, 232, 106);
      col = 4;
    }
    if (mouseX > posXbotC5 && mouseX < posXbotC5 + tamBotC5 && mouseY > posYbotC5 && mouseY < posYbotC5 + tamBotC5) {
      fill(244, 244, 96);
      col = 5;
    }
    if (mouseX > posXbotC6 && mouseX < posXbotC6 + tamBotC6 && mouseY > posYbotC6 && mouseY < posYbotC6 + tamBotC6) {
      fill(247, 167, 78);
      col = 6;
    }
    if (mouseX > posXbotC7 && mouseX < posXbotC7 + tamBotC7 && mouseY > posYbotC7 && mouseY < posYbotC7 + tamBotC7) {
      fill(247, 94, 94);
      col = 7;
    }
    if (mouseX > posXbotC8 && mouseX < posXbotC8 + tamBotC8 && mouseY > posYbotC8 && mouseY < posYbotC8 + tamBotC8) {
      fill(115, 112, 242);
      col = 8;
    }
    if (mouseX > posXbotC9 && mouseX < posXbotC9 + tamBotC9 && mouseY > posYbotC9 && mouseY < posYbotC9 + tamBotC9) {
      fill(210, 255, 123);
      col = 9;
    }
    if (mouseX > posXbotC10 && mouseX < posXbotC10 + tamBotC10 && mouseY > posYbotC10 && mouseY < posYbotC10 + tamBotC10) {
      fill(162, 252, 222);
      col = 10;
    }
    if (mouseX > posXbotC11 && mouseX < posXbotC11 + tamBotC11 && mouseY > posYbotC11 && mouseY < posYbotC11 + tamBotC11) {
      background(255);
    }
  }
}