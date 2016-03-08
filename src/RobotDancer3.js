var RobotDancer3 = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  // this.top = top;
  // this.left = left;
  this.$node.append('<img src= "src/assets/robot3.gif">');
  this.setPosition(top, left);
};

RobotDancer3.prototype = Object.create(Dancer.prototype);
RobotDancer3.prototype.constructor = RobotDancer3;

RobotDancer3.prototype.step = function() {
};
