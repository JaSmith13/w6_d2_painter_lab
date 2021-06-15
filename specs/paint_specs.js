const assert = require('assert')

const Paint = require('../paint.js')

describe('Paint', function () {

    let paint
    beforeEach(function () {
        paint = new Paint(50, 'Red')
    })

    it('should have volume of paint', function () {
        const actual = paint.volume
        assert.strictEqual(actual, 50)
    })

    it('should be able to check if can is empty', function (){
        const actual = paint.isCanEmpty()
        assert.strictEqual(actual, false)
    })

    it('should be able to empty itself of paint', function () {
        paint.emptyCan()
        const actual = paint.volume
        assert.strictEqual(actual, 0)
    })
})