const PlayerControls = require('./player_controls')
const LevelLibrary = require('./level_library')


class Game{
  constructor(player, level, sketch){
    this.player = player;
    this.playerControls = new PlayerControls(player);
    this.level = (new LevelLibrary()).level(level);
    this.sketch = sketch;
    // this.timer = timer;
  }

  get minesOrderedByDistanceToPlayer(){
    return this.level.mines;
  }

  get bootyOrderedByDistanceToPlayer(){
    return this.level.booty;
  }

  renderGame(){
// debugger
    this.minesOrderedByDistanceToPlayer.forEach(mine => {
      mine.obstacle.sketchRelativeTo(this.player, this.sketch);
    });
    this.bootyOrderedByDistanceToPlayer.forEach(boot => {
      boot.obstacle.sketchRelativeTo(this.player, this.sketch);
    });
  }

  updateGameState(){
    this.level.mines.forEach( mine => {
      if(mine.playerInDetonationRange(this.player)){
        mine.detonate(this.player);
      }
    });

    this.level.booty.forEach( boot => {
      if(boot.playerInCollectionRange(this.player)){
        boot.increaseWealth(this.player);
      }
    });

    this.playerControls.control(this.sketch);
  };
}

module.exports = Game;
