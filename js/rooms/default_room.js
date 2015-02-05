(function() {
  var table = game.addItem({
    name: "yellow_table",
    takeable : false,
    description : "It's a yellow table. There is a key on it."
  });

  var key = game.addItem({
    name: "simple_key",
    takeable: true,
    description: "It's an old rusty key.",
    onTake: function () {
      console.log("You've got the key, dude!");
      table.description = "It's a yellow table.";
    }
  });

  var default_room = game.addRoom({
    exits: {
      north: {
        path: "red_room",
        locked: false
      }
    },
    items: {
      table: table,
      key: key
    },
    description: "You are in a pale green room. A light hums faintly.\n" +
                 "There is a yellow table in the middle of the floor.\n" +
                 "There is an exit to the north.",
    name: "default_room",
    default: true
  });
}());
