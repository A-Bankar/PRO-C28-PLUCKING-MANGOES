class Launcher {
  constructor(bodyAInput, pointBInput) {
    var options = {
      bodyA: bodyAInput,
      pointB: pointBInput,
      stiffness: 0.12,
    };
    this.constraint = Constraint.create(options);
    World.add(userWorld, this.constraint);
  }                                                                                                 
  attach(body)                                                                                                 
  {                                     
     this.constraint.bodyA = body;                                                   
  }                                                                                                 
                                                                                                 
  detach() {                                              
      this.constraint.bodyA = null;                                                   
  }

  display() {
    if (this.constraint.bodyA != null) {                                                   
      var pointA = this.constraint.bodyA.position;                                                   
      var pointB = this.constraint.pointB;

      push();

    line(pointA.x, pointA.y, pointB.x, pointB.y);

    pop();
  }
}
}