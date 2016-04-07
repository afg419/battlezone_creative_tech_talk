const chai = require('chai');
const assert = chai.assert;

const Game = require('../lib/game');
const Player = require('../lib/player');
const Vector = require('../lib/vector');
const Mine = require('../lib/mine');
const Booty = require('../lib/booty');
const Turret = require('../lib/turret');
const Message = require('../lib/message');
const Bullet = require('../lib/bullet');

describe('Game', function() {
  context('construction', function(){

    it('initializes with a given level', function() {
      var g = new Game(1);
      g.level.player = new Player(new Vector(10,0,0), new Vector(0,1,0), 5, 45, 45, 10);
      assert(g.level.player.alert === "");
    });

    it('changes player alert to tutorial mode', function() {
      var g = new Game(0);
      assert(g.level.player.alert === "Press 'w' to move forward.\nHit purple boxes for in-game hints.");
    });
  });

  context('organizing entities', function(){
    var g = new Game(1);
    g.level.player = new Player(new Vector(10,0,0), new Vector(0,1,0), 5, 45, 45, 10);
    g.level.mines = [(new Mine(new Vector(950,1200,50), 16, 30))];
    g.level.booty = [(new Booty(new Vector(150,0,0), 6, 10, 200))];
    g.level.turrets = [new Turret(new Vector(1000,3300,3800), 40, 70)];
    g.level.mothership = [];
    g.level.messages = [new Message(new Vector(1000,3300,3800), 40, 70)];
    g.level.fighters = [];
    g.bullets = [new Bullet(new Vector(0,0,0), new Vector(1,0,0), 50, 1, new Vector(0,1,0))];

    it('returns shootable entitites', function() {
      assert(g.shootableEntities.length === 4);
      assert(g.shootableEntities[0] instanceof Mine);
      assert(g.shootableEntities[1] instanceof Booty);
      assert(g.shootableEntities[2] instanceof Player );
      assert(g.shootableEntities[3] instanceof Turret );
    });

    it('returns solid entitites', function() {
      assert(g.solidEntities.length === 2);
      assert(g.solidEntities[0] instanceof Mine);
      assert(g.solidEntities[1] instanceof Turret);
    });

    it('returns renderable entitites', function() {
      assert(g.renderableEntities.length === 5);
      assert(g.renderableEntities[0] instanceof Mine);
      assert(g.renderableEntities[1] instanceof Booty);
      assert(g.renderableEntities[2] instanceof Bullet);
      assert(g.renderableEntities[3] instanceof Turret);
      assert(g.renderableEntities[4] instanceof Message);
    });

    it('sorts renderable entitites by distance to player', function() {
      assert(g.renderableEntitiesOrderedByDistanceToPlayer.length === 5);
      assert(g.renderableEntitiesOrderedByDistanceToPlayer[0] instanceof Turret);
      assert(g.renderableEntitiesOrderedByDistanceToPlayer[1] instanceof Message);
      assert(g.renderableEntitiesOrderedByDistanceToPlayer[2] instanceof Mine);
      assert(g.renderableEntitiesOrderedByDistanceToPlayer[3] instanceof Booty);
      assert(g.renderableEntitiesOrderedByDistanceToPlayer[4] instanceof Bullet);
    });
  });
});
