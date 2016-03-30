const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Point = require('../lib/point');
const Vector = require('../lib/vector');
const Edge = require('../lib/edge');


describe('Point', function(){
  context('returns coords on in game vis plane', function() {
    it('should return coords on vis plane of point directly ahead', function(){
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
      var point = new Point(new Vector(0,10,0));
      assert(point.xyzOnVisPlane(player).equals(new Vector(0,0,0)))
    });

    it('should return coords on vis plane of point on vis plane', function() {
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
      var point = new Point(new Vector(2,0,3));
      assert(point.xyzOnVisPlane(player).equals(new Vector(2,0,3)))
    });

    it('should return undefined for point on shadows plane', function() {
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
      var point = new Point(new Vector(0,-5,1));
      var p = point.xyzOnVisPlane(player)
      console.log("This is undefined output for point on shadow plane: " + p.x + p.y + p.z );
    });

    it('should return coords on vis plane for arbitrary point in front of player', function(){
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
      var point = new Point(new Vector(1,2,1));
      assert(point.xyzOnVisPlane(player).equals(new Vector(5/7,0,5/7)));
    });
  });

  context('returns coords on screen vis plane', function() {
    it('should return coords on screen vis plane of point directly ahead', function(){
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
      var point = new Point(new Vector(0,10,0));
      debugger
      assert(point.uvOnVisPlane(player, 50, 100).equals(new Vector(25,50)))
    });

    // it('should return coords on vis plane of point on vis plane', function() {
    //   var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
    //   var point = new Point(new Vector(2,0,3));
    //   assert(point.xyzOnVisPlane(player).equals(new Vector(2,0,3)))
    // });
    //
    // it('should return undefined for point on shadows plane', function() {
    //   var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
    //   var point = new Point(new Vector(0,-5,1));
    //   var p = point.xyzOnVisPlane(player)
    //   console.log("This is undefined output for point on shadow plane: " + p.x + p.y + p.z );
    // });
    //
    // it('should return coords on vis plane for arbitrary point in front of player', function(){
    //   var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
    //   var point = new Point(new Vector(1,2,1));
    //   assert(point.xyzOnVisPlane(player).equals(new Vector(5/7,0,5/7)));
    // });
  });

});
