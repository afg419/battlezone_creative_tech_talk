const Vector = require('./vector');
const Point = require('./point');
const Edge = require('./edge');
const Face = require('./face');
const Obstacle = require('./obstacle');

class ObstacleBuilder{
  square(corner, side1direction, side2direction, width, color){
    var edges = [];
    var p0 = new Point(corner);
    var p1 = new Point(corner.plus(side1direction.scaledBy(width)));
    var p3 = new Point(corner.plus(side2direction.scaledBy(width)));
    var p2 = new Point(corner.plus(side2direction.scaledBy(width)).plus(side1direction.scaledBy(width)));

      edges[0] = new Edge(p0, p1);
      edges[1] = new Edge(p1, p2);
      edges[2] = new Edge(p2, p3);
      edges[3] = new Edge(p3, p0);

    var location = corner.plus(p2.loc.minus(corner).scaledBy(0.5));
    return new Face(edges, location, color);
  }

  longRectSheet(corner, side1direction, side2direction, width, number, side, color){
    var faces = [];
    var sideDir = {1: side1direction, 2: side2direction}[side];
    for(var i = 0; i < number; i++){
      faces.push(this.square(corner, side1direction, side2direction, width, color));
      corner = corner.plus(sideDir.scaledBy(width));
    }
    return faces;
  }

  rectSheet(corner, side1direction, side2direction, width, number1, number2, color){
    var faces = [];
    for(var j = 0; j < number2; j++){
      faces = faces.concat(this.longRectSheet(corner, side1direction, side2direction, width, number1, 1, color));
      corner = corner.plus(side2direction.scaledBy(width));
    }
    return faces;
  }

  cubeObstacle(loc, width, color = [204,0,0]){
    var frontBottomLeft = loc.plus(new Vector(width/2, -width/2, -width/2));
    var backTopRight = loc.plus(new Vector(-width/2, width/2, width/2));
    var faces = [];
      faces[0] = this.square(frontBottomLeft, new Vector(0,1,0), new Vector(0,0,1), width, color);
      faces[1] = this.square(frontBottomLeft, new Vector(-1,0,0), new Vector(0,0,1), width, color);
      faces[2] = this.square(frontBottomLeft, new Vector(0,1,0), new Vector(-1,0,0), width, color);
      faces[3] = this.square(backTopRight, new Vector(0,0,-1), new Vector(0,-1,0), width, color);
      faces[4] = this.square(backTopRight, new Vector(1,0,0), new Vector(0,0,-1), width, color);
      faces[5] = this.square(backTopRight, new Vector(0,-1,0), new Vector(1,0,0), width, color);

    return new Obstacle(faces, loc);
  }

  bulletObstacle(loc, heading, u) {
    var bulletColor = [94,236,255];
    var faces = [];
    var edgeArrow1 = heading.scaledBy(7).plus(u.scaledBy(0.5));
    var edgeArrow2 = heading.scaledBy(7).plus(u.scaledBy(-0.5));
    faces[0] = this.square(loc, edgeArrow1, edgeArrow2, 2, bulletColor);

    return new Obstacle(faces, loc);
  }
}

module.exports = ObstacleBuilder;
