const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');
const Dimensions = require('./screen_dimensions');
const Edge = require('./edge');
const Face = require('./face');
const Maths = require('./math')
const P5 = require('./p5');

class Level{

  get mainHall(){
    var floorFaces = []
    var floor1 = []
      floor1[0] = new Edge(new Point(new Vector(0,0,0)), new Point(new Vector(100,0,0)));
      floor1[1] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,100,0)));
      floor1[2] = new Edge(new Point(new Vector(100,100,0)), new Point(new Vector(0,100,0)));
      floor1[3] = new Edge(new Point(new Vector(0,100,0)), new Point(new Vector(0,0,0)));
    floorFaces[1-1] = new Face(floor1)
    var floor2 = []
      floor2[0] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(200,0,0)));
      floor2[1] = new Edge(new Point(new Vector(200,0,0)), new Point(new Vector(200,100,0)));
      floor2[2] = new Edge(new Point(new Vector(200,100,0)), new Point(new Vector(100,100,0)));
      floor2[3] = new Edge(new Point(new Vector(100,100,0)), new Point(new Vector(100,0,0)));
    floorFaces[2-1] = new Face(floor2)
    var floor3 = []
      floor3[0] = new Edge(new Point(new Vector(200,0,0)), new Point(new Vector(300,0,0)));
      floor3[1] = new Edge(new Point(new Vector(300,0,0)), new Point(new Vector(300,100,0)));
      floor3[2] = new Edge(new Point(new Vector(300,100,0)), new Point(new Vector(200,100,0)));
      floor3[3] = new Edge(new Point(new Vector(200,100,0)), new Point(new Vector(200,0,0)));
    floorFaces[3-1] = new Face(floor3)
    var floor4 = []
      floor4[0] = new Edge(new Point(new Vector(300,0,0)), new Point(new Vector(400,0,0)));
      floor4[1] = new Edge(new Point(new Vector(400,0,0)), new Point(new Vector(400,100,0)));
      floor4[2] = new Edge(new Point(new Vector(400,100,0)), new Point(new Vector(300,100,0)));
      floor4[3] = new Edge(new Point(new Vector(300,100,0)), new Point(new Vector(300,0,0)));
    floorFaces[4-1] = new Face(floor4)
    var floor5 = []
      floor5[0] = new Edge(new Point(new Vector(400,0,0)), new Point(new Vector(500,0,0)));
      floor5[1] = new Edge(new Point(new Vector(500,0,0)), new Point(new Vector(500,100,0)));
      floor5[2] = new Edge(new Point(new Vector(500,100,0)), new Point(new Vector(400,100,0)));
      floor5[3] = new Edge(new Point(new Vector(400,100,0)), new Point(new Vector(400,0,0)));
    floorFaces[5-1] = new Face(floor5)
    return floorFaces
  }

  get mainHallCeiling(){
    var floorFaces = []
    var floor1 = []
      floor1[0] = new Edge(new Point(new Vector(0,0,150)), new Point(new Vector(100,0,150)));
      floor1[1] = new Edge(new Point(new Vector(100,0,150)), new Point(new Vector(100,100,150)));
      floor1[2] = new Edge(new Point(new Vector(100,100,150)), new Point(new Vector(0,100,150)));
      floor1[3] = new Edge(new Point(new Vector(0,100,150)), new Point(new Vector(0,0,150)));
    floorFaces[1-1] = new Face(floor1)
    var floor2 = []
      floor2[0] = new Edge(new Point(new Vector(100,0,150)), new Point(new Vector(200,0,150)));
      floor2[1] = new Edge(new Point(new Vector(200,0,150)), new Point(new Vector(200,100,150)));
      floor2[2] = new Edge(new Point(new Vector(200,100,150)), new Point(new Vector(100,100,150)));
      floor2[3] = new Edge(new Point(new Vector(100,100,150)), new Point(new Vector(100,0,150)));
    floorFaces[2-1] = new Face(floor2)
    var floor3 = []
      floor3[0] = new Edge(new Point(new Vector(200,0,150)), new Point(new Vector(300,0,150)));
      floor3[1] = new Edge(new Point(new Vector(300,0,150)), new Point(new Vector(300,100,150)));
      floor3[2] = new Edge(new Point(new Vector(300,100,150)), new Point(new Vector(200,100,150)));
      floor3[3] = new Edge(new Point(new Vector(200,100,150)), new Point(new Vector(200,0,150)));
    floorFaces[3-1] = new Face(floor3)
    var floor4 = []
      floor4[0] = new Edge(new Point(new Vector(300,0,150)), new Point(new Vector(400,0,150)));
      floor4[1] = new Edge(new Point(new Vector(400,0,150)), new Point(new Vector(400,100,150)));
      floor4[2] = new Edge(new Point(new Vector(400,100,150)), new Point(new Vector(300,100,150)));
      floor4[3] = new Edge(new Point(new Vector(300,100,150)), new Point(new Vector(300,0,150)));
    floorFaces[4-1] = new Face(floor4)
    var floor5 = []
      floor5[0] = new Edge(new Point(new Vector(400,0,150)), new Point(new Vector(500,0,150)));
      floor5[1] = new Edge(new Point(new Vector(500,0,150)), new Point(new Vector(500,100,150)));
      floor5[2] = new Edge(new Point(new Vector(500,100,150)), new Point(new Vector(400,100,150)));
      floor5[3] = new Edge(new Point(new Vector(400,100,150)), new Point(new Vector(400,0,150)));
    floorFaces[5-1] = new Face(floor5)
    return floorFaces
  }

  get mainWall(){
    var wallFaces = []
    var wall1left = []
      wall1left[0] = new Edge(new Point(new Vector(0,0,0)), new Point(new Vector(100,0,0)));
      wall1left[1] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,0,150)));
      wall1left[2] = new Edge(new Point(new Vector(100,0,150)), new Point(new Vector(0,0,150)));
      wall1left[3] = new Edge(new Point(new Vector(0,0,150)), new Point(new Vector(0,0,0)));
    wallFaces[1-1] = new Face(wall1left)
    var wall1right = []
      wall1right[0] = new Edge(new Point(new Vector(0,100,0)), new Point(new Vector(100,100,0)));
      wall1right[1] = new Edge(new Point(new Vector(100,100,0)), new Point(new Vector(100,100,150)));
      wall1right[2] = new Edge(new Point(new Vector(100,100,150)), new Point(new Vector(0,100,150)));
      wall1right[3] = new Edge(new Point(new Vector(0,100,150)), new Point(new Vector(0,100,0)));
    wallFaces[2-1] = new Face(wall1right)

    var wall2left = []
      wall2left[0] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(200,0,0)));
      wall2left[1] = new Edge(new Point(new Vector(200,0,0)), new Point(new Vector(200,0,150)));
      wall2left[2] = new Edge(new Point(new Vector(200,0,150)), new Point(new Vector(100,0,150)));
      wall2left[3] = new Edge(new Point(new Vector(100,0,150)), new Point(new Vector(100,0,0)));
    wallFaces[3-1] = new Face(wall2left)
    var wall2right = []
      wall2right[0] = new Edge(new Point(new Vector(100,100,0)), new Point(new Vector(200,100,0)));
      wall2right[1] = new Edge(new Point(new Vector(200,100,0)), new Point(new Vector(200,100,150)));
      wall2right[2] = new Edge(new Point(new Vector(200,100,150)), new Point(new Vector(100,100,150)));
      wall2right[3] = new Edge(new Point(new Vector(100,100,150)), new Point(new Vector(100,100,0)));
    wallFaces[4-1] = new Face(wall2right)

    var wall4left = []
      wall4left[0] = new Edge(new Point(new Vector(300,0,0)), new Point(new Vector(400,0,0)));
      wall4left[1] = new Edge(new Point(new Vector(400,0,0)), new Point(new Vector(400,0,150)));
      wall4left[2] = new Edge(new Point(new Vector(400,0,150)), new Point(new Vector(300,0,150)));
      wall4left[3] = new Edge(new Point(new Vector(300,0,150)), new Point(new Vector(300,0,0)));
    wallFaces[5-1] = new Face(wall4left)
    var wall4right = []
      wall4right[0] = new Edge(new Point(new Vector(300,100,0)), new Point(new Vector(400,100,0)));
      wall4right[1] = new Edge(new Point(new Vector(400,100,0)), new Point(new Vector(400,100,150)));
      wall4right[2] = new Edge(new Point(new Vector(400,100,150)), new Point(new Vector(300,100,150)));
      wall4right[3] = new Edge(new Point(new Vector(300,100,150)), new Point(new Vector(300,100,0)));
    wallFaces[6-1] = new Face(wall4right)

    var wall3topRight = []
      wall3topRight[0] = new Edge(new Point(new Vector(200,100,0)), new Point(new Vector(200,200,0)));
      wall3topRight[1] = new Edge(new Point(new Vector(200,200,0)), new Point(new Vector(200,200,150)));
      wall3topRight[2] = new Edge(new Point(new Vector(200,200,150)), new Point(new Vector(200,100,150)));
      wall3topRight[3] = new Edge(new Point(new Vector(200,100,150)), new Point(new Vector(200,100,0)));
    wallFaces[7-1] = new Face(wall3topRight)
    var wall3bottomRight = []
      wall3bottomRight[0] = new Edge(new Point(new Vector(300,100,0)), new Point(new Vector(300,200,0)));
      wall3bottomRight[1] = new Edge(new Point(new Vector(300,200,0)), new Point(new Vector(300,200,150)));
      wall3bottomRight[2] = new Edge(new Point(new Vector(300,200,150)), new Point(new Vector(300,100,150)));
      wall3bottomRight[3] = new Edge(new Point(new Vector(300,100,150)), new Point(new Vector(300,100,0)));
    wallFaces[8-1] = new Face(wall3bottomRight)
    return wallFaces
  }

  get crossHall(){
    var floor3left = []
      floor3left[0] = new Edge(new Point(new Vector(200,-100,0)), new Point(new Vector(300,-100,0)));
      floor3left[1] = new Edge(new Point(new Vector(300,-100,0)), new Point(new Vector(300,0,0)));
      floor3left[2] = new Edge(new Point(new Vector(300,0,0)), new Point(new Vector(200,0,0)));
      floor3left[3] = new Edge(new Point(new Vector(200,0,0)), new Point(new Vector(200,-100,0)));
    var floorFaceLeft3 = new Face(floor3left)
    var floor3right = []
      floor3right[0] = new Edge(new Point(new Vector(200,100,0)), new Point(new Vector(300,100,0)));
      floor3right[1] = new Edge(new Point(new Vector(300,100,0)), new Point(new Vector(300,200,0)));
      floor3right[2] = new Edge(new Point(new Vector(300,200,0)), new Point(new Vector(200,200,0)));
      floor3right[3] = new Edge(new Point(new Vector(200,200,0)), new Point(new Vector(200,100,0)));
    var floorFaceRight3 = new Face(floor3right)
    return [floorFaceLeft3, floorFaceRight3]
  }

  get allHall(){
    return this.mainHallCeiling.concat(this.mainHall).concat(this.crossHall).concat(this.mainWall)
  }
}

module.exports = Level
