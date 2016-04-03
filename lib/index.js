const P5 = require('./p5');
const $ = require('jquery')
// require('./p5.dom');
const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');
const Dimensions = require('./screen_dimensions');
const Edge = require('./edge');
const CollisionSphere = require('./collision_sphere');
const Face = require('./face');
const Maths = require('./math')
const Game = require('./game')
const PlayerControls = require('./player_controls')

var s = function(sketch) {
  var height = Dimensions.height
  var width = Dimensions.width;
  var inGame = {state: false, level: 0};

  sketch.setup = function(){
    sketch.frameRate(30);
    var cnv = sketch.createCanvas(height , width);
  }

  function setState(state, level){
    return () => {
      inGame.state = state;
      inGame.level = level;
    }
  }

  gameLoop()

  function gameLoop(){
  if(inGame.state){
    var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 35, 10);
    var game = new Game(player, inGame.level, sketch);

    sketch.draw = function(){
      sketch.background(0,0,0);
      sketch.stroke(60,60,60);

      game.renderGame();
      game.updateGameState();

      sketch.textSize(10)
      sketch.text(`player loc: (${player.loc.x}, ${player.loc.y}, ${player.loc.z})`,0,10);
      sketch.text(`player head: (${player.head.x}, ${player.head.y}, ${player.head.z})`,0,20);
      sketch.text(`player v (up): (${player.v.x}, ${player.v.y}, ${player.v.z})`,0,30);
      sketch.text(`player u (left): (${player.u.x}, ${player.u.y}, ${player.u.z})`,0,40);
      sketch.text(`player shadow: (${player.shadow.x}, ${player.shadow.y}, ${player.shadow.z})`,0,30);
      sketch.text(`player health: (${player.health})`,0,50);
      sketch.text(`player wealth: (${player.wealth})`,0,60);
      if(game.player.dead){
        inGame.state = false;
        inGame.level = 0;
        gameLoop();
      }
    }
  } else {
    var button = sketch.createButton("Start Level 1")
    button.id('first-button')
    button.position(width/2, height/5)
    button.size((6/7)*width, height/50)
    $('#first-button').on('click', () => {
      inGame.state = true;
      inGame.level = 1;
      $('#first-button').remove();
      $('#second-button').remove();
      gameLoop();
    })

    var button = sketch.createButton("Start Level 2")
    button.id('second-button')
    button.position(width/2, height/4)
    button.size((6/7)*width, height/50)
    $('#second-button').on('click', () => {inGame.state = true; inGame.level = 2; console.log(inGame.state)})

    sketch.draw = function(){
      sketch.background(0,0,0);
      sketch.fill(26,255,20);
      sketch.textSize(65);
      sketch.text('PIRATE RACER DESTROYER', width/2, height/6);
    };
  }
  }

};


var myP5 = new P5(s)
