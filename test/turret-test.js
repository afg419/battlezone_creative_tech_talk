const chai = require('chai');
const assert = chai.assert;

const Bullet = require('../lib/bullet');
const Vector = require('../lib/vector');
const Player = require('../lib/player');
const Turret = require('../lib/turret');

describe('Turret', function() {
  var loc = new Vector(0,0,0);
  it('turret can be destroyed', function() {
    var turret = new Turret(loc, 0, 5);
    assert.isFalse(turret.destroyed());
    turret.health = 0;
    assert.isTrue(turret.destroyed());
    turret.health = -5;
    assert.isTrue(turret.destroyed());
  });

  it('turret can detect player in range', function() {
    var turret = new Turret(loc, 0, 5);
    var player = new Player(new Vector(10,0,0), new Vector(0,1,0), 5, 45, 45, 10);
    assert.isTrue(turret.inFireRange(player));
    player.loc = new Vector(401,0,0);
    assert.isFalse(turret.inFireRange(player));
  });

  it('makes bullets', function(){
    var turret = new Turret(loc, 0, 5);
    var player = new Player(new Vector(10,0,0), new Vector(0,1,0), 5, 45, 45, 10);
    var bullet = turret.makeBullet(player);

    assert(bullet instanceof Bullet);
  });
});
