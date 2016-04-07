const Vector = require('./vector');
const Player = require('./player');
const Game = require('./game');
const Cockpit = require('./cockpit');

class DisplayGame {
  constructor(sketch, gameLoop, inGame, width, height){
    var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 35, 10);
    this.game = new Game(player, inGame.level, sketch);
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
      this.inGame.end_status = "You Won!";
    } else {
      this.inGame.end_status = "Sorry, you died.";
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
        // debugger
        var result = "Loss";
        if (this.game.win) {
          result = "Win";
        }
// debugger
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
