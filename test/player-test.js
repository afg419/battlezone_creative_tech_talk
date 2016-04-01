const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Point = require('../lib/point');
const Vector = require('../lib/vector');
const Edge = require('../lib/edge');
const CollisionSphere = require('../lib/collision_sphere')

describe('Player', function(){
  context('Player functionality', function() {
    var location = new Vector(0,0,0);
    var heading = new Vector(0,1,0);
    var collSphere = new CollisionSphere(location, 5)

    it('should compute shadow location', function(){
      var player = new Player(location, heading, 5);

      assert(player.shadow.equals(new Vector(0,-5,0)));
    });

    it('should instantiate with a CollisionSphere', function(){
      var player = new Player(location, heading, 5, 30, 30, 5);

      assert(player.collSphere.loc.equals(new Vector(0,0,0)));
    });

    it('should compute u axis from heading and v', function(){
      var player = new Player(location, heading, 5);
      assert(player.u.equals(new Vector(-1,0,0)));
    });

    it('should update the collSphere location when player location changes', function() {
      var player = new Player(location, heading, 5, 30, 30, 5);
      player.loc = new Vector(1,0,0);
      player.updateVecs();

      assert(player.collSphere.loc.equals(new Vector(1,0,0)));
    });

    it('should compute in game view port size', function(){
      var player = new Player(location, heading, 5, 45, 30);
      assert.equal(5, Math.round(player.maxY()));
      assert.equal(5*(Math.sqrt(3))/3, player.maxZ());
    })
  });
});
