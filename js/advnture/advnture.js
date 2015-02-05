(function(global) {
  var Advnture = function () {
    this.currentRoom = {};
    this.inventory = {};
    this.rooms = {};
    this.items = {};
  };

  // Advnture.prototype.look = function (item) {
  //   if (item && item !== "room") {
  //     try {
  //       var thing = this.currentRoom.items[item]  || inventory[item];
  //       var description = thing.description;
  //       console.log(description);
  //     } catch (e) {
  //       console.log("Whatchu talkin' bout, Willis?");
  //     }
  //   } else {
  //     console.log(this.currentRoom.description);
  //   }
  // };
  //
  // Advnture.prototype.take = function (item) {
  //   if (item && item !== "room") {
  //     try {
  //       var thing = this.currentRoom.items[item];
  //
  //       if (thing.takeable) {
  //         this.inventory[item] = thing;
  //         this.inventory[item].onTake();
  //         delete this.currentRoom.items[item];
  //       } else {
  //         console.log("You can't take the " + item + ".");
  //       }
  //     } catch (e) {
  //       console.log("There's no " + item + " here...");
  //     }
  //   }
  // };
  //
  // Advnture.prototype.go = function (direction) {
  //   try {
  //     var exit = this.currentRoom.exits[direction];
  //     this.currentRoom = window.rooms[exit.path];
  //     this.look();
  //   } catch(e) {
  //     console.log("you can't go " + direction + ".");
  //   }
  // };

  global.Advnture = Advnture;
}(window));
