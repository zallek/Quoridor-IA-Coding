(function() {
  'use strict';
  var Board, Pawn, Wall;

  Pawn = require('./game_sdk/corridor/pieces/pawn.coffee');

  Wall = require('./game_sdk/corridor/pieces/wall.coffee');

  module.exports = Board = (function() {
    function Board() {
      this.pawns = [];
      this.walls = [];
    }

    Board.prototype.addPawn = function() {
      var pawn;
      pawn = new Pawn(this, x, y);
      this.pawns.push(pawn);
      return pawn;
    };

    Board.prototype.addWall = function() {
      var pawn;
      pawn = new Wall(this);
      this.walls.push(wall);
      return wall;
    };

    return Board;

  })();

}).call(this);

(function() {
  'use strict';
  var Entity, Pawn,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Entity = require('./game_sdk/corridor/entity.coffee');

  module.exports = Pawn = (function(_super) {
    __extends(Pawn, _super);

    function Pawn() {
      return Pawn.__super__.constructor.apply(this, arguments);
    }

    Pawn.prototype.move = function(board, x, y) {
      this.board = board;
      this.x = x;
      this.y = y;
    };

    return Pawn;

  })(Entity);

}).call(this);

(function() {
  'use strict';
  var Entity, Wall,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Entity = require('./game_sdk/corridor/entity.coffee');

  module.exports = Wall = (function(_super) {
    __extends(Wall, _super);

    function Wall(x, y, dir) {
      this.x = x;
      this.y = y;
      this.dir = dir;
    }

    return Wall;

  })(Entity);

}).call(this);

(function() {
  'use strict';
  var Entity;

  module.exports = Entity = (function() {
    function Entity(x, y) {
      this.x = x;
      this.y = y;
    }

    Entity.prototype.move = function(x, y) {};

    Entity.prototype.where = function() {
      return console.log("x:" + this.x + ", y:" + this.y);
    };

    return Entity;

  })();

}).call(this);

(function() {
  'use strict';
  var Board, Game, Player;

  Board = require('./game_sdk/corridor/board.coffee');

  Player = require('./game_sdk/corridor/player.coffee');

  module.exports = Game = (function() {
    function Game() {
      this.board = new Board;
      this.players = [];
    }

    Game.prototype.addPlayer = function() {
      this.players.push(new Player(this));
      return this.players;
    };

    return Game;

  })();

}).call(this);

(function() {
  'use strict';
  var Player;

  module.exports = Player = (function() {
    function Player(game) {
      var i;
      this.game = game;
      this.pawn = this.game.board.addPawn();
      this.walls = (function() {
        var _i, _results;
        _results = [];
        for (i = _i = 0; _i < 10; i = ++_i) {
          _results.push(this.game.board.addWall());
        }
        return _results;
      }).call(this);
    }

    Player.prototype.movePawn = function(x, y) {
      return this.pawn.move(x, y);
    };


    /*
     * @param  {number} i wall Index
     */

    Player.prototype.moveWall = function(i, x, y) {
      return this.wall[i].move(x, y);
    };

    return Player;

  })();

}).call(this);

(function() {
  module.exports = {
    Game: require('./game_sdk/corridor/game.coffee'),
    Board: require('./game_sdk/corridor/board.coffee'),
    Piece: require('./game_sdk/corridor/piece.coffee'),
    Pawn: require('./game_sdk/corridor/pieces/pawn.coffee'),
    Wall: require('./game_sdk/corridor/pieces/wall.coffee')
  };

}).call(this);
