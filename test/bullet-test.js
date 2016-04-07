const chai = require('chai');
const assert = chai.assert;

const Bullet = require('../lib/bullet');
const Vector = require('../lib/vector');
const Player = require('../lib/player');

describe('Bullet', function() {
  context('Bullet functionality', function() {
    var player = new Player(new Vector(10,0,0), new Vector(0,1,0), 5, 45, 45, 10);

    it('bullet should fly according to speed', function() {
      var bullet = new Bullet(new Vector(0,0,0), new Vector(1,0,0), 50, 1, new Vector(0,1,0));
      bullet.fly();
      assert(bullet.loc.equals(new Vector(50,0,0)));
      assert(bullet.prevLoc.equals(new Vector(0,0,0)));
    });

    it('bullet knows when it has passed an entity', function() {
      var bullet = new Bullet(new Vector(0,0,0), new Vector(1,0,0), 50, 1, new Vector(0,1,0));
      assert.isFalse(bullet.goneAsFarAs(player));
      bullet.fly();
      assert.isTrue(bullet.goneAsFarAs(player));
    });

    it('bullet knows when it has passed close to an entity', function() {
      var bullet = new Bullet(new Vector(0,0,0), new Vector(1,0,0), 50, 1, new Vector(0,1,0));
      bullet.fly();
      assert(bullet.trajectorysDistanceTo(player) < player.collSphere.width);
    });

    it('bullet knows when it hasnt passed close to an entity', function() {
      var bullet = new Bullet(new Vector(0,0,0), new Vector(0,1,0), 50, 1, new Vector(0,0,1));
      bullet.fly();
      assert.isFalse(bullet.trajectorysDistanceTo(player) < player.collSphere.width);
    });

    it('bullet knows when its hit an entity', function() {
      var bullet = new Bullet(new Vector(0,0,0), new Vector(1,0,0), 50, 1, new Vector(0,1,0));
      bullet.fly();
      assert(bullet.hits(player));
    });

    it('bullet damages an entity', function() {
      var bullet = new Bullet(new Vector(0,0,0), new Vector(1,0,0), 50, 1, new Vector(0,1,0));
      bullet.dealDamageTo(player);
      assert(player.health === 9);
    });
  });
});
