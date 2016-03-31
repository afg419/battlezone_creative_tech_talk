const P5 = require('./p5');
const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');
const Dimensions = require('./screen_dimensions');
const Edge = require('./edge');
const Face = require('./face');
const Maths = require('./math')
const LevelBuilder = require('./Level_builder')

class Level2{
  constructor(){
    this.build = new LevelBuilder()
  }

  get buildings(){
    return this.build.squareBuilding(100,100,100,100,100,true)  
  }
}

module.exports = Level2
