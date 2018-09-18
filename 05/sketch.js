  //Variables
  var miAngulo = 0;
  var miAnguloo = 0;
  var miAngulooo = 0;
  var miSegundo = 0;
  var miMinuto = 0;
  var miHora = 0;
  var x = 0;
  var y = 0;
  var z = 0;


  function setup() {
    createCanvas(400, 400);
  }

  function draw() {
    //Fondo	
    var altorect = 1;
    for (var posy = 0; posy < height; posy = posy + altorect) {
      noStroke();
      fill(posy + 240, posy, 30);
      rect(0, posy, width / 2, altorect);
      fill(14, posy + 10, posy + 50);
      rect(200, posy, (width / 2), altorect);
    }

    //Sol
    fill(229, 229, 16);
    ellipse(100, y+390, 90, 90);
    y = y - 1;
   //if (y <= -50) {
    //y = height;
   //}
    
    //Montañas
    fill(37,170,5);
    ellipse(50,400,150,150);
    fill(41,178,8);
    ellipse(125,400,150,150);
    
    //Edificio1
    fill(238,238,179);
    rect(10,155,15,25);
    rect(25,140,20,40);
    rect(45,155,15,25);
    fill(130,108,8);
    rect(26,170,20,10);
    fill(255);
    rect(12,157,5,5);
    rect(20,157,5,5);
    rect(28,157,5,5);
    rect(36,157,5,5);
    rect(44,157,5,5);
    rect(52,157,5,5);
    rect(12,165,5,5);
    rect(20,165,5,5);
    rect(28,165,5,5);
    rect(36,165,5,5);
    rect(44,165,5,5);
    rect(52,165,5,5);
    
    //Edificio2
    fill(238,238,179);
    rect(140,255,15,25);
    rect(155,240,20,40);
    rect(175,255,15,25);
    fill(130,108,8);
    rect(156,270,20,10);
    fill(255);
    rect(142,257,5,5);
    rect(150,257,5,5);
    rect(158,257,5,5);
    rect(166,257,5,5);
    rect(174,257,5,5);
    rect(182,257,5,5);
    rect(142,265,5,5);
    rect(150,265,5,5);
    rect(158,265,5,5);
    rect(166,265,5,5);
    rect(174,265,5,5);
    rect(182,265,5,5);
    
    //Cuaderno1
    fill(22,99,183);
    rect(20,246,29,30);
    fill(255);
    rect(23,247,25,30);
    fill(22,99,183);
    rect(20,250,25,30);
    
    //Cuaderno2
    fill(22,99,183);
    rect(150,146,29,30);
    fill(255);
    rect(153,147,25,30);
    fill(22,99,183);
    rect(150,150,25,30);
    
    
    //Nube1
    fill(255);
    ellipse(120, 20, 30, 20);
    ellipse(140, 20, 30, 20);
    ellipse(160, 20, 30, 20);
    ellipse(180, 20, 30, 20);
    ellipse(120, 30, 30, 20);
    ellipse(140, 30, 30, 20);
    ellipse(160, 30, 30, 20);
    ellipse(180, 30, 30, 20);

    //Nube2
    fill(255);
    ellipse(30, 60, 30, 20);
    ellipse(50, 60, 30, 20);
    ellipse(70, 60, 30, 20);
    ellipse(90, 60, 30, 20);
    ellipse(30, 70, 30, 20);
    ellipse(50, 70, 30, 20);
    ellipse(70, 70, 30, 20);
    ellipse(90, 70, 30, 20);

    //Luna
    fill(150);
    ellipse(300, z, 90, 90);
    z = z + 3;
   if (z < 0) {
    z = height;
   }

    //Montañas
    fill(17,96,17);
    ellipse(275,400,150,150);
    fill(12,81,12);
    ellipse(350,400,150,150);
    
    //Cojin1
    fill(255);
    rect(205,150,50,30);
    ellipse(230,150,50,10);
    ellipse(230,180,50,10);
    ellipse(207,151,10,10);
    ellipse(253,151,10,10);
    ellipse(207,179,10,10);
    ellipse(253,179,10,10);
    
    //Cojin2    
    fill(255);
    rect(340,250,50,30);
    ellipse(365,250,50,10);
    ellipse(365,280,50,10);
    ellipse(342,251,10,10);
    ellipse(388,251,10,10);
    ellipse(342,279,10,10);
    ellipse(388,279,10,10);
    
    //ZzZ1
    stroke(100);
    line(x+205,290,x+215,290);
    line(x+205,290,x+215,280);
    line(x+205,280,x+215,280);
    
    line(x+217,275,x+229,275);
    line(x+217,275,x+229,263);
    line(x+217,263,x+229,263);
    
    line(x+231,258,x+245,258);
    line(x+231,258,x+245,244);
    line(x+231,244,x+245,244);
    
    //ZzZ2
    stroke(100);
    line(x+340,190,x+350,190);
    line(x+340,190,x+350,180);
    line(x+340,180,x+350,180);
    
    line(x+352,175,x+364,175);
    line(x+352,175,x+364,163);
    line(x+352,163,x+364,163);
    
    line(x+366,158,x+380,158);
    line(x+366,158,x+380,144);
    line(x+366,144,x+380,144);
    x = x + random(-1, +1);
    
    //Estrellas
    push();
    translate(width * 0.8, height * 0.5);
    stroke(255);
    fill(255);
    star(-110, -185, 4, 10, 5);
    star(-80, -155, 4, 10, 5);
    star(-110, -125, 4, 10, 5);
    star(-50, -185, 4, 10, 5);
    star(-20, -155, 4, 10, 5);
    star(-50, -125, 4, 10, 5);
    star(10, -185, 4, 10, 5);
    star(40, -155, 4, 10, 5);
    star(10, -125, 4, 10, 5);
    star(70, -125, 4, 10, 5);
    
    //Funcion Estrella
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
    pop();

    //Reloj Dia
    angleMode(DEGREES);
    miSegundo = second();
    miMinuto = minute();
    miHora = hour();
    miSegundom = map(miSegundo, 0, 59, 0, 360);
    miMinutom = map(miMinuto, 0, 59, 0, 360);
    miHoram = map(miHora, 0, 12, 0, 360);
    //Segundos
    noStroke();
    fill("red");
    ellipse(width / 2 - 40, height / 2 + 160, 65, 65);
    fill(255);
    ellipse(width / 2 - 40, height / 2 + 160, 60, 60);
    push();
    translate(width / 2 - 40, height / 2 + 160);
    rotate(miSegundom);
    stroke("red");
    line(0, 0, 0, -25);
    pop();
    //Minutos
    push();
    translate(width / 2 - 40, height / 2 + 160);
    rotate(miMinutom);
    stroke(100);
    line(0, 0, 0, -20);
    pop();
    //Horas
    push();
    translate(width / 2 - 40, height / 2 + 160);
    rotate(miHoram);
    stroke(100);
    line(0, 0, 0, -15);
    pop();
    fill("red");
    ellipse(width / 2 - 40, height / 2 + 160, 5, 5);

    //Reloj Noche
    angleMode(DEGREES);
    //Segundos
    fill("blue");
    ellipse(width / 2 + 40, height / 2 + 160, 65, 65);
    fill(255);
    ellipse(width / 2 + 40, height / 2 + 160, 60, 60);
    push();
    translate(width / 2 + 40, height / 2 + 160);
    rotate(miAngulo);
    stroke("red");
    line(0, 0, 0, -25);
    pop();
    //Minutos
    push();
    translate(width / 2 + 40, height / 2 + 160);
    rotate(miAnguloo);
    stroke(100);
    line(0, 0, 0, -20);
    pop();
    //Horas
    push();
    translate(width / 2 + 40, height / 2 + 160);
    rotate(miAngulooo);
    stroke(100);
    line(0, 0, 0, -15);
    pop();
    fill("blue");
    ellipse(width / 2 + 40, height / 2 + 160, 5, 5)
    miAngulo = miAngulo + 5
    miAnguloo = miAnguloo + 3
    miAngulooo = miAngulooo + 1

  }