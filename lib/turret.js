const CollisionBox = require('./collision_box');
const ObstacleBuilder = require('./obstacle_builder');
const Bullet = require('./bullet');
const Maths = require('./math');
const Vector = require('./vector');

class Turret{
  constructor(loc, radius, width){
    this.loc = loc;
    this.collSphere = new CollisionBox(loc, width);
    this.obstacle = ((new ObstacleBuilder()).cubeObstacle(loc, width,[170,170,170]));
    this.health = 2;
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
    this.timer = 0;
  }

  makeBullet(player){
    var rad = this.collSphere.width/2 + 5;
    var preAxis = new Vector(Math.random(-1.0, 1.0),Math.random(-1.0, 1.0),Math.random(-1.0, 1.0));
    var axis = Maths.scalMult(1/preAxis.mag(), preAxis);

    var pre1 = player.loc.minus(this.loc).plus(Maths.scalMult(1, player.momentum));
    var pre2 = pre1.rotateAround(axis, Math.random(-0.5,0.5));
    var heading = Maths.scalMult(1/pre2.mag(), pre2);
    var location = this.loc.plus(Maths.scalMult(2 * rad, heading));
    return new Bullet(location, heading, 30, 1, player.v);
  }

}

module.exports = Turret;
