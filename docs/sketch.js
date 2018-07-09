<<<<<<< HEAD
import starObject from '/Star';
=======
import defaultExport from '/Star';
>>>>>>> 67b7f894149181a058b1b197cac725d9995b9468

var StarArray = []; 
var stars = new StarArray(100);

function setup() {
  createCanvas(400, 400); 
  for (var i = 0; i < stars.lenght; i++) {
    var stars = new StarArray(100);
  }

}

function draw() {
  background(0);
  for (var i = 0; i < stars.lenght; i++) {
    stars[i].update();
    stars[i].show();
  }
    
}

var StarObject = new starObject();

