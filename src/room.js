class Room {
  constructor (dimensions = { x: 0, y: 0 }, dirtPatches = []) {
    this._y = dimensions.y
    this._x = dimensions.x
    this._dirtPatches = dirtPatches
  }

  get x () {
    return this._x
  }

  get y () {
    return this._y
  }

  get dirtPatches () {
    return this._dirtPatches
  }
}

module.exports = Room
