//Variables Cancion
var Cancion;
var miVolumen;
var Do;
var Re;
var Mi;
var Fa;
var Sol;
var La;
var Si;
var Doo;
var son = 0;
var posXbotS1 = 45;
var posYbotS1 = 160;
var tamBotS1 = 20;
var posXbotS2 = 67;
var posYbotS2 = 160;
var tamBotS2 = 20;
var posXbotS3 = 88;
var posYbotS3 = 160;
var tamBotS3 = 20;
var posXbotS4 = 109;
var posYbotS4 = 160;
var tamBotS4 = 20;
var posXbotS5 = 130;
var posYbotS5 = 160;
var tamBotS5 = 20;
var posXbotS6 = 151;
var posYbotS6 = 160;
var tamBotS6 = 20;
var posXbotS7 = 173;
var posYbotS7 = 160;
var tamBotS7 = 20;
var posXbotS8 = 194;
var posYbotS8 = 160;
var tamBotS8 = 20;
var posXbotS9 = 215;
var posYbotS9 = 160;
var tamBotS9 = 20;

//Variables Fondos
var FondoR;
var FondoA;
var FondoM;

//Variables Notas
var not;
var Nota1;
var Nota2;
var Nota3;
var Nota4;
var Nota5;

//Variables Figuras
var fig;
var Corazón;
var Estrella;
var Burbujas;
var Piano;
var Galaxia;

//Variables Botones Fondos
var posXbotF1 = 50;
var posYbotF1 = 360;
var tamBotF1 = 20;
var posXbotF2 = 80;
var posYbotF2 = 360;
var tamBotF2 = 20;
var posXbotF3 = 110;
var posYbotF3 = 360;
var tamBotF3 = 20;

//Variables Botones Notas
var posXbotN1 = 200;
var posYbotN1 = 360;
var tamBotN1 = 20;
var posXbotN2 = 230;
var posYbotN2 = 360;
var tamBotN2 = 20;
var posXbotN3 = 260;
var posYbotN3 = 360;
var tamBotN3 = 20;
var posXbotN4 = 290;
var posYbotN4 = 360;
var tamBotN4 = 20;
var posXbotN5 = 320;
var posYbotN5 = 360;
var tamBotN5 = 20;
var posXbotN6 = 350;
var posYbotN6 = 360;
var tamBotN6 = 20;

//Variables Botones Figuras
var posXbotD1 = 450;
var posYbotD1 = 360;
var tamBotD1 = 20;
var posXbotD2 = 480;
var posYbotD2 = 360;
var tamBotD2 = 20;
var posXbotD3 = 510;
var posYbotD3 = 360;
var tamBotD3 = 20;
var posXbotD4 = 540;
var posYbotD4 = 360;
var tamBotD4 = 20;

function preload() {

  //Fondos
  FondoR = loadImage('Fondos/Rosado.png');
  FondoA = loadImage('Fondos/Azul.png');
  FondoM = loadImage('Fondos/Morado.png');

  //Notas
  Nota1 = loadImage('Notas/Nota 1.png');
  Nota2 = loadImage('Notas/Nota 2.png');
  Nota3 = loadImage('Notas/Nota 3.png');
  Nota4 = loadImage('Notas/Nota 4.png');
  Nota5 = loadImage('Notas/Nota 5.png');

  //Figuras
  Corazón = loadImage('Figuras/Corazón.png');
  Estrella = loadImage('Figuras/Estrella.png');
  Burbujas = loadImage('Figuras/Burbujas.png');
  Piano = loadImage('Figuras/Piano.png');
  Galaxia = loadImage('Figuras/Galaxia.png');

  //Cancion
  Cancion = loadSound('Cancion/Cancion.mp3');
  Do = loadSound('Cancion/Do.wav');
  Re = loadSound('Cancion/Re.wav');
  Mi = loadSound('Cancion/Mi.wav');
  Fa = loadSound('Cancion/Fa.wav');
  Sol = loadSound('Cancion/Sol.wav');
  La = loadSound('Cancion/La.wav');
  Si = loadSound('Cancion/Si.wav');
  Doo = loadSound('Cancion/Doo.wav');
}

function setup() {
  createCanvas(600, 400);
  background(FondoR,600,400);
  Cancion.play();
  
}

