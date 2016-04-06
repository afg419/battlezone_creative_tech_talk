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
    button.id('new-game-button');
    button.class('button');
    button.position(550, this.height/6);
    button.size((3/7)*this.width, this.height/30);
    $('#new-game-button').on('click', (() => {
      this.inGame.state = 2;
      $('#new-game-button').remove();
      this.gameLoop();
    }).bind(this));
  }

  display() {
    this.makeToNewGameButton();
    this.sketch.draw = function() {
      this.sketch.background(0,0,0);
      this.sketch.textSize(65);
      this.sketch.text('Help and Controls', 5*this.width/9, this.height/6);
      this.sketch.textSize(15);
      this.sketch.text('W: Forward thrust', 5*this.width/12, 6*this.height/24);
      this.sketch.text('S: Backward thrust', 5*this.width/12, 7*this.height/24);
      this.sketch.text('A: Rotate left', 5*this.width/12, 8*this.height/24);
      this.sketch.text('D: Rotate right', 5*this.width/12, 9*this.height/24);
      this.sketch.text('L: Rotate up', 5*this.width/12, 10*this.height/24);
      this.sketch.text('O: Rotate down', 5*this.width/12, 11*this.height/24);
      this.sketch.text('K: Roll left', 5*this.width/12, 12*this.height/24);
      this.sketch.text(';: Roll right', 5*this.width/12, 13*this.height/24);
      this.sketch.text('F: Orient towards direction of travel', 2*5*this.width/12, 6*this.height/24);
      this.sketch.text('J: Orient towards closest point box', 2*5*this.width/12, 7*this.height/24);
      this.sketch.text('Space Bar: Fire weapon', 2*5*this.width/12, 8*this.height/24);

      this.sketch.textSize(18);
      this.sketch.text('Collect yellow "wealth" boxes by hitting them or shooting them.', 2*5*this.width/12, 10*this.height/24);
      this.sketch.text('Red "mine" boxes will explode when you hit them.', 2*5*this.width/12, 11*this.height/24);
      this.sketch.text('White "turret" boxes will shoot back!', 2*5*this.width/12, 12*this.height/24);
    }.bind(this);
  }
}

module.exports = HelpGame;
