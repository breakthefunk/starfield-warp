import Star from './Star';

var Star = []; 
var stars = new Star(100);

function setup() {
  createCanvas(400, 400); 
  for (var i = 0; i < stars.lenght; i++) {
    var stars = new Star(100);
  }

}

function draw() {
  background(0);
  for (var i = 0; i < stars.lenght; i++) {
    stars[i].update();
    stars[i].show();
  }
    
}

