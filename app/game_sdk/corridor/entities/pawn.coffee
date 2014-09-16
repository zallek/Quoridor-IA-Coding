'use strict'

Entity = require './game_sdk/corridor/entity.coffee'

module.exports = class Pawn extends Entity

    move: (@board, @x, @y) ->
        
