const Game = require('./game');
const Cockpit = require('./cockpit');

class DisplayGame {
  constructor(sketch, gameLoop, inGame, width, height){
    this.game = new Game( inGame.level, sketch);
    this.sketch = sketch;
    this.gameLoop = gameLoop;
    this.inGame = inGame;
    this.width = width;
    this.height = height;
    this.cockpit = new Cockpit(sketch, width, height);
    this.timer = 0;
  }

  setEndGameStatus() {
    if (this.game.win) {
      this.inGame.end_status = "You collected all booty in this area!";
    } else {
      this.inGame.end_status = "Your ship has been destroyed!";
    }
  }

  get gameOver(){
    return this.game.player.dead || this.game.win;
  }

  display(){
    var game = this.game;
    var cockpit = this.cockpit;
    this.sketch.draw = function(){
      this.timer ++;
      game.renderGame();
      game.updateGameState();
      cockpit.display(game.player, this.timer);

      if(this.gameOver){
        var scores = JSON.parse(localStorage.getItem('scores'));
        if(scores === null){
          scores = [];
        }

        var result = "Loss";
        if (this.game.win) {
          result = "Win";
        }

        scores.push({result: result, level: this.inGame.level, wealth: game.player.wealth, time: this.timer});
        localStorage.setItem('scores', JSON.stringify(scores));

        this.inGame.state = 3;
        this.inGame.level = 0;
        this.setEndGameStatus();
        this.gameLoop();
      }

    }.bind(this);
  }
}

module.exports = DisplayGame;
