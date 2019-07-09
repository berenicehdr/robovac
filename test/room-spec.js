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

  it('tracks its patches of dirt', function () {
    let dimensions = { x: 5, y: 5 }
    let dirtPatches = [
      { x: 1, y: 0 },
      { x: 2, y: 2 },
      { x: 2, y: 3 }
    ]
    let room = new Room(dimensions, dirtPatches)
    assert.strictEqual(room.dirtPatches, dirtPatches)
  })
})
