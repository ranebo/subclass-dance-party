var ColorfulDancer = function(top, left, timeBetweenSteps) {
  Dancer.apply(this, arguments);
};
// console.log(Dancer.prototype.step);
ColorfulDancer.prototype = Object.create(Dancer.prototype);
ColorfulDancer.prototype.constructor = ColorfulDancer;

// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
ColorfulDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  var colors = ['red', 'blue', 'pink', 'purple', 'magenta', 'green', 'orange', 'yellow', 'cyan', 'black'];
  var color = colors[Math.floor(Math.random() * 10)];

  var styleSettings = {
    border: '10px solid ' + color
  };

  this.$node.css(styleSettings);

};