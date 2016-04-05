const CollisionBox = require('./collision_box');
const ObstacleBuilder = require('./obstacle_builder');

class ShipBody{
  constructor(loc, width, color = [65,65,65]){
    this.loc = loc;
    this.collSphere = new CollisionBox(loc, width);
    this.obstacle = (new ObstacleBuilder()).mineObstacle(loc, width, color);
    this.health = 100;
  }

  inDetonationRange(player){
    return this.collSphere.generalCollisionDetected(player.collSphere);
  }

  detonate(player){
    player.health = 0;
  }
}

module.exports = ShipBody;
