const CollisionSphere = require('./collision_sphere');

class Booty{
  constructor(loc, radius, value){
    this.loc = loc;
    this.collSphere = new CollisionSphere(loc, radius);
    this.value = value;
    // this.obstacle;
  }

  playerInCollectionRange(player){
    return this.collSphere.generalCollisionDetected(player.collSphere);
  }

  increaseWealth(player){
    player.wealth += this.value;
  }
}

module.exports = Booty;
