const lookupChar = require('./char-look-up');
const {expect} = require('chai');

describe('lookupChar function test', () => {
    describe('invalid inputs', () => {

        //invalid string input type
        it('should return undefined when string is number', () => {
            expect(lookupChar(5, 5)).to.be.undefined;
        });
        it('should return undefined when string is array', () => {
            expect(lookupChar([], 5)).to.be.undefined;
        });
        it('should return undefined when string is object', () => {
            expect(lookupChar({}, 5)).to.be.undefined;
        });
        it('should return undefined when string is null', () => {
            expect(lookupChar(null, 5)).to.be.undefined;
        });
        it('should return undefined when string is undefined', () => {
            expect(lookupChar(undefined, 5)).to.be.undefined;
        });
        //invalid index input type
        it('should return undefined when number is string', () => {
            expect(lookupChar('test', 'test')).to.be.undefined;
        });
        it('should return undefined when number is object', () => {
            expect(lookupChar('test', {})).to.be.undefined;
        });
        it('should return undefined when number is null', () => {
            expect(lookupChar('test', null)).to.be.undefined;
        });
        it('should return undefined when number is undefined', () => {
            expect(lookupChar('test', undefined)).to.be.undefined;
        });
        it('should return undefined when number is array', () => {
            expect(lookupChar('test', [])).to.be.undefined;
        });
        //invalid number different from integer
        it('should return undefined when number is not integer', () => {
            expect(lookupChar('test', 5.5)).to.be.undefined;
        });
        //invalid index of string
        it('should return incorrect index when index is smaller than string length', () => {
            expect(lookupChar('test', -1)).to.equal('Incorrect index');
        });
        it('should return incorrect index when index is equal to string length', () => {
            expect(lookupChar('test', 4)).to.equal('Incorrect index');
        });
        it('should return incorrect index when index is greater than string length - 1', () => {
            expect(lookupChar('test', 7)).to.equal('Incorrect index');
        });
    });
    describe('valid inputs', () => {
        it('should return correct char of index string position', () => {
            expect(lookupChar('test', 1)).to.equal('e');
        });
    });
});