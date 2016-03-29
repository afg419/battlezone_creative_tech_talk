// require('./p5.dom');
require('./p5');
require('./main');

const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');

function setup(){
  height = window.outerWidth;
  width = window.outerHeight;
  cnv = createCanvas(height , width);
}

var player = new Player(new Vector(0,0,20), new Vector(1,0,0), 5 , 45,45)
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



// let points = points1.concat(points2).concat(points3)

function draw(){
  background(0,0,0)
  stroke(255,255,255)
  line(0,height/2 - 30, width,height/2 - 30)
  points.forEach(function(point){
    if(point.isVisibleTo(player)){
      point.sketchRelativeTo(player)
    }
  })
}

function keyPressed(){
  if(key === "W"){
    player.loc = player.loc.plus(player.head)
  }
  if(key === "S"){
    player.loc = player.loc.minus(player.head)
  }
  if(key === "D"){
    player.rotateBy(0.01)
  }
  if(key === "A"){
    player.rotateBy(-0.01)
  }
  if(key === "O"){
    player.rotateVertBy(0.01)
  }
  if(key === "L"){
    player.rotateVertBy(-0.01)
  }

  player.updateVecs
}
