const chai = require('chai');
const assert = chai.assert;

const Vector = require('../lib/vector');
const ObstacleBuilder = require('../lib/obstacle_builder');
const Face = require('../lib/face');
const Obstacle = require('../lib/obstacle');

describe('Obstacle Builder', function(){
  context('builds cubes', function() {
    var builder = new ObstacleBuilder();
    it('constructs a square', function(){
      var corner = new Vector(0,0,0);
      var dir1 = new Vector(1,0,0);
      var dir2 = new Vector(0,1,0);
      var sqr = builder.square(corner, dir1, dir2,1);
      assert(sqr instanceof Face);
      assert(sqr.loc.equals(new Vector(0.5, 0.5, 0)));
    });

    it('constructs a cube Obstacle', function(){
      var center = new Vector(0,0,0);
      var width = 2;
      var cube = builder.cubeObstacle(center, width);
      assert(cube instanceof Obstacle);
      assert(cube.loc.equals(center));
    });
  });

  context('builds bullets', function() {
    var builder = new ObstacleBuilder();
    it('constructs a bullet', function(){
      var loc = new Vector(0,0,0);
      var head = new Vector(0,1,0);
      var u = new Vector(0,0,1);
      var bullet = builder.bulletObstacle(loc, head, u);

      assert(bullet instanceof Obstacle);
      assert(bullet.loc.equals(loc));
    });
  });
});
