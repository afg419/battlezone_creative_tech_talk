const CollisionBox = require('./collision_box');
const ObstacleBuilder = require('./obstacle_builder');
const Bullet = require('./bullet');
const Vector = require('./vector');

class Fighter{
  constructor(loc, speed, radius, width, strategy, head){
    this.loc = loc;
    this.width = width;
    this.collSphere = new CollisionBox(loc, width*1.5);
    this.obstacle = ((new ObstacleBuilder()).cubeObstacle(loc, width, [76, 133, 255]));
    this.health = 5;
    this.timer = 0;
    this.strategy = strategy;
    this.head = head;
    this.momentum = new Vector(0,0,0);
  }

  //chasing player
  chase(player){
    this.rotateTowardsPlayerStrategy(player, 0.07);
    this.forewardThrust();
    this.updateLocation();
  }

  rotateTowardsPlayerStrategy(player, deg){
    var direction = this.directionOfPlayerStrategy(player);
    var axis = this.rotationAxisTowards(direction);
    if(direction.dot(this.head) < 0.99){
      this.rotateAround(axis, deg);
    }
  }

  forewardThrust(){
    this.momentum = this.momentum.scaledBy(0.95)
                                .plus(this.head.scaledBy(0.45));
  }

  updateLocation() {
    this.loc = this.loc.plus(this.momentum.scaledBy(1));
    this.obstacle = ((new ObstacleBuilder()).cubeObstacle(this.loc, this.width, [76, 133, 255]));
  }

  directionOfPlayerStrategy(player){
    return player.loc.plus(this.strategy).minus(this.loc).unit;
  }

  rotationAxisTowards(vector){
    return this.head.cross(vector);
  }

  rotateAround(axis, deg){
    this.head = this.head.rotateAround(axis, deg).unit;
  }

  //Crashing or getting shotdown

  destroyed(){
    return this.health <= 0;
  }

  inCollisionWith(entity){
    return this.collSphere.generalCollisionDetected(entity.collSphere);
  }

  inCollisionWithAny(solidEntityArray){
    return solidEntityArray.some(entity =>{
      return this.inCollisionWith(entity);
    });
  }

  detonateSelf(){
    this.health = 0;
  }

  detonate(player){
    player.health = 0;
  }

  //firing

  inFireRange(player){
    return this.loc.dist(player.loc) < 400;
  }

  fire(player, bullets){
    bullets.push(this.makeBullet(player));
    this.timer = 0;
  }

  makeBullet(player){
    var rad = this.collSphere.width/2 + 5;
    var heading = player.loc
                        .minus(this.loc)
                        .plus(player.momentum.scaledBy(25)).unit;

    var location = this.loc.plus(heading.scaledBy(2 * rad));
    return new Bullet(location, heading, 30, 0.5, player.v, 500);
  }
}

module.exports = Fighter;
