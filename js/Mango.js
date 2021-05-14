class Mango {
  constructor(x, y, r) {
    var options = {
      isStatic: true,
      restitution: 0,
      friction: 1,
    };
    this.x = x;
    this.y = y;
    this.radius = r;
    this.image = loadImage("images/mango.png");
    this.body = Bodies.circle(this.x, this.y, this.radius, options);
    World.add(userWorld, this.body);
  }

  display() {
    var mangoPos = this.body.position;
    push();
    translate(mangoPos.x, mangoPos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius * 2, this.radius * 2);
    pop();
  }
} 