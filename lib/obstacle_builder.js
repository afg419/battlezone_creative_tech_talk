const Vector = require('./vector');
const Point = require('./point');
const Edge = require('./edge');
const Face = require('./face');
const Obstacle = require('./obstacle');
const Maths = require('./math');


class ObstacleBuilder{
  square(corner, side1direction, side2direction, width, color){
    var edges = [];
    var p0 = new Point(corner);
    var p1 = new Point(corner.plus(Maths.scalMult(width, side1direction)));
    var p3 = new Point(corner.plus(Maths.scalMult(width, side2direction)));
    var p2 = new Point(corner.plus(Maths.scalMult(width, side2direction)).plus(Maths.scalMult(width, side1direction)));

      edges[0] = new Edge(p0, p1);
      edges[1] = new Edge(p1, p2);
      edges[2] = new Edge(p2, p3);
      edges[3] = new Edge(p3, p0);

    var location = corner.plus(Maths.scalMult(1/2, p2.loc.minus(corner)));
    return new Face(edges, location, color);
  }

  mineObstacle(loc, width){
    var mineColor = [204,0,0];
    var frontBottomLeft = loc.plus(new Vector(width/2, -width/2, -width/2));
    var backTopRight = loc.plus(new Vector(-width/2, width/2, width/2));
    var faces = [];
      faces[0] = this.square(frontBottomLeft, new Vector(0,1,0), new Vector(0,0,1), width, mineColor);
      faces[1] = this.square(frontBottomLeft, new Vector(-1,0,0), new Vector(0,0,1), width, mineColor);
      faces[2] = this.square(frontBottomLeft, new Vector(0,1,0), new Vector(-1,0,0), width, mineColor);
      faces[3] = this.square(backTopRight, new Vector(0,0,-1), new Vector(0,-1,0), width, mineColor);
      faces[4] = this.square(backTopRight, new Vector(1,0,0), new Vector(0,0,-1), width, mineColor);
      faces[5] = this.square(backTopRight, new Vector(0,-1,0), new Vector(1,0,0), width, mineColor);

    return new Obstacle(faces, loc);
  }

  bootyObstacle(loc, width){
    var bootyColor = [204,163,0];
    var frontBottomLeft = loc.plus(new Vector(width/2, -width/2, -width/2));
    var backTopRight = loc.plus(new Vector(-width/2, width/2, width/2));
    var faces = [];
      faces[0] = this.square(frontBottomLeft, new Vector(0,1,0), new Vector(0,0,1), width, bootyColor);
      faces[1] = this.square(frontBottomLeft, new Vector(-1,0,0), new Vector(0,0,1), width, bootyColor);
      faces[2] = this.square(frontBottomLeft, new Vector(0,1,0), new Vector(-1,0,0), width, bootyColor);
      faces[3] = this.square(backTopRight, new Vector(0,0,-1), new Vector(0,-1,0), width, bootyColor);
      faces[4] = this.square(backTopRight, new Vector(1,0,0), new Vector(0,0,-1), width, bootyColor);
      faces[5] = this.square(backTopRight, new Vector(0,-1,0), new Vector(1,0,0), width, bootyColor);

    return new Obstacle(faces, loc);
  }

  bulletObstacle(loc, heading) {
    var bulletColor = [94,236,255];
    var faces = [];
    var p0 = new Point(loc);
    var p1 = new Point(loc.plus(Maths.scalMult(5, heading)));
    var edge = new Edge(p0, p1);
    faces[0] = new Face([edge], loc);

    return new Obstacle(faces, loc);
  }
}

module.exports = ObstacleBuilder;
