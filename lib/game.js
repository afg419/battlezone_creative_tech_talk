const PlayerControls = require('./player_controls');
const LevelLibrary = require('./level_library');

class Game{
  constructor(player, level, sketch){
    this.player = player;
    this.level = (new LevelLibrary()).level(level);
    this.bullets = [];
    this.playerControls = new PlayerControls(player, this.level.booty, this.bullets);
    this.sketch = sketch;
    if (level === 0) {
      this.player.alert = "Press 'w' to move forward.\nHit purple boxes for in-game hints";
    }
  }

  get shootable(){
    return this.level.mines
            .concat(this.level.booty)
            .concat([this.player])
            .concat(this.level.turrets)
            .concat(this.level.mothership);
  }

  get solids(){
    return this.level.mines
        .concat(this.level.turrets)
        .concat(this.level.mothership);
  }

  get renderableEntities(){
    return this.level.mines
          .concat(this.level.booty)
          .concat(this.bullets)
          .concat(this.level.turrets)
          .concat(this.level.mothership)
          .concat(this.level.messages);
  }

  get renderableEntitiesOrderedByDistanceToPlayer(){
    return this.renderableEntities.sort(function(e1, e2){
      return (e2.obstacle.distanceTo(this.player) - e1.obstacle.distanceTo(this.player));
    }.bind(this));
  }

  renderGame(){
    this.sketch.background(0,0,0);
    this.sketch.stroke(60,60,60);
    this.sketch.strokeWeight(1);

    this.renderableEntitiesOrderedByDistanceToPlayer.forEach(entity => {
      entity.obstacle.sketchRelativeTo(this.player, this.sketch);
    });
  }

  updateCollisionState(){
    this.solids.forEach( kill => {
      if(kill.inCollisionWith(this.player)){
        kill.detonate(this.player);
      }
    });
  }

  updateMessageState(){
    this.level.messages.forEach( message => {
      if(message.inMessageRange(this.player)){
        message.inform(this.player);
      }
    });
  }

  updateTurretState(){
    this.level.turrets.forEach( (turret, index, turretArray) => {
      turret.timer ++;
      if(turret.inFireRange(this.player) && turret.timer > 15){
        turret.fire(this.player, this.bullets);
      }
      if(turret.destroyed()){
        turretArray.splice(index, 1);
        this.level.turrets = turretArray;
      }
    });
  }

  updateBootyState(){
    this.level.booty.forEach( (boot, index, bootyArray) => {
      if(boot.inCollectionRange(this.player) || boot.destroyed()){
        boot.increaseWealth(this.player);
        bootyArray.splice(index, 1);
        this.level.booty = bootyArray;
      }
    });
  }

  updateBulletState(){
    this.bullets.forEach( (bullet, index, bulletArray) => {
      bullet.fly();
      if(bullet.outOfRange()){
        bulletArray.splice(index, 1);
        this.bullets = bulletArray;
      } else {
        this.shootable.forEach( hittable => {
          if(bullet.hits(hittable)){
            bullet.dealDamageTo(hittable);
            bulletArray.splice(index, 1);
            this.bullets = bulletArray;
          }
        });
      }
    });
  }

  updateGameState(){
    this.updateBootyState();
    this.updateBulletState();
    this.updateTurretState();
    this.updateCollisionState();
    this.updateMessageState();
    this.playerControls.control(this.sketch);
  }

  get win(){
    return this.level.booty.length === 0;
  }

}

module.exports = Game;
