const chai = require('chai');
const assert = chai.assert;

const EndGame = require('../lib/end_game');

describe('EndGame', function() {
  it('sorts scores by level', function() {
    var s1 = {level: 1, wealth: 0};
    var s2 = {level: 2, wealth: 0};
    var s3 = {level: 0, wealth: 0};
    var scores = [s1, s2, s3];
    var eG = new EndGame(0,0,0,0,0, scores);
    assert(eG.sortedFormattedScores[0], s2);
    assert(eG.sortedFormattedScores[1], s1);
    assert(eG.sortedFormattedScores[2], s3);
  });

  it('sorts scores by level then wealth', function() {
    var s1 = {level: 1, wealth: 0};
    var s2 = {level: 2, wealth: 0};
    var s3 = {level: 2, wealth: 10};
    var s4 = {level: 0, wealth: 0};
    var scores = [s1, s2, s3, s4];
    var eG = new EndGame(0,0,0,0,0, scores);
    assert(eG.sortedFormattedScores[0], s3);
    assert(eG.sortedFormattedScores[1], s2);
    assert(eG.sortedFormattedScores[2], s1);
    assert(eG.sortedFormattedScores[3], s4);
  });
});
