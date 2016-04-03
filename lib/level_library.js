const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');
const Dimensions = require('./screen_dimensions');
const Edge = require('./edge');
const Face = require('./face');
const Maths = require('./math')
const Mine = require('./mine')
const Booty = require('./booty')
const P5 = require('./p5');

class LevelLibrary{
  level(id){
    switch(id) {
    // case 0:
    //     return this.level0;
    //     break;
    case 1:
        return this.level1;
        break;
    case 2:
        break;
    case 3:
        break;
     }

  }

  get level1(){
    var mines = [(new Mine(new Vector(100,0,0), 1.5, 2)), (new Mine(new Vector(100,50,0), 7, 10))];
    var booty = [(new Booty(new Vector(130,0,0), 1, 2, 10)),
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
    return { mines: mines, booty: booty }
  }
}

module.exports = LevelLibrary;
