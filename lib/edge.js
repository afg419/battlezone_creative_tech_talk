const Point = require('./point');

class Edge{
  constructor(source, target){
    this.source = source;
    this.target = target;
  }

  xyzEndpointsRelativeTo(player){
    var sVis = this.source.isVisibleTo(player)
    var tVis = this.target.isVisibleTo(player)
    s = {}
    t = {}
    if(sVis){
      var s = this.source.xyzOnVisPlane(player)
    }

    if(tVis){
      var t = this.target.xyzOnVisPlane(player)
    }

    if(!sVis && tVis){
      var s = this.target.xyzOnVisPlane(player, this.source.loc)
    }

    if(sVis && !tVis){
      var t = this.source.xyzOnVisPlane(player, this.target.loc)
    }

    return {s: s, t: t}
  }

  // sketchRelativeTo(player, sketch) {
  //   var xyzEnds = this.xyzEndpointsRelativeTo(player)
  //   if(!!xyzEnds.s.x && !!xyzEnds.t.x){
  //     var uvEnds = {s: this.source.uvOnVisPlane(player, xyzEnds.s), t: this.target.uvOnVisPlane(player, xyzEnds.t)}
  //     sketch.stroke(255, 255, 255);
  //     sketch.line(uvEnds.s.x, uvEnds.s.y, uvEnds.t.x, uvEnds.t.y);
  //   }
  // }
};

module.exports = Edge;
