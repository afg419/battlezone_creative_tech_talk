const PlayerControls = require('./player_controls');
const LevelLibrary = require('./level_library');
const StarBuilder = require('./star_builder');

class Game{
  constructor(level, sketch){
    this.level = (new LevelLibrary()).level(level);
    this.player = this.level.player;//new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 35, 10);
    this.bullets = [];
    this.playerControls = new PlayerControls(this.player, this.level.booty, this.bullets);
    this.sketch = sketch;
    if (level === 0) {
      this.player.alert = "Press 'w' to move forward.\nHit purple boxes for in-game hints.";
    }
    this.starBuilder = new StarBuilder(750);
  }

  get shootableEntities(){
    return this.level.mines
            .concat(this.level.booty)
            .concat([this.player])
            .concat(this.level.turrets)
            .concat(this.level.mothership)
            .concat(this.level.fighters);
  }

  get solidEntities(){
    return this.level.mines
        .concat(this.level.turrets)
        .concat(this.level.mothership)
        .concat(this.level.fighters);
  }

  get renderableEntities(){
    return this.level.mines
          .concat(this.level.booty)
          .concat(this.bullets)
          .concat(this.level.turrets)
          .concat(this.level.mothership)
          .concat(this.level.messages)
          .concat(this.level.fighters)
          .filter( entity => entity !== undefined);
  }

  get renderableEntitiesOrderedByDistanceToPlayer(){
    return this.renderableEntities.sort(function(e1, e2){
      return (e2.obstacle.distanceTo(this.player) - e1.obstacle.distanceTo(this.player));
    }.bind(this));
  }

  renderGame(){
    this.sketch.background(0,0,0);
    this.starBuilder.drawBackgroundRelativeTo(this.player, this.sketch);
    this.sketch.stroke(60,60,60);
    this.sketch.strokeWeight(1);

    this.renderableEntitiesOrderedByDistanceToPlayer.forEach(entity => {
      entity.obstacle.sketchRelativeTo(this.player, this.sketch);
    });
  }

  updateCollisionState(){
    this.solidEntities.forEach( solidEntity => {
      if(solidEntity.inCollisionWith(this.player)){
        solidEntity.detonate(this.player);
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

  updateFighterState(){
    this.level.fighters.forEach( (fighter, index, fighterArray) => {
      fighter.timer ++;

      if(fighter.inFireRange(this.player) && fighter.timer > 2){
        fighter.fire(this.player, this.bullets);
      } else {
        fighter.chase(this.player);
      }

      if(fighter.inCollisionWithAny(this.level.mines)){
        fighter.detonateSelf();
      }

      if(fighter.destroyed()){
        fighterArray.splice(index, 1);
        this.level.fighters = fighterArray;
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
        this.shootableEntities.forEach( shootable => {
          if(bullet.hits(shootable)){
            bullet.dealDamageTo(shootable);
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
    this.updateFighterState();
    this.playerControls.control(this.sketch);
  }

  get win(){
    return this.level.booty.length === 0 && this.level.fighters.length === 0;
  }
}

module.exports = Game;
