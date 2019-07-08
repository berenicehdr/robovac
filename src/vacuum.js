class Vacuum {
  constructor (startPosition) {
    this._x = startPosition.x
    this._y = startPosition.y
  }

  get x () {
    return this._x
  }

  get y () {
    return this._y
  }
}

module.exports = Vacuum
