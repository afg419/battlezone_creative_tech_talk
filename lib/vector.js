var Vector = function(x,y,z){
  this.x = Math.round(x * 1000) / 1000;
  this.y = Math.round(y * 1000) / 1000;
  this.z = Math.round(z * 1000) / 1000;
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

Vector.prototype.rotateHori = function(theta, body){
  let newX = Math.cos(theta)*this.x - Math.sin(theta)*this.y;
  let newY = Math.sin(theta)*this.x + Math.cos(theta)*this.y;
  return new Vector(newX, newY, this.z);
}

Vector.prototype.rotateVert = function(phi, body){
  let newX = Math.cos(theta)*this.x - Math.sin(theta)*this.y;
  let newY = Math.sin(theta)*this.x + Math.cos(theta)*this.y;
  return new Vector(newX, newY, this.z);
};

Vector.prototype.equals = function(vec) {
  return this.x === vec.x && this.y === vec.y && (this.z === vec.z || !!this.z === !!vec.z)
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
