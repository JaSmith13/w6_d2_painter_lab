const assert = require('assert')
const { isRegExp } = require('util')

const Decorator = require('../decorator.js')
const Paint = require('../paint.js')
const Room = require('../room.js')

describe('Decorator', function () {

    let decorator
    let paint1
    let room 
    beforeEach(function () {
        decorator = new Decorator('Jim')
        paint1 = new Paint(50, 'Red')
        room = new Room(50)
    })

    it('should start with an empty paint stock', function () {
        const actual = decorator.paintStock.length
        assert.strictEqual(actual, 0)
    })

    it('should be able to add can to paint stock', function () {
        decorator.addCan(paint1)
        actual = decorator.paintStock[0]
        assert.deepStrictEqual(actual, paint1)
    })

    it('should be able to get total litres of paint stock', function () {
        let paint2 = new Paint(45, 'Blue')
        decorator.addCan(paint1)
        decorator.addCan(paint2)
        const actual = decorator.totalPaint()
        assert.strictEqual(actual, 95)
    })

    it('should be able to calculate if it has enough paint for a room', function () {
        decorator.addCan(paint1)
        const actual = decorator.hasEnoughPaint(room)
        assert.strictEqual(actual, true)
    })

    it('should be unable to paint room if not enough paint', function () {
        const actual = decorator.hasEnoughPaint(room)
        assert.strictEqual(actual, false)
    })

    it('should be able to paint room if enough paint', function () {
        decorator.addCan(paint1)
        decorator.paintRoom(room)
        const actual = room.painted
        assert.strictEqual(actual, true)
    })

    it('should be able to remove empty paint cans', function () {
        let paint2 = new Paint(45, 'Blue')
        let paint3 = new Paint(0, 'Green')
        decorator.addCan(paint1)
        decorator.addCan(paint2)
        decorator.addCan(paint3)
        decorator.removeEmptyCans()
        const actual = decorator.paintStock.length
        assert.strictEqual(actual, 2)

    })
})

