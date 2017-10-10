var chai = require('chai')
var expect = chai.expect

var underTest = require('../index')

describe('#calculator', () => {
  it('should add 1 and 1 and return 2', () => {
    var result = underTest.add(1, 1)
    expect(result).to.equal(2)
  })
})
