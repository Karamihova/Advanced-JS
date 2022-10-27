const isOddOrEven = require('./is-odd-or-even');
const {expect} = require('chai');

describe('isOddOrEven function tests', () => {
    describe('invalid inputs', () => {
        it('should return undefined when input is number', ()=> {
            expect(isOddOrEven(4)).to.be.undefined;
        });
        it('should return undefined when input is object', ()=> {
            expect(isOddOrEven({})).to.be.undefined;
        });
        it('should return undefined when input is array', ()=> {
            expect(isOddOrEven([])).to.be.undefined;
        });
        it('should return undefined when input is null', ()=> {
            expect(isOddOrEven(null)).to.be.undefined;
        });
        it('should return undefined when input is undefined', ()=> {
            expect(isOddOrEven(undefined)).to.be.undefined;
        });
    });
    describe('valid inputs', () => {
        it('should retutn odd result', () => {
            expect(isOddOrEven('Hello')).to.equal('odd');
        });
        it('should retutn even result', () => {
            expect(isOddOrEven('test')).to.equal('even');
        });
    });
});