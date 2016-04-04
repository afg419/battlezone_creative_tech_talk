const $ = require('jquery');

class HelpGame {
  constructor(sketch, gameLoop, inGame, width, height){
    this.sketch = sketch;
    this.gameLoop = gameLoop;
    this.inGame = inGame;
    this.width = width;
    this.height = height;
  }

  makeToNewGameButton(){
    var button = this.sketch.createButton("Got it! Let's play");
    button.id('to-new-game-button');
    button.position(this.width/2, this.height/5);
    button.size((6/7)*this.width, this.height/50);
    $('#to-new-game-button').on('click', (() => {
      this.inGame.state = 2;
      $('#to-new-game-button').remove();
      this.gameLoop();
    }).bind(this));
  }

  display() {
    this.makeToNewGameButton();
    this.sketch.draw = function() {
      this.sketch.text("HELP", 200, 200);
    }.bind(this);
  }
}

module.exports = HelpGame;
