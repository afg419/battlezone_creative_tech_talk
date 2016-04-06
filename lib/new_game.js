const $ = require('jquery');

class NewGame {
  constructor(sketch, gameLoop, inGame, width, height) {
    this.sketch = sketch;
    this.gameLoop = gameLoop;
    this.inGame = inGame;
    this.width = width;
    this.height = height;
  }

  makeZerothButton(){
    var button = this.sketch.createButton("Start Tutorial");
    button.id('zero-button');
    button.position(this.width/3, this.height/2);
    button.size((6/7)*this.width, this.height/50);
    $('#zero-button').on('click', (() => {
      this.inGame.state = 1;
      this.inGame.level = 0;
      $('#zero-button').remove();
      $('#first-button').remove();
      $('#second-button').remove();
      $('#help-button').remove();
      this.gameLoop();
    }).bind(this));  }

  makeFirstButton(){
    var button = this.sketch.createButton("Start Level 1");
    button.id('first-button');
    button.position(this.width/3, this.height/5);
    button.size((6/7)*this.width, this.height/50);
    $('#first-button').on('click', (() => {
      this.inGame.state = 1;
      this.inGame.level = 1;
      $('#zero-button').remove();
      $('#first-button').remove();
      $('#second-button').remove();
      $('#help-button').remove();
      this.gameLoop();
    }).bind(this));
  }

  makeSecondButton(){
    var button = this.sketch.createButton("Start Level 2");
    button.id('second-button');
    button.position(this.width/3, this.height/4);
    button.size((6/7)*this.width, this.height/50);
    $('#second-button').on('click', (() => {
      this.inGame.state = 1;
      this.inGame.level = 2;
      $('#zero-button').remove();
      $('#first-button').remove();
      $('#second-button').remove();
      $('#help-button').remove();
      this.gameLoop();
    }).bind(this));
  }

  makeHelpButton(){
    var button = this.sketch.createButton("Help");
    button.id('help-button');
    button.position(this.width/3, this.height/3);
    button.size((6/7)*this.width, this.height/50);
    $('#help-button').on('click', (() => {
      this.inGame.state = 4;
      $('#zero-button').remove();
      $('#first-button').remove();
      $('#second-button').remove();
      $('#help-button').remove();
      this.gameLoop();
    }).bind(this));
  }

  display() {
    this.makeFirstButton();
    this.makeSecondButton();
    this.makeHelpButton();
    this.makeZerothButton();
    this.sketch.draw = function(){
      this.sketch.background(0,0,0);
      this.sketch.fill(26,255,20);
      this.sketch.textSize(65);
      this.sketch.text('PIRATE RACER DESTROYER', this.width/2, this.height/6);
    }.bind(this);
  }
}

module.exports = NewGame;
