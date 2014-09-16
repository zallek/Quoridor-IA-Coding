'use strict'

Entity = require './game_sdk/corridor/entity.coffee'

module.exports = class Wall extends Entity

    constructor: (@x, @y, @dir) ->
