const Maths = require('./math');
const Vector = require('./vector');
const Dimensions = require('./screen_dimensions');
const CollisionSphere = require('./collision_sphere');

class Player{
  constructor(loc, head, off, theta, phi, collRadius){
    this.loc = loc;
    this.head = head; //unit length
    this.offset = off;
    this.momentum = new Vector(0,0,0)
    this.v = new Vector(0,0,1);
    this.shadow = loc.minus(Maths.scalMult(off, head));
    this.u = this.v.cross(this.head);
    this.horizontalViewRange = theta;
    this.verticalViewRange = phi;
    this.collSphere = new CollisionSphere(loc, collRadius);
    this.health = 1;
    this.wealth = 0;
  }

  get dead(){
    return this.health === 0;
  }

  updateVecs() {
    this.loc = this.loc.plus(Maths.scalMult(1,this.momentum));
    this.depleteMomentum();
    this.shadow = this.loc.minus(Maths.scalMult(this.offset, this.head));
    this.collSphere.loc = this.loc;
  }

  depleteMomentum(){
    this.momentum = Maths.scalMult(30/31, this.momentum)
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
