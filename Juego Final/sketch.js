var boton1x = 200;
var boton1x = 200;
var boton1tam = 100;

var colorselect = 0;

var estado = 0;

var INTRO = 1;
var NIVEL1 = 2;
var NIVEL2 = 3;
var NIVEL3 = 4;
var GANAR = 5;
var PERDER = 6;

var elRatón;

var misiles = [];
var numMisiles = 0;

var miDepredador1 = [];
var numDepredador1 = 10;

var miDepredador2 = [];
var numDepredador2 = 10;

var puntaje = 0;

function preload() {
  miFondo = loadImage("assets/Fondo.jpg");
  Perder = loadImage("assets/Perder.jpg");
  Ganar = loadImage("assets/Ganar.jpg");
  Tap = loadImage("assets/Tap.gif");
}

function setup() {

  estado = INTRO;
  createCanvas(windowWidth, windowHeight);

  //Ratón
  elRatón = new Ratón();

  //Halcón
  for (var a = 0; a < numDepredador1; a = a + 1) {
    miDepredador1[a] = new depredador1();
  }

  //zorros
  for (var c = 0; c < numDepredador2; c = c + 1) {
    miDepredador2[c] = new depredador2();
  }
}

function draw() {

  print(elRatón.viva);
  if (estado == INTRO) {
    background(255);
    image(Tap,windowWidth/2-130,windowHeight/2,300,300);
    fill('black');
    textAlign(CENTER);
    textSize(10);
    text("TOCA PARA INICIAR",windowHeight/2-70, windowWidth/2-30);
    text("NIVEL 1: Mueve el dispositivo para que los Halcónes no se coman al Ratón, debes sobrevivir un tiempo para ganar",windowHeight/2-70, windowWidth/2);
    text("NIVEL 2: Mueve al ratón para lanzar balas que desaparezcan a los depredadores, ganarás cuando tengas 10 puntos",windowHeight/2-70, windowWidth/2+30);
    text("NIVEL 3: Habrá más depredadores,desaparecelos a todos, ganarás cuando tengas 40 puntos",windowHeight/2-70, windowWidth/2+60);
    text("Compite con tus amigos, el que logre pasar los 3 niveles más rápido será el ganador",windowHeight/2-70, windowWidth/2+90);
  } else if (estado == NIVEL1) {
    push();
    var tiempoActual = millis();
    if (millis() > 20000) {
      estado = NIVEL2;
      elRatón.viva = true;
      puntaje = 0;
      tiempoActual = 0;
    }

    background(miFondo);
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("NIVEL 1", 100,20);

    fill(255);
    textAlign(CENTER);
    textSize(15);
    text("Mueve el dispositivo para que los Halcónes no se coman al Ratón",280,40);

    fill(255);
    textSize(20);
    noStroke();
    text("X: " + floor(rotationY), 30, 20);
    text("Y: " + floor(rotationX), 30, 40);

    //Halcón
    for (var a = 0; a < numDepredador1; a = a + 1) {
      miDepredador1[a].dibujarse();
      miDepredador1[a].moverse();

      //Ratón
      for (var f = 0; f < numDepredador1; f = f + 1) {
        var distCentro = dist(miDepredador1[f].x, miDepredador1[f].y, elRatón.x, elRatón.y);
        if (distCentro < miDepredador1[f].tamañoX / 2) {
          elRatón.morir();
        }
      }
    }

    if (elRatón.viva == true) {
      elRatón.mostrar();
      elRatón.mover();
    }

    if (elRatón.viva == false && tiempoActual > 5000) {
      estado = PERDER;
    }
    pop();

  } else if (estado == NIVEL2) {

    push();
    var tiempoActual = 0;
    background(miFondo);
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("NIVEL 2",100,20);
    textAlign(CENTER);
    textSize(20);
    text("P " + puntaje, 30, 20);

    //Ratón
    for (var f = 0; f < numDepredador1; f = f + 1) {
      var distCentro = dist(miDepredador1[f].x, miDepredador1[f].y, elRatón.x, elRatón.y);
      if (distCentro < miDepredador1[f].tamañoX / 2) {
        elRatón.morir();
      }
    }

    //Halcón
    for (var a = 0; a < numDepredador1; a = a + 1) {
      miDepredador1[a].dibujarse();
      miDepredador1[a].moverse();
      for (var s = 0; s < numMisiles; s = s + 1) {
        var distCentro3 = dist(misiles[s].x, misiles[s].y, miDepredador1[a].x, miDepredador1[a].y);
        if (estado == NIVEL2) {
          if (distCentro3 < miDepredador1[a].tamañoX / 2 && miDepredador1[a].viva) {
            miDepredador1[a].morir();
            puntaje = puntaje + 1;
            if (puntaje >= 10) {
              estado = NIVEL3;
              miDepredador1[a].revivir();
              puntaje = 0;
              miDepredador1[a].viva = true;
            }
          }
        }
      }
    }
    
    //Misiles
    for (var m = 0; m < numMisiles; m++) {
      misiles[m].mostrar();
      misiles[m].mover();
    }

    textSize(15);
    textAlign(CENTER);
    fill(255);
    text("Mueve al ratón para lanzar balas que desaparezcan a los depredadores", 300,40);

    if (elRatón.viva == true) {
      elRatón.mostrar();
      elRatón.arrastrar();
    }
    if (elRatón.viva == false) {
      estado = PERDER;
    }
    pop();

  } else if (estado == NIVEL3) {
    background(miFondo);
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("NIVEL 3", 100,20);
    textAlign(CENTER);
    textSize(20);
    text("P " + puntaje, 30, 20);

    for (var c = 0; c < numDepredador2; c = c + 1) {
      miDepredador2[c].dibujarse();
      miDepredador2[c].moverse();
      for (var s = 0; s < numMisiles; s = s + 1) {
        var distCentro3 = dist(misiles[s].x, misiles[s].y, miDepredador2[c].x, miDepredador2[c].y);
        if (distCentro3 < miDepredador2[c].tamañoX / 2) {
          miDepredador2[c].morir();
          puntaje = puntaje + 1;
          if (puntaje >= 40) {
            estado = GANAR;
            puntaje = 0;
          }
        }
      }
    }

    //Ratón
    for (var f = 0; f < numDepredador2; f = f + 1) {
      var distCentro = dist(miDepredador2[f].x, miDepredador2[f].y, elRatón.x, elRatón.y);
      if (distCentro < miDepredador2[f].tamañoX / 2) {
        elRatón.morir();
        miDepredador2[f].x = random;
        miDepredador2[f].y = random;
      }
    }
    
    //Halcón
    for (var a = 0; a < numDepredador1; a = a + 1) {
      miDepredador1[a].dibujarse();
      miDepredador1[a].moverse();
      for (var s = 0; s < numMisiles; s = s + 1) {
        var distCentro3 = dist(misiles[s].x, misiles[s].y, miDepredador1[a].x, miDepredador1[a].y);
        if (distCentro3 < miDepredador1[a].tamañoX / 2) {
          miDepredador1[a].morir();
          puntaje = puntaje + 1;
          if (puntaje >= 10) {
            estado = GANAR;
            puntaje = 0;
          }
        }
      }
    }
    
    //Misiles
    for (var m = 0; m < numMisiles; m++) {
      misiles[m].mostrar();
      misiles[m].mover();
    }

    textSize(15);
    textAlign(CENTER);
    fill(255);
    text("Ahora hay más depredadores,consigue 30 puntos", 235,45);


    if (elRatón.viva == true) {
      elRatón.mostrar();
      elRatón.arrastrar();
    }
    if (elRatón.viva == false) {
      estado = PERDER;
    }

  } else if (estado == GANAR) {
    background(Ganar);
    fill(0);
    textAlign(CENTER);
    textSize(60);
    text("GANASTE", width / 2, height / 2);

  } else {
    var boton1x = windowWidth / 2 - 30;
    var boton1y = windowHeight / 2 + 60;
    var boton1tam = 200;

    background(Perder);
    fill("black");
    textAlign(CENTER);
    textSize(60);
    text("PERDISTE", width / 2, height / 2);

    fill("black");
    textAlign(CENTER);
    textSize(20);
    text("TURNO DEL SIGUIENTE JUGADOR", width / 2, height / 2 + 60);
  }
}

