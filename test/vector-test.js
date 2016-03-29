const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Point = require('../lib/point');
const Vector = require('../lib/vector');
const Edge = require('../lib/edge');

describe('Vector', function(){
  context('returns new vector', function() {
    var vector = new Vector(1,3,2);
    var vector2 = new Vector(-2,3,5);
    var location = new Vector(2,3,4);

    it('should return a new vector with subtraction', function() {
      var new_vec = location.minus(vector);
      assert.equal((1,0,2), (new_vec.x,new_vec.y,new_vec.z))
    });

    it('should return a new vector from plus', function() {
      var new_vec = location.plus(vector);
      assert.equal((3,6,6), (new_vec.x,new_vec.y,new_vec.z))
    });

    it('should return the dot product from 2 vectors', function() {
      assert.equal(17, vector.dot(vector2))
    });

    it('should return cross product from 2 vectors', function() {
      var new_vec = vector.cross(vector2);
      assert.equal((9,-9,9), (new_vec.x,new_vec.y,new_vec.z))
    });

    it('should return the magnitude of length', function() {
      assert.equal(Math.sqrt(14), vector.mag());
    });
  });
});
