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

  it('parses the vacuum start position from the supplied input file', function () {
    let input = new InputReader()
    let vacuumStartPosition = input.vacuumStartPosition
    let expectedVacuumStartPosition = { x: 1, y: 2 }
    assert.deepStrictEqual(vacuumStartPosition, expectedVacuumStartPosition)
  })

  it('parses the driving directions from the supplied input file', function () {
    let input = new InputReader()
    let drivingDirections = input.drivingDirections
    let expectedDrivingDirections = 'NNESEESWNWW'
    assert.strictEqual(drivingDirections, expectedDrivingDirections)
  })
})
