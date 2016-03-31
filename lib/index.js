const P5 = require('./p5');
const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');
const Dimensions = require('./screen_dimensions');
const Edge = require('./edge');
const CollisionSphere = require('./collision_sphere');
const Face = require('./face');
const Maths = require('./math')
const Level = require('./level')
const Level2 = require('./level2')

var s = function(sketch) {
  var height = Dimensions.height
  var width = Dimensions.width;

  sketch.setup = function(){
    sketch.frameRate(30)
    var cnv = sketch.createCanvas(height , width);
  }

<<<<<<< HEAD
  var player = new Player(new Vector(0,25,25), new Vector(1,0,0), 5 , 45,45, 20)

  var obstacle = new CollisionSphere(new Vector(50,25,25), 25)

  var e = []
  e[1] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(50,50,0)));
  e[2] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(50,0,50)));
  e[3] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(100,0,0)));
  e[4] = new Edge(new Point(new Vector(50,50,0)), new Point(new Vector(100,50,0)));
  e[5] = new Edge(new Point(new Vector(50,50,0)), new Point(new Vector(50,50,50)));
  e[6] = new Edge(new Point(new Vector(50,0,50)), new Point(new Vector(50,50,50)));
  e[7] = new Edge(new Point(new Vector(50,0,50)), new Point(new Vector(100,0,50)));
  e[8] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,50,0)));
  e[9] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,0,50)));
  e[10] = new Edge(new Point(new Vector(100,50,0)), new Point(new Vector(100,50,50)));
  e[11] = new Edge(new Point(new Vector(100,0,50)), new Point(new Vector(100,50,50)));
  e[12] = new Edge(new Point(new Vector(50,50,50)), new Point(new Vector(100,50,50)));
=======
  var player = new Player(new Vector(0,25,25), new Vector(1,0,0), 5 , 45,45)
  var level = new Level();
  var level2 = new Level2();
>>>>>>> master

  sketch.draw = function(){
    sketch.background(0,0,0)
    sketch.stroke(29,250,0)
    sketch.fill(255,255,255);
    sketch.line(0, width/2 - 30, height,width/2 - 30)

    debugger

    // level2.buildings.forEach(function(face){
    //   face.sketchRelativeTo(player, sketch);
    // });

    level.allHall.forEach(function(face){
      face.sketchRelativeTo(player,sketch)
    })
  }

  sketch.keyTyped = function(){
    if(sketch.key === "w"){
      if (!player.collSphere.generalCollisionDetected(obstacle)) {
        player.loc = player.loc.plus(Maths.scalMult(1, player.head))
      }
    }
    if(sketch.key === "s"){
      player.loc = player.loc.minus(player.head)
    }
    if(sketch.key === "d"){
      player.rotateBy(0.02)
    }
    if(sketch.key === "a"){
      player.rotateBy(-0.02)
    }
    if(sketch.key === "a"){
      player.rotateBy(-0.05)
    }
    if(sketch.key === "O"){
      player.rotateVertBy(0.02)
    }
    if(sketch.key === "L"){
      player.rotateVertBy(-0.02)
    }
    player.updateVecs()
  }


};

var myP5 = new P5(s)
