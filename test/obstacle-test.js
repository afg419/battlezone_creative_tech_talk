const chai = require('chai');
const assert = chai.assert;

const Obstacle = require('../lib/obstacle');
const Vector = require('../lib/vector');
const Player = require('../lib/player');
const Face = require('../lib/face');

describe('Obstacle', function(){
  var loc1 = new Vector(2,0,0);
  var loc2 = new Vector(1,0,0);
  var f1 = new Face(0, loc1);
  var f2 = new Face(0, loc2);
  var faces = [f1, f2];
  var player = new Player(new Vector(10,0,0), new Vector(0,1,0), 5, 45, 45, 10);
  var obstacle = new Obstacle(faces, new Vector(0,0,0));

  it('orders faces by distance to player', function(){
    var unordered = obstacle.faces;
    assert(unordered[0].loc.equals(loc1));
    assert(unordered[1].loc.equals(loc2));

    var ordered = obstacle.orderedFacesByDistTo(player);
    assert(ordered[0].loc.equals(loc2));
    assert(ordered[1].loc.equals(loc1));
  });

  it('computes distance to player', function(){
    assert(obstacle.distanceTo(player) === 10);
  });
});
