const CollisionBox = require('./collision_box');
const ObstacleBuilder = require('./obstacle_builder');

class Message{
  constructor(loc, width, alertMessage){
    this.loc = loc;
    this.collSphere = new CollisionBox(loc, width);
    this.obstacle = ( (new ObstacleBuilder()).mineObstacle(loc, width, [213,131,251]) );
    this.alertMessage = alertMessage;
  }

  inMessageRange(player){
    return this.collSphere.generalCollisionDetected(player.collSphere);
  }

  inform(player){
    player.alert = this.alertMessage;
  }
}

module.exports = Message;
