class Cockpit{
  constructor(sketch, width, height){
    this.sketch = sketch;
    this.width = height;
    this.height = width;
  }

  display(player, timer){
    this.target();
    this.cockpitSupports();
    this.hud(player,timer);
  }

  target(){
    var sketch = this.sketch;
    var width = this.width;
    var height = this.height;
    sketch.fill(64,163,67);
    sketch.ellipse(width/2,height/2, 10, 10);
    sketch.noFill();
    sketch.strokeWeight(4);
    sketch.stroke(64,163,67);
    sketch.ellipse(width/2,height/2, 100, 100);
  }

  cockpitSupports(){
    var sketch = this.sketch;
    var width = this.width;
    var height = this.height;
    sketch.fill(64,163,67);
    sketch.stroke(100,100,100);
    sketch.strokeWeight(8);
    sketch.line(0, 0, (1/3)*width, (3/5)*height );
    sketch.line(0,(9/12)*height,(1/3)*width,(3/5)*height);
    sketch.line(width,0,(2/3)*width,(3/5)*height);
    sketch.line(width,(9/12)*height,(2/3)*width,(3/5)*height);
    sketch.line((2/3)*width,(3/5)*height,(1/3)*width,(3/5)*height);
    sketch.line((2/3)*width,(3/5)*height,(3/4)*width,height);
    sketch.line((1/3)*width,(3/5)*height,(1/4)*width,height);
  }

  hud(player, timer){
    var sketch = this.sketch;
    var width = this.width;
    var height = this.height;
    sketch.noStroke();
    this.sketch.textFont("Courier");
    sketch.textSize(30);
    sketch.text(`${player.alert}`, (4/12)*width, (3/20)* height);
    sketch.textSize(20);
    sketch.text(`Location: (${player.loc.x}, ${player.loc.y}, ${player.loc.z})`, (5/12)*width, 13/20 * height);
    sketch.text(`Health: ${player.health}`, (5/12)*width,14/20 * height);
    sketch.text(`Wealth: ${player.wealth}`, (5/12)*width,15/20 * height);
    sketch.text(`Speed: ${player.speed}`,(5/12)*width,16/20 * height);
    sketch.text(`Timer: ${timer/20}`,(5/12)*width,17/20 * height);
  }
}

module.exports = Cockpit;
