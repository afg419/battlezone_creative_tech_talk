const chai = require('chai');
const assert = chai.assert;

const Obstacle = require('../lib/obstacle');
const Vector = require('../lib/vector');
const Player = require('../lib/player');

// describe('obstacle functionality', function(){
//   context('weird bug, why?', function() {
//     it('orders faces by distance to player', function(){
//       var builder = new LevelBuilder()
//       var player = new Player(new Vector(0,0,0), new Vector(1,0,0), 5);
//       var obs = new Obstacle(builder.squareBuilding(100,100,100,100,100,true), new Vector(150,150,50));
//       var computed = obs.orderedFacesByDistTo(player).map(face => {
//         return face.distanceTo2(player)
//       });
//
//       assert(computed[0] >= computed[1])
//       assert(computed[1] >= computed[2])
//       assert(computed[2] >= computed[3])
//     });
//   });
// });
