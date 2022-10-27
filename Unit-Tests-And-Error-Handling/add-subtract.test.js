const createCalculator = require('./add-subtract');
const {expect} = require('chai');

describe('createCalculator function tests', () => {
    it('should return object containing the functions add(), subtract(), get() as properties', ()=>{
        let calculator = createCalculator();
        expect(calculator).to.have.property('add');
        expect(calculator).to.have.property('subtract');
        expect(calculator).to.have.property('get');
    });
    it('should return default zero value', () => {
        let calculator = createCalculator();
        expect(calculator).to.equal(0);
    })
})