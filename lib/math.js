const Vector = require('./vector');

var scalMult = function(a, vec){
    return new Vector(a*vec.x, a*vec.y, a*vec.z);
};

function getTanDeg(deg) {
  var rad = deg * Math.PI/180;
  return Math.tan(rad);
}

module.exports = {scalMult: scalMult, getTanDeg: getTanDeg}
