const P5 = require('./p5');
const $ = require('jquery');
const Vector = require('./vector');
const Player = require('./player');
const Dimensions = require('./screen_dimensions');
const Game = require('./game');
const DisplayGame = require('./display_game');
const NewGame = require('./new_game');

var s = function(sketch) {
  var height = Dimensions.height;
  var width = Dimensions.width;
  var inGame = {state: false, level: 0};

  sketch.setup = function(){
    sketch.frameRate(30);
    var cnv = sketch.createCanvas(height , width);
  };

  function setState(state, level){
    return () => {
      inGame.state = state;
      inGame.level = level;
    };
  }




  gameLoop();

  function gameLoop(){
  if(inGame.state){
    var dG = new DisplayGame(inGame.level, sketch, gameLoop, inGame);
    dG.display();
  } else {
    var nG = new NewGame(sketch, gameLoop, inGame, width, height);
    nG.display();
  //   var button = sketch.createButton("Start Level 1");
  //   button.id('first-button');
  //   button.position(width/2, height/5);
  //   button.size((6/7)*width, height/50);
  //   $('#first-button').on('click', () => {
  //     inGame.state = true;
  //     inGame.level = 1;
  //     $('#first-button').remove();
  //     $('#second-button').remove();
  //     gameLoop();
  //   });
  //
  //   var button = sketch.createButton("Start Level 2");
  //   button.id('second-button');
  //   button.position(width/2, height/4);
  //   button.size((6/7)*width, height/50);
  //   $('#second-button').on('click', () => {inGame.state = true; inGame.level = 2; console.log(inGame.state);});
  //
  //
  //   sketch.draw = function(){
  //     sketch.background(0,0,0);
  //     sketch.fill(26,255,20);
  //     sketch.textSize(65);
  //     sketch.text('PIRATE RACER DESTROYER', width/2, height/6);
  //   };
  }
  }

}


var myP5 = new P5(s);
