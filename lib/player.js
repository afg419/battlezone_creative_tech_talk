const Vector = require('./vector');
const Dimensions = require('./screen_dimensions');
const CollisionBox = require('./collision_box');
const Bullet = require('./bullet');

class Player{
  constructor(loc, head, off, theta, phi, collRadius){
    this.loc = loc;
    this.head = head; //unit length
    this.offset = off;
    this.momentum = new Vector(0,0,0);
    this.v = new Vector(0,0,1);
    this.shadow = loc.minus(head.scaledBy(off));
    this.u = this.v.cross(this.head);
    this.horizontalViewRange = theta;
    this.verticalViewRange = phi;
    this.collSphere = new CollisionBox(loc, collRadius/2);
    this.health = 10;
    this.wealth = 0;
    this.win = false;
    this.alert = "";
  }

  get speed(){
    return this.momentum.mag();
  }

  get dead(){
    return this.health === 0;
  }

  fire(bullets){
    bullets.push(this.makeBullet(1), this.makeBullet(-1));
  }

  makeBullet(side){
    var location = this.loc
              .plus(this.momentum)
              .plus(this.head.scaledBy(5))
              .plus(this.u.scaledBy(side * 4))
              .minus(this.v.scaledBy(4));
    var heading = this.head.unit;
    return new Bullet(location, heading, (this.speed + 45), 1, this.u);
  }

  moveForward(){
    this.loc = this.loc.plus(this.head);
    this.momentum = this.momentum.scaledBy(0.94)
                                .plus(this.head.scaledBy(0.45));
  }

  moveBackward(){
    this.momentum = this.momentum.scaledBy(0.94).minus(this.head.scaledBy(0.35));
  }

  updateVecs() {
    this.loc = this.loc.plus(this.momentum.scaledBy(1));
    this.shadow = this.loc.minus(this.head.scaledBy(this.offset));
    this.collSphere.loc = this.loc;
  }

  rotateOnV(deg){
    this.head = this.head.rotateAround(this.v, deg).unit;
    this.u = this.v.cross(this.head);
  }

  rotateOnU(deg){
    this.head = this.head.rotateAround(this.u, deg).unit;
    this.v = this.head.cross(this.u);
  }

  rotateOnHead(deg){
    this.v = this.v.rotateAround(this.head, deg).unit;
    this.u = this.v.cross(this.head);
  }

  rotateTowardsClosestEntity(entityArray, deg){
    var direction = this.directionToClosestEntity(entityArray);
    var axis = this.rotationAxisTowards(direction);
    if(direction.dot(this.head) < 0.99){
      this.rotateAround(axis, deg);
    }
  }

  rotateTowardsMomentum(deg){
    var direction = this.momentum.unit;
    var axis = this.rotationAxisTowards(direction);
    if(direction.dot(this.head) < 0.99){
      this.rotateAround(axis, deg);
    }
  }

  rotateAround(axis, deg){
    this.head = this.head.rotateAround(axis, deg).unit;
    this.v = this.v.rotateAround(axis, deg).unit;
    this.u = this.v.cross(this.head);
  }

  directionToClosestEntity(entityArray){
    var first = entityArray.sort((e1, e2) => e1.obstacle.distanceTo(this) - e2.obstacle.distanceTo(this))[0];
    return first.obstacle.loc.minus(this.loc).unit;
  }

  rotationAxisTowards(vector){
    return this.head.cross(vector);
  }

  maxY(){
    return this.offset*getTanDeg(this.horizontalViewRange);
  }

  maxZ(){
    return this.offset*getTanDeg(this.verticalViewRange);
  }

  scaleU(){
    return Dimensions.height/(2 * this.maxY());
  }

  scaleV(){
    return Dimensions.width/(2 * this.maxZ());
  }
}

function getTanDeg(deg) {
  var rad = deg * Math.PI/180;
  return Math.tan(rad);
}


module.exports = Player;
