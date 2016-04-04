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
  }

  setEndGameStatus() {
    if (this.game.win) {
      this.inGame.end_status = "You Won!";
    } else {
      this.inGame.end_status = "Sorry, you lost";
    }
  }

  display(){
    var game = this.game;
    var cockpit = this.cockpit;
    var height = this.width;
    var width = this.height;
    this.sketch.draw = function(){
      this.sketch.background(0,0,0);
      this.sketch.stroke(60,60,60);

      game.renderGame();
      game.updateGameState();
      cockpit.display(game.player);

      if((game.player.dead) || (game.win)){
        this.inGame.state = 3;
        this.inGame.level = 0;
        this.inGame.scores.push(game.player.wealth);
        this.setEndGameStatus();
        this.gameLoop();
      }
      this.sketch.strokeWeight(1);

    }.bind(this);
  }
}

module.exports = DisplayGame;
