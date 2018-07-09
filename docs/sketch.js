var stars = new Array(100);

function setup() {
  createCanvas(400, 400); 
  for (var i = 0; i < stars.lenght; i++) {
    stars[i]= new StarObject();
  }

}

function draw() {
  background(0);
  for (var i = 0; i < stars.lenght; i++) {
    stars[i].update();
    stars[i].show();
  }
    
}

class StarObject {
  constructor() { 
    var x;
    var y;
    var z;
  }
  StarObject() {
      this.x = random(0, width);
      this.y = random(0, height);
      this.z = random(0, width);
  }
  update() {
  }
  show() {
    fill(255);
    noStroke();
    ellipse(x, y, 8, 8);  
  }
}
