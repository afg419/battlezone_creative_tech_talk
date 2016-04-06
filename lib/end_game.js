const $ = require('jquery');

class EndGame {
  constructor(sketch, gameLoop, inGame, width, height){
    this.scores = JSON.parse(localStorage.getItem('scores'));
    this.formattedScores = this.sortedFormattedScores;
    this.sketch = sketch;
    this.gameLoop = gameLoop;
    this.inGame = inGame;
    this.width = width;
    this.height = height;
  }

  get sortedFormattedScores(){
    return this.scores.sort( (s1, s2) => {
      if ((s2.level - s1.level)!== 0){
        return s2.level - s1.level;
      } else{
        return s2.wealth - s1.wealth;
      }
    });//.slice(0,5);
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

  get mostRecent(){
    return this.scores[0];
  }

  display() {
    this.makePlayAgainButton();
    this.sketch.draw = function() {
      this.sketch.background(0,0,0);
      this.sketch.fill(26,255,20);
      this.sketch.textSize(65);
      this.sketch.textSize(65);
      this.sketch.text(`${this.inGame.end_status}`, this.width/2, this.height/6);
      this.sketch.textSize(20);
      this.sketch.text(`Your final score:  ${this.mostRecent.wealth}.  Your final time: ${this.mostRecent.time}`, this.width/2, this.height/4);
      this.sketch.textSize(45);
      this.sketch.text('Previous plays:', this.width/2, this.height/3);
      this.sketch.textSize(15);

      this.formattedScores.slice(0,5).forEach( (score, index) => {
        this.sketch.text(`Level: ${score.level} || Wealth: ${score.wealth} || Time: ${score.time} || Outcome: ${score.result}`, this.width/2, this.height/3+this.height/25*(index+1));
      });
    }.bind(this);
  }
}

module.exports = EndGame;
