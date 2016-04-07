const Point = require('./point');

class Face{
  constructor(pointWiseEdges, loc, color = [100,100,100]){
    this.edges = pointWiseEdges;
    this.loc = loc;
    this.color = color;
  }

  xyzEndpointsRelativeTo(player){
    return this.edges.map(function(edge){
      var s_t = edge.xyzEndpointsRelativeTo(player);
      return [s_t.s, s_t.t];
    }).reduce(function(acc, elt){return acc.concat(elt);}, []).filter((v) => {
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
    return player.loc.dist(this.loc);
  }

  sketchRelativeTo(player, sketch) {
    var uvVertices = this.uvEndpointsRelativeTo(player);
    sketch.fill(this.color[0], this.color[1], this.color[2]);
    sketch.beginShape();
      uvVertices.forEach(function(vertex){
        sketch.vertex(vertex.x, vertex.y);
      });
    sketch.endShape(sketch.CLOSE);
  }
}

module.exports = Face;
