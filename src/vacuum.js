class Vacuum {
  constructor (startPosition = { x: 0, y: 0 }, drivingDirections = '') {
    this._x = startPosition.x
    this._y = startPosition.y
    this._drivingDirections = drivingDirections.split('')
  }

  get x () {
    return this._x
  }

  set x (newX) {
    this._x = newX
  }

  get y () {
    return this._y
  }

  set y (newY) {
    this._y = newY
  }

  get drivingDirections () {
    return this._drivingDirections
  }

  start () {
    this.drivingDirections.forEach(direction => {
      switch (direction.toUpperCase()) {
        case 'N':
          this.y += 1
          break
        case 'S':
          this.y -= 1
          break
        case 'E':
          this.x += 1
          break
        case 'W':
          this.x -= 1
          break
        default:
          break
      }
    })
  }
}

module.exports = Vacuum
