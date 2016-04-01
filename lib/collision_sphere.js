const Player = require('./player');
const Vector = require('./vector');

class CollisionSphere {
  constructor(loc, radius){
    this.loc = loc;
    this.radius = radius;
  }

  generalCollisionDetected(sphere) {
    if (this.loc.dist(sphere.loc) < (sphere.radius + this.radius)) {
      console.log("A collision! Brace yourselves!");
      return true;
    };
  }
}

module.exports = CollisionSphere;
