const Vector = require('./vector');
const Player = require('./player');
const Game = require('./game');

class DisplayGame {
  constructor(sketch, gameLoop, inGame, width, height){
    var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 35, 10);
    this.game = new Game(player, inGame.level, sketch);
    this.sketch = sketch;
    this.gameLoop = gameLoop;
    this.inGame = inGame;
    this.width = width;
    this.height = height;
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
    var height = this.width;
    var width = this.height;
    this.sketch.draw = function(){
      this.sketch.background(0,0,0);
      this.sketch.stroke(60,60,60);

      game.renderGame();
      game.updateGameState();

      this.sketch.stroke(100,100,100);
      this.sketch.strokeWeight(8);
      this.sketch.line(0, 0, (1/3)*width, (3/5)*height );
      this.sketch.line(0,(9/12)*height,(1/3)*width,(3/5)*height);
      this.sketch.line(width,0,(2/3)*width,(3/5)*height);
      this.sketch.line(width,(9/12)*height,(2/3)*width,(3/5)*height);
      this.sketch.line((2/3)*width,(3/5)*height,(1/3)*width,(3/5)*height);
      this.sketch.line((2/3)*width,(3/5)*height,(3/4)*width,height);
      this.sketch.line((1/3)*width,(3/5)*height,(1/4)*width,height);
      this.sketch.stroke(0,0,0);
      this.sketch.fill(64,163,67);
      this.sketch.textSize(20);
      this.sketch.text(`Location: (${game.player.loc.x}, ${game.player.loc.y}, ${game.player.loc.z})`, (5/12)*width, 13/20 * height);
      this.sketch.text(`Health: (${game.player.health})`, (5/12)*width,14/20 * height);
      this.sketch.text(`Wealth: (${game.player.wealth})`, (5/12)*width,15/20 * height);
      this.sketch.text(`Speed: ${game.player.speed}`,(5/12)*width,16/20 * height);

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
