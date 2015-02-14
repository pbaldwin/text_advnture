(function(global, Advnture){
  var gameMap = {
    rows: {
      0: []
    },
    currRow : 0,
    currCol : 0
  };

  gameMap.getRoom = function () {
    try {
      var row = this.rows[this.currRow];
      var room = row[this.currCol];
      return room;
    } catch (e) {
      return null;
    }
  };

  gameMap.getRow = function (row) {
    if (this.rows[row]) {
      return this.rows[row];
    } else {
      return (this.rows[row] = []);
    }
  };

  gameMap.addRoom = function (room) {
    var x = room.x;
    var y = room.y;
    if (typeof x === "number" && typeof y === "number") {
      var row = this.getRow(y);
      row[x] = room;
    }
  };

  gameMap.traverse = function (direction) {
    var self = this;

    var moves = {
      north : function () {
        self.increment("y");
      },
      south : function () {
        self.decrement("y");
      },
      east : function () {
        self.increment("x");
      },
      west : function () {
        self.decrement("x");
      }
    };

    // Alias short directions
    var aliases = {
      "n" : "north",
      "s" : "south",
      "e" : "east",
      "w" : "west"
    };

    // Check for direction aliases
    if (aliases[direction]) {
      direction = aliases[diection];
    }

    // Move
    if (moves[direction]) {
      moves[direction]();
    }

    return this.getRoom();

  };

  gameMap.increment = function (axis) {
    var self = this;

    var map = {
      x : function () {
        self.currCol += 1;
      },
      y : function () {
        self.currRow += 1;
      }
    };

    if (map[axis]) {
      map[axis]();
    }
  };

  gameMap.decrement = function (axis) {
    var self = this;

    var map = {
      x : function () {
        self.currCol -= 1;
      },
      y : function () {
        self.currRow -= 1;
      }
    };

    if (map[axis]) {
      map[axis]();
    }
  };

}(window, window.Advnture));
