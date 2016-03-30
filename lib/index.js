// require('./p5.dom');
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

  var f = []
    f[0] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(100,0,0)));
    f[1] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,0,50)));
    f[2] = new Edge(new Point(new Vector(100,0,50)), new Point(new Vector(50,0,50)));
    f[3] = new Edge(new Point(new Vector(50,0,50)), new Point(new Vector(50,0,0)));

  var ff = new Face(f)
  // debugger


  // var g = []
  //   g[0] = new Edge(new Point(new Vector(50,50,0)), new Point(new Vector(100,50,0)));
  //   g[1] = new Edge(new Point(new Vector(100,50,0)), new Point(new Vector(100,50,50)));
  //   g[2] = new Edge(new Point(new Vector(100,50,50)), new Point(new Vector(50,50,50)));
  //   g[3] = new Edge(new Point(new Vector(50,50,50)), new Point(new Vector(50,50,0)));
  //
  // var gg = new Face(g)
  //



  sketch.draw = function(){
    sketch.background(0,0,0)
    sketch.stroke(255,255,255)
    sketch.fill(255,255,255);
    sketch.text(`player location: (${player.loc.x}, ${player.loc.y}, ${player.loc.z})`,0,10)
    sketch.text(`player heading: (${player.head.x}, ${player.head.y}, ${player.head.z})`,0,20)
    sketch.text(`player shadow: (${player.shadow.x}, ${player.shadow.y}, ${player.shadow.z})`,0,30)
    sketch.line(0, width/2 - 30, height,width/2 - 30)

    // e.forEach(function(edge){
    //   edge.sketchRelativeTo(player, sketch);
    // })


    // gg.sketchRelativeTo(player,sketch)
    ff.sketchRelativeTo(player,sketch)
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
