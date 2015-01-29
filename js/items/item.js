(function() {
  var defaults = {
    name: "",
    takeable: false,
    description: "It is a thing.",
    onTake: function() { console.log("You added the thing to your inventory."); }
  };
  var Item = function (options) {
    _.assign(this, defaults, options);
  };

  window.Item = Item;
}());
