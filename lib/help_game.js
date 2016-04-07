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
    button.position(10*(this.height)/24, 4*(this.width)/13);
    button.size((2/7)*this.width, this.height/30);
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
      this.sketch.textSize(60);
      // this.sketch.text('Help and Controls', 3*(this.height)/8, 2*(this.width)/10);
      this.sketch.text('Help and Controls', 3*(this.height)/8, 2*(this.width)/10);
      this.sketch.textSize(20);
      this.sketch.text('W:  Forward thrust', 7*this.width/14, 6*this.height/30);
      this.sketch.text('S:  Backward thrust', 7*this.width/14, 7*this.height/30);
      this.sketch.text('A:  Rotate left', 7*this.width/14, 8*this.height/30);
      this.sketch.text('D:  Rotate right', 7*this.width/14, 9*this.height/30);
      this.sketch.text('L:  Rotate up', 7*this.width/14, 10*this.height/30);
      this.sketch.text('O:  Rotate down', 7*this.width/14, 11*this.height/30);
      this.sketch.text('K:  Roll left', 7*this.width/14, 12*this.height/30);
      this.sketch.text(';:  Roll right', 7*this.width/14, 13*this.height/30);
      this.sketch.text('F:  Orient towards direction of travel', 2*8*this.width/14, 6*this.height/30);
      this.sketch.text('J:  Orient towards closest point box', 2*8*this.width/14, 7*this.height/30);
      this.sketch.text('G:  End current game', 2*8*this.width/14, 8*this.height/30);
      this.sketch.text('Space Bar:  Fire weapon', 2*8*this.width/14, 9*this.height/30);

      this.sketch.textSize(22);
      this.sketch.text('Collect yellow "wealth" boxes by hitting them or shooting them.', 2*8*this.width/14, 10*this.height/30);
      this.sketch.text('Red "mine" boxes will explode when you hit them.', 2*8*this.width/14, 11*this.height/30);
      this.sketch.text('White "turret" boxes will shoot back!', 2*8*this.width/14, 12*this.height/30);
    }.bind(this);
  }
}

module.exports = HelpGame;
