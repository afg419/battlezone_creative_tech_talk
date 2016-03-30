const Point = require('./point');
const Edge = require('./edge');

class Face{

  constructor(pointWiseEdges){
    this.edges = pointWiseEdges;
  }

  xyzEndpointsRelativeTo(player){
    return this.edges.map(function(edge){
      var s_t = edge.xyzEndpointsRelativeTo(player)
      return [s_t.s, s_t.t]
    }).reduce(function(acc, elt){return acc.concat(elt)}, []);
  }

  uvEndpointsRelativeTo(player) {
    var xyzVertices = this.xyzEndpointsRelativeTo(player).filter((v) => {
      return v.x != undefined;
    });
    var pointHelper = new Point()
    return xyzVertices.map(function(vertex){
      console.log(`vertex: (${vertex.x}, ${vertex.y}, ${vertex.z})`)
      return pointHelper.uvOnVisPlane(player, vertex)
    })
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
