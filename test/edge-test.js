const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Point = require('../lib/point');
const Vector = require('../lib/vector');
const Edge = require('../lib/edge');

describe('Edge', function(){
  context('truncates edge points if need be', function() {
    it('doesnt truncate when unnecessary', function(){
      var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5);
      var source = new Point(new Vector(5,10,0));
      var target = new Point(new Vector(5,20,0));
      var edge = new Edge(source, target);
      var computed_s = edge.xyzEndpointsRelativeTo(player).s;
      var computed_t = edge.xyzEndpointsRelativeTo(player).t;
      var expected_s = source.xyzOnVisPlane(player);
      var expected_t = target.xyzOnVisPlane(player);
      assert(computed_s.equals(expected_s));
      assert(computed_t.equals(expected_t));
    });

    it('truncates when necessary', function(){
      var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5);
      var source = new Point(new Vector(5,10,0));
      var target = new Point(new Vector(-5,10,0));
      var edge = new Edge(source, target);
      var computed_s = edge.xyzEndpointsRelativeTo(player).s;
      var computed_t = edge.xyzEndpointsRelativeTo(player).t;
      var expected_s = source.xyzOnVisPlane(player);
      var expected_t = new Vector(0,10,0);
      assert(computed_s.equals(expected_s));
      assert(computed_t.equals(expected_t));
    });

    it('returns nothing when whole edge out of view', function(){
      var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5);
      var source = new Point(new Vector(-15,10,0));
      var target = new Point(new Vector(-5,10,0));
      var edge = new Edge(source, target);
      var computed_s = edge.xyzEndpointsRelativeTo(player).s;
      var computed_t = edge.xyzEndpointsRelativeTo(player).t;
      assert(Object.keys(computed_t).length === 0);
      assert(Object.keys(computed_s).length === 0);
    });
  });
});
