const LevelBuilder = require('./Level_builder')
const Obstacle = require('./obstacle')

class Level2{
  constructor(){
    this.build = new LevelBuilder()
  }

  get buildings(){
    return new Obstacle(this.build.squareBuilding(100,100,100,100,100,true))
  }
}

module.exports = Level2
