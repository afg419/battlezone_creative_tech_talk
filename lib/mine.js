const CollisionSphere = require('./collision_sphere');

class Mine{
  constructor(loc, radius){
    this.loc = loc;
    this.collSphere = new CollisionSphere(loc, radius);
    // this.obstacle = new Library.minObstacle(loc)
  }

  playerInDetonationRange(player){
    return this.collSphere.generalCollisionDetected(player.collSphere);
  }

  detonate(player){
    player.health = 0;
  }
}

module.exports = Mine;
