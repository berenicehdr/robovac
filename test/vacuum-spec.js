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
})