function draw() {
  image(Galaxia,490,10,100,100);
  image(Galaxia,10,10,40,40);
  image(Galaxia,540,290,40,40);
  
  //Volumen
  push();
  Cancion.setVolume(0.4);
  Do.setVolume(1);
  Si.setVolume(0.4);
  pop();

  //Funcion para la estrella
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

  //Texto Fondos
  fill(100);
  noStroke();
  textFont('Dancing Script');
  textSize(30);
  text("Fondos", 50, 350);

  //Botones Fondos
  image(FondoR, posXbotF1, posYbotF1, tamBotF1, tamBotF1);
  image(FondoA, posXbotF2, posYbotF2, tamBotF2, tamBotF2);
  image(FondoM, posXbotF3, posYbotF3, tamBotF3, tamBotF3);

  //Botones Fondos
  if (mouseIsPressed) {
    if (mouseX > posXbotF1 && mouseX < posXbotF1 + tamBotF1 && mouseY > posYbotF1 && mouseY < posYbotF1 + tamBotF1) {
      image(FondoR, 0, 0, 600, 450)
    }
    if (mouseX > posXbotF2 && mouseX < posXbotF2 + tamBotF2 && mouseY > posYbotF2 && mouseY < posYbotF2 + tamBotF2) {
      image(FondoA, 0, 0, 600, 450)
    }
    if (mouseX > posXbotF3 && mouseX < posXbotF3 + tamBotF3 && mouseY > posYbotF3 && mouseY < posYbotF3 + tamBotF3) {
      image(FondoM, 0, 0, 600, 450)
    }
  }

  //Texto Notas
  fill(100);
  noStroke();
  textFont('Dancing Script');
  textSize(30);
  text("Notas", 200, 350);
  textSize(15);
  text("Stop", 348, 395);

  //Botones Notas
  image(Nota1, posXbotN1, posYbotN1, tamBotN1, tamBotN1);
  image(Nota2, posXbotN2, posYbotN2, tamBotN2, tamBotN2);
  image(Nota3, posXbotN3, posYbotN3, tamBotN3, tamBotN3);
  image(Nota4, posXbotN4, posYbotN4, tamBotN4, tamBotN4);
  image(Nota5, posXbotN5, posYbotN5, tamBotN5, tamBotN5);
  noFill();
  stroke(100);
  rect(posXbotN6, posYbotN6, tamBotN6, tamBotN6);

  //Notas
  if (mouseIsPressed) {
    if (not == 1) {
      image(Nota1, mouseX, mouseY, 40, 40)
    }
    if (not == 2) {
      image(Nota2, mouseX, mouseY, 40, 40)
    }
    if (not == 3) {
      image(Nota3, mouseX, mouseY, 40, 40)
    }
    if (not == 4) {
      image(Nota4, mouseX, mouseY, 40, 40)
    }
    if (not == 5) {
      image(Nota5, mouseX, mouseY, 40, 40)
    }
    if (not == 6) {
      noFill();
      noStroke();
      ellipse(mouseX, mouseY, 1, 1)
    }
  }

  //Botones Notas
  if (mouseIsPressed) {
    if (mouseX > posXbotN1 && mouseX < posXbotN1 + tamBotN1 && mouseY > posYbotN1 && mouseY < posYbotN1 + tamBotN1) {
      not = 1
    }
    if (mouseX > posXbotN2 && mouseX < posXbotN2 + tamBotN2 && mouseY > posYbotN2 && mouseY < posYbotN2 + tamBotN2) {
      not = 2
    }
    if (mouseX > posXbotN3 && mouseX < posXbotN3 + tamBotN3 && mouseY > posYbotN3 && mouseY < posYbotN3 + tamBotN3) {
      not = 3
    }
    if (mouseX > posXbotN4 && mouseX < posXbotN4 + tamBotN4 && mouseY > posYbotN4 && mouseY < posYbotN4 + tamBotN4) {
      not = 4
    }
    if (mouseX > posXbotN5 && mouseX < posXbotN5 + tamBotN5 && mouseY > posYbotN5 && mouseY < posYbotN5 + tamBotN5) {
      not = 5
    }
    if (mouseX > posXbotN6 && mouseX < posXbotN6 + tamBotN6 && mouseY > posYbotN6 && mouseY < posYbotN6 + tamBotN6) {
      not = 6
    }
  }

  //Texto Figuras
  fill(100);
  noStroke();
  textFont('Dancing Script');
  textSize(30);
  text("Figuras", 450, 350);
  textSize(15);
  text("Stop", 538, 395);

  //Botones Figuras
  noStroke();
  fill(255, 150, 150);
  image(Corazón, posXbotD1, posYbotD1, tamBotD1, tamBotD1);
  noStroke();
  fill(80, 221, 221);
  image(Estrella, posXbotD2, posYbotD2, tamBotD2, tamBotD2);
  noStroke();
  fill(221, 74, 165);
  image(Burbujas, posXbotD3, posYbotD3, tamBotD3, tamBotD3);
  noFill();
  stroke(100);
  rect(posXbotD4, posYbotD4, tamBotD4, tamBotD4);

  //Figuras
  if (mouseIsPressed) {
    if (fig == 1) {
      image(Corazón, mouseX, mouseY, 30, 30)
    }
    if (fig == 2) {
      image(Estrella, mouseX, mouseY, 30, 30)
    }
    if (fig == 3) {
      image(Burbujas, mouseX, mouseY, 50, 50)
    }
    if (fig == 4) {
      rect(0, 0, 0, 0);
    }
  }

  //Botones Figuras
  if (mouseIsPressed) {
    if (mouseX > posXbotD1 && mouseX < posXbotD1 + tamBotD1 && mouseY > posYbotD1 && mouseY < posYbotD1 + tamBotD1) {
      fig = 1
    }
    if (mouseX > posXbotD2 && mouseX < posXbotD2 + tamBotD2 && mouseY > posYbotD2 && mouseY < posYbotD2 + tamBotD2) {
      fig = 2
    }
    if (mouseX > posXbotD3 && mouseX < posXbotD3 + tamBotD3 && mouseY > posYbotD3 && mouseY < posYbotD3 + tamBotD3) {
      fig = 3
    }
    if (mouseX > posXbotD4 && mouseX < posXbotD4 + tamBotD4 && mouseY > posYbotD4 && mouseY < posYbotD4 + tamBotD4) {
      fig = 4
    }
  }
  
  //Texto Piano
  fill(100);
  noStroke();
  textFont('Dancing Script');
  textSize(30);
  text("Tocar el Piano", 45, 70);
  textSize(15);
  text("Stop", 215, 155);
  
  //Piano
  image(Piano, 45, 80, 170, 100);
  stroke(100);
  line(45, 180, 215, 180);
  //Botones Sonidos
  noStroke();
  noFill();
  rect(posXbotS1, posYbotS1, tamBotS1, tamBotS1);
  rect(posXbotS2, posYbotS2, tamBotS2, tamBotS2);
  rect(posXbotS3, posYbotS3, tamBotS3, tamBotS3);
  rect(posXbotS4, posYbotS4, tamBotS4, tamBotS4);
  rect(posXbotS5, posYbotS5, tamBotS5, tamBotS5);
  rect(posXbotS6, posYbotS6, tamBotS6, tamBotS6);
  rect(posXbotS7, posYbotS7, tamBotS7, tamBotS7);
  rect(posXbotS8, posYbotS8, tamBotS8, tamBotS8);
  stroke(100);
  rect(posXbotS9, posYbotS9, tamBotS9, tamBotS9);


  //Sonidos
  if (mouseIsPressed == true) {
    if (son == 1) {
      if (Do.isPlaying() == false) {
        Do.play();
      }
    }
  }
  if (mouseIsPressed == true) {
    if (son == 2) {
      if (Re.isPlaying() == false) {
        Re.play();
      }
    }
  }
  if (mouseIsPressed == true) {
    if (son == 3) {
      if (Mi.isPlaying() == false) {
        Mi.play();
      }
    }
  }
  if (mouseIsPressed == true) {
    if (son == 4) {
      if (Fa.isPlaying() == false) {
        Fa.play();
      }
    }
  }
  if (mouseIsPressed == true) {
    if (son == 5) {
      if (Sol.isPlaying() == false) {
        Sol.play();
      }
    }
  }
  if (mouseIsPressed == true) {
    if (son == 6) {
      if (La.isPlaying() == false) {
        La.play();
      }
    }
  }
  if (mouseIsPressed == true) {
    if (son == 7) {
      if (Si.isPlaying() == false) {
        Si.play();
      }
    }
  }
  if (mouseIsPressed == true) {
    if (son == 8) {
      if (Doo.isPlaying() == false) {
        Doo.play();
      }
    }
  }
  if (mouseIsPressed == true) {
    if (son == 9) {
      Do.stop();
      Re.stop();
      Mi.stop();
      Fa.stop();
      Sol.stop();
      La.stop();
      Si.stop();
      Doo.stop();
    }
  }

  //Botones Sonidos
  if (mouseIsPressed) {
    if (mouseX > posXbotS1 && mouseX < posXbotS1 + tamBotS1 && mouseY > posYbotS1 && mouseY < posYbotS1 + tamBotS1) {
      son = 1
    }
    if (mouseX > posXbotS2 && mouseX < posXbotS2 + tamBotS2 && mouseY > posYbotS2 && mouseY < posYbotS2 + tamBotS2) {
      son = 2
    }
    if (mouseX > posXbotS3 && mouseX < posXbotS3 + tamBotS3 && mouseY > posYbotS3 && mouseY < posYbotS3 + tamBotS3) {
      son = 3
    }
    if (mouseX > posXbotS4 && mouseX < posXbotS4 + tamBotS4 && mouseY > posYbotS4 && mouseY < posYbotS4 + tamBotS4) {
      son = 4
    }
    if (mouseX > posXbotS5 && mouseX < posXbotS5 + tamBotS5 && mouseY > posYbotS5 && mouseY < posYbotS5 + tamBotS5) {
      son = 5
    }
    if (mouseX > posXbotS6 && mouseX < posXbotS6 + tamBotS6 && mouseY > posYbotS6 && mouseY < posYbotS6 + tamBotS6) {
      son = 6
    }
    if (mouseX > posXbotS7 && mouseX < posXbotS7 + tamBotS7 && mouseY > posYbotS7 && mouseY < posYbotS7 + tamBotS7) {
      son = 7
    }
    if (mouseX > posXbotS8 && mouseX < posXbotS8 + tamBotS8 && mouseY > posYbotS8 && mouseY < posYbotS8 + tamBotS8) {
      son = 8
    }
    if (mouseX > posXbotS9 && mouseX < posXbotS9 + tamBotS9 && mouseY > posYbotS9 && mouseY < posYbotS9 + tamBotS9) {
      son = 9
    }
  }
}