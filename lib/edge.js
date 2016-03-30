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
      console.log(`source is hidden, replaced by: (${s.x},${s.y},${s.z})`)
    }

    if(sVis && !tVis){
      var t = this.source.xyzOnVisPlane(player, this.target.loc)
    }

    return {s: s, t: t}
  }

  sketchRelativeTo(player, sketch) {
    var xyzEnds = this.xyzEndpointsRelativeTo(player)
    if(!this.source.isVisibleTo(player)){
      debugger
    }
    var uvEnds = {s: this.source.uvOnVisPlane(player, xyzEnds.s), t: this.target.uvOnVisPlane(player, xyzEnds.t)}
    // var screenSource = this.source.uvOnVisPlane(player);
    // var screenTarget = this.target.uvOnVisPlane(player);
    sketch.stroke(255, 255, 255);
    sketch.line(uvEnds.s.x, uvEnds.s.y, uvEnds.t.x, uvEnds.t.y);
  }
};

module.exports = Edge;
