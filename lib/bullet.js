const Maths = require('./math');
const ObstacleBuilder = require('./obstacle_builder');

class Bullet{
  constructor(loc, head, speed, damage){
    this.loc = loc;
    this.head = head;
    this.speed = speed;
    this.damage = damage;
    this.originalLoc = loc;
    this.range = 1000;
    this.obstacle = (new ObstacleBuilder().bulletObstacle(this.loc, this.head));
  }

  fly(){
    this.loc = this.loc.plus(Maths.scalMult(this.speed, this.head));
    this.obstacle = (new ObstacleBuilder().bulletObstacle(this.loc, this.head));
  }

  hits(entity){
    return entity.collSphere.radius > entity.loc.dist(this.loc);
  }

  damage(entity){
    entity.health -= this.damage;
  }

  outOfRange(){
    return this.loc.dist(this.originalLoc) > this.range;
  }
}

module.exports = Bullet;
