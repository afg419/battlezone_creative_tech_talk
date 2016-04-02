const Point = require('./point');
const Edge = require('./edge');
const Maths = require('./math');
const Vector = require('./vector');

class Face{
  constructor(pointWiseEdges, loc){
    this.edges = pointWiseEdges;
    this.loc = loc;
  }

  xyzEndpointsRelativeTo(player){
    return this.edges.map(function(edge){
      var s_t = edge.xyzEndpointsRelativeTo(player);
      return [s_t.s, s_t.t];
    }).reduce(function(acc, elt){return acc.concat(elt)}, []).filter((v) => {
      return v.x !== undefined;
    });
  }

  uvEndpointsRelativeTo(player) {
    var xyzVertices = this.xyzEndpointsRelativeTo(player);
    var pointHelper = new Point();
    return xyzVertices.map(function(vertex){
      return pointHelper.uvOnVisPlane(player, vertex);
    });
  }

  distanceTo2(player){
    return player.loc.dist(this.loc)
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
