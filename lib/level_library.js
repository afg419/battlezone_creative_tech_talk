const Vector = require('./vector');
const Mine = require('./mine');
const Booty = require('./booty');
const Turret = require('./turret');
const Mothership = require('./mothership');
const Message = require('./message');

class LevelLibrary{
  level(id){
    switch(id) {
    case 0:
        return this.level0;
    case 1:
        return this.level1;
    case 2:
        return this.level2;
    case 3:
        break;
     }

  }

  get level0() {
    var messages = [(new Message(new Vector(50,0,0), 10, "Test 5")),
  ];

    var mines = [];
    var booty = [(new Booty(new Vector(10000,0,0), 6, 10, 200)),];
    var turrets = [];
    return { mines: mines, booty: booty, turrets: turrets, mothership: [], messages: messages};
  }

  get level1(){
    var mines = [
                (new Mine(new Vector(950,1200,50), 16, 30)),
                (new Mine(new Vector(1050,1500,150), 16, 30)),
                (new Mine(new Vector(1100,1900,350), 16, 30)),
                (new Mine(new Vector(1150,2150,700), 16, 30)),
                (new Mine(new Vector(1050,2150,700), 16, 30)),
                (new Mine(new Vector(1250,2550,1300), 16, 30)),
                (new Mine(new Vector(1250,2750,1200), 16, 30)),
                (new Mine(new Vector(1350,2650,1500), 16, 30)),
                (new Mine(new Vector(1800,3050,1800), 16, 30)),
                (new Mine(new Vector(1750,3200,2000), 26, 50)),
                (new Mine(new Vector(1750,3150,2200), 26, 50)),
                (new Mine(new Vector(1850,3050,2300), 26, 50)),
                (new Mine(new Vector(1500,3100,2500), 26, 50)),
                (new Mine(new Vector(1300,3100,2700), 26, 50)),
                (new Mine(new Vector(1250,3100,3000), 26, 50)),
                (new Mine(new Vector(1200,3150,3300), 26, 50)),
                (new Mine(new Vector(1200,3100,3500), 26, 50)),
              ];
    var booty = [
                (new Booty(new Vector(150,0,0), 6, 10, 200)),
                (new Booty(new Vector(300,0,0), 6, 10, 200)),
                (new Booty(new Vector(450,0,0), 6, 10, 200)),
                (new Booty(new Vector(600,30,0), 11, 20, 100)),
                (new Booty(new Vector(800,150,0), 11, 20, 100)),
                (new Booty(new Vector(1000,400,0), 11, 20, 100)),
                (new Booty(new Vector(1000,650,0), 8, 15, 150)),
                (new Booty(new Vector(1000,900,0), 8, 15, 150)),
                (new Booty(new Vector(1000,1200,50), 22, 40, 100)),
                (new Booty(new Vector(1000,1500,150), 22, 40, 100)),
                (new Booty(new Vector(1000,1700,250), 11, 20, 100)),
                (new Booty(new Vector(1000,1850,350), 11, 20, 100)),
                (new Booty(new Vector(1000,2000,500), 11, 20, 100)),
                (new Booty(new Vector(1100,2200,700), 22, 40, 100)),
                (new Booty(new Vector(1200,2400,1000), 22, 40, 200)),
                (new Booty(new Vector(1400,2700,1300), 17, 30, 200)),
                (new Booty(new Vector(1700,3000,1700), 17, 30, 200)),
                (new Booty(new Vector(1800,3100,2000), 17, 30, 300)),
                (new Booty(new Vector(1700,3100,2200), 17, 30, 300)),
                (new Booty(new Vector(1600,3100,2500), 17, 30, 300)),
                (new Booty(new Vector(1400,3100,2700), 17, 30, 300)),
                (new Booty(new Vector(1400,3100,3100), 17, 30, 300)),
                (new Booty(new Vector(1200,3100,3400), 17, 30, 500)),

                (new Booty(new Vector(1000,3100,3600), 17, 30, 700)),
                (new Booty(new Vector(1100,3400,3700), 17, 30, 700)),
                (new Booty(new Vector(900,3200,3900), 17, 30, 700)),
                (new Booty(new Vector(900,3300,3800), 17, 30, 300)),
              ];
    var turrets = [new Turret(new Vector(1000,3300,3800), 40, 70)];
    return { mines: mines, booty: booty, turrets: turrets, mothership: [], messages: []};
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
    return { mines: mines, booty: booty, turrets: mS.turrets, mothership: mS.ship, messages: [] };
  }
}

module.exports = LevelLibrary;
