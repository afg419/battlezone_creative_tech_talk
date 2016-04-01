class Obstacle{
  constructor(edgeWiseFaces, origin){
    this.faces = edgeWiseFaces
    this.origin = origin //vector representing any point on the 'inside' of an obstacle
  }

  

  orderedFacesByDistTo(player){
    return this.faces.sort((f1, f2) => {return (f2.distanceTo(player) - f1.distanceTo(player))})
  }

  sketchRelativeTo(player, sketch){
    this.orderedFacesByDistTo(player).forEach( face => face.sketchRelativeTo(player, sketch))
  }
}

module.exports = Obstacle
