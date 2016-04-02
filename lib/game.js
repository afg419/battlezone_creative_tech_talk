class Game{
  constructor(player, level, sketch){
    this.player = player;
    this.playerControls = new PlayerControls(player);
    this.level = (new LevelLibrary()).level(level);
    this.sketch = sketch;
    // this.timer = timer;
  }

  get minesOrderedByDistanceToPlayer(){
    this.level.mines;
  }

  get bootyOrderedByDistanceToPlayer(){
    this.level.booty;
  }

  // renderGame(){
  //   this.minesOrderedByDistanceToPlayer.forEach(mine =>{
  //     mine.obstacle.sketchRelativeTo(this.player);
  //   });
  //   this.bootyOrderedByDistanceToPlayer.forEach(boot =>{
  //     boot.obstacle.sketchRelativeTo(this.player);
  //   });
  // }

  updateGameState(){
    this.level.mines.forEach(mine =>{
      if mine.playerInDetonationRange(this.player){
        mine.detonate(this.player);
      }
    });

    this.level.booty.forEach(boot =>{
      if boot.playerInCollectionRange(this.player){
        boot.increaseWealth(this.player);
      }
    });

    this.playerController.control(this.sketch);
  };

}
