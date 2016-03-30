const Point = require('./point');

class Edge{
  constructor(source, target){
    this.source = source;
    this.target = target;
  }

  sketchRelativeTo(player, sketch) {
    var screenSource = this.source.uvOnVisPlane(player);
    var screenTarget = this.target.uvOnVisPlane(player);
    var xyz = this.source.xyzOnVisPlane(player)
    sketch.stroke(0,0,0)
    sketch.text(`${xyz.x},${xyz.y},${xyz.z} `, screenSource.x, screenSource.y+10)

    sketch.stroke(255, 255, 255);
    sketch.line(screenSource.x, screenSource.y, screenTarget.x, screenTarget.y);
  }
};

module.exports = Edge;
