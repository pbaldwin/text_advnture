(function(global, Advnture){
  var defaults = {
    exits: {},
    items: {},
    description: "You are in a room, there are no exits.",
    default: false
  };

  var Room = function (options) {
    _.assign(this, defaults, options);
  };

  // Add item to your Adventure
  Advnture.prototype.addRoom = function (options) {
    if (options.name) {
      this.rooms[options.name] = new Room(options);
      this.currentRoom = options.default ? this.rooms[options.name] : this.currentRoom;
      return this.rooms[options.name];
    } else {
      console.warn('Room must have a name.', options);
      return null;
    }
  };
}(window, window.Advnture));
