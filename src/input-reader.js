var fs = require('fs')

class InputReader {
  constructor (filename = 'input.txt') {
    this._filename = filename
    this._roomDimensions = {}
    this._vacuumStartPosition = {}
    this.getInput()
  }

  get roomDimensions () {
    return this._roomDimensions
  }

  get vacuumStartPosition () {
    return this._vacuumStartPosition
  }

  getInput () {
    let input = fs.readFileSync(this._filename, { encoding: 'utf-8' }).split('\n')

    let roomDimensions = input[0].split(' ')
    this._roomDimensions = { x: Number(roomDimensions[0]), y: Number(roomDimensions[1]) }
    input.splice(0, 1)

    let vacuumStartPosition = input[0].split(' ')
    this._vacuumStartPosition = { x: Number(vacuumStartPosition[0]), y: Number(vacuumStartPosition[1]) }
    input.splice(0, 1)
  }
}

module.exports = InputReader
