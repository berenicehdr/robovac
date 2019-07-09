/* eslint-disable no-undef */
var assert = require('assert')

var InputReader = require('../src/input-reader')

describe('InputReader', function () {
  it('parses the room dimesions from the supplied input file', function () {
    let input = new InputReader()
    let roomDimensions = JSON.stringify(input.roomDimensions)
    let expectedRoomDimensions = JSON.stringify({ x: 5, y: 5 })
    assert.strictEqual(roomDimensions, expectedRoomDimensions)
  })
})
