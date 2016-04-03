const Vector = require('./vector');
const Player = require('./player');
const Game = require('./game');

class DisplayGame {
  constructor(sketch, gameLoop, inGame){
    var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 35, 10);
    this.game = new Game(player, inGame.level, sketch);
    this.sketch = sketch;
    this.gameLoop = gameLoop;
    this.inGame = inGame;
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
    this.sketch.draw = function(){
      this.sketch.background(0,0,0);
      this.sketch.stroke(60,60,60);

      game.renderGame();
      game.updateGameState();

      this.sketch.textSize(10);
      this.sketch.text(`player loc: (${game.player.loc.x}, ${game.player.loc.y}, ${game.player.loc.z})`,0,10);
      this.sketch.text(`player head: (${game.player.head.x}, ${game.player.head.y}, ${game.player.head.z})`,0,20);
      this.sketch.text(`player v (up): (${game.player.v.x}, ${game.player.v.y}, ${game.player.v.z})`,0,30);
      this.sketch.text(`player u (left): (${game.player.u.x}, ${game.player.u.y}, ${game.player.u.z})`,0,40);
      this.sketch.text(`player shadow: (${game.player.shadow.x}, ${game.player.shadow.y}, ${game.player.shadow.z})`,0,30);
      this.sketch.text(`player health: (${game.player.health})`,0,50);
      this.sketch.text(`player wealth: (${game.player.wealth})`,0,60);
      if((game.player.dead) || (game.win)){
        this.inGame.state = 3;
        this.inGame.level = 0;
        this.inGame.scores.push(game.player.wealth);
        this.setEndGameStatus();
        this.gameLoop();
      }
    }.bind(this);
  }
}

module.exports = DisplayGame;
