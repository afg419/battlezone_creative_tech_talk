const Maths = require('./math')
const Vector = require('./vector');
const Dimensions = require('./screen_dimensions');

class Point{
  constructor(loc){
    this.loc = loc;
  }

  xyzOnVisPlane(player){
    var projnum = player.head.dot(player.loc.minus(player.shadow))
    var projden = player.head.dot(this.loc.minus(player.shadow))
    var proj = projnum/projden
    return player.shadow.plus(Maths.scalMult(proj, this.loc.minus(player.shadow)))
  }

  uvOnVisPlane(player){
    var pp = this.xyzOnVisPlane(player)
    var uscal = pp.minus(player.loc).comp(player.u)
    var vscal = pp.minus(player.loc).comp(player.v)
    var uvec = Maths.scalMult(player.scaleU()*uscal, new Vector(1,0,0))
    var vvec = Maths.scalMult(-player.scaleV()*vscal, new Vector(0,1,0))
    return uvec.plus(vvec).plus(new Vector(Dimensions.height/2, Dimensions.width/2,0))
  }

  sketchRelativeTo(player, sketch){
    var uv = this.uvOnVisPlane(player)
    sketch.fill(255,255,255)
    sketch.ellipse(uv.x, uv.y, 10,10)
    sketch.color(255,255,255)
  }

  isVisibleTo(player){
    return player.head.dot(this.loc.minus(player.loc)) > 0
  }
}

module.exports = Point;
