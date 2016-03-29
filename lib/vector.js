var Vector = function(x,y,z){
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector.prototype.dot = function(vec){
  return this.x*vec.x + this.y*vec.y + this.z*vec.z;
};

Vector.prototype.cross = function(vec){
  var new_x = (this.y * vec.z) - (this.z * vec.y)
  var new_y = -(this.x * vec.z) + (this.z * vec.x)
  var new_z = (this.x * vec.y) - (this.y * vec.x)
  return new Vector(new_x, new_y, new_z)
};

Vector.prototype.plus = function(vec){
  return new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
};

Vector.prototype.minus = function(vec){
  return new Vector(this.x - vec.x, this.y - vec.y, this.z - vec.z);
};

Vector.prototype.mag = function(){
  return Math.sqrt(this.dot(this));
};

Vector.prototype.comp = function(vec){
  //this is the component of the projection of this onto vec
  return (vec.dot(this))/(vec.mag())
};

Vector.prototype.dist = function(vec){
  return this.minus(vec).mag();
};

Vector.prototype.rotateVert = function(phi){
  var rho = this.mag()
  var phi0 = acos(this.z/rho)
  var newPhi = phi0 + phi
  return new Vector(this.x/sin(phi0) * sin(newPhi), this.y/sin(phi0) * sin(newPhi), rho * cos(newPhi))
};

Vector.prototype.equals = function(vec) {
  return this.x === vec.x && this.y === vec.y && this.z === vec.z
};
// var scalMult = function(a, vec){
//     return new Vector(a*vec.x, a*vec.y, a*vec.z);
// };
//
// function getTanDeg(deg) {
//   var rad = deg * Math.PI/180;
//   return Math.tan(rad);
// }

module.exports = Vector;
