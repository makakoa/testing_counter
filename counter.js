/*jshint node: true*/
var Counter = function() {
  this.value = 0;
};

Counter.prototype.increment = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

module.exports = Counter;
