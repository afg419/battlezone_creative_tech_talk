const CollisionBox = require('./collision_box');
const ObstacleBuilder = require('./obstacle_builder');

class Mine{
  constructor(loc, radius, width){
    this.loc = loc;
    this.collSphere = new CollisionBox(loc, width);
    this.obstacle = ( (new ObstacleBuilder()).cubeObstacle(loc, width) );
    this.health = 5;
  }

  inCollisionWith(player){
    return this.collSphere.generalCollisionDetected(player.collSphere);
  }

  detonate(player){
    player.health = 0;
  }
}

module.exports = Mine;
