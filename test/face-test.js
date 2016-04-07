const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Point = require('../lib/point');
const Vector = require('../lib/vector');
const Edge = require('../lib/edge');
const Face = require('../lib/face');

describe('Face', function(){
  context('returns truncated xyz vertices', function() {
    var p1 = new Point(new Vector(0,0,0));
    var p2 = new Point(new Vector(10,0,10));
    var p3 = new Point(new Vector(20,0,0));
    var p4 = new Point(new Vector(10,0,-10));

    var g1 = new Point(new Vector(-5,0,0));
    var g2 = new Point(new Vector(5,0,10));
    var g3 = new Point(new Vector(15,0,0));
    var g4 = new Point(new Vector(5,0,-10));

    var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5);
    var e = [];
    var f = [];

    it('doesnt truncate when unnecessary', function(){
      e[0] = new Edge(p1, p2);
      e[1] = new Edge(p2, p3);
      e[2] = new Edge(p3, p4);
      e[3] = new Edge(p4, p1);
      var diamond = new Face(e);
      var computed = diamond.xyzEndpointsRelativeTo(player);
      assert(computed[0].equals(p1.loc));
      assert(computed[1].equals(p2.xyzOnVisPlane(player)));
      assert(computed[2].equals(p2.xyzOnVisPlane(player)));
    });

    it('truncates when necessary', function(){
      f[0] = new Edge(g1, g2);
      f[1] = new Edge(g2, g3);
      f[2] = new Edge(g3, g4);
      f[3] = new Edge(g4, g1);
      var diamond = new Face(f);
      var computed = diamond.xyzEndpointsRelativeTo(player);
      assert(computed[0].equals(new Vector(0,0,5)));
      assert(computed[3].equals(new Vector(0,0,0)));
      assert(computed[5].equals(new Vector(0,0,-5)));
    });

    it('returns distance to player given a loc', function(){
      f[0] = new Edge(g1, g2);
      f[1] = new Edge(g2, g3);
      f[2] = new Edge(g3, g4);
      f[3] = new Edge(g4, g1);
      var diamond = new Face(f, new Vector(0,0,0));
      var player = new Player(new Vector(5,0,0), new Vector(1,0,0), 5);
      assert(diamond.distanceTo2(player) === 5);
    });
  });
});
