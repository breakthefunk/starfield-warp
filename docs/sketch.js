var stars = [];
/*stars.lenght = 100;*/
var starsCount = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < starsCount; i++) {
    stars[i] = new StarObject();
  }
}

function draw() {
  background(0);
  for (i = 0; i < starsCount; i++) {
    stars[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class StarObject {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.star();
    this.show();
  }
  star() {
      this.x = random(0, width);
      this.y = random(0, height);
      this.z = random(0, width);
  }
  update() {
  }
  show() {
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 8, 8);  
  }
}
