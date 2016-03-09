//matt damon
var MattDamon = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // this.top = top;
  // this.left = left;
  this.$node.append('<img src= "src/assets/matt-damon.gif">');
  this.setPosition(top, left);
};

MattDamon.prototype = Object.create(Dancer.prototype);
MattDamon.prototype.constructor = MattDamon;

MattDamon.prototype.step = function() {
};

