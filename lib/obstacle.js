class Obstacle{
  constructor(edgeWiseFaces, loc){
    this.faces = edgeWiseFaces;
    this.loc = loc; //vector representing any point on the 'inside' of an obstacle
  }

  distanceTo(player){
    return player.loc.dist(this.loc);
  }

  orderedFacesByDistTo(player){
    return this.faces.sort( (f1, f2) => {return (f2.distanceTo2(player) - f1.distanceTo2(player));});
  }

  sketchRelativeTo(player, sketch){
    this.orderedFacesByDistTo(player).forEach( face => face.sketchRelativeTo(player, sketch));
  }
}

module.exports = Obstacle;
