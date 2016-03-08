var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
  this.top = top;
  this.left = left;
};
// console.log(Dancer.prototype.step);
MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
MovingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  var top = this.top + 10;
  var left = this.left + 10;
  var styleSettings = {
    top: top,
    left: left
  };
  this.top = top;
  this.left = left;

  this.$node.css(styleSettings);

};