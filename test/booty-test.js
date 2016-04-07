const chai = require('chai');
const assert = chai.assert;

const Booty = require('../lib/booty');
const Vector = require('../lib/vector');
const Player = require('../lib/player');


describe('Booty', function(){
  it('detects player in collection range', function(){
    var booty = new Booty(new Vector(0,0,0), 5, 10);
    var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5, 45, 45, 5);
    assert.isTrue(booty.inCollectionRange(player));
  });

  it('does not detect player outside detonation range', function(){
    var booty = new Booty(new Vector(0,0,0), 5, 10);
    var player = new Player(new Vector(0,10,0), new Vector(0,1,0), 5, 45, 45, 5);
    assert.isFalse(booty.inCollectionRange(player));
  });

  it('increases player wealth', function(){
    var booty1 = new Booty(new Vector(0,0,0), 5, 3, 10);
    var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5, 45, 45, 5);
    booty1.increaseWealth(player);
    assert(player.wealth === 10);
    booty1.increaseWealth(player);
    assert(player.wealth === 20);
  });
});
