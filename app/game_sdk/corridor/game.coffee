'use strict'

Board = require './game_sdk/corridor/board.coffee'
Player = require './game_sdk/corridor/player.coffee'

module.exports = class Game
    constructor: ->
        @board = new Board
        @players = []

    addPlayer: ->
        @players.push(new Player this)
        @players
    
