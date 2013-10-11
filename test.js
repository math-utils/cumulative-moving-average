var assert = require('assert')

var cma = require('./')

describe('Cumulative Moving Average', function () {
  it('should work', function () {
    var avg = cma()

    assert.equal(avg.value, 0)

    avg.push(1)
    assert.equal(avg.value, 1)
    assert.equal(avg.length, 1)

    avg.push(3)
    assert.equal(avg.value, 2)
    assert.equal(avg.length, 2)

    avg.push(5)
    assert.equal(avg.value, 3)
    assert.equal(avg.length, 3)
  })
})