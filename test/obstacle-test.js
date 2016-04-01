const Obstacle = require('../lib/obstacle');
const Vector = require('../lib/vector');
const Player = require('../lib/player');
const LevelBuilder = require('../lib/level_builder');

describe('obstacle functionality', function(){
  context('weird bug, why?', function() {
    it('computes normal vector to plane wrt to origin and flips', function(){
      // e[0] = new Edge(p1, p2)
      // e[1] = new Edge(p2, p3)
      // e[2] = new Edge(p3, p4)
      // e[3] = new Edge(p4, p1)
      // var origin = new Vector(0,-2,0)
      // var diamond = new Face(e)
      // var computed = diamond.normalVector(origin)
      var builder = new LevelBuilder()
      var player = new Player(new Vector(160.257,-5.237,25), new Vector(0.074,0.997,0), 5);
      var obs = new Obstacle(builder.squareBuilding(100,100,100,100,100,true), new Vector(150,150,50));
      var computed = obs.visibleFacesTo(player);
      debugger

      assert(computed.equals(new Vector(0,1,0)))
    });
  });
});
