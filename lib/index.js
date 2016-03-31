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

var s = function(sketch) {
  var height = Dimensions.height
  var width = Dimensions.width;

  sketch.setup = function(){
    sketch.frameRate(30)
    var cnv = sketch.createCanvas(height , width);
  }

  var player = new Player(new Vector(0,25,25), new Vector(1,0,0), 5 , 45,45)
  var playerController = new PlayerControls(player)

  var level = new Level();
  var level2 = new Level2();

  sketch.draw = function(){
    sketch.background(0,0,0)
    sketch.stroke(29,250,0)
    sketch.fill(255,255,255);
    sketch.line(0, width/2 - 30, height,width/2 - 30)

    // level2.buildings.forEach(function(face){
    //   face.sketchRelativeTo(player, sketch);
    // });

    level.allHall.forEach(function(face){
      face.sketchRelativeTo(player,sketch)
    })
  }

    playerController.control(sketch)

  // sketch.keyTyped = function(){
  //   if(sketch.key === "w"){
  //     player.loc = player.loc.plus(Maths.scalMult(3.5, player.head))
  //   }
  //   if(sketch.key === "s"){
  //     player.loc = player.loc.minus(player.head)
  //   }
  //   if(sketch.key === "d"){
  //     player.rotateBy(0.05)
  //   }
  //   if(sketch.key === "a"){
  //     player.rotateBy(-0.05)
  //   }
  //   if(sketch.key === "O"){
  //     player.rotateVertBy(0.01)
  //   }
  //   if(sketch.key === "L"){
  //     player.rotateVertBy(-0.01)
  //   }
  //
  //   player.updateVecs()
  // }


};

var myP5 = new P5(s)
