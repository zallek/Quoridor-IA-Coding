'use strict'

module.exports = class Player
    constructor: (@game) ->
        @pawn = @game.board.addPawn()
        @walls = (@game.board.addWall() for i in [0...10])
    
    movePawn: (x, y) ->
        @pawn.move(x, y)

    ###
     * @param  {number} i wall Index
    ###
    moveWall: (i, x, y) ->
        @wall[i].move(x, y)
