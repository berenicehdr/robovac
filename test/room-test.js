/* eslint-disable no-undef */
var assert = require('assert')

var Room = require('../src/room.js')

describe('Room', function () {
  it('has its max x and y values set on creation', function () {
    let dimensions = { x: 5, y: 5 }
    let room = new Room(dimensions)
    assert.strictEqual(room.y, 5)
    assert.strictEqual(room.x, 5)
  })
})
