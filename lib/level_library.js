const Vector = require('./vector');
const Mine = require('./mine');
const Booty = require('./booty');
const Turret = require('./turret');
const Fighter = require('./fighter');
const Player = require('./player');
// const Mothership = require('./mothership');
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
        return this.level3;
     }
  }

  get level0() {
    var messages = [
                    (new Message(new Vector(300,0,0), 10, "Run into yellow boxes to collect wealth.")),
                    (new Message(new Vector(1600,0,0), 8, "Press the 'Shift' key to slow down.")),
                    (new Message(new Vector(2400,0,0), 12, "Pressing the 'D' key will rotate you to the right.\n'A' will rotate to the left.")),
                    (new Message(new Vector(3300,0,0), 12, "The next yellow box is to your right.\nPress 'D' and then move toward it.")),
                    (new Message(new Vector(5600,2000,0), 60, "Press the 'A' key to rotate to the next yellow box.")),
                    (new Message(new Vector(7600,2000,0), 60, "Press the 'S' slow down and reverse.\nTry it.\nThen hit 'W' to move forward again\nto the next purple box.")),
                    (new Message(new Vector(8600,2000,0), 60, "The 'O' and 'L' keys control pitch.\n 'L' will pull your craft up\n and 'O' will cause your craft to dive.\nFind the next HUGE message box.\n It is not far above you.")),
                    (new Message(new Vector(9900,2000,1500), 100, "If you get lost, hold the 'J' key\n to turn your ship towards the nearest yellow box.\nTry it now. Then go get it.")),
                   ];
    var mines = [];
    var booty = [
                (new Booty(new Vector(600,0,0), 6, 8, 50)),
                (new Booty(new Vector(1200,0,0), 11, 20, 50)),
                (new Booty(new Vector(2000,0,0), 11, 20, 100)),
                (new Booty(new Vector(4600,1000,0), 55, 100, 100)),
                (new Booty(new Vector(6600,2000,0), 40, 75, 150)),
                (new Booty(new Vector(9900,3500,2900), 40, 75, 150)),
                ];
    var turrets = [];
    var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 35, 10);
    return { player: player, mines: mines, booty: booty, turrets: turrets, mothership: [], messages: messages, fighters: []};
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
    var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 35, 10);
    return { player: player, mines: mines, booty: booty, turrets: turrets, mothership: [], messages: [], fighters: []};
  }

  randomEntity(distance, width, EntityClass){
    var r = 2*Math.random() + 0.25;
    var x = 2*Math.random() - 1;
    var y = 2*Math.random() - 1;
    var z = 2*Math.random() - 1;
    var loc = new Vector(x,y,z).unit.scaledBy(r*distance);
    return new EntityClass(loc, 0, width, 200);
  }

  seedRandomEntities(distance, width, number, EntityClass) {
    var entities = [];
    for(var i = 0; i < number; i++){
      entities.push(this.randomEntity(distance, width, EntityClass));
    }
    return entities;
  }

  get level2(){
    var mines = this.seedRandomEntities(200, 40, 17, Mine);

    var booty = this.seedRandomEntities(200, 10, 12, Booty);

    var turrets = [
                    new Turret(new Vector(425, 0, 0), 0, 30),
                    new Turret(new Vector(-425, 0, 0), 0, 30),
                    new Turret(new Vector(0, 425, 0), 0, 30),
                    new Turret(new Vector(0, -425, 0), 0, 30),
                    new Turret(new Vector(0, 0, 425), 0, 30),
                    new Turret(new Vector(0, 0, -425), 0, 30),
                ];

    var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 35, 10);
    return { player: player, mines: mines, booty: booty, turrets: turrets, mothership: [], messages: [], fighters:[] };
  }

  get level3(){
    var mines = this.seedRandomEntities(700, 60, 8, Mine);
    var booty = this.seedRandomEntities(500, 10, 6, Booty);
    var fighters = [
      new Fighter(new Vector(1500, 0, 0), 7, 40, 10, new Vector(75,0,0), new Vector(-1,0,0)),
      new Fighter(new Vector(-6500, 0, 0), 7, 40, 10, new Vector(0,75,0), new Vector(-1,0,0)),
      new Fighter(new Vector(0, 4500, 0), 7, 40, 10, new Vector(50,50,0), new Vector(-1,0,0)),
    ];

    var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5, 45, 35, 10, 2, 0.5);
    return { player: player, mines: mines, booty: booty, turrets: [], mothership: [], messages: [], fighters: fighters };
  }
}

module.exports = LevelLibrary;
