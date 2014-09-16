'use strict'

Pawn = require './game_sdk/corridor/pieces/pawn.coffee'
Wall = require './game_sdk/corridor/pieces/wall.coffee'

module.exports = class Board
    constructor: ->
        @pawns = []
        @walls = []

    addPawn: ->
        pawn = new Pawn(this, x, y)
        @pawns.push(pawn)
        pawn

    addWall: ->
        pawn = new Wall(this)
        @walls.push(wall)
        wall


