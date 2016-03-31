const P5 = require('./p5');
const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');
const Dimensions = require('./screen_dimensions');
const Edge = require('./edge');
const Face = require('./face');
const Maths = require('./math')
const Level = require('./level')
const Level2 = require('./level2')
const PlayerControls = require('./player_controls')
const Mat = require("gl-matrix")

var s = function(sketch) {
  var height = Dimensions.height
  var width = Dimensions.width;

  sketch.setup = function(){
    sketch.frameRate(30)
    var cnv = sketch.createCanvas(height , width);
  }

  var player = new Player(new Vector(0,25,25), new Vector(1,0,0),5,45,35)
  var playerController = new PlayerControls(player)

  var level = new Level();
  var level2 = new Level2();

  sketch.draw = function(){
    sketch.background(0,0,0)
    sketch.stroke(29,250,0)
    sketch.fill(255,255,255);
    sketch.line(0, width/2 - 30, height,width/2 - 30)
    // player.loc = player.loc.plus(Maths.scalMult(5,player.head))
    // player.updateVecs()
    // level2.buildings.forEach(function(face){
    //   face.sketchRelativeTo(player, sketch);
    // });
    playerController.control(sketch)

    level.allHall.forEach(function(face){
      face.sketchRelativeTo(player,sketch)
    })

    sketch.text(`player loc: (${player.loc.x}, ${player.loc.y}, ${player.loc.z})`,0,10)
    sketch.text(`player head: (${player.head.x}, ${player.head.y}, ${player.head.z})`,0,20)
    sketch.text(`player v (up): (${player.v.x}, ${player.v.y}, ${player.v.z})`,0,30)
    sketch.text(`player u (left): (${player.u.x}, ${player.u.y}, ${player.u.z})`,0,40)

  }

};

var myP5 = new P5(s)
