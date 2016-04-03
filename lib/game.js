const PlayerControls = require('./player_controls');
const LevelLibrary = require('./level_library');


class Game{
  constructor(player, level, sketch){
    this.player = player;
    this.level = (new LevelLibrary()).level(level);
    this.playerControls = new PlayerControls(player, this.level.booty);
    this.sketch = sketch;
    // this.timer = timer;
  }

  get entitiesOrderedByDistanceToPlayer(){
    return this.level.mines.concat(this.level.booty).sort(function(e1, e2){
      return (e2.obstacle.distanceTo(this.player) - e1.obstacle.distanceTo(this.player));
    }.bind(this));
  }

  renderGame(){
    this.entitiesOrderedByDistanceToPlayer.forEach(entity => {
      entity.obstacle.sketchRelativeTo(this.player, this.sketch);
    });
  }

  updateGameState(){
    this.level.mines.forEach( mine => {
      if(mine.inDetonationRange(this.player)){
        mine.detonate(this.player);
      }
    });

    this.level.booty.forEach( (boot, index, bootyArray) => {
      if(boot.inCollectionRange(this.player)){
        boot.increaseWealth(this.player);
        bootyArray.splice(index, 1);
        this.level.booty = bootyArray;
      }
    });

    this.playerControls.control(this.sketch);
  }

  get win(){
    return this.level.booty.length === 0;
  }

}

module.exports = Game;
