//zombie robot
var RobotDancer4 = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.$node.append('<img src= "src/assets/robot4.gif">'); //add as child of dancer div
  this.setPosition(top, left);
 // this.step();
};

RobotDancer4.prototype = Object.create(Dancer.prototype);
RobotDancer4.prototype.constructor = RobotDancer4;

RobotDancer4.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('flip');
  // if (this.$node.hasClass('flip')) {
  //   this.$node.removeClass('flip');
  // } else {
  //   this.$node.addClass('flip');
  // }
};
