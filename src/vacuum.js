class Vacuum {
  constructor (startPosition, drivingDirections = '') {
    this._x = startPosition.x
    this._y = startPosition.y
    this._drivingDirections = drivingDirections.split('')
  }

  get x () {
    return this._x
  }

  get y () {
    return this._y
  }

  get drivingDirections () {
    return this._drivingDirections
  }
}

module.exports = Vacuum
