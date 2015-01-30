(function(){
  var defaults = {
    exits: {},
    items: {},
    description: "You are in a room, there are no exits."
  };

  var Room = function (options) {
    _.assign(this, defaults, options);
  };

  window.Room = Room;
}());
