const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Fighter = require('../lib/fighter');
const Vector = require('../lib/vector');
const Bullet = require('../lib/bullet');

describe('Fighter', function(){
  context('Chasing player', function() {
    var location = new Vector(0,0,0);
    var heading = new Vector(1,0,0);
    var strategy = new Vector(0,0,1);
    var player = new Player(new Vector(10,10,-1), new Vector(0,1,0), 5, 45, 45, 10);

    it('should forewardThrust', function(){
      var fighter = new Fighter(location, 0, 0, 0, strategy, heading);
      fighter.momentum = new Vector(1,0,0);
      fighter.forewardThrust();
      assert(fighter.momentum.equals(new Vector(0.95 + 0.45,0,0 )));
    });

    it('should updateLocation', function(){
      var fighter = new Fighter(location, 0, 0, 0, strategy, heading);
      fighter.momentum = new Vector(1,0,0);
      fighter.forewardThrust();
      fighter.updateLocation();
      assert(fighter.loc.equals(new Vector(0.95 + 0.45,0,0 )));
    });

    it('knows players Location altered by strategy', function(){
      var fighter = new Fighter(location, 0, 0, 0, strategy, heading);
      var direction = fighter.directionOfPlayerStrategy(player);
      assert(direction.equals( (new Vector(1,1,0)).unit ));
    });
  });

  context('Firing weapons', function() {
    var location = new Vector(0,0,0);
    var heading = new Vector(1,0,0);
    var strategy = new Vector(0,0,1);
    var player = new Player(new Vector(10,10,-1), new Vector(0,1,0), 5, 45, 45, 10);

    it('should detect if player is in range', function(){
      var fighter = new Fighter(location, 0, 0, 0, strategy, heading);
      assert(fighter.inFireRange(player));
    });

    it('should fire bullet', function(){
      var fighter = new Fighter(location, 0, 0, 0, strategy, heading);
      var bullets = [];
      fighter.fire(player, bullets);

      assert(bullets.length === 1);
      assert(bullets[0] instanceof Bullet);
      assert(bullets[0].loc.equals(new Vector(7.05, 7.05, -0.71)));
    });


  });
});
