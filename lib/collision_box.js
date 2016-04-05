class CollisionBox {
  constructor(loc, width){
    this.loc = loc;
    this.width = width;
    this.cornerX = this.loc.x - this.width/2;
    this.cornerY = this.loc.y - this.width/2;
    this.cornerZ = this.loc.z - this.width/2;
  }

  generalCollisionDetected(sphere) {
    var location = sphere.loc;
    var rad = sphere.radius;
    var prop0 = this.cornerX < location.x + rad && location.x - rad < this.cornerX + this.width;
    var prop1 = this.cornerY < location.y + rad && location.y - rad < this.cornerY + this.width;
    var prop2 = this.cornerZ < location.z + rad && location.z - rad < this.cornerZ + this.width;
    return (prop0 && prop1 && prop2);
  }
}

module.exports = CollisionBox;
