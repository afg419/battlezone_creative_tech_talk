const chai = require('chai');
const assert = chai.assert;

const Mine = require('../lib/mine');
const Vector = require('../lib/vector');
const Player = require('../lib/player');


describe('Mine', function(){
  it('detects player in detonation range', function(){
    var mine = new Mine(new Vector(0,0,0), 5, 5);
    var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5, 45, 45, 5);
    assert.isTrue(mine.inCollisionWith(player));
  });

  it('does not detect player outside detonation range', function(){
    var mine = new Mine(new Vector(0,0,0), 5, 5);
    var player = new Player(new Vector(0,10,0), new Vector(0,1,0), 5, 45, 45, 5);
    assert.isFalse(mine.inCollisionWith(player));
  });

  it('kills player in detonation range', function(){
    var mine = new Mine(new Vector(0,0,0), 5);
    var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5, 45, 45, 5);
    mine.detonate(player);
    assert(player.health === 0);
  });
});
