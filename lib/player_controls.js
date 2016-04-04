const Maths = require('./math');

class PlayerControls{
  constructor(player, booty){
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
      "shift": 16
    };
  }

  control(sketch){
    if(sketch.keyIsDown(this.dict["w"])){
      this.player.loc = this.player.loc.plus(this.player.head);
      this.player.momentum = Maths.scalMult(0.97,this.player.momentum)
                                  .plus(Maths.scalMult(0.55, this.player.head));
    }
    if(sketch.keyIsDown(this.dict["s"])){
      this.player.momentum = this.player.momentum.minus(Maths.scalMult(0.25, this.player.head));
    }
    if(sketch.keyIsDown(this.dict["a"])){
      this.player.rotateOnV(-0.05);
    }
    if(sketch.keyIsDown(this.dict["d"])){
      this.player.rotateOnV(0.05);
    }
    if(sketch.keyIsDown(this.dict["o"])){
      this.player.rotateOnU(-0.05);
    }
    if(sketch.keyIsDown(this.dict["l"])){
      this.player.rotateOnU(0.05);
    }
    if(sketch.keyIsDown(this.dict["k"])){
      this.player.rotateOnHead(0.05);
    }
    if(sketch.keyIsDown(this.dict[";"])){
      this.player.rotateOnHead(-0.05);
    }
    if(sketch.keyIsDown(this.dict["shift"])){
      this.player.momentum = Maths.scalMult(14/15, this.player.momentum);
    }
    if(sketch.keyIsDown(this.dict["j"])){
      this.player.rotateTowardsClosestEntity(this.booty, 0.05);
    }
    if(sketch.keyIsDown(this.dict["f"])){
      this.player.rotateTowardsMomentum(0.1);
    }

    this.player.updateVecs();
  }
}

module.exports = PlayerControls;
