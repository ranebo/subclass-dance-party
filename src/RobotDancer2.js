//dancing robot
var RobotDancer2 = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // this.top = top;
  // this.left = left;
  this.$node.append('<img src= "src/assets/robot2.gif">');
  this.setPosition(top, left);
};

RobotDancer2.prototype = Object.create(Dancer.prototype);
RobotDancer2.prototype.constructor = RobotDancer2;

RobotDancer2.prototype.step = function() {
};

