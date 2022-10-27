const sum = require('./sum-numbers');
const { expect, assert } = require('chai');

describe('sum function tests', () => {
    it('should be with input array with numbers', ()=>{
        let array = [1, 2, 3];
        let result = sum(array);
        expect(result).to.equal(6);
    });
    it('should be with input array with string numbers', ()=>{
        let array = ['2', '5'];
        let result = sum(array);
        expect(result).to.equal(7);
    });
    it('should be with input array with string not numbers', ()=>{
        let array = ['test', 'hello'];
        let result = sum(array);
        expect(result).to.be.NaN;
    });
    it('should be with input different from array - string', ()=>{
        let input = 'test';
        let result = sum(input);
        expect(result).to.be.NaN;
    });
    it('should be with input different from array - number', ()=>{
        // assert.throws(() => sum(5), TypeError, /arr is not iterable/);
        expect(()=> {
            sum(5);
        }).to.throw(TypeError, 'arr is not iterable');
    });
    it('should be with input different from array - object', ()=>{
        expect(()=> {
            sum({name: 'test'});
        }).to.throw(TypeError, 'arr is not iterable');
    });
    it('should be with no input', ()=>{
        expect(()=> {
            sum();
        }).to.throw(TypeError, 'arr is not iterable');
    });
});