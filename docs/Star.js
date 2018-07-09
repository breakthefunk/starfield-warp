class Star{
    console.log("connected");
    constructor() { 
    var x;
    var y;
    var z;
    }
    events() {
    }
    Star() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.z = random(0, width);
    }
    void update() {
    }
    void show() {
        fill(255);
        noStroke();
        ellipse(x, y, 8, 8);
    }
}

export default Star;