const Vector = require('./vector');
const Point = require('./point');
const Edge = require('./edge');
const Face = require('./face');
const Obstacle = require('./obstacle');
const Maths = require('./math');


class ObstacleBuilder{
  square(corner, side1direction, side2direction, width){
    var edges = []
    var p0 = new Point(corner)
    var p1 = new Point(corner.plus(Maths.scalMult(width, side1direction)))
    var p3 = new Point(corner.plus(Maths.scalMult(width, side2direction)))
    var p2 = new Point(corner.plus(Maths.scalMult(width, side2direction)).plus(Maths.scalMult(width, side1direction)))

      edges[0] = new Edge(p0, p1);
      edges[1] = new Edge(p1, p2);
      edges[2] = new Edge(p2, p3);
      edges[3] = new Edge(p3, p0);

    var location = corner.plus(Maths.scalMult(1/2, p2.loc.minus(corner)))
    // debugger
    return new Face(edges, location)
  }

  mineObstacle(loc, width){
    var frontBottomLeft = loc.plus(new Vector(width/2, -width/2, -width/2))
    var backTopRight = loc.plus(new Vector(-width/2, width/2, width/2))
    var faces = []
      faces[0] = this.square(frontBottomLeft, new Vector(0,1,0), new Vector(0,0,1), width)
      faces[1] = this.square(frontBottomLeft, new Vector(-1,0,0), new Vector(0,0,1), width)
      faces[2] = this.square(frontBottomLeft, new Vector(0,1,0), new Vector(-1,0,0), width)
      faces[3] = this.square(backTopRight, new Vector(0,0,-1), new Vector(0,-1,0), width)
      faces[4] = this.square(backTopRight, new Vector(1,0,0), new Vector(0,0,-1), width)
      faces[5] = this.square(backTopRight, new Vector(0,-1,0), new Vector(1,0,0), width)

    return new Obstacle(faces, loc)
  }
}

module.exports = ObstacleBuilder
