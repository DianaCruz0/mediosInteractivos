	var xloc = 20;
	var yloc = 20;
	var lado = 20;
	var posx = 0;
	var posy = 0;
	var a = 0;
	var b = 0;

	function setup() {
	  createCanvas(700, 700);
	  background(255);
	}

	function draw() {

	  for (var f = 1; f <= 4; f = f + 1) {
	    for (var c = 1; c <= 4; c = c + 1) {

	      if (f == 1 && c == 4) {
	        fill(244, 215, 11);
	        noStroke();
	      } else if (f == 2 && c == 3) {
	        fill(244, 215, 11);
	        noStroke();
	      } else if (f == 3 && c == 2) {
	        fill(244, 215, 11);
	        noStroke();
	      } else if (f == 4 && c == 1) {
	        fill(244, 215, 11);
	        noStroke();
	      } else {
	        fill(1);
	        noStroke();
	      }

	      if (c == 1) {
	        a = 1;
	        b = 1;
	        posx = xloc;
	        posy = yloc;
	      }

	      if (c == 2) {
	        a = 4;
	        b = 1;
	        posx = xloc + lado * 8;
	        posy = yloc;
	      }

	      if (c == 3) {
	        a = 3;
	        b = 2;
	        posx = xloc;
	        posy = yloc + lado * 8;
	      }

	      if (c == 4) {
	        a = 1;
	        b = 2;
	        posx = xloc + lado * 8;
	        posy = yloc + lado * 8;
	      }
	      var a1 = a;
	      var b1 = b;
	      var posxi = posx;
	      var posyi = posy;

	      for (var y = 0; y < 8; y = y + 1) {
	        for (var x = 0; x < 8; x = x + 1) {

	          if (a == 1) {
	            triangle(posx, posy,
	              posx, posy + lado,
	              posx + lado, posy + lado);

	            if (b == 2) {
	              a = 2;
	            }
	          } else if (a == 2) {

	            triangle(posx, posy,
	              posx + lado, posy,
	              posx + lado, posy + lado);

	            if (b == 2) {
	              a = 1;
	            }
	          } else if (a == 3) {

	            triangle(posx, posy,
	              posx, posy + lado,
	              posx + lado, posy);

	            if (b == 2) {
	              a = 4;
	            }
	          } else if (a == 4) {

	            triangle(posx, posy + lado,
	              posx + lado, posy,
	              posx + lado, posy + lado);

	            if (b == 2) {
	              a = 3;
	            }
	          }

	          posx = posx + lado;

	          if (b == 1) {
	            b = 2;
	          } else {
	            b = 1;
	          }
	        }
	        if (a1 == 1) {
	          if (b1 == 1) {

	            a = a1;
	            b = 2;
	            b1 = 2;
	          } else {

	            a1 = 2;
	            a = 2;
	            b = 1;
	            b1 = 1;
	          }
	        } else if (a1 == 2) {
	          if (b1 == 1) {

	            a = a1;
	            b = 2;
	            b1 = 2;
	          } else {

	            a1 = 1;
	            a = 1;
	            b = 1;
	            b1 = 1;
	          }
	        } else if (a1 == 3) {
	          if (b1 == 1) {

	            a1 = 4;
	            a = 4;
	            b = 2;
	            b1 = 2;
	          } else {

	            a = a1;
	            b = 1;
	            b1 = 1;
	          }
	        } else if (a1 == 4) {
	          if (b1 == 1) {

	            a1 = 3;
	            a = 3;
	            b = 2;
	            b1 = 2;
	          } else {

	            a = a1;
	            b = 1;
	            b1 = 1;
	          }
	        }
	        posx = posxi;
	        posy = posy + lado;
	      }
	    }
	  }
	}