const ObstacleBuilder = require('./obstacle_builder');
const Vector = require('./vector');
const ShipBody = require('./ship_body');
// const Obstacle = require('./obstacle');
// const Maths = require('./math');
const CollisionBox = require('./collision_box');

class Mothership{
  constructor(){
    this.build = new ObstacleBuilder();
    this.width = 1000;
    this.count = 10;
    this.cornerX = 1000;
    this.cornerY = -6000;
    this.cornerZ = 2200;
  }
  //
  // get leftPanel(){
  //   var corner = new Vector(this.cornerX, this.cornerY, this.cornerZ);
  //   var dir1 = new Vector(1,0,0);
  //   var dir2 = new Vector(0,1,0);
  //   return this.build.rectSheet(corner, dir1, dir2, this.width, this.count, 1, [150,150,150]);
  // }
  //
  // get rightPanel(){
  //   var corner = new Vector(this.cornerX, this.cornerY - this.width/2, this.cornerZ + this.width/2);
  //   var dir1 = new Vector(1,0,0);
  //   var dir2 = new Vector(0,0,1);
  //   return this.build.rectSheet(corner, dir1, dir2, this.width, this.count, 1, [150,150,150]);
  // }

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
  // get topDeck(){
    // var corner = new Vector(3000, -4000, -200);
    // var dir1 = new Vector(1,0,0);
    // var dir2 = new Vector(0,1,0);
    // return this.build.rectSheet(corner, dir1, dir2, this.width, 25, 1, [150,150,150]);
  // }
  //
  // get leftTopFan(){
  //   var corner = new Vector(3000, -4000, -200);
  //   var dir1 = new Vector(1,0,0);
  //   var dir2 = new Vector(0,-3/(Math.sqrt(2)),1);
  //   return this.build.rectSheet(corner, dir1, dir2, 1000, 10, 1, [150,150,150]);
  // }
  //
  // get rightTopFan(){
  //   var corner = new Vector(3000, -4000 + this.width, -200);
  //   var dir1 = new Vector(1,0,0);
  //   var dir2 = new Vector(0,3/(Math.sqrt(2)),1);
  //   return this.build.rectSheet(corner, dir1, dir2, 1000, 10, 1, [150,150,150]);
  // }
  //
  // get leftBottomDeck(){
  //   var corner = new Vector(3000, -4000, -200);
  //   var dir1 = new Vector(1,0,0);
  //   var dir2 = new Vector(0,1/(Math.sqrt(2)),-3/(Math.sqrt(2)));
  //   dir2 = Maths.scalMult(1/dir2.mag(), dir2);
  //   return this.build.rectSheet(corner, dir1, dir2, this.width, 25, 1, [150,150,150]);
  // }
  //
  // get rightBottomDeck(){
  //   var corner = new Vector(3000, -4000 + 1*this.width, -200);
  //   var dir1 = new Vector(1,0,0);
  //   var dir2 = new Vector(0,-1/(Math.sqrt(2)),-3/(Math.sqrt(2)));
  //   dir2 = Maths.scalMult(1/dir2.mag(), dir2);
  //   return this.build.rectSheet(corner, dir1, dir2, this.width, 25, 1, [150,150,150]);
  // }

  get frontFace(){
    // var corner = new Vector(3000, -4000, -200);
    // var dir1 = new Vector(0,1,0);
    // var dir2 = new Vector(0,1/(Math.sqrt(2)),-3/(Math.sqrt(2)));
    // dir2 = Maths.scalMult(1/dir2.mag(), dir2);
    // var f1 = this.build.square(corner, dir1, dir2, 1000, [70,70,70]);
    //
    // var corner2 = new Vector(3000, -4000 + 3*this.width, -200);
    // var dir3 = new Vector(0,-1,0);
    // var dir4 = new Vector(0,-1/(Math.sqrt(2)),-3/(Math.sqrt(2)));
    // dir4 = Maths.scalMult(1/dir4.mag(), dir4);
    // var f2 = this.build.square(corner2, dir3, dir4, 1000, [70,70,70]);
    //
    // return [f1, f2]
    return [];
  }

  // get backRightSide(){
  //   var corner = new Vector(3000, -4000, -200 - 3*this.width);
  //   var dir1 = new Vector(0,0,1);
  //   var dir2 = new Vector(1,0,0);
  //   return this.build.rectSheet(corner, dir1, dir2, this.width, 3, 4, [150,150,150]);
  // }
  //
  // get frontRightSide(){
  //   var corner = new Vector(3000+5*this.width, -4000, -200 - 3*this.width);
  //   var dir1 = new Vector(0,0,1);
  //   var dir2 = new Vector(1,0,0);
  //   return this.build.rectSheet(corner, dir1, dir2, this.width, 3, 4, [150,150,150]);
  // }
  //
  // get backLeftSide(){
  //   var corner = new Vector(3000, -4000+3*this.width, -200 - 3*this.width);
  //   var dir1 = new Vector(0,0,1);
  //   var dir2 = new Vector(1,0,0);
  //   return this.build.rectSheet(corner, dir1, dir2, this.width, 3, 4, [150,150,150]);
  // }
  //
  // get frontLeftSide(){
  //   var corner = new Vector(3000+5*this.width,-4000+3*this.width, -200 - 3*this.width);
  //   var dir1 = new Vector(0,0,1);
  //   var dir2 = new Vector(1,0,0);
  //   return this.build.rectSheet(corner, dir1, dir2, this.width, 3, 4, [150,150,150]);
  // }

  // get frontFace(){
  //   var corner = new Vector(3000, -4000, -200);
  //   var dir11 = new Vector(0,1,0);
  //   var dir12 = new Vector(0,0,-1);
  //   var first = this.build.rectSheet(corner, dir11, dir12, this.width, 1, 3, [150,150,150]);
  //   var dir21 = new Vector(0,-1,0);
  //   var dir22 = new Vector(0,0,-1);
  //   var secondCorner = new Vector(3000, -4000 + 3*this.width, -200);
  //   var second = this.build.rectSheet(secondCorner, dir21, dir22, this.width, 1, 3, [150,150,150]);
  //   var third = this.build.square()
  //   return first.concat(second);
  // }

  // get faces(){
  //   return this.frontFace
  //   // .concat(this.leftBottomDeck)
  //   // .concat(this.rightBottomDeck)
  //   // // .concat(this.backRightSide)
  //   // // .concat(this.frontRightSide)
  //   // // .concat(this.backLeftSide)
  //   // // .concat(this.frontLeftSide)
  //   // .concat(this.frontFace)
  //   // .concat(this.leftTopFan)
  //   // .concat(this.rightTopFan)
  //   .concat(this.leftPanel)
  //   .concat(this.rightPanel);
  // }

  get ship(){
    // var o1 = [{obstacle: new Obstacle(this.faces, new Vector(0,0,0))}];
    var o2 = this.bodyPipe;
    // var o2 = {obstacle: new Obstacle(this.bottomDeck, new Vector(0,0,0))};
    return this.bodyPipe;
    // return o2.concat(o1);
  }
}

module.exports = Mothership;
