const Player = require('./player');
const Vector = require('./vector');

class CollisionSphere {
  constructor(loc, radius){
    this.loc = loc;
    this.radius = radius;
  }

  collisionDetected(sphere) {
    return (this.loc.dist(sphere.loc) < (sphere.radius + this.radius));
  }

}

module.exports = CollisionSphere;
