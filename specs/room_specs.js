const assert = require('assert')

const Room = require('../room.js')

describe('Room', function () {

    let room
    beforeEach(function () {
        room = new Room(50)
    })
    
    it('should have an area', function () {
        const actual = room.area
        assert.strictEqual(actual, 50)
    })

    it('should start unpainted', function () {
        const actual = room.painted
        assert.strictEqual(actual, false)
    })

    it('should be paintable', function () {
        room.hasBeenPainted()
        const actual = room.painted
        assert.strictEqual(actual, true)
    })
})