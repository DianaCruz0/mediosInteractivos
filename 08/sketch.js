//Variables
var Fondo;
var Saltamontes;
var losSaltamontes = [];
var numSaltamontes = 7;
var elHalcón;
var losHalcónes = [];
var numHalcónes = 1;
var Ratón;
var losRatónes = [];
var numRatónes = 7;
var laPlanta;
var lasPlantas = [];
var numPlantas = 15;
var bolas = [];
var numBolas = 0;

function preload() {
  Fondo = loadImage('Imágenes/Fondo.jpg');
}

function setup() {
  createCanvas(700, 500);
  noStroke();

  //Ratones
  for (var t = 0; t < numRatónes; t = t + 1) {
    losRatónes[t] = new Rat();
  }
  //Saltamontes
  for (var i = 0; i < numSaltamontes; i = i + 1) {
    losSaltamontes[i] = new Salta();
  }
  //Halcones
  for (var j = 0; j < numHalcónes; j = j + 1) {
    losHalcónes[j] = new Halco();
  }
  //Plantas
  for (var p = 0; p < numPlantas; p = p + 1) {
    lasPlantas[p] = new Plant();
  }
}

function draw() {
  background(Fondo, 700, 500);

  fill('brown');
  for (var b = 0; b < numBolas; b = b + 1) {
    bolas[b].mostrar();
    bolas[b].mover();
    bolas[b].morir();
  }
  //Plantas
  for (var p = 0; p < numPlantas; p = p + 1) {
    lasPlantas[p].dibujarse();
    

    for (var bb = 0; bb < numBolas; bb = bb + 1) {
      var distanciaCentro = dist(bolas[bb].x, bolas[bb].y, lasPlantas[p].x, lasPlantas[p].y);
      
      
      if (distanciaCentro < bolas[bb].tamaño+100) {
        lasPlantas[p].nacer();
        
      }
    }
  }
  //Saltamontes
  for (var i = 0; i < numSaltamontes; i = i + 1) {
    losSaltamontes[i].dibujarse();
    losSaltamontes[i].moverse();

    //Saltamontes nace de planta
    for (var p = 0; p < numPlantas; p = p + 1) {
      var distanciaCentro = dist(lasPlantas[p].x, lasPlantas[p].y, losSaltamontes[i].x, losSaltamontes[i].y);

      if (distanciaCentro < lasPlantas[p].tamaño) {
        losSaltamontes[i].nacer();
      }
    }

    //Ratón come Saltamontes
    for (var t = 0; t < numRatónes; t = t + 1) {
      var disCentro = dist(losRatónes[t].x, losRatónes[t].y, losSaltamontes[i].x, losSaltamontes[i].y);

      if (disCentro < losRatónes[t].tamañoX / 3) {
        losSaltamontes[i].morir();
      }
    }
  }
  //Ratones
  for (var tt = 0; tt < numRatónes; tt = tt + 1) {
    losRatónes[tt].dibujarse();
    losRatónes[tt].moverse();

    //Halcón come Ratón
    for (var j = 0; j < numHalcónes; j = j + 1) {
      var distCentro = dist(losHalcónes[j].x, losHalcónes[j].y, losRatónes[tt].x, losRatónes[tt].y);

      if (distCentro < losHalcónes[j].tamañoX-10) {
        losRatónes[tt].x = losHalcónes[j].x
        losRatónes[tt].y = losHalcónes[j].y+35
      }
    }
  }

  //Halcónes
  for (var j = 0; j < numHalcónes; j = j + 1) {
    losHalcónes[j].dibujarse();
    losHalcónes[j].moverse();
  }
}

function bola(px, py) {

  this.x = mouseX;
  this.y = mouseY;

  this.velx = px;
  this.vely = py;

  this.tamaño = random(10, 20);

  this.mostrar = function() {
    ellipse(this.x, this.y, this.tamaño, this.tamaño);
  }

  this.mover = function() {

    this.x = this.x + this.velx;
    this.y = this.y + this.vely;

    this.vely += 0.5;

    if (this.x > width || this.x < 0) {
      this.velx *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.vely *= -1;
    }
  }

  this.morir = function() {
    if (this.tamaño >= 0) {
      this.tamaño -= 0.3;
    }
  }
}

