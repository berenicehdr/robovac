var fs = require('fs')

class InputReader {
  constructor (filename = 'input.txt') {
    this._filename = filename
    this._roomDimensions = {}
    this.getInput()
  }

  get roomDimensions () {
    return this._roomDimensions
  }

  getInput () {
    let input = fs.readFileSync(this._filename, { encoding: 'utf-8' }).split('\n')
    
    let roomDimensions = input[0].split(' ')
    this._roomDimensions = { x: Number(roomDimensions[0]), y: Number(roomDimensions[1]) }
    input.splice(0, 1)
  }
}

module.exports = InputReader
