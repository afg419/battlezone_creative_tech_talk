class Obstacle{
  constructor(edgeWiseFaces, origin){
    this.faces = edgeWiseFaces
    this.origin = origin //vector representing any point on the 'inside' of an obstacle
  }

  // visibleFacesTo(player){
  //   return this.faces.filter(face => (face.normalVecComparisonTo(player, this.origin) < 0.1 ))
  // }

  distanceTo(player){
    return player.loc.dist(this.origin)
  }

  orderedFacesByDistTo(player){
    // return this.visibleFacesTo(player).sort((f1, f2) => {return (f2.distanceTo(player) - f1.distanceTo(player))})
    return this.faces.sort( (f1, f2) => {return (f2.distanceTo2(player) - f1.distanceTo2(player))} )
    // return this.faces.sort( function(f1, f2){return (f2.distanceTo2(player) - f1.distanceTo2(player))} )
  }

  // orderedFacesByNormalComparisonWith(player){
  //   // debugger
  //   return this.faces.sort((f1, f2) => {return (f2.normalVecComparisonTo(player,this.origin) - f1.normalVecComparisonTo(player, this.origin))})
  // }

  sketchRelativeTo(player, sketch){
    this.orderedFacesByDistTo(player).forEach( face => face.sketchRelativeTo(player, sketch))
    // this.orderedFacesByNormalComparisonWith(player).forEach( face => face.sketchRelativeTo(player, sketch))
  }
}

module.exports = Obstacle