function mousePressed() {
  if (estado == INTRO) {
    elRatón.viva = true;
    estado = NIVEL1;
  }
  return false;
}

function mouseDragged() {
  if (estado == NIVEL2) {
    elRatón.arrastrar();

    if (frameCount % 10 != 0) {
      return;
    }

    var x1 = mouseX;
    var y1 = mouseY;

    var x2 = pmouseX;
    var y2 = pmouseY;

    var velx = x1 - x2;
    var vely = y1 - y2;

    misiles[numMisiles] = new misil(velx, vely);

    numMisiles++;
  } else if (estado == NIVEL3) {
    elRatón.arrastrar();

    if (frameCount % 10 != 0) {
      return;
    }

    var x1 = mouseX;
    var y1 = mouseY;

    var x2 = pmouseX;
    var y2 = pmouseY;

    var velx = x1 - x2;
    var vely = y1 - y2;

    misiles[numMisiles] = new misil(velx, vely);
    numMisiles++;
  }
  return false;
}

function misil(px, py) {
  this.x = mouseX;
  this.y = mouseY;
  this.velx = px;
  this.vely = py;
  this.tamañoX = 15;

  this.mostrar = function() {
    noStroke();
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.tamañoX, this.tamañoX);
  }

  this.mover = function() {
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    this.vely += 0.5
  }
  this.morir = function() {
    if (this.tamañoX >= 0) {
      this.tamañoX -= 0.1;
    }
  }
}


