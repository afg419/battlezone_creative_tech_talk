const Vector = require('./vector');
const Mine = require('./mine');
const Booty = require('./booty');

class LevelLibrary{
  level(id){
    switch(id) {
    // case 0:
    //     return this.level0;
    //     break;
    case 1:
        return this.level1;
    case 2:
        break;
    case 3:
        break;
     }

  }

  get level1(){
    var mines = [
                (new Mine(new Vector(1100,1200,50), 16, 30)),
                (new Mine(new Vector(900,1500,150), 16, 30)),
                (new Mine(new Vector(1100,1900,350), 16, 30)),
                (new Mine(new Vector(1150,2150,700), 16, 30)),
                (new Mine(new Vector(1600,3200,2700), 16, 30)),
                (new Mine(new Vector(1300,3200,3100), 16, 30)),
              ];
    var booty = [
                (new Booty(new Vector(150,0,0), 6, 10, 200)),
                (new Booty(new Vector(300,0,0), 6, 10, 200)),
                (new Booty(new Vector(450,0,0), 6, 10, 200)),
                (new Booty(new Vector(600,30,0), 11, 20, 100)),
                (new Booty(new Vector(800,150,0), 11, 20, 100)),
                (new Booty(new Vector(1000,400,0), 11, 20, 100)),
                (new Booty(new Vector(1000,650,0), 8, 15, 100)),
                (new Booty(new Vector(1000,900,0), 8, 15, 100)),
                (new Booty(new Vector(1000,1200,50), 22, 40, 300)),
                (new Booty(new Vector(1000,1500,150), 22, 40, 200)),
                (new Booty(new Vector(1000,1700,250), 11, 20, 100)),
                (new Booty(new Vector(1000,1850,350), 11, 20, 100)),
                (new Booty(new Vector(1000,2000,500), 11, 20, 100)),
                (new Booty(new Vector(1100,2200,700), 22, 40, 100)),
                (new Booty(new Vector(1200,2400,1000), 22, 40, 100)),
                (new Booty(new Vector(1400,2700,1300), 28, 30, 100)),
                (new Booty(new Vector(1700,3000,1700), 28, 30, 100)),
                (new Booty(new Vector(1800,3100,2000), 28, 30, 100)),
                (new Booty(new Vector(1700,3100,2200), 28, 30, 100)),
                (new Booty(new Vector(1600,3100,2500), 28, 30, 100)),
                (new Booty(new Vector(1400,3100,2700), 28, 30, 100)),
                (new Booty(new Vector(1400,3100,3100), 28, 30, 100)),
                (new Booty(new Vector(1200,3100,3400), 28, 30, 100)),
                (new Booty(new Vector(1000,3100,3600), 28, 30, 100))
              ];
    return { mines: mines, booty: booty };
  }
}

module.exports = LevelLibrary;
