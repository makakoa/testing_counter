/*jshint node: true*/
var expect = require('chai').expect;
var Counter = require('../counter');

describe('the counter', function() {
  it('should start at 0', function() {
    var c = new Counter();
    expect(c.getValue()).to.eql(0);
  });

  it('should increase value by 1', function() {
    var c = new Counter();
    var before = c.getValue();
    c.increment();
    var after = c.getValue();
    expect(after).to.eql(before + 1);
  });
});