//familia Ratón
function Ratón() {
  this.x = 0
  this.y = 0
  this.velx = 5;
  this.vely = 5;
  this.viva = true;
  this.tamañoX = 60;
  this.tamañoY = 30;

  this.mostrar = function() {
    if (this.viva == true) {
      noStroke();
      fill(89, 86, 86);
      ellipse(this.x + 5, this.y - 15, this.tamañoX - 39, this.tamañoY - 9);
      fill('grey');
      ellipse(this.x, this.y, this.tamañoX, this.tamañoY);
      fill(89, 86, 86);
      ellipse(this.x - 10, this.y - 15, this.tamañoX - 39, this.tamañoY - 9);
      fill('black');
      ellipse(this.x + 15, this.y - 5, this.tamañoX - 54, this.tamañoY - 24);
      push();
      stroke('black');
      line(this.x - 30, this.y - 1, this.x - 40, this.y + 5);
      pop();
      fill('pink');
      ellipse(this.x + 30, this.y + 1, this.tamañoX - 54, this.tamañoY - 24);
    }
  }
  
  this.mover = function() {
    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    this.vely = map(rotationX, -90, 90, -3, 3);

    this.velx = map(rotationY, -90, 50, -3, 3);

    this.x = constrain(this.x, this.tamañoX / 2, width - this.tamañoX / 2);
    this.y = constrain(this.y, this.tamañoY / 2, height - this.tamañoY / 2);
  }

  this.arrastrar = function() {
    this.x = mouseX;
    this.y = mouseY;
  }

  this.morir = function() {
    this.viva = false;
  }
}


//familia Halcón
function depredador1() {
  this.x = random(0, width);
  this.y = random(0, height)
  this.dirX = 1;
  this.dirY = 1;
  this.viva = true;
  this.tamañoX = 50;
  this.tamañoY = 40;

  this.dibujarse = function() {
    if (this.viva == true) {
      noStroke();
      fill('Orange');
      triangle(this.x - 10, this.y + 25, this.x, this.y + 25, this.x - 5, this.y + 15)
      triangle(this.x, this.y + 25, this.x + 10, this.y + 25, this.x + 5, this.y + 15)
      fill('white');
      ellipse(this.x, this.y, this.tamañoX, this.tamañoY);
      fill('Brown');
      triangle(this.x - 5, this.y, this.x + 5, this.y, this.x, this.y + 5)
      triangle(this.x + 25, this.y, this.x + 30, this.y + 20, this.x + 15, this.y)
      triangle(this.x - 25, this.y, this.x - 30, this.y + 20, this.x - 15, this.y)
      fill(0, 0, 0);
      ellipse(this.x - 10, this.y - 10, this.tamañoX - 43, this.tamañoY - 33);
      ellipse(this.x + 10, this.y - 10, this.tamañoX - 43, this.tamañoY - 33);
    }
  }
  this.revivir = function() {
    this.x = 0;
    this.y = 0;
  }
  
  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX * 4);
    }
    
    if (this.y >= height || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY * 4);
    }

    this.x = this.x + (this.dirX * random(0, 4));
    this.y = this.y + (this.dirY * random(0, 4));
  }

  this.morir = function() {
    this.viva = false;
    this.x = -200;
    this.y = -200;
  }
}

//Gato
function depredador2() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.dirY = 1;
  this.tamañoX= 29;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      push();
      noStroke();
      fill('black');
      rect(this.x - 15, this.y - 8, this.tamañoX, this.tamañoX - 15);
      triangle(this.x - 15, this.y - 7, this.x - 10, this.y - 21, this.x - 5, this.y - 7);
      triangle(this.x + 4, this.y - 7, this.x + 10, this.y - 21, this.x + 14, this.y - 7);
      fill('white');
      triangle(this.x - 14, this.y + 5, this.x + 14, this.y + 5, this.x, this.y + 16);
      pop();
    }
  }
  
  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX * 4);
    }
    
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY * 4);
    }

    this.x = this.x + (this.dirX * random(0, 4));
    this.y = this.y + (this.dirY * random(0, 4));

    this.morir = function() {
      this.viva = false;
    }
  }
}