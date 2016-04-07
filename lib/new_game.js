const $ = require('jquery');

class NewGame {
  constructor(sketch, gameLoop, inGame, width, height) {
    this.sketch = sketch;
    this.gameLoop = gameLoop;
    this.inGame = inGame;
    this.width = width;
    this.height = height;
    this.stars = this.generateStarBackground(250);
  }

  setGameState(state, level){
    this.inGame.state = state;
    this.inGame.level = level;
  }

  removeButtons(){
    $('#zero-button').remove();
    $('#first-button').remove();
    $('#second-button').remove();
    $('#third-button').remove();
    $('#help-button').remove();
  }

  makeZerothButton(){
    var button = this.sketch.createButton("Start Tutorial");
    button.id('zero-button');
    button.class('button');
    button.position(1*(this.height)/8, 3*(this.width)/10);
    button.size((3/7)*this.width, this.height/30);
    $('#zero-button').on('click', (() => {
      this.setGameState(1, 0);
      this.removeButtons();
      this.gameLoop();
    }).bind(this));  }

  makeFirstButton(){
    var button = this.sketch.createButton("Start Level 1");
    button.id('first-button');
    button.class('button');
    button.position(1*(this.height)/8, 4*(this.width)/10);
    button.size((3/7)*this.width, this.height/30);
    $('#first-button').on('click', (() => {
      this.setGameState(1, 1);
      this.removeButtons();
      this.gameLoop();
    }).bind(this));
  }

  makeSecondButton(){
    var button = this.sketch.createButton("Start Level 2");
    button.id('second-button');
    button.class('button');
    button.position(1*(this.height)/8, 5*(this.width)/10);
    button.size((3/7)*this.width, this.height/30);
    $('#second-button').on('click', (() => {
      this.setGameState(1, 2);
      this.removeButtons();
      this.gameLoop();
    }).bind(this));
  }

  makeThirdButton(){
    var button = this.sketch.createButton("Start Level 3");
    button.id('third-button');
    button.class('button');
    button.position(1*(this.height)/8, 6*(this.width)/10);
    button.size((3/7)*this.width, this.height/30);
    $('#third-button').on('click', (() => {
      this.setGameState(1, 3);
      this.removeButtons();
      this.gameLoop();
    }).bind(this));
  }

  makeHelpButton(){
    var button = this.sketch.createButton("Help");
    button.id('help-button');
    button.class('button');
    button.position(1*(this.height)/8, 7*(this.width)/10);
    button.size((3/7)*this.width, this.height/30);
    $('#help-button').on('click', (() => {
      this.inGame.state = 4;
      this.removeButtons();
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
    this.makeFirstButton();
    this.makeSecondButton();
    this.makeHelpButton();
    this.makeZerothButton();
    this.makeThirdButton();
    this.sketch.draw = function(){
      this.sketch.textFont("Courier");
      this.sketch.background(0,0,0);
      this.sketch.fill(200,200,200);
      this.stars.forEach( star => this.sketch.ellipse(star[0], star[1], 3, 3));
      this.sketch.fill(64,163,67);
      this.sketch.textSize(65);
      this.sketch.text('SPACE PIRATES : DESTROYER', 1*(this.height)/8, 2*(this.width)/10);
    }.bind(this);
  }
}

module.exports = NewGame;
