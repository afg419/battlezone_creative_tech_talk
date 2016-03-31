const Maths = require('./math')

class PlayerControls{
  constructor(player){
    this.player = player;
  }

  control(sketch){
    return sketch.keyTyped = function(){
        if(sketch.key === "w"){
          this.player.loc = this.player.loc.plus(Maths.scalMult(3.5, this.player.head))
        }
        if(sketch.key === "s"){
          this.player.loc = this.player.loc.minus(this.player.head)
        }
        if(sketch.key === "d"){
          this.player.rotateBy(-0.05)
        }
        if(sketch.key === "e"){
          this.player.rotateOnV(-0.05)
        }
        if(sketch.key === "a"){
          this.player.rotateBy(0.05)
        }
        if(sketch.key === "O"){
          this.player.rotateVertBy(0.01)
        }
        if(sketch.key === "L"){
          this.player.rotateVertBy(-0.01)
        }

        this.player.updateVecs()
      }.bind(this)
  }
}

module.exports = PlayerControls
