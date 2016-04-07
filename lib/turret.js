const CollisionBox = require('./collision_box');
const ObstacleBuilder = require('./obstacle_builder');
const Bullet = require('./bullet');
const Vector = require('./vector');

class Turret{
  constructor(loc, radius, width){
    this.loc = loc;
    this.collSphere = new CollisionBox(loc, width);
    this.obstacle = ((new ObstacleBuilder()).cubeObstacle(loc, width,[170,170,170]));
    this.health = 5;
    this.timer = 0;
  }

  destroyed(){
    return this.health <= 0;
  }

  inCollisionWith(player){
    return this.collSphere.generalCollisionDetected(player.collSphere);
  }

  detonate(player){
    player.health = 0;
  }

  inFireRange(player){
    return this.loc.dist(player.loc) < 400;
  }

  fire(player, bullets){
    bullets.push(this.makeBullet(player));
    bullets.push(this.makeBullet(player));
    bullets.push(this.makeBullet(player));
    bullets.push(this.makeBullet(player));
    this.timer = 0;
  }

  makeBullet(player){
    var rad = this.collSphere.width/2 + 5;
    var axis = new Vector(Math.random()-1,Math.random()-1,Math.random()-1).unit;
    var pre = player.loc.minus(this.loc);//.plus(player.momentum.scaledBy(1));
    var heading = pre.rotateAround(axis, player.momentum.mag()*(Math.random()-1)).unit;
    var location = this.loc.plus(heading.scaledBy(2 * rad));
    return new Bullet(location, heading, 30, 1, player.v);
  }
}

module.exports = Turret;
