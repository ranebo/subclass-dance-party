$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($('body').height() - 100) * Math.random(),
      ($('body').width() - 100) * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);



    // var arrayOfPositions = [];
    // for (var i = 0; i < window.dancers.length; i++) {

    // }

    dancer.$node.on('click', function(event) { //go query DOM for every element w/ class dancer

      var top = $(this).attr('top');
      var left = $(this).attr('left');

      var originalPosition = {
        top: top,
        left: left
      };

      var position = {
        top: top,
        left: left
      };

      var shortestDistance = 10000;
      var partner, clickedDancer;

      for (var i = 0; i < window.dancers.length; i++) {
        var a = Math.abs(Math.pow((window.dancers[i].top - top), 2));
        var b = Math.abs(Math.pow((window.dancers[i].left - left), 2));
        var c = Math.sqrt(a + b);

        if (c === 0) {
          clickedDancer = window.dancers[i];
        }

        if (c !== 0) {
          if (c < shortestDistance) {
            shortestDistance = c;
            position.top = window.dancers[i].top;
            position.left = window.dancers[i].left + 100;
            partner = window.dancers[i];
          }
        }
      }

      $(this).animate(position, function() {

        $(this).animate({top: '-=100', opacity: '0.4'}, 'fast');
        $(this).animate({top: '+=100', opacity: '0.4'}, 'fast');
        $(this).animate({top: '-=100', opacity: '0.8'}, 'fast');
        $(this).animate({top: '+=100', opacity: '0.8'}, 'fast');
        $(this).animate({top: '-=100', opacity: '1'}, 'fast');
        $(this).animate({top: '+=100', opacity: '1'}, 'fast');

        partner.$node.animate({top: '-=100', opacity: '0.4'}, 'fast');
        partner.$node.animate({top: '+=100', opacity: '0.4'}, 'fast');
        partner.$node.animate({top: '-=100', opacity: '0.8'}, 'fast');
        partner.$node.animate({top: '+=100', opacity: '0.8'}, 'fast');
        partner.$node.animate({top: '-=100', opacity: '1'}, 'fast');
        partner.$node.animate({top: '+=100', opacity: '1'}, 'fast', function() {
          clickedDancer.$node.animate(originalPosition);
        });
      });


      //to update to new position if needed
      // clickedDancer.top = partner.top;
      // clickedDancer.left = partner.left;
      // $(this).attr("top", partner.top);
      // $(this).attr("left", partner.left);

    });


  });

  $('.lineUpButton').on('click', function(event) {
    var leftPosition = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].$node.css({top: 500, left: leftPosition});
      leftPosition = leftPosition + 100;
      window.dancers[i].$node.addClass('lineup');
      //dancer.$node.addClass
    }
    var leftPosition = 0;
  });

  $('.randomizeButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var top = ($("body").height() - 100) * Math.random();
      var left = ($("body").width() - 100) * Math.random();
      window.dancers[i].$node.css({top: top, left: left});
      window.dancers[i].$node.removeClass('lineup');
      //dancer.$node.addClass
    }
  });

    


});

