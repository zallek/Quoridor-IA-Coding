'use strict'

module.exports = class Entity
    constructor: (@x, @y) ->

    move: (x, y) ->

    where: ->
        console.log "x:" + @x + ", y:" + @y
