class ObstacleBuilder{
  square(corner, side1direction, side2direction, width){
    var edges = []
    var p0 = new Point(corner)
    var p1 = new Point(corner.plus(Maths.scalMult(width, side1direction)))
    var p2 = new Point(corner.plus(Maths.scalMult(width, side2direction)))
    var p3 = new Point(corner.plus(Maths.scalMult(width, side2direction)).plus(Maths.scalMult(width, side1direction)))

      edges[0] = new Edge(p0, p1);
      edges[1] = new Edge(p1, p2);
      edges[3] = new Edge(p2, p3);
      edges[4] = new Edge(p3, p0);

    var location = new Vector(Maths.scalMult(1/2,p2.minus(p1)))

    return new Face(edges, location)
  }
}
