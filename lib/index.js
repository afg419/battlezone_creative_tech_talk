const P5 = require('./p5');
require('./main');

const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');
const Dimensions = require('./screen_dimensions');
const Edge = require('./edge');
const Face = require('./face');
const Maths = require('./math')

var s = function(sketch) {
  var height = Dimensions.height
  var width = Dimensions.width;
  sketch.setup = function(){
    var cnv = sketch.createCanvas(height , width);
  }

  var player = new Player(new Vector(0,25,25), new Vector(1,0,0), 5 , 45,45)

  // var e = []
  // e[1] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(50,50,0)));
  // e[2] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(50,0,50)));
  // e[3] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(100,0,0)));
  // e[4] = new Edge(new Point(new Vector(50,50,0)), new Point(new Vector(100,50,0)));
  // e[5] = new Edge(new Point(new Vector(50,50,0)), new Point(new Vector(50,50,50)));
  // e[6] = new Edge(new Point(new Vector(50,0,50)), new Point(new Vector(50,50,50)));
  // e[7] = new Edge(new Point(new Vector(50,0,50)), new Point(new Vector(100,0,50)));
  // e[8] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,50,0)));
  // e[9] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,0,50)));
  // e[10] = new Edge(new Point(new Vector(100,50,0)), new Point(new Vector(100,50,50)));
  // e[11] = new Edge(new Point(new Vector(100,0,50)), new Point(new Vector(100,50,50)));
  // e[12] = new Edge(new Point(new Vector(50,50,50)), new Point(new Vector(100,50,50)));

  // var f = []
  //   f[0] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(100,0,0)));
  //   f[1] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,0,50)));
  //   f[2] = new Edge(new Point(new Vector(100,0,50)), new Point(new Vector(50,0,50)));
  //   f[3] = new Edge(new Point(new Vector(50,0,50)), new Point(new Vector(50,0,0)));
  //
  // var ff = new Face(f)
  // debugger
  //

  // var h = []
  //   h[0] = new Edge(new Point(new Vector(50,0,25)), new Point(new Vector(60,0,0)));
  //   h[1] = new Edge(new Point(new Vector(60,0,0)), new Point(new Vector(70,0,25)));
  //   h[2] = new Edge(new Point(new Vector(70,0,25)), new Point(new Vector(60,0,50)));
  //   h[3] = new Edge(new Point(new Vector(60,0,50)), new Point(new Vector(50,0,25)));
  //
  // var hh = new Face(h)



  // var g = []
  //   g[0] = new Edge(new Point(new Vector(50,50,0)), new Point(new Vector(100,50,0)));
  //   g[1] = new Edge(new Point(new Vector(100,50,0)), new Point(new Vector(100,50,50)));
  //   g[2] = new Edge(new Point(new Vector(100,50,50)), new Point(new Vector(50,50,50)));
  //   g[3] = new Edge(new Point(new Vector(50,50,50)), new Point(new Vector(50,50,0)));
  //
  // var gg = new Face(g)
  //

  var mother1 = []
    mother1[0] = new Edge(new Point(new Vector(0,0,0)), new Point(new Vector(100,0,0)));
    mother1[1] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,100,0)));
    mother1[2] = new Edge(new Point(new Vector(100,100,0)), new Point(new Vector(0,100,0)));
    mother1[3] = new Edge(new Point(new Vector(0,100,0)), new Point(new Vector(0,0,0)));
  var momo1 = new Face(mother1)
  var mother2 = []
    mother2[0] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(200,0,0)));
    mother2[1] = new Edge(new Point(new Vector(200,0,0)), new Point(new Vector(200,100,0)));
    mother2[2] = new Edge(new Point(new Vector(200,100,0)), new Point(new Vector(100,100,0)));
    mother2[3] = new Edge(new Point(new Vector(100,100,0)), new Point(new Vector(100,0,0)));
  var momo2 = new Face(mother2)
  var mother3 = []
    mother3[0] = new Edge(new Point(new Vector(200,0,0)), new Point(new Vector(300,0,0)));
    mother3[1] = new Edge(new Point(new Vector(300,0,0)), new Point(new Vector(300,100,0)));
    mother3[2] = new Edge(new Point(new Vector(300,100,0)), new Point(new Vector(200,100,0)));
    mother3[3] = new Edge(new Point(new Vector(200,100,0)), new Point(new Vector(200,0,0)));
  var momo3 = new Face(mother3)
  // var mother4 = []
  //   mother4[0] = new Edge(new Point(new Vector(0,0,0)), new Point(new Vector(100,0,0)));
  //   mother4[1] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,100,0)));
  //   mother4[2] = new Edge(new Point(new Vector(100,100,0)), new Point(new Vector(0,100,0)));
  //   mother4[3] = new Edge(new Point(new Vector(0,100,0)), new Point(new Vector(0,0,0)));
  // var mother5 = []
  //   mother5[0] = new Edge(new Point(new Vector(0,0,0)), new Point(new Vector(100,0,0)));
  //   mother5[1] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,100,0)));
  //   mother5[2] = new Edge(new Point(new Vector(100,100,0)), new Point(new Vector(0,100,0)));
  //   mother5[3] = new Edge(new Point(new Vector(0,100,0)), new Point(new Vector(0,0,0)));




  sketch.draw = function(){
    sketch.background(0,0,0)
    sketch.stroke(29,250,0)
    sketch.fill(255,255,255);
    sketch.text(`player location: (${player.loc.x}, ${player.loc.y}, ${player.loc.z})`,0,10)
    sketch.text(`player heading: (${player.head.x}, ${player.head.y}, ${player.head.z})`,0,20)
    sketch.text(`player shadow: (${player.shadow.x}, ${player.shadow.y}, ${player.shadow.z})`,0,30)
    sketch.line(0, width/2 - 30, height,width/2 - 30)

    // e.forEach(function(edge){
    //   edge.sketchRelativeTo(player, sketch);
    // })

    momo1.sketchRelativeTo(player,sketch)
    momo2.sketchRelativeTo(player,sketch)
    momo3.sketchRelativeTo(player,sketch)

    // gg.sketchRelativeTo(player,sketch)
    // hh.sketchRelativeTo(player,sketch)
    // ff.sketchRelativeTo(player,sketch)
  }

  sketch.keyTyped = function(){
    if(sketch.key === "w"){
      player.loc = player.loc.plus(Maths.scalMult(1, player.head))
    }
    if(sketch.key === "s"){
      player.loc = player.loc.minus(player.head)
    }
    if(sketch.key === "d"){
      player.rotateBy(0.01)
    }
    if(sketch.key === "a"){
      player.rotateBy(-0.01)
    }
    if(sketch.key === "O"){
      player.rotateVertBy(0.01)
    }
    if(sketch.key === "L"){
      player.rotateVertBy(-0.01)
    }

    player.updateVecs()
  }


};

var myP5 = new P5(s)
