const chai = require('chai');
const assert = chai.assert;
const Vector = require('../lib/vector');

describe('Vector', function(){
  context('vector math', function() {
    var vector = new Vector(1,3,2);
    var vector2 = new Vector(-2,3,5);
    var location = new Vector(2,3,4);

    it('should return a new vector with subtraction', function() {
      var new_vec = location.minus(vector);
      assert.equal((1,0,2), (new_vec.x,new_vec.y,new_vec.z));
    });

    it('should return a new vector from plus', function() {
      var new_vec = location.plus(vector);
      assert.equal((3,6,6), (new_vec.x,new_vec.y,new_vec.z));
    });

    it('should return the dot product from 2 vectors', function() {
      assert.equal(17, vector.dot(vector2));
    });

    it('should return cross product from 2 vectors', function() {
      var new_vec = vector.cross(vector2);
      assert.equal((9,-9,9), (new_vec.x,new_vec.y,new_vec.z));
    });

    it('should return the magnitude of length', function() {
      assert.equal(Math.sqrt(14), vector.mag());
    });

    it('should return the scalar projection', function() {
      var vector3 = new Vector(1,0,0);
      var vector4 = new Vector(0.5,0,0.5);
      assert.equal(0.5, vector4.comp(vector3));

      var vector5 = new Vector(6,6,0);
      assert.equal((0.5*Math.sqrt(2)), vector3.comp(vector5));
    });

    it('should return the distance between two points', function() {
      var location2 = new Vector(2,3,8);
      assert.equal(4, location.dist(location2));
    });
  });
});
