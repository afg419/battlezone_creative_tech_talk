const P5 = require('./p5');
const Dimensions = require('./screen_dimensions');
const DisplayGame = require('./display_game');
const NewGame = require('./new_game');

var s = function(sketch) {
  var height = Dimensions.height;
  var width = Dimensions.width;
  var inGame = {state: 2, level: 0};

  sketch.setup = function(){
    sketch.frameRate(30);
    sketch.createCanvas(height , width);
  };


  gameLoop();

  function gameLoop(){
    switch (inGame.state) {
    case 1:
      var dG = new DisplayGame(sketch, gameLoop, inGame);
      dG.display();
      break;
    case 2:
      var nG = new NewGame(sketch, gameLoop, inGame, width, height);
      nG.display();
      break;
    case 3:
      //Statements executed when the result of expression matches valueN
      break;
    }
  }
};

new P5(s);
