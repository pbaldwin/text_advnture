(function(global, Advnture) {
  // Item defaults
  var defaults = {
    name: "",
    takeable: false,
    description: "It is a thing.",
    onTake: function() { console.log("You added the thing to your inventory."); }
  };

  // Item constructor
  var Item = function (options) {
    _.assign(this, defaults, options);
  };

  // Add item to your Adventure
  Advnture.prototype.addItem = function (options) {
    if (options.name) {
      this.items[options.name] = new Item(options);
      return this.items[options.name];
    } else {
      console.warn('Item must have a name.', options);
      return null;
    }
  };
}(window, window.Advnture));
