const CollisionSphere = require('./collision_sphere');
const ObstacleBuilder = require('./obstacle_builder');

class Mine{
  constructor(loc, radius, width){
    this.loc = loc;
    this.collSphere = new CollisionSphere(loc, radius);
    this.obstacle = ( (new ObstacleBuilder()).mineObstacle(loc, width) );
    this.health = 5;
  }

  inDetonationRange(player){
    return this.collSphere.generalCollisionDetected(player.collSphere);
  }

  detonate(player){
    player.health = 0;
  }
}

module.exports = Mine;