function mouseDragged() {

  if (frameCount % 10 != 0) {
    return;
  }

  //posicion actual del raton
  var x1 = mouseX;
  var y1 = mouseY;

  //posicion anterior del raton
  var x2 = pmouseX;
  var y2 = pmouseY;

  //la velocidad se mide restando la posicion guardada del mouse con la posición que se habia guardado de este
  var velx = x1 - x2;
  var vely = y1 - y2;

  // se cra una nueva bola que recibe por parametro las velocidades en x y y del mouse
  bolas[numBolas] = new bola(velx, vely);

  //aumenta el numero de bolas de la lista
  numBolas++;
}

//Saltamontes
function Salta() {
  this.x = random(0, width);
  this.y = random(350, height - 30);
  this.tamanoX = 50;
  this.tamanoY = 30;
  this.dirSalX = 1;
  this.dirSalY = 1;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      fill('Green')
      ellipse(this.x, this.y, this.tamanoX + 10, this.tamanoY);
      stroke(100);
      fill('White')
      triangle(this.x + 1, this.y - 13, this.x + 20, this.y - 13, this.x + 20, this.y - 25);
      triangle(this.x - 10, this.y - 13, this.x + 10, this.y - 13, this.x + 10, this.y - 25);
      noStroke();
      fill('green');
      triangle(this.x + 10, this.y + 12, this.x + 20, this.y + 10, this.x + 20, this.y + 25);
      triangle(this.x, this.y + 12, this.x + 10, this.y + 10, this.x + 10, this.y + 25);
      fill(0, 0, 0);
      ellipse(this.x - 20, this.y, this.tamanoX - 55, this.tamanoY - 25);
    }
  }

  this.moverse = function() {
    this.x = this.x + (3 * (-this.dirSalX));
    if (this.x > width + 40 || this.x < -60) {
      this.x = width + 40;
    }
    this.y = this.y + (1 * this.dirSalY);
    if (this.y > height - 30 || this.y < 350) {
      this.dirSalY = -this.dirSalY;
    }
  }

  this.morir = function() {
    this.viva = false;
  }

  this.nacer = function() {
    this.viva = true;
  }
}

//Halcónes
function Halco() {
  this.x = random(0, width);
  this.y = random(250, 325);
  this.tamañoX = 50;
  this.tamañoY = 40;
  this.dirHalcX = 1;
  this.dirHalcY = 1;

  this.dibujarse = function() {
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

  this.moverse = function() {
    this.x = this.x + (2 * this.dirHalcX);
    if (this.x > width || this.x < 0) {
      this.dirHalcX = -this.dirHalcX;
    }
    this.y = this.y + (4 * this.dirHalcY);
    if (this.y > 325 || this.y < 40) {
      this.dirHalcY = -this.dirHalcY;
    }
  }
}

//Ratones
function Rat() {
  this.x = random(0, width);
  this.y = random(360, 320);
  this.tamañoX = 60;
  this.tamañoY = 30;
  this.dirRaX = 1;
  this.dirRaY = 1;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
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
  this.moverse = function() {
    this.x = this.x + (2 * this.dirRaX);
    if (this.x > width + 40 || this.x < -60) {
      this.x = -40;
    }
    this.y = this.y + (0.7 * this.dirRaY);
    if (this.y > 360 || this.y < 320) {
      this.dirRaY = -this.dirRaY;
    }
  }
  
  this.morir = function() {
    this.viva = false;
  }

}

//Plantas
function Plant() {
  this.x = random(30, width - 30);
  this.y = 485;
  this.tamaño = 30;
  this.dirPlanX = 1;
  this.dirPlanY = 1;
  this.viva = false;

  this.dibujarse = function() {
    if (this.viva == true) {
      fill(140, 190, 35);
      ellipse(this.x, this.y, this.tamaño, this.tamaño);
      beginShape();
      vertex(this.x - 12, this.y + 15);
      vertex(this.x - 34, this.y + 5);
      vertex(this.x - 26, this.y + 1);
      vertex(this.x - 31, this.y - 9);
      vertex(this.x - 18, this.y - 8);
      vertex(this.x - 17, this.y - 21);
      vertex(this.x - 9, this.y - 17);
      vertex(this.x - 2, this.y - 25);
      vertex(this.x + 4, this.y - 16);
      vertex(this.x + 12, this.y - 22);
      vertex(this.x + 14, this.y - 15);
      vertex(this.x + 26, this.y - 20);
      vertex(this.x + 24, this.y - 10);
      vertex(this.x + 33, this.y - 8);
      vertex(this.x + 28, this.y - 1);
      vertex(this.x + 33, this.y + 5);
      vertex(this.x + 12, this.y + 15);
      endShape(CLOSE);
    }
  }
  this.nacer = function() {
    this.viva = true;
  }
}