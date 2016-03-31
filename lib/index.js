const P5 = require('./p5');
const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');
const Dimensions = require('./screen_dimensions');
const Edge = require('./edge');
const Face = require('./face');
const Maths = require('./math')
const Level = require('./level')

var s = function(sketch) {
  var height = Dimensions.height
  var width = Dimensions.width;
  sketch.setup = function(){
    var cnv = sketch.createCanvas(height , width);
  }

  var player = new Player(new Vector(0,25,25), new Vector(1,0,0), 5 , 45,45)
  var level = new Level();

  sketch.draw = function(){
    sketch.background(0,0,0)
    sketch.stroke(29,250,0)
    sketch.fill(255,255,255);
    // sketch.text(`player location: (${player.loc.x}, ${player.loc.y}, ${player.loc.z})`,0,10)
    // sketch.text(`player heading: (${player.head.x}, ${player.head.y}, ${player.head.z})`,0,20)
    // sketch.text(`player shadow: (${player.shadow.x}, ${player.shadow.y}, ${player.shadow.z})`,0,30)
    sketch.line(0, width/2 - 30, height,width/2 - 30)

    // e.forEach(function(edge){
    //   edge.sketchRelativeTo(player, sketch);
    // })
    level.allHall.forEach(function(face){
      face.sketchRelativeTo(player,sketch)
    })
    // momo1.sketchRelativeTo(player,sketch)
    // momo2.sketchRelativeTo(player,sketch)
    // momo3.sketchRelativeTo(player,sketch)

    // gg.sketchRelativeTo(player,sketch)
    // hh.sketchRelativeTo(player,sketch)
    // ff.sketchRelativeTo(player,sketch)
  }

  sketch.keyTyped = function(){
    if(sketch.key === "w"){
      player.loc = player.loc.plus(Maths.scalMult(3.5, player.head))
    }
    if(sketch.key === "s"){
      player.loc = player.loc.minus(player.head)
    }
    if(sketch.key === "d"){
      player.rotateBy(0.05)
    }
    if(sketch.key === "a"){
      player.rotateBy(-0.05)
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
