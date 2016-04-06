class PlayerControls{
  constructor(player, booty, bullets){
    this.player = player;
    this.booty = booty;
    this.dict = {
      w: 87,
      a: 65,
      d: 68,
      s: 83,
      f: 70,
      o: 79,
      l: 76,
      k: 75,
      j: 74,
      ";": 186,
      "shift": 16,
      "space": 32
    };
    this.bullets = bullets;
    this.timer = 0;
  }

  control(sketch){
    if(sketch.keyIsDown(this.dict["w"])){
      this.player.loc = this.player.loc.plus(this.player.head);
      this.player.momentum = this.player.momentum.scaledBy(0.94)
                                  .plus(this.player.head.scaledBy(0.45));
    }
    if(sketch.keyIsDown(this.dict["s"])){
      this.player.momentum = this.player.momentum.minus(this.player.head.scaledBy(0.25));
    }
    if(sketch.keyIsDown(this.dict["a"])){
      this.player.rotateOnV(-0.05);
    }
    if(sketch.keyIsDown(this.dict["d"])){
      this.player.rotateOnV(0.05);
    }
    if(sketch.keyIsDown(this.dict["l"])){
      this.player.rotateOnU(-0.05);
    }
    if(sketch.keyIsDown(this.dict["o"])){
      this.player.rotateOnU(0.05);
    }
    if(sketch.keyIsDown(this.dict["k"])){
      this.player.rotateOnHead(0.05);
    }
    if(sketch.keyIsDown(this.dict[";"])){
      this.player.rotateOnHead(-0.05);
    }
    if(sketch.keyIsDown(this.dict["shift"])){
      this.player.momentum = this.player.momentum.scaledBy(14/15);
    }
    if(sketch.keyIsDown(this.dict["j"])){
      this.player.rotateTowardsClosestEntity(this.booty, 0.05);
    }
    if(sketch.keyIsDown(this.dict["f"])){
      this.player.rotateTowardsMomentum(0.1);
    }
    if(sketch.keyIsDown(this.dict["space"])){
      if(this.timer > 10){
        this.player.fire(this.bullets);
        this.timer = 0;
      }
    }
    this.player.updateVecs();
    this.timer++;
  }
}

module.exports = PlayerControls;
