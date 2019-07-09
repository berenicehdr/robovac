/* eslint-disable no-undef */
var assert = require('assert')

var Vacuum = require('../src/vacuum')

describe('Vacuum', function () {
  it('starts at an initial grid position (x, y)', function () {
    let startPosition = { x: 2, y: 4 }
    let vacuum = new Vacuum(startPosition)
    assert.strictEqual(vacuum.x, 2)
    assert.strictEqual(vacuum.y, 4)
  })

  it('assumes a starting point of x: 0, y: 0 if none supplied', function () {
    let vacuum = new Vacuum()
    assert.strictEqual(vacuum.x, 0)
    assert.strictEqual(vacuum.y, 0)
  })

  it('converts its driving directions from a string into an array of directions', function () {
    let drivingDirections = 'NESW'
    let startPosition = { x: 2, y: 4 }
    let vacuum = new Vacuum(startPosition, drivingDirections)
    assert.deepStrictEqual(vacuum.drivingDirections, ['N', 'E', 'S', 'W'])
  })

  it('stops at 1,1 when "NE" its directions', function () {
    let startPosition = { x: 0, y: 0 }
    let drivingDirections = 'NE'
    let vacuum = new Vacuum(startPosition, drivingDirections)
    vacuum.start()
    assert.strictEqual(vacuum.x, 1)
    assert.strictEqual(vacuum.y, 1)
  })

  it('stops at 4,3 when "EEEENNN" its directions', function () {
    let startPosition = { x: 0, y: 0 }
    let drivingDirections = 'EEEENNN'
    let vacuum = new Vacuum(startPosition, drivingDirections)
    vacuum.start()
    assert.strictEqual(vacuum.x, 4)
    assert.strictEqual(vacuum.y, 3)
  })

  it('stops at 0,0 when "NESW" its directions', function () {
    let startPosition = { x: 0, y: 0 }
    let drivingDirections = 'NESW'
    let vacuum = new Vacuum(startPosition, drivingDirections)
    vacuum.start()
    assert.strictEqual(vacuum.x, 0)
    assert.strictEqual(vacuum.y, 0)
  })

  it('does not go out of bounds (southern)', function () {
    let roomStub = { x: 5, y: 5 }
    let startPosition = { x: 0, y: 0 }
    let drivingDirections = 'S'
    let vacuum = new Vacuum(startPosition, drivingDirections, roomStub)
    vacuum.start()
    assert.strictEqual(vacuum.y, 0)
    assert.strictEqual(vacuum.x, 0)
  })
})
