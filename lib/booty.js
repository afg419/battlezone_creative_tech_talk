const CollisionSphere = require('./collision_sphere');
const ObstacleBuilder = require('./obstacle_builder');

class Booty{
  constructor(loc, radius, width, value){
    this.loc = loc;
    this.collSphere = new CollisionSphere(loc, radius);
    this.value = value;
    this.obstacle = ( (new ObstacleBuilder()).bootyObstacle(loc, width) )
  }

  playerInCollectionRange(player){
    return this.collSphere.generalCollisionDetected(player.collSphere);
  }

  increaseWealth(player){
    player.wealth += this.value;
  }
}

module.exports = Booty;
