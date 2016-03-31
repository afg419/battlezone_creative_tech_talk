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
          this.player.rotateOnV(0.05)
        }
        if(sketch.key === "a"){
          this.player.rotateOnV(-0.05)
        }
        if(sketch.key === "o"){
          this.player.rotateOnU(-0.05)
        }
        if(sketch.key === "l"){
          this.player.rotateOnU(0.05)
        }
        if(sketch.key === "k"){
          this.player.rotateOnHead(0.05)
        }
        if(sketch.key === ";"){
          this.player.rotateOnHead(-0.05)
        }

        this.player.updateVecs()
      }.bind(this)
  }
}

module.exports = PlayerControls
