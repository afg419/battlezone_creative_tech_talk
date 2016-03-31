const Vector = require('./vector');

var scalMult = function(a, vec){
    return new Vector(a*vec.x, a*vec.y, a*vec.z);
};

function getTanDeg(deg) {
  var rad = deg * Math.PI/180;
  return Math.tan(rad);
}

// function rotationMatrixAround(vec, deg){
//   var retX = new Vector(Math.cos(deg) + vec.x*vec.x*(1-Math.cos(deg)), vec.x*vec.y*(1-Math.cos(deg))-vec.z*Math.sin(deg), vec.x*vec.z(1-Math.cos(deg)))
//   var retY = new Vector(vec.x*vec.y*(1-Math.cos(deg))-vec.z*Math.sin(deg), Math.cos(deg) + vec.y*vec.y*(1-Math.cos(deg)), vec.y*vec.z(1-Math.cos(deg)))
//   var retZ = new Vector(vec.z*vec.x*(1-Math.cos(deg))-vec.y*Math.sin(deg), vec.z*vec.y*(1-Math.cos(deg))-vec.x*Math.sin(deg), Math.cos(deg) + vec.z*vec.z*(1-Math.cos(deg)))
//   return {row1: retX, row2: retY, row3: retZ}
// }

// function rotateX(deg){
//   return  [1,0,0
//            0,Math.cos(deg),-Math.sin(deg)
//            0,Math.sin(deg), Math.cos(deg)];
// }
//
// function rotateY(deg){
//   return  [Math.cos(deg),0,Math.sin(deg)
//            0,1,0
//            -Math.sin(deg),0, Math.cos(deg)];
// }
//
// function rotateZ(deg){
//   return  [Math.cos(deg),-Math.sin(deg),0
//            0,Math.cos(deg),-Math.sin(deg)
//            0,Math.sin(deg), Math.cos(deg)];
// }

module.exports = {scalMult: scalMult, getTanDeg: getTanDeg}
