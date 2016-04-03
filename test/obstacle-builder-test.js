const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Point = require('../lib/point');
const Vector = require('../lib/vector');
const Edge = require('../lib/edge');
const CollisionSphere = require('../lib/collision_sphere')

describe('Obstacle Builder', function(){
  context('builds cubes', function() {
    var location = new Vector(0,0,0);
    var heading = new Vector(0,1,0);
    var collSphere = new CollisionSphere(location, 5)

    it('should compute shadow location', function(){
    });
  });
});
