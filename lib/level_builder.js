const P5 = require('./p5');
const Vector = require('./vector');
const Point = require('./point');
const Edge = require('./edge');
const Face = require('./face');

class LevelBuilder{
  squareBuilding(x,y,l,w,h,ceiling){
    var buildingFaces = []
    var face0 = []
      face0[0] = new Edge(new Point(new Vector(x,y,0)), new Point(new Vector(x,y,h)));
      face0[1] = new Edge(new Point(new Vector(x,y,h)), new Point(new Vector(x,y+w,h)));
      face0[2] = new Edge(new Point(new Vector(x,y+w,h)), new Point(new Vector(x,y+w,0)));
      face0[3] = new Edge(new Point(new Vector(x,y+w,0)), new Point(new Vector(x,y,0)));
    buildingFaces[0] = new Face(face0)

    var face1 = []
      face1[0] = new Edge(new Point(new Vector(x,y+w,0)), new Point(new Vector(x,y+w,h)));
      face1[1] = new Edge(new Point(new Vector(x,y+w,h)), new Point(new Vector(x+l,y+w,h)));
      face1[2] = new Edge(new Point(new Vector(x+l,y+w,h)), new Point(new Vector(x+l,y+w,0)));
      face1[3] = new Edge(new Point(new Vector(x+l,y+w,0)), new Point(new Vector(x,y+w,0)));
    buildingFaces[1] = new Face(face1)

    var face2 = []
      face2[0] = new Edge(new Point(new Vector(x+l,y+w,0)), new Point(new Vector(x+l,y+w,h)));
      face2[1] = new Edge(new Point(new Vector(x+l,y+w,h)), new Point(new Vector(x+l,y,h)));
      face2[2] = new Edge(new Point(new Vector(x+l,y,h)), new Point(new Vector(x+l,y,0)));
      face2[3] = new Edge(new Point(new Vector(x+l,y,0)), new Point(new Vector(x+l,y+w,0)));
    buildingFaces[2] = new Face(face2)

    var face3 = []
      face3[0] = new Edge(new Point(new Vector(x+l,y,0)), new Point(new Vector(x+l,y,h)));
      face3[1] = new Edge(new Point(new Vector(x+l,y,h)), new Point(new Vector(x,y,h)));
      face3[2] = new Edge(new Point(new Vector(x,y,h)), new Point(new Vector(x,y,0)));
      face3[3] = new Edge(new Point(new Vector(x,y,0)), new Point(new Vector(x+l,y,0)));
    buildingFaces[3] = new Face(face3)

    if(ceiling){
      var face4 = []
        face4[0] = new Edge(new Point(new Vector(x,y,h)), new Point(new Vector(x+l,y,h)));
        face4[1] = new Edge(new Point(new Vector(x+l,y,h)), new Point(new Vector(x+l,y+w,h)));
        face4[2] = new Edge(new Point(new Vector(x+l,y+w,h)), new Point(new Vector(x,y+w,h)));
        face4[3] = new Edge(new Point(new Vector(x,y+w,h)), new Point(new Vector(x,y,h)));
      buildingFaces[4] = new Face(face4)
    }
    return buildingFaces
  }

  platform(x,y,l,w){
    var buildingFaces = []
    var face0 = []
      face0[0] = new Edge(new Point(new Vector(x,y,0)), new Point(new Vector(x,y,h)));
      face0[1] = new Edge(new Point(new Vector(x,y,h)), new Point(new Vector(x,y+w,h)));
      face0[2] = new Edge(new Point(new Vector(x,y+w,h)), new Point(new Vector(x,y+w,0)));
      face0[3] = new Edge(new Point(new Vector(x,y+w,0)), new Point(new Vector(x,y,0)));
    buildingFaces[0] = new Face(face0)
    return buildingFaces
  }
}
module.exports = LevelBuilder
