const Maths = require('./math')
const Vector = require('./vector');
const Dimensions = require('./screen_dimensions');
const CollisionSphere = require('./collision_sphere');

class Player{
  constructor(loc, head, off, theta, phi, collRadius){
    this.loc = loc;
    this.head = head; //unit length
    this.offset = off;
    this.v = new Vector(0,0,1)
    this.shadow = loc.minus(Maths.scalMult(off, head))
    this.u = this.v.cross(this.head)
    this.horizontalViewRange = theta;
    this.verticalViewRange = phi;
    this.collSphere = new CollisionSphere(loc, collRadius)
  }

  updateVecs() {
    this.shadow = this.loc.minus(Maths.scalMult(this.offset, this.head))
    this.v = new Vector(0,0,1)
    this.u = this.v.cross(this.head)
    this.collSphere.loc = this.loc
  }

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
