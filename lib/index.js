const P5 = require('./p5');
const Vector = require('./vector');
const Player = require('./player');
const Point = require('./point');
const Dimensions = require('./screen_dimensions');
const Edge = require('./edge');
const CollisionSphere = require('./collision_sphere');
const Face = require('./face');
const Maths = require('./math')
const Level = require('./level')
const Level2 = require('./level2')
const PlayerControls = require('./player_controls')

var s = function(sketch) {
  var height = Dimensions.height
  var width = Dimensions.width;

  sketch.setup = function(){
    sketch.frameRate(30)
    var cnv = sketch.createCanvas(height , width);
  }

  var player = new Player(new Vector(0,25,25), new Vector(1,0,0),5,45,35,20)
  var obstacle = new CollisionSphere(new Vector(50,25,25), 25)
  var playerController = new PlayerControls(player)

  var level = new Level();
  var level2 = new Level2();

  var player = new Player(new Vector(0,25,25), new Vector(1,0,0), 5 , 45,45, 20)


  // var e = []
  // e[1] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(50,50,0)));
  // e[2] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(50,0,50)));
  // e[3] = new Edge(new Point(new Vector(50,0,0)), new Point(new Vector(100,0,0)));
  // e[4] = new Edge(new Point(new Vector(50,50,0)), new Point(new Vector(100,50,0)));
  // e[5] = new Edge(new Point(new Vector(50,50,0)), new Point(new Vector(50,50,50)));
  // e[6] = new Edge(new Point(new Vector(50,0,50)), new Point(new Vector(50,50,50)));
  // e[7] = new Edge(new Point(new Vector(50,0,50)), new Point(new Vector(100,0,50)));
  // e[8] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,50,0)));
  // e[9] = new Edge(new Point(new Vector(100,0,0)), new Point(new Vector(100,0,50)));
  // e[10] = new Edge(new Point(new Vector(100,50,0)), new Point(new Vector(100,50,50)));
  // e[11] = new Edge(new Point(new Vector(100,0,50)), new Point(new Vector(100,50,50)));
  // e[12] = new Edge(new Point(new Vector(50,50,50)), new Point(new Vector(100,50,50)));

  // var player = new Player(new Vector(0,25,25), new Vector(1,0,0), 5 , 45,45)
  // var level = new Level();
  // var level2 = new Level2();

  sketch.draw = function(){
    sketch.background(0,0,0)
    sketch.stroke(29,250,0)
    sketch.fill(255,255,255);
    sketch.line(0, width/2 - 30, height,width/2 - 30)
    // player.loc = player.loc.plus(Maths.scalMult(5,player.head))
    // player.updateVecs()
    level2.buildingsOrderedBydistanceTo(player).forEach( obstacle => obstacle.sketchRelativeTo(player, sketch) )
    playerController.control(sketch)
    // level.allHall.forEach(function(face){
    //   face.sketchRelativeTo(player,sketch)
    // })

    sketch.text(`player loc: (${player.loc.x}, ${player.loc.y}, ${player.loc.z})`,0,10)
    sketch.text(`player head: (${player.head.x}, ${player.head.y}, ${player.head.z})`,0,20)
    sketch.text(`player v (up): (${player.v.x}, ${player.v.y}, ${player.v.z})`,0,30)
    sketch.text(`player u (left): (${player.u.x}, ${player.u.y}, ${player.u.z})`,0,40)
    sketch.text(`player shadow: (${player.shadow.x}, ${player.shadow.y}, ${player.shadow.z})`,0,30)

    // e.forEach(function(edge){
    //   edge.sketchRelativeTo(player, sketch);
    // })

    // level2.buildings.forEach(function(face){
    //   face.sketchRelativeTo(player, sketch);
    // });

  //   level.allHall.forEach(function(face){
  //     face.sketchRelativeTo(player,sketch)
  //   })
  }
};

var myP5 = new P5(s)
