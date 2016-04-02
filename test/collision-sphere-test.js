const chai = require('chai');
const assert = chai.assert;

const CollisionSphere = require('../lib/collision_sphere');
const Player = require('../lib/player');
const Vector = require('../lib/vector');

describe('CollisionSphere', function() {
  context('CollsionsSpher functionality', function() {

    it('should return true for a detected collision', function() {
      var obstacle = new CollisionSphere(new Vector(25,0,0), 10);
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5, 45, 45, 16);

      assert.isTrue(player.collSphere.generalCollisionDetected(obstacle));
    });

    it('should return undefined when there is no collision', function() {
      var obstacle = new CollisionSphere(new Vector(25,0,0), 10);
      var player = new Player(new Vector(0,0,0), new Vector(0,1,0), 5, 45, 45, 10);

      assert.isFalse(player.collSphere.generalCollisionDetected(obstacle))
    });
  });
});
