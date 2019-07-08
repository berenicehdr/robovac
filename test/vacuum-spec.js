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
})
