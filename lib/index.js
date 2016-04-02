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
const Game = require('./game')
const Level2 = require('./level2')
const PlayerControls = require('./player_controls')

var s = function(sketch) {
  var height = Dimensions.height
  var width = Dimensions.width;

  sketch.setup = function(){
    sketch.frameRate(30);
    var cnv = sketch.createCanvas(height , width);
  }

  var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 35, 10);
  var game = new Game(player, 1, sketch);


  // var obstacle = new CollisionSphere(new Vector(50,25,25), 25)
  // var playerController = new PlayerControls(player)

  // var level = new Level();
  // var level2 = new Level2();


  sketch.draw = function(){

    sketch.background(0,0,0);
    sketch.stroke(60,60,60);
    // sketch.fill(255,255,255);
    // sketch.line(0, width/2 - 30, height,width/2 - 30)

    game.renderGame();
    game.updateGameState();

    // level2.buildingsOrderedBydistanceTo(player).forEach( obstacle => obstacle.sketchRelativeTo(player, sketch) );
    // playerController.control(sketch);

    sketch.text(`player loc: (${player.loc.x}, ${player.loc.y}, ${player.loc.z})`,0,10);
    sketch.text(`player head: (${player.head.x}, ${player.head.y}, ${player.head.z})`,0,20);
    sketch.text(`player v (up): (${player.v.x}, ${player.v.y}, ${player.v.z})`,0,30);
    sketch.text(`player u (left): (${player.u.x}, ${player.u.y}, ${player.u.z})`,0,40);
    sketch.text(`player shadow: (${player.shadow.x}, ${player.shadow.y}, ${player.shadow.z})`,0,30);
    sketch.text(`player health: (${player.health})`,0,50);
  }
};

var myP5 = new P5(s)
