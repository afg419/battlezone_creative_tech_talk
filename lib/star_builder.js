const Vector = require('./vector');
const Point = require('./point');

class StarBuilder{
  constructor(n){
    this.stars = this.makeStars(n);
  }

  drawBackgroundRelativeTo(player, sketch){
    this.stars.forEach(star => {
      star.sketchRelativeTo(player, sketch);
    });
  }

  makeStars(n){
    var stars = [];
    for(var i = 0; i < n; i++){
      stars.push(this.randomStar);
    }
    return stars;
  }

  get randomStar(){
    var x = 2*Math.random() - 1;
    var y = 2*Math.random() - 1;
    var z = 2*Math.random() - 1;
    var loc = new Vector(x,y,z).unit.scaledBy(100000);
    return new Point(loc);
  }
}


module.exports = StarBuilder;
