(function() {
  var Piece;

  Piece = (function() {
    function Piece(x, y) {
      this.x = x;
      this.y = y;
    }

    Piece.prototype.where = function() {
      return console.log("x:" + this.x + ", y:" + this.y);
    };

    return Piece;

  })();

}).call(this);

(function() {
  var Pawn,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Pawn = (function(_super) {
    __extends(Pawn, _super);

    function Pawn() {
      return Pawn.__super__.constructor.apply(this, arguments);
    }

    Pawn.prototype.where = function() {
      alert("Slitheing...");
      return Pawn.__super__.where.apply(this, arguments);
    };

    return Pawn;

  })(Piece);

}).call(this);
