const Maths = require('./math')

class PlayerControls{
  constructor(player){
    this.player = player;
    this.dict = {
      w: 87,
      a: 65,
      d: 68,
      s: 83,
      o: 79,
      l: 76,
      k: 75,
      ";": 186
    }
  }

  control(sketch){
    // return sketch.keyIsDown = function(){
        if(sketch.keyIsDown(this.dict["w"])){
          this.player.loc = this.player.loc.plus(Maths.scalMult(3,this.player.head))
        }
        if(sketch.keyIsDown(this.dict["s"])){
          this.player.loc = this.player.loc.minus(this.player.head)
        }
        if(sketch.keyIsDown(this.dict["a"])){
          this.player.rotateOnV(-0.05)
        }
        if(sketch.keyIsDown(this.dict["d"])){
          this.player.rotateOnV(0.05)
        }
        if(sketch.keyIsDown(this.dict["o"])){
          this.player.rotateOnU(-0.05)
        }
        if(sketch.keyIsDown(this.dict["l"])){
          this.player.rotateOnU(0.05)
        }
        if(sketch.keyIsDown(this.dict["k"])){
          this.player.rotateOnHead(0.05)
        }
        if(sketch.keyIsDown(this.dict[";"])){
          this.player.rotateOnHead(-0.05)
        }

    this.player.updateVecs()
  }
}

module.exports = PlayerControls
