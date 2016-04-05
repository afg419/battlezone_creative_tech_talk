const PlayerControls = require('./player_controls');
const LevelLibrary = require('./level_library');


class Game{
  constructor(player, level, sketch){
    this.player = player;
    this.level = (new LevelLibrary()).level(level);
    this.bullets = [];
    this.playerControls = new PlayerControls(player, this.level.booty, this.bullets);
    this.sketch = sketch;
    // this.timer = timer;
  }

  get hittableEntities(){
    return this.level.mines.concat(this.level.booty).concat([this.player]);
  }

  get renderableEntities(){
    return this.level.mines.concat(this.level.booty).concat(this.bullets);
  }

  get entitiesOrderedByDistanceToPlayer(){
    return this.renderableEntities.sort(function(e1, e2){
      return (e2.obstacle.distanceTo(this.player) - e1.obstacle.distanceTo(this.player));
    }.bind(this));
  }

  renderGame(){
    this.entitiesOrderedByDistanceToPlayer.forEach(entity => {
      entity.obstacle.sketchRelativeTo(this.player, this.sketch);
    });
  }

  updateMineState(){
    this.level.mines.forEach( mine => {
      if(mine.inDetonationRange(this.player)){
        mine.detonate(this.player);
      }
    });
  }

  updateBootyState(){
    this.level.booty.forEach( (boot, index, bootyArray) => {
      if(boot.inCollectionRange(this.player)){
        boot.increaseWealth(this.player);
        bootyArray.splice(index, 1);
        this.level.booty = bootyArray;
      }
    });
  }



  updateGameState(){
    this.updateMineState();
    this.updateBootyState();
    this.bullets.forEach( (bullet, index, bulletArray) => {
      bullet.fly();
      if(bullet.outOfRange()){
        bulletArray.splice(index, 1);
        this.bullets = bulletArray;
      } else {
        this.hittableEntities.forEach( hittable => {
          if(bullet.hits(hittable)){
            bullet.dealDamageTo(hittable);
            bulletArray.splice(index, 1);
            this.bullets = bulletArray;
          }
        });
      }

    });

    this.playerControls.control(this.sketch);
  }

  get win(){
    return this.level.booty.length === 0;
  }

}

module.exports = Game;
