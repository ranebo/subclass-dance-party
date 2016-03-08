
var Dancer = function(top, left, timeBetweenSteps) {
 
  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer"></div>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};


Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  
  var someDancer = this; //saves 'this' context as a variable

  setTimeout(function() {
    someDancer.step(); //needs to be invoked
  }, this.timeBetweenSteps);

};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  //window.dancers = []
  //set height to middle of screen
  this.$node.addClass(lineup);

};








