var Room = require('./src/room')
var Vacuum = require('./src/vacuum')
var InputReader = require('./src/input-reader')

let input = new InputReader()

let room = new Room(input.roomDimensions, input.dirtPatchLocations)

let vacuum = new Vacuum(input.vacuumStartPosition, input.drivingDirections, room)

vacuum.start()
console.log(vacuum.x + ' ' + vacuum.y)
console.log(vacuum.patchesCleaned)
