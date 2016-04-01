const Point = require('./point');
const Edge = require('./edge');
const Maths = require('./math');
const Vector = require('./vector');

class Face{
  constructor(pointWiseEdges){
    this.edges = pointWiseEdges;
  }

  xyzEndpointsRelativeTo(player){
    return this.edges.map(function(edge){
      var s_t = edge.xyzEndpointsRelativeTo(player);
      return [s_t.s, s_t.t];
    }).reduce(function(acc, elt){return acc.concat(elt)}, []).filter((v) => {
      return v.x != undefined;
    });
  }

  uvEndpointsRelativeTo(player) {
    var xyzVertices = this.xyzEndpointsRelativeTo(player);
    var pointHelper = new Point();
    return xyzVertices.map(function(vertex){
      return pointHelper.uvOnVisPlane(player, vertex);
    });
  }

  normalVector(origin = new Vector(0,0,0)){
    var e0 = this.edges[0]
    var e1 = this.edges[1]
    var p0 = e0.source.loc
    var p1 = e0.target.loc
    var p2 = e1.target.loc
    var a = p0.minus(p1)
    var b = p2.minus(p1)
    var pre = a.cross(b)
    var testOrientation = p0.minus(origin)
    if (origin && testOrientation.dot(pre) < 0){
      pre = Maths.scalMult(-1,pre)
    }
    return Maths.scalMult(1/pre.mag(), pre)
  }

  distanceTo(player){
    var p = player.loc
    var q = this.edges[0].source.loc
    var projectable = p.minus(q)
    return Math.abs(projectable.comp(this.normalVector()))
  }

  sketchRelativeTo(player, sketch) {
    var uvVertices = this.uvEndpointsRelativeTo(player)
    sketch.fill(100,100,100)
    sketch.beginShape();
      uvVertices.forEach(function(vertex){
        sketch.vertex(vertex.x, vertex.y);
      });
    sketch.endShape(sketch.CLOSE);
  };
};

module.exports = Face;
