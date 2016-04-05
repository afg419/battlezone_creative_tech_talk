const Vector = require('./vector');
const Mine = require('./mine');
const Booty = require('./booty');
const Turret = require('./turret');
const Mothership = require('./mothership');

class LevelLibrary{
  level(id){
    switch(id) {
    case 1:
        return this.level1;
    case 2:
        return this.level2;
    case 3:
        break;
     }

  }

  get level1(){
    var mines = [(new Mine(new Vector(100,0,0), 1.5, 2)), (new Mine(new Vector(100,50,0), 7, 10))];
    var booty = [
      (new Booty(new Vector(130,0,0), 1, 2, 10)),
                (new Booty(new Vector(130,50,0), 5, 10, 100)),
                (new Booty(new Vector(130,150,0), 5, 10, 100)),
                (new Booty(new Vector(130,250,0), 5, 10, 100)),
                (new Booty(new Vector(130,350,0), 5, 10, 100)),
                (new Booty(new Vector(130,450,50), 5, 10, 100)),
                (new Booty(new Vector(130,500,100), 5, 10, 100)),
                (new Booty(new Vector(130,550,200), 5, 10, 100)),
                (new Booty(new Vector(130,575,300), 5, 10, 100)),
                (new Booty(new Vector(130,600,400), 5, 10, 100)),
                (new Booty(new Vector(130,600,500), 5, 10, 100)),
                (new Booty(new Vector(130,600,600), 5, 10, 100)),
                (new Booty(new Vector(130,600,4000), 600, 1000, 100)),
                (new Booty(new Vector(130,600,4000), 600, 1000, 100)),
                (new Booty(new Vector(130,600,5200), 600, 1000, 100)),
                (new Booty(new Vector(1280,600,4000), 600, 1000, 100))
              ];
    var turrets = [new Turret(new Vector(1000,0,0), 55, 100)];
    return { mines: mines, booty: booty, turrets: turrets, mothership: []};
  }

  get level2(){
    var width = 400;
    var count = 10;
    var x = 400;
    var y = -6000;
    var z = 2200;
    var mS = new Mothership(width, count, x, y, z);
    var mines = [new Mine(new Vector(130,0,0), 1, 10)];
    var booty = [new Booty(new Vector(130,0,0), 1, 2, 10)];
    return { mines: mines, booty: booty, turrets: mS.turrets, mothership: mS.ship };
  }
}

module.exports = LevelLibrary;
