// require('./p5.dom');
const P5 = require('./p5');
require('./main');

const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');
const Dimensions = require('./screen_dimensions');

var s = function(sketch) {
  var height = Dimensions.height
  var width = Dimensions.width;
  sketch.setup = function(){
    var cnv = sketch.createCanvas(height , width);
  }

  var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5 , 45,45)
  // p1 = new Point(new Vector(100,0,0))
  // p2 = new Point(new Vector(200,0,0))
  // p3 = new Point(new Vector(-100,0,0))
  // p4 = new Point(new Vector(0,10,10))
  // p5 = new Point(new Vector(0,-10,10))
  // p6 = new Point(new Vector(5,5,0))
  // p7 = new Point(new Vector(5,0,5))
  // p8 = new Point(new Vector(-5,0,0))

  // points = [p1,p2,p3, p4, p5, p6, p7, p8]
  let points = []
  Array.apply(null, Array(5)).forEach((e,i,c) => {
    Array.apply(null, Array(5)).forEach((e,j,c) => {
      Array.apply(null, Array(5)).forEach((e,k,c) => {
        points.push(new Point(new Vector(30*i, 30*j, 30*k)))
      })
    })
  })

  // let points2 = Array.apply(null, Array(1000)).map(function (_, i) {return i;}).map((e,i,c) => {
  //   // return new Point(new Vector(5*i, 1, 0))
  //   // return new Point(new Vector(5*i, -1, 0))
  //   // return new Point(new Vector(5*i, 0, 6))
  //   return new Point(new Vector(10, 5*i, -6))
  // })
  //
  // let points3 = Array.apply(null, Array(1000)).map(function (_, i) {return i;}).map((e,i,c) => {
  //   // return new Point(new Vector(5*i, 1, 0))
  //   // return new Point(new Vector(5*i, -1, 0))
  //   // return new Point(new Vector(5*i, 0, 6))
  //   return new Point(new Vector(10, 5*i, 18))
  // })

  points.push(new Point(new Vector(10,0,0)))
  points.push(new Point(new Vector(10,1,0)))
  points.push(new Point(new Vector(10,2,0)))

  // let points = points1.concat(points2).concat(points3)

  sketch.draw = function(){
    sketch.background(0,0,0)
    sketch.stroke(255,255,255)
    sketch.line(0, width/2 - 30, height,width/2 - 30)
    points.forEach(function(point){
      if(point.isVisibleTo(player)){
        point.sketchRelativeTo(player, sketch)
      }
    })
  }

  sketch.keyPressed = function(){
    if(sketch.key === "W"){
      player.loc = player.loc.plus(player.head)
    }
    if(sketch.key === "S"){
      player.loc = player.loc.minus(player.head)
    }
    if(sketch.key === "D"){
      player.rotateBy(0.01)
    }
    if(sketch.key === "A"){
      player.rotateBy(-0.01)
    }
    if(sketch.key === "O"){
      player.rotateVertBy(0.01)
    }
    if(sketch.key === "L"){
      player.rotateVertBy(-0.01)
    }

    player.updateVecs
  }
};

var myP5 = new P5(s)
