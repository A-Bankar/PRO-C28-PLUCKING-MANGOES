class Ground {
  constructor(x, y, w, h) {
    var options = {
      isStatic: true,
    };
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.body = Bodies.rectangle(
      this.x,
      this.y,
      this.width,
      this.height,
      options
    );
    World.add(userWorld, this.body);
  }
  display() {
    var groundPos = this.body.position;
    push();
    translate(groundPos.x, groundPos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    //strokeWeight(4);
    fill(128, 128, 128);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
