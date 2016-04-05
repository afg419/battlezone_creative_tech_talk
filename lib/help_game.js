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
      this.sketch.background(0,0,0);
      this.sketch.textSize(65);
      this.sketch.text('Help + Controls', 5*this.width/12, this.height/6);
      this.sketch.textSize(15);
      this.sketch.text('w: Forward thrust', 5*this.width/12, 6*this.height/24);
      this.sketch.text('s: Backward thrust', 5*this.width/12, 7*this.height/24);
      this.sketch.text('a: Rotate left', 5*this.width/12, 8*this.height/24);
      this.sketch.text('d: Rotate right', 5*this.width/12, 9*this.height/24);
      this.sketch.text('l: Rotate up', 5*this.width/12, 10*this.height/24);
      this.sketch.text('o: Rotate down', 5*this.width/12, 11*this.height/24);
      this.sketch.text('k: Roll left', 5*this.width/12, 12*this.height/24);
      this.sketch.text(';: Roll right', 5*this.width/12, 13*this.height/24);
      this.sketch.text('f: Orient towards direction of travel', 2*5*this.width/12, 6*this.height/24);
      this.sketch.text('j: Orient towards closest point box', 2*5*this.width/12, 7*this.height/24);
      this.sketch.text('space bar: Fire weapon', 2*5*this.width/12, 8*this.height/24);
    }.bind(this);
  }
}

module.exports = HelpGame;
