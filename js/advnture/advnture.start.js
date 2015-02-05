(function (global, Advnture) {

  var advnture = {
    // Instantiate the main game object
    init : function (options) {
      this.rooms = options.rooms;
      this.items = options.items;
      this.inventory = options.inventory;
      this.currentRoom = options.currentRoom;

      this.publicMethods();
      this.look();
    },
    currentRoom : {},
    inventory: {},

    publicMethods : function () {
      var self = this;

      global.look = function (item) { self.look(item); };
      global.lookAt = global.look;
      global.take = function (item) { self.take(item); };
      global.inventory = function () { return self.inventory; };

      global.go     = function (direction) { self.go(direction); };
      global.north  = function () { global.go('north'); };
      global.south  = function () { global.go('south'); };
      global.east   = function () { global.go('east'); };
      global.west   = function () { global.go('west'); };

      global.help = function () {
        console.log("Current Commands");
        console.log("look, lookAt = Look at room or item.");
        console.log("Usage: look(<item-name>) | look()");
        console.log("take = Take an item");
        console.log("Usage: take(<item-name>)");
      };
    },

    look : function (item) {
      if (item && item !== "room") {
        try {
          var thing = this.currentRoom.items[item]  || inventory[item];
          var description = thing.description;
          console.log(description);
        } catch (e) {
          console.log("Whatchu talkin' bout, Willis?");
        }
      } else {
        console.log(this.currentRoom.description);
      }
    },

    take: function (item) {
      if (item && item !== "room") {
        try {
          var thing = this.currentRoom.items[item];

          if (thing.takeable) {
            this.inventory[item] = thing;
            this.inventory[item].onTake();
            delete this.currentRoom.items[item];
          } else {
            console.log("You can't take the " + item + ".");
          }
        } catch (e) {
          console.log("There's no " + item + " here...");
        }
      }
    },

    go: function (direction) {
      if (!direction || typeof direction !== "string") {
        console.log("Go where?");
        return;
      }

      try {
        var exit = this.currentRoom.exits[direction];
        this.currentRoom = this.rooms[exit.path];
        this.look();
      } catch(e) {
        console.log("you can't go " + direction + ".");
      }
    }
  };

  Advnture.prototype.start = function () {
    var gameOptions = {
      rooms : this.rooms,
      items : this.items,
      inventory : this.inventory,
      currentRoom : this.currentRoom
    };

    advnture.init(gameOptions);
  };

}(window, window.Advnture));
