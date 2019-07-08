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

  it('converts its driving directions from a string into an array of directions', function () {
    let drivingDirections = 'NESW'
    let startPosition = { x: 2, y: 4 }
    let vacuum = new Vacuum(startPosition, drivingDirections)
    assert.deepStrictEqual(vacuum.drivingDirections, ['N', 'E', 'S', 'W'])
  })
})
