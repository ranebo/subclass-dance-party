
var RobotDancer6 = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // this.top = top;
  // this.left = left;
  this.$node.append('<img src= "src/assets/robot6.gif">');
  this.setPosition(top, left);
};

RobotDancer6.prototype = Object.create(Dancer.prototype);
RobotDancer6.prototype.constructor = RobotDancer6;

RobotDancer6.prototype.step = function() {
};

