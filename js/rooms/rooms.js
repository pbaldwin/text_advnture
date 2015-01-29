(function(){
  // A collection of rooms.
  var rooms = {};

  var add_room = function (options) {
    if (options.name) {
      rooms[options.name] = new Room(options);
    } else {
      console.warn('Room must have a name.', options);
    }
  };

  window.add_room = add_room;
  window.rooms = rooms;
}());
