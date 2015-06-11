var assert = require('assert')

var cma = require('..')

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

  it('1, 2, 3, 4, 5', function () {
    var avg = cma()

    avg.push(1)
    assert.equal(avg.length, 1)
    assert.equal(avg.value, 1)

    avg.push(2)
    assert.equal(avg.length, 2)
    assert.equal(avg.value, 1.5)

    avg.push(3)
    assert.equal(avg.length, 3)
    assert.equal(avg.value, 2)

    avg.push(4)
    assert.equal(avg.length, 4)
    assert.equal(avg.value, 2.5)

    avg.push(5)
    assert.equal(avg.length, 5)
    assert.equal(avg.value, 3)
  })

  it('5, 4, 3, 2, 1', function () {
    var avg = cma()

    avg.push(5)
    assert.equal(avg.length, 1)
    assert.equal(avg.value, 5)

    avg.push(4)
    assert.equal(avg.length, 2)
    assert.equal(avg.value, 4.5)

    avg.push(3)
    assert.equal(avg.length, 3)
    assert.equal(avg.value, 4)

    avg.push(2)
    assert.equal(avg.length, 4)
    assert.equal(avg.value, 3.5)

    avg.push(1)
    assert.equal(avg.length, 5)
    assert.equal(avg.value, 3)
  })
})
