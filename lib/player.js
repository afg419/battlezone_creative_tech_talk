const Maths = require('./math');
const Vector = require('./vector');
const Dimensions = require('./screen_dimensions');
const CollisionSphere = require('./collision_sphere');
const Bullet = require('./bullet');

class Player{
  constructor(loc, head, off, theta, phi, collRadius){
    this.loc = loc;
    this.head = head; //unit length
    this.offset = off;
    this.momentum = new Vector(0,0,0);
    this.v = new Vector(0,0,1);
    this.shadow = loc.minus(Maths.scalMult(off, head));
    this.u = this.v.cross(this.head);
    this.horizontalViewRange = theta;
    this.verticalViewRange = phi;
    this.collSphere = new CollisionSphere(loc, collRadius);
    this.health = 10;
    this.wealth = 0;
    this.win = false;
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
    var location = this.loc.plus(this.momentum).plus(Maths.scalMult(5, this.head)).plus(Maths.scalMult(side * 4, this.u)).minus(Maths.scalMult(4, this.v));
    var pre = this.head;//.plus(Maths.scalMult(0.05, this.momentum));
    var heading = Maths.scalMult(1/pre.mag(), pre);
    return new Bullet(location, heading, (this.speed + 45), 1, this.u);
  }

  updateVecs() {
    this.loc = this.loc.plus(Maths.scalMult(1,this.momentum));
    this.shadow = this.loc.minus(Maths.scalMult(this.offset, this.head));
    this.collSphere.loc = this.loc;
  }

  rotateOnV(deg){
    var pre = this.head.rotateAround(this.v, deg);
    this.head = Maths.scalMult(1/pre.mag(), pre);
    this.u = this.v.cross(this.head);
  }

  rotateOnU(deg){
    var pre = this.head.rotateAround(this.u, deg);
    this.head = Maths.scalMult(1/pre.mag(), pre);
    this.v = this.head.cross(this.u);
  }

  rotateOnHead(deg){
    var pre = this.v.rotateAround(this.head, deg);
    this.v = Maths.scalMult(1/pre.mag(), pre);
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
    var preDir = this.momentum;
    var direction = Maths.scalMult(1/preDir.mag(), preDir);
    var axis = this.rotationAxisTowards(direction);
    if(direction.dot(this.head) < 0.99){
      this.rotateAround(axis, deg);
    }
  }

  rotateAround(axis, deg){
    var preHead = this.head.rotateAround(axis, deg);
    var preV = this.v.rotateAround(axis, deg);
    this.head = Maths.scalMult(1/preHead.mag(), preHead);
    this.v = Maths.scalMult(1/preV.mag(), preV);
    this.u = this.v.cross(this.head);
  }

  directionToClosestEntity(entityArray){
    var first = entityArray.sort((e1, e2) => e1.obstacle.distanceTo(this) - e2.obstacle.distanceTo(this))[0];
    var pre = first.obstacle.loc.minus(this.loc);
    return Maths.scalMult(1/pre.mag(), pre);
  }

  rotationAxisTowards(vector){
    return this.head.cross(vector);
  }

  maxY(){
    return this.offset*Maths.getTanDeg(this.horizontalViewRange);
  }

  maxZ(){
    return this.offset*Maths.getTanDeg(this.verticalViewRange);
  }

  scaleU(){
    return Dimensions.height/(2 * this.maxY());
  }

  scaleV(){
    return Dimensions.width/(2 * this.maxZ());
  }
}

module.exports = Player;
