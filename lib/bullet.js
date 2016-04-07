const ObstacleBuilder = require('./obstacle_builder');

class Bullet{
  constructor(loc, head, speed, damage, u, range = 400){
    this.loc = loc;
    this.head = head;
    this.speed = speed;
    this.damage = damage;
    this.prevLoc = loc;
    this.originalLoc = loc;
    this.range = range;
    this.u = u;
    this.obstacle = (new ObstacleBuilder().bulletObstacle(this.loc, this.head, this.u));
  }

  fly(){
    this.prevLoc = this.loc;
    this.loc = this.loc.plus(this.head.scaledBy(this.speed));
    this.obstacle = (new ObstacleBuilder().bulletObstacle(this.loc, this.head, this.u));
  }

  hits(entity){
    var rad = entity.collSphere.width/2 + 2;
    var prop0 = this.loc.dist(entity.loc) < rad;
    var prop1 = this.goneAsFarAs(entity);
    return prop0 || (prop1 && this.trajectorysDistanceTo(entity) < rad);
  }

  goneAsFarAs(entity){
    var arr1 = entity.loc.minus(this.prevLoc);
    var arr2 = this.loc.minus(entity.loc);
    return arr1.dot(arr2) > 0;
  }

  trajectorysDistanceTo(entity){
    var x0 = entity.loc;
    var x1 = this.loc;
    var x2 = this.prevLoc;
    var num = (x0.minus(x1)).cross(x0.minus(x2)).mag();
    var denom = (x2.minus(x1)).mag();
    return num/denom;
  }

  dealDamageTo(entity){
    entity.health -= this.damage;
  }

  outOfRange(){
    return this.loc.dist(this.originalLoc) > this.range;
  }
}

module.exports = Bullet;
