import StarObject from 'Star';

var StarArray = []; 
var stars = new StarArray(100);

function setup() {
  createCanvas(400, 400); 
  for (var i = 0; i < stars.lenght; i++) {
    var stars = new StarArray(100);
  }

}

void draw() {
  background(0);
  for (var i = 0; i < stars.lenght; i++) {
    stars[i].update();
    stars[i].show();
  }
    
}

