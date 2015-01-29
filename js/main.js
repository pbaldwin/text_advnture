(function() {
  console.log("Hi, there. \n Why not type \"startGame()\"?");

  window.startGame = function () {
    console.log("You started the game!!!");

    // Instantiat the main game object
    var game = {
      currentRoom : {},
      inventory: {},

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
      }
    };

    game.currentRoom = window.rooms.default_room;
    game.look();

    // Assign global game functions to window.
    (function() {
      window.look = function (item) { game.look(item); };
      window.lookAt = window.look;
      window.take = function (item) { game.take(item); };
      window.inventory = function () { return game.inventory; };

      window.help = function () {
        console.log("Current Commands");
        console.log("look, lookAt = Look at room or item.");
        console.log("Usage: look(<item-name>) | look()");
        console.log("/n");
        console.log("take = Take an item");
        console.log("Usage: take(<item-name>)");
      };
    }());
  };
}());
