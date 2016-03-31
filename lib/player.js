const Maths = require('./math')
const Vector = require('./vector');
const Dimensions = require('./screen_dimensions');


class Player{
  constructor(loc, head, off, theta, phi){
    this.loc = loc;
    this.head = head; //unit length
    this.offset = off;
    this.v = new Vector(0,0,1)
    this.shadow = loc.minus(Maths.scalMult(off, head))
    this.u = this.v.cross(this.head)
    this.horizontalViewRange = theta;
    this.verticalViewRange = phi;
  }

  updateVecs() {
    this.shadow = this.loc.minus(Maths.scalMult(this.offset, this.head))
    // this.v = new Vector(0,0,1)
    // this.u = this.v.cross(this.head)
  }

  rotateOnV(deg){
    var pre = this.head.rotateAround(this.v, deg)
    this.head = Maths.scalMult(1/pre.mag(), pre)
    this.u = this.v.cross(this.head)
  }

  rotateOnU(deg){
    var pre = this.head.rotateAround(this.u, deg)
    this.head = Maths.scalMult(1/pre.mag(), pre)
    this.v = this.head.cross(this.u)
  }

  // rotateOnU(deg){
  //   this.head = ...
  // }
  //
  // rotateOnHead(deg){
  //   this.v = ...
  // }

  // Vector.prototype.rotateHori = function(theta, body){
  //   let newX = Math.cos(theta)*this.x - Math.sin(theta)*this.y;
  //   let newY = Math.sin(theta)*this.x + Math.cos(theta)*this.y;
  //   return new Vector(newX, newY, this.z);
  // }

  rotateBy(deg){
    this.head = this.head.rotateHori(deg)
  }

  rotateVertBy(deg){
    this.head = this.head.rotateVert(deg, this)
    // this.head = new Vector(newX, newY, 0);
  }


  maxY(){
    return this.offset*Maths.getTanDeg(this.horizontalViewRange)
  }

  maxZ(){
    return this.offset*Maths.getTanDeg(this.verticalViewRange)
  }

  scaleU(){
    return Dimensions.height/(2 * this.maxY())
  }

  scaleV(){
    return Dimensions.width/(2 * this.maxZ())
  }
}

module.exports = Player;
