/* eslint-disable no-undef */
var assert = require('assert')

var InputReader = require('../src/input-reader')

describe('InputReader', function () {
  let input = new InputReader()

  it('parses the room dimesions from the supplied input file', function () {
    let roomDimensions =input.roomDimensions
    let expectedRoomDimensions = { x: 5, y: 5 }
    assert.deepStrictEqual(roomDimensions, expectedRoomDimensions)
  })

  it('parses the vacuum start position from the supplied input file', function () {
    let vacuumStartPosition = input.vacuumStartPosition
    let expectedVacuumStartPosition = { x: 1, y: 2 }
    assert.deepStrictEqual(vacuumStartPosition, expectedVacuumStartPosition)
  })

  it('parses the driving directions from the supplied input file', function () {
    let drivingDirections = input.drivingDirections
    let expectedDrivingDirections = 'NNESEESWNWW'
    assert.strictEqual(drivingDirections, expectedDrivingDirections)
  })

  it('parses the dirt locations from the supplied input file', function () {
    let dirtPatchLocations = input.dirtPatchLocations
    let expectedDirtPatchLocations = [
      { x: 1, y: 0 },
      { x: 2, y: 2 },
      { x: 2, y: 3 }
    ]
    assert.deepStrictEqual(dirtPatchLocations, expectedDirtPatchLocations)
  })
})
