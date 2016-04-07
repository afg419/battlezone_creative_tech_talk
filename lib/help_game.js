const $ = require('jquery');

class HelpGame {
  constructor(sketch, gameLoop, inGame, width, height){
    this.sketch = sketch;
    this.gameLoop = gameLoop;
    this.inGame = inGame;
    this.width = width;
    this.height = height;
    this.stars = this.generateStarBackground(250);
  }

  makeToNewGameButton(){
    var button = this.sketch.createButton("Got it! Let's DESTROY");
    button.id('new-game-button');
    button.class('button');
    button.position(1*(this.height)/8, 3*(this.width)/10);
    button.size((5/7)*this.width, this.height/30);
    $('#new-game-button').on('click', (() => {
      this.inGame.state = 2;
      $('#new-game-button').remove();
      this.gameLoop();
    }).bind(this));
  }

  generateStarBackground(n){
    var stars = [];
    for(var i = 0; i < n; i++){
    var randX = Math.random()*this.height;
    var randY = Math.random()*this.width;
      stars.push([randX, randY]);
    }
    return stars;
  }

  display() {
    this.makeToNewGameButton();
    this.sketch.draw = function() {
      this.sketch.textFont("Courier");
      this.sketch.background(0,0,0);
      this.sketch.fill(200,200,200);
      this.stars.forEach( star => this.sketch.ellipse(star[0], star[1], 3, 3));
      this.sketch.fill(64,163,67);

      this.sketch.textSize(60);
      this.sketch.text('Help and Controls', 1*(this.height)/8, 2*(this.width)/10);
      this.sketch.textSize(20);
      this.sketch.text('W:  Forward thrust', 1*this.height/8, 6*this.width/24 + 6*this.width/24);
      this.sketch.text('S:  Backward thrust', 1*this.height/8, 7*this.width/24 + 6*this.width/24);
      this.sketch.text('A:  Rotate left', 1*this.height/8, 8*this.width/24 + 6*this.width/24);
      this.sketch.text('D:  Rotate right', 1*this.height/8, 9*this.width/24 + 6*this.width/24);
      this.sketch.text('L:  Rotate up', 1*this.height/8, 10*this.width/24 + 6*this.width/24);
      this.sketch.text('O:  Rotate down', 1*this.height/8, 11*this.width/24 + 6*this.width/24);
      this.sketch.text('K:  Roll left', 1*this.height/8, 12*this.width/24 + 6*this.width/24);
      this.sketch.text(';:  Roll right', 1*this.height/8, 13*this.width/24 + 6*this.width/24);
      this.sketch.text('F:  Orient towards direction of travel', 3*this.height/8, 6*this.width/24 + 6*this.width/24);
      this.sketch.text('J:  Orient towards closest point box', 3*this.height/8, 7*this.width/24 + 6*this.width/24);
      this.sketch.text('G:  End current game', 3*this.height/8, 8*this.width/24 + 6*this.width/24);
      this.sketch.text('Space Bar:  Fire weapon', 3*this.height/8, 9*this.width/24 + 6*this.width/24);

      this.sketch.textSize(22);
      this.sketch.text('Collect yellow "wealth" boxes by hitting them or shooting them.', 1*this.height/8, 15*this.width/24 + 6*this.width/24);
      this.sketch.text('Red "mine" boxes will explode when you hit them.', 1*this.height/8, 16*this.width/24 + 6*this.width/24);
      this.sketch.text('White "turret" boxes will shoot back!', 1*this.height/8, 17*this.width/24 + 6*this.width/24);
    }.bind(this);
  }
}

module.exports = HelpGame;
