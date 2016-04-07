const CollisionBox = require('./collision_box');
const ObstacleBuilder = require('./obstacle_builder');
const Bullet = require('./bullet');

class Fighter{
  constructor(loc, speed, radius, width, strategy){
    this.loc = loc;
    this.width = width;
    this.collSphere = new CollisionBox(loc, width);
    this.obstacle = ((new ObstacleBuilder()).cubeObstacle(loc, width, [76, 133, 255]));
    this.health = 5;
    this.timer = 0;
    this.speed = speed;
    this.strategy = strategy;
  }

  chase(player){
    var direction = player.loc.plus(this.strategy).minus(this.loc).unit;
    this.loc = this.loc.plus(direction.scaledBy(this.speed));
    this.obstacle = ((new ObstacleBuilder()).cubeObstacle(this.loc, this.width, [76, 133, 255]));
  }

  inRadarRange(entity){
    return this.collSphere.generalCollisionDetected(entity.collSphere);
  }

  destroyed(){
    return this.health <= 0;
  }

  inFireRange(player){
    return this.loc.dist(player.loc) < 400;
  }

  fire(player, bullets){
    bullets.push(this.makeBullet(player));
    this.timer = 0;
  }

  makeBullet(player){
    var rad = this.collSphere.width/2 + 5;
    var heading = player.loc.minus(this.loc).plus(player.momentum.scaledBy(25)).unit;
    var location = this.loc.plus(heading.scaledBy(2 * rad));
    return new Bullet(location, heading, 30, 1, player.v);
  }
}

module.exports = Fighter;
