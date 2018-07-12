var stars = [];
stars.lenght = 800;

function setup() {
  createCanvas(800, 800);
  for (i = 0; i < stars.lenght; i++) {
    stars[i] = new StarObject();
  }
}

function draw() {
  background(0);
  translate(width/2, height/2);
  for (i = 0; i < stars.lenght; i++) {
    stars[i].update();
    stars[i].show();
  }
}
class StarObject {
  constructor() {
    this.star();
    this.update();
    this.show();
  }
  star() {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);
      this.pz = this.z;
  }
  update() {
      this.speed = map(mouseX, 0, width, 0, 50);
      this.z = this.z - this.speed;
      if (this.z < 1) {
        this.z = width;
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.pz = this.z;
      }
  }
  show() {
    fill(255);
    noStroke();

    this.sx = map(this.x/this.z, 0, 1, 0, width);
    this.sy = map(this.y/this.z, 0, 1, 0, height);
    
    this.r = map(this.z, 0, width, 10, 0);
    //ellipse(this.sx, this.sy, this.r, this.r);

    this.px = map(this.x/this.pz, 0, 1, 0, height);
    this.py = map(this.y/this.pz, 0, 1, 0, width);

    this.pz = this.z;

    stroke(255);
    line(this.px, this.py, this.sx, this.sy);
  }
}
