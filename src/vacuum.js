class Vacuum {
  constructor (startPosition = { x: 0, y: 0 }, drivingDirections = '', room = {}) {
    this._x = startPosition.x
    this._y = startPosition.y
    this._drivingDirections = drivingDirections.split('')
    this._room = room
    this._patchesCleaned = 0
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

  get room () {
    return this._room
  }

  get patchesCleaned () {
    return this._patchesCleaned
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
      this.enforceBounds()
      this.checkForDirt()
    })
  }

  enforceBounds () {
    if (this.x >= this.room.x) this.x = this.room.x - 1
    else if (this.x < 0) this.x = 0
    if (this.y >= this.room.y) this.y = this.room.y - 1
    else if (this.y < 0) this.y = 0
  }

  checkForDirt () {
    let currPos = { x: this.x, y: this.y }
    var index = 0

    this.room.dirtPatches.forEach(dirtPatch => {
      if (JSON.stringify(dirtPatch) === JSON.stringify(currPos)) {
        this.room.dirtPatches.splice(index, 1)
        this._patchesCleaned += 1
      }
      index += 1
    })
  }
}

module.exports = Vacuum
