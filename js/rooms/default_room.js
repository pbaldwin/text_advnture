(function() {
  var yellow_table = new Item({
    name: "yellow_table",
    takeable : false,
    description : "It's a yellow table. There is a key on it."
  });

  var key = new Item({
    name: "simple_key",
    takeable: true,
    description: "It's an old rusty key.",
    onTake: function () {
      console.log("You've got the key, dude!");
      yellow_table.description = "It's a yellow table.";
    }
  });

  window.add_room({
    exits: {
      north: {
        path: "red_room",
        locked: false
      }
    },
    items: {
      table: yellow_table,
      key: key
    },
    description: "You are in a pale green room. A light hums faintly.\n" +
                 "There is a yellow table in the middle of the floor.\n" +
                 "There is an exit to the north.",
    name: "default_room"
  });
}());
