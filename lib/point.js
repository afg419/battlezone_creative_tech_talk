const Vector = require('./vector');
const Dimensions = require('./screen_dimensions');

class Point{
  constructor(loc){
    this.loc = loc;
  }

  xyzOnVisPlane(player, shadow = player.shadow){
    var projnum = player.head.dot(player.loc.minus(shadow));
    var projden = player.head.dot(this.loc.minus(shadow));
    var proj = projnum/projden;
    return shadow.plus(this.loc.minus(shadow).scaledBy(proj));
  }

  uvOnVisPlane(player, p = this.xyzOnVisPlane(player), height = Dimensions.height, width = Dimensions.width){
    var uscal = p.minus(player.loc).comp(player.u);
    var vscal = p.minus(player.loc).comp(player.v);
    var uvec = new Vector(1,0).scaledBy(player.scaleU()*uscal);
    var vvec = new Vector(0,-1).scaledBy(player.scaleV()*vscal);
    return uvec.plus(vvec).plus(new Vector(height/2, width/2));
  }

  sketchRelativeTo(player, sketch){
    var uv = this.uvOnVisPlane(player);
    sketch.fill(255,255,255);
    sketch.ellipse(uv.x, uv.y, 10,10);
    sketch.color(255,255,255);
  }

  isVisibleTo(player){
    return player.head.dot(this.loc.minus(player.loc)) > 0;
  }
}

module.exports = Point;
