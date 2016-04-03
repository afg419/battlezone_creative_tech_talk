const $ = require('jquery');

class EndGame {
  constructor(sketch, gameLoop, inGame, width, height){
    this.sketch = sketch;
    this.gameLoop = gameLoop;
    this.inGame = inGame;
    this.width = width;
    this.height = height;
  }

  makePlayAgainButton(){
    var button = this.sketch.createButton("Play Again");
    button.id('play-again-button');
    button.position(this.width/2, this.height/5);
    button.size((6/7)*this.width, this.height/50);
    $('#play-again-button').on('click', (() => {
      this.inGame.state = 2;
      this.inGame.level = 0;
      $('#play-again-button').remove();
      this.gameLoop();
    }).bind(this));
  }

  get mostRecentScore(){
    var scores = this.inGame.scores;
    return scores[0];
  }

  display() {
    this.makePlayAgainButton();
    this.sketch.draw = function() {
      this.sketch.background(0,0,0);
      this.sketch.fill(26,255,20);
      this.sketch.textSize(65);
      this.sketch.textSize(65);
      this.sketch.text(`${this.inGame.end_status}`, this.width/2, this.height/6);
      this.sketch.textSize(55);
      this.sketch.text(`Your final score:  ${this.mostRecentScore}`, this.width/2, this.height/4);
      this.sketch.textSize(45);
      this.sketch.text('Top Scores: ', this.width/2, this.height/3);
      this.sketch.textSize(35);
      this.inGame.scores.sort( (score1, score2) => {
        return score2 - score1;
        }).forEach( (score, index) => {
        this.sketch.text(`${index + 1}- ${score} Points`, this.width/2, this.height/3+this.height/25*(index+1));
      });
    }.bind(this);
  }
}

module.exports = EndGame;
