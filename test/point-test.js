const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Point = require('../lib/point');
const Vector = require('../lib/vector');
const Dimensions = require('../lib/screen_dimensions');


describe('Point', function(){
  context('returns coords on in game vis plane', function() {
    it('should return coords on vis plane of point directly ahead', function(){
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
      var point = new Point(new Vector(0,10,0));
      assert(point.xyzOnVisPlane(player).equals(new Vector(0,0,0)));
    });

    it('should return coords on vis plane of point on vis plane', function() {
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
      var point = new Point(new Vector(2,0,3));
      assert(point.xyzOnVisPlane(player).equals(new Vector(2,0,3)));
    });

    it('should return undefined for point on shadows plane', function() {
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
      var point = new Point(new Vector(0,-5,1));
      var p = point.xyzOnVisPlane(player);
      console.log("This is undefined xyz on Vis Plane output for point on shadow plane: " + p.x + p.y + p.z );
    });

    it('should return coords on vis plane for arbitrary point in front of player', function(){
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
      var point = new Point(new Vector(1,2,1));
      assert(point.xyzOnVisPlane(player).equals(new Vector(5/7,0,5/7)));
    });
  });

  context('returns coords on screen vis plane', function() {
    it('should return coords on screen vis plane of point directly ahead', function(){
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5, 45, 45);
      var point = new Point(new Vector(0,10,0));
      assert(point.uvOnVisPlane(player).equals(new Vector(Dimensions.height/2, Dimensions.width/2)));
    });

    it('should return coords on vis plane of point on vis plane', function() {
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5, 45 , 45 );
      var point = new Point(new Vector(0,0,5));
      assert(point.uvOnVisPlane(player).equals(new Vector(Dimensions.height/2, 0)));
    });

    it('should return undefined for point on shadows plane', function() {
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5);
      var point = new Point(new Vector(0,-5,1));
      var p = point.uvOnVisPlane(player);
      console.log("This is undefined uv on Vis Plane output for point on shadow plane: " + p.x + p.y + p.z );
    });

    it('should return coords on vis plane for arbitrary point in front of player', function(){
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5, 45 ,45);
      var point = new Point(new Vector(1,2,1));
      var uv = point.uvOnVisPlane(player);
      var expected_uv = new Vector(Dimensions.height/2 - (5/7)*player.scaleU(), Dimensions.width/2 - (5/7)*player.scaleV());
      assert(uv.x.round === expected_uv.x.round);
      assert(uv.y.round === expected_uv.y.round);
    });
  });

  context('returns coords on screen vis plane projected to custom shadow', function() {
    it('should return coords on xyz vis plane of point with perp shadow head colinear', function(){
      var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 45);
      var point1 = new Point(new Vector(5,10,0));
      var point2 = new Point(new Vector(-5,10,0));
      assert(point1.xyzOnVisPlane(player,point2.loc).equals(new Vector(0,10,0)));
    });

    it('should return coords on xyz vis plane of point with nonperp shadow head', function() {
      var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45 , 45 );
      var point1 = new Point(new Vector(5,10,0));
      var point2 = new Point(new Vector(-5,-10,0));
      assert(point1.xyzOnVisPlane(player,point2.loc).equals(new Vector(0,0,0)));
    });
  });


});
