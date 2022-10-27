const mathEnforcer = require('./math-enforcer');
const {expect} = require('chai');

describe('mathEnforcer object tests', () => {
    describe('addFive function tests', () => {
        //invalid input
        it('should return undefined when input is string', () => {
            let result = mathEnforcer.addFive('test');
            expect(result).to.be.undefined;
        });
        it('should return undefined when input is object', () => {
            let result = mathEnforcer.addFive({});
            expect(result).to.be.undefined;
        });
        it('should return undefined when input is array', () => {
            let result = mathEnforcer.addFive([]);
            expect(result).to.be.undefined;
        });
        it('should return undefined when input is undefined', () => {
            let result = mathEnforcer.addFive(undefined);
            expect(result).to.be.undefined;
        });
        it('should return undefined when input is null', () => {
            let result = mathEnforcer.addFive(null);
            expect(result).to.be.undefined;
        });
        //valid input
        it('should return num when input is int', () => {
            let result = mathEnforcer.addFive(5);
            expect(result).to.equal(10);
        });
        it('should return num when input is negative', () => {
            let result = mathEnforcer.addFive(-5);
            expect(result).to.equal(0);
        });
        it('should return num when input is float', () => {
            let result = mathEnforcer.addFive(5.5);
            expect(result).to.equal(10.5);
        });
    });
    describe('subtractTen function tests', () => {
        //invalid inputs
        it('should return undefined when input is string', () => {
            let result = mathEnforcer.subtractTen('test');
            expect(result).to.be.undefined;
        });
        it('should return undefined when input is object', () => {
            let result = mathEnforcer.subtractTen({});
            expect(result).to.be.undefined;
        });
        it('should return undefined when input is array', () => {
            let result = mathEnforcer.subtractTen([]);
            expect(result).to.be.undefined;
        });
        it('should return undefined when input is undefined', () => {
            let result = mathEnforcer.subtractTen(undefined);
            expect(result).to.be.undefined;
        });
        it('should return undefined when input is null', () => {
            let result = mathEnforcer.subtractTen(null);
            expect(result).to.be.undefined;
        });
        //valid inputs
        it('should return num when input is int', () => {
            let result = mathEnforcer.subtractTen(10);
            expect(result).to.equal(0);
        });
        it('should return num when input is negative', () => {
            let result = mathEnforcer.subtractTen(5);
            expect(result).to.equal(-5);
        });
        it('should return num when input is float', () => {
            let result = mathEnforcer.subtractTen(15.5);
            expect(result).to.equal(5.5);
        });
    });
    describe('sum function tests', () => {
        //invalid inputs
        it('should return undefined when first input is string', () => {
            let result = mathEnforcer.sum('test', 5);
            expect(result).to.be.undefined;
        });
        it('should return undefined when first input is object', () => {
            let result = mathEnforcer.sum({}, 5);
            expect(result).to.be.undefined;
        });
        it('should return undefined when first input is array', () => {
            let result = mathEnforcer.sum([], 5);
            expect(result).to.be.undefined;
        });
        it('should return undefined when first input is null', () => {
            let result = mathEnforcer.sum(null, 5);
            expect(result).to.be.undefined;
        });
        it('should return undefined when first input is undefined', () => {
            let result = mathEnforcer.sum(undefined, 5);
            expect(result).to.be.undefined;
        });
        it('should return undefined when second input is string', () => {
            let result = mathEnforcer.sum(7, 'test');
            expect(result).to.be.undefined;
        });
        it('should return undefined when second input is object', () => {
            let result = mathEnforcer.sum(7, {});
            expect(result).to.be.undefined;
        });
        it('should return undefined when second input is array', () => {
            let result = mathEnforcer.sum(7, []);
            expect(result).to.be.undefined;
        });
        it('should return undefined when second input is null', () => {
            let result = mathEnforcer.sum(7, null);
            expect(result).to.be.undefined;
        });
        it('should return undefined when second input is undefined', () => {
            let result = mathEnforcer.sum(7, undefined);
            expect(result).to.be.undefined;
        });
        //valid inputs
        it('should return num when both inputs are int', () => {
            let result = mathEnforcer.sum(7, 6);
            expect(result).to.equal(13);
        });
        it('should return num when both inputs are negative', () => {
            let result = mathEnforcer.sum(-5, -2);
            expect(result).to.equal(-7);
        });
        it('should return num when both inputs are floating', () => {
            let result = mathEnforcer.sum(7.4, 2.6);
            expect(result).to.equal(10);
        });
        it('should return num when one input is float and the other is int', () => {
            let result = mathEnforcer.sum(7.3, 6);
            expect(result).to.equal(13.3);
        });
        it('should return num when one input is negative and the other is int', () => {
            let result = mathEnforcer.sum(7, -6);
            expect(result).to.equal(1);
        });
        it('should return num when one input is float and the other is negative', () => {
            let result = mathEnforcer.sum(7.1, -6);
            expect(result.toFixed(1)).to.equal('1.1');
        });
    });
});