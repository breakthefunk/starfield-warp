class starObject {
    console.log("connected");
    constructor() { 
    var x;
    var y;
    var z;
    }
    StarObject() {
        this.x = random(width, width);
        this.y = random(height, height);
        this.z = width;
    }
    void update() {
    }
    void show() {
        fill(255);
        noStroke();
        ellipse(x, y, 8, 8);
    }
}

export default tarObject;