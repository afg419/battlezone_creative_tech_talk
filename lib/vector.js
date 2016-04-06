class Vector{
  constructor(x,y,z){
    this.x = Math.round(x * 1000) / 1000;
    this.y = Math.round(y * 1000) / 1000;
    this.z = Math.round(z * 1000) / 1000;
  }

  dot(vec){
    return this.x*vec.x + this.y*vec.y + this.z*vec.z;
  }

  cross(vec){
    var new_x = (this.y * vec.z) - (this.z * vec.y);
    var new_y = -(this.x * vec.z) + (this.z * vec.x);
    var new_z = (this.x * vec.y) - (this.y * vec.x);
    return new Vector(new_x, new_y, new_z);
  }

  scaledBy(scalar){
    return new Vector(scalar*this.x, scalar*this.y, scalar*this.z);
  }

  get unit(){
    return this.scaledBy(1/this.mag());
  }

  plus(vec){
    return new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
  }

  minus(vec){
    return new Vector(this.x - vec.x, this.y - vec.y, this.z - vec.z);
  }

  mag(){
    return Math.sqrt(this.dot(this));
  }

  comp(vec){
    return (vec.dot(this))/(vec.mag());
  }

  dist(vec){
    return this.minus(vec).mag();
  }

  equals(vec) {
    return this.x === vec.x && this.y === vec.y && (this.z === vec.z || !!this.z === !!vec.z);
  }

  rotateAround(vec, deg){
    var rotX = new Vector(Math.cos(deg) + vec.x*vec.x*(1-Math.cos(deg)), vec.x*vec.y*(1-Math.cos(deg))-vec.z*Math.sin(deg), vec.x*vec.z*(1-Math.cos(deg))+vec.y*Math.sin(deg));
    var rotY = new Vector(vec.x*vec.y*(1-Math.cos(deg))+vec.z*Math.sin(deg), Math.cos(deg) + vec.y*vec.y*(1-Math.cos(deg)), vec.y*vec.z*(1-Math.cos(deg))-vec.x*Math.sin(deg));
    var rotZ = new Vector(vec.z*vec.x*(1-Math.cos(deg))-vec.y*Math.sin(deg), vec.z*vec.y*(1-Math.cos(deg))+vec.x*Math.sin(deg), Math.cos(deg) + vec.z*vec.z*(1-Math.cos(deg)));
    var newX = this.dot(rotX);
    var newY = this.dot(rotY);
    var newZ = this.dot(rotZ);
    return new Vector(newX, newY, newZ);
  }
}

module.exports = Vector;
