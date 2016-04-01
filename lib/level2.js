const LevelBuilder = require('./Level_builder')
const Obstacle = require('./obstacle')
const Vector = require('./vector')

class Level2{
  constructor(){
    this.build = new LevelBuilder()
  }

  get buildings(){
    var obstacles = []
      obstacles[0] = new Obstacle(this.build.squareBuilding(100,100,100,100,100,true), new Vector(150,150,50))
      // obstacles[1] = new Obstacle(this.build.squareBuilding(300,300,100,100,100,true), new Vector(350,350,50))
      // obstacles[2] = new Obstacle(this.build.squareBuilding(-100,-100,100,100,100,true), new Vector(150,150,50))
    return obstacles
  }
}

module.exports = Level2
