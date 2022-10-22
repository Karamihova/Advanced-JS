const sumTwoNums = require('./index');
const { assert } = require('chai');

describe ('sumTwoNums function test', () => {

    it('test with two positive numbers', () => {
        assert.equal(sumTwoNums(2, 1), 3);
    });
    it('test with string and number', () => {
        assert.equal(sumTwoNums('2', 3), 5);
    });
    
});