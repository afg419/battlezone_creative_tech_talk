const $ = require('jquery');

class EndGame {
  constructor(sketch, gameLoop, inGame, width, height, scores = JSON.parse(localStorage.getItem('scores'))){
    this.scores = scores;
    this.formattedScores = this.sortedFormattedScores;
    this.sketch = sketch;
    this.gameLoop = gameLoop;
    this.inGame = inGame;
    this.width = width;
    this.height = height;
    this.stars = this.generateStarBackground(250);
  }

  get sortedFormattedScores(){
    return this.scores.sort( (s1, s2) => {
      if ((s2.level - s1.level)!== 0){
        return s2.level - s1.level;
      } else{
        return s2.wealth - s1.wealth;
      }
    });
  }

  makePlayAgainButton(){
    var button = this.sketch.createButton("Play Again");
    button.id('play-again-button');
    button.class('button');
    button.position(0.5*(this.height)/8, 3*(this.width)/10);
    button.size((3/7)*this.width, this.height/30);
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
    this.makePlayAgainButton();
    this.sketch.draw = function() {
      this.sketch.textFont("Courier");
      this.sketch.background(0,0,0);
      this.sketch.fill(200,200,200);
      this.stars.forEach( star => this.sketch.ellipse(star[0], star[1], 3, 3));
      this.sketch.fill(64,163,67);
      this.sketch.textSize(65);
      this.sketch.textSize(65);
      this.sketch.text(`${this.inGame.end_status}`, 0.5*(this.height)/8, 2*(this.width)/10);
      this.sketch.textSize(25);
      this.sketch.text(`Your final score:  ${this.mostRecent.wealth}.  Your final time: ${this.mostRecent.time}`, 3*(this.height)/8, 3.5*(this.width)/10 );
      this.sketch.textSize(45);
      this.sketch.text('Previous plays:', 0.5*(this.height)/8, 10*(this.height)/40);
      this.sketch.textSize(25);
      this.formattedScores.slice(0,5).forEach( (score, index) => {
        this.sketch.text(`${index+1}. Level => ${score.level}   Wealth => ${score.wealth}   Time => ${score.time}   Outcome => ${score.result}`, 0.5*(this.height)/8, 5*(this.height)/20+this.height/25*(index+1));
      });
    }.bind(this);
  }
}

module.exports = EndGame;
