const ObstacleBuilder = require('./obstacle_builder');
const Vector = require('./vector');
const ShipBody = require('./ship_body');
const Turret = require('./turret');

class Mothership{
  constructor(width = 1000, count = 10, x = 1000, y = -6000, z = 2200){
    this.build = new ObstacleBuilder();
    this.width = width;
    this.count = count;
    this.cornerX = x;
    this.cornerY = y;
    this.cornerZ = z;
  }

  get bodyPipe(){
    var body = [];
    for(var i = 0; i < this.count; i++){
      var center = new Vector(this.cornerX + this.width/2 + i*this.width, this.cornerY - this.width/2, this.cornerZ );
      body.push(new ShipBody(center, this.width));    }
    for(var j = 1; j < this.count - 6; j++){
      var center2 = new Vector(this.cornerX + this.width/2 + j*this.width, this.cornerY + this.width/2, this.cornerZ + this.width);
      body.push(new ShipBody(center2, this.width));
    }
    for(var j = 5; j < this.count - 3; j++){
      var center3 = new Vector(this.cornerX + this.width/2 + j*this.width, this.cornerY + this.width/2, this.cornerZ);
      body.push(new ShipBody(center3, this.width));
    }
    for(var k = 1; k < this.count - 6; k++){
      var center4 = new Vector(this.cornerX + this.width/2 + k*this.width, this.cornerY - 3*this.width/2,this.cornerZ - this.width);
      body.push(new ShipBody(center4, this.width));
    }
    for(var k = 5; k < this.count - 3; k++){
      var center5 = new Vector(this.cornerX + this.width/2 + k*this.width, this.cornerY - 1*this.width/2,this.cornerZ - this.width);
      body.push(new ShipBody(center5, this.width));
    }
    for(var l = 2; l < this.count - 5; l++){
      var center6 = new Vector(this.cornerX + this.width/2 + l*this.width, this.cornerY - 3*this.width/2, this.cornerZ + this.width);
      body.push(new ShipBody(center6, this.width));
    }
    return body;
  }

  get bodyTurrets(){
    var turrets = [];
    for(var i = 0; i < this.count - 5; i++){
      var center = new Vector(this.cornerX + this.width/2 + i*this.width, this.cornerY - this.width/2, this.cornerZ );
      var top = center.plus(new Vector(0,0,this.width/2));
      var left = center.plus(new Vector(0,-this.width/2,0));
      var right = center.plus(new Vector(0,this.width/2,0));
      var bottom = center.plus(new Vector(0,0, -this.width/2));
      turrets.push(new Turret(top,this.width/15 + 5,this.width/15));
      turrets.push(new Turret(left,this.width/15 + 5,this.width/15));
      turrets.push(new Turret(right,this.width/15 + 5,this.width/15));
      turrets.push(new Turret(bottom,this.width/15 + 5,this.width/15));
    }
    return turrets;
  }

  get frontFace(){
    return [];
  }
  get ship(){
    return this.bodyPipe;
  }

  get turrets(){
    return this.bodyTurrets;
  }
}

module.exports = Mothership;
