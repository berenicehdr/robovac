class Room {
  constructor (dimensions = { x: 0, y: 0 }) {
    this._y = dimensions.y
    this._x = dimensions.x
  }

  get x () {
    return this._x
  }

  get y () {
    return this._y
  }
}

module.exports = Room
