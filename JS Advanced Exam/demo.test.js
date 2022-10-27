const chooseYourCar = require('./demo');
const {expect} = require('chai');

describe('chooseYourCar object test', () => {
    describe('choosingType function tests', () => {
        it('should return error when year is smaller than 1900', () => {
            expect( () => chooseYourCar.choosingType('test', 'test', 1777)).to.throw('Invalid Year!');
        });
        it('should return error when year is greater than 2022', () => {
            expect( () => chooseYourCar.choosingType('test', 'test', 2033)).to.throw('Invalid Year!');
        });
        it('should throw error when type is different from Sedan', () => {
            expect(() => chooseYourCar.choosingType('test', 'test', 2010)).to.throw('This type of car is not what you are looking for.');
        });
        it('should return output if type is Sedan but year is smaller than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'yellow', 2000)).to.equal('This Sedan is too old for you, especially with that yellow color.');
        });
        it('should return output if type is Sedan and year is greater than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2015)).to.equal('This red Sedan meets the requirements, that you have.');
        });
        it('should return output if type is Sedan and year is equal to 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal('This red Sedan meets the requirements, that you have.');
        });
    });

    describe('brandName function tests', () => {
        //invalid first input
        it('should throw error when first input is string', () => {
            expect(() => chooseYourCar.brandName('test', 1)).to.throw('Invalid Information!');
        });
        it('should throw error when first input is object', () => {
            expect(() => chooseYourCar.brandName({}, 1)).to.throw('Invalid Information!');
        });
        it('should throw error when first input is number', () => {
            expect(() => chooseYourCar.brandName(1, 1)).to.throw('Invalid Information!');
        });
        it('should throw error when first input is null', () => {
            expect(() => chooseYourCar.brandName(null, 1)).to.throw('Invalid Information!');
        });
        it('should throw error when first input is undefined', () => {
            expect(() => chooseYourCar.brandName(undefined, 1)).to.throw('Invalid Information!');
        });
        it('should throw error when first input is empty array', () => {
            expect(() => chooseYourCar.brandName([], 1)).to.throw('Invalid Information!');
        });
        //invalid second input
        it('should throw error when second input is string', () => {
            expect(() => chooseYourCar.brandName(['test'], 'test')).to.throw('Invalid Information!');
        });
        it('should throw error when second input is object', () => {
            expect(() => chooseYourCar.brandName(['test'], {})).to.throw('Invalid Information!');
        });
        it('should throw error when second input is array', () => {
            expect(() => chooseYourCar.brandName(['test'], [])).to.throw('Invalid Information!');
        });
        it('should throw error when second input is null', () => {
            expect(() => chooseYourCar.brandName(['test'], null)).to.throw('Invalid Information!');
        });
        it('should throw error when second input is undefined', () => {
            expect(() => chooseYourCar.brandName(['test'], undefined)).to.throw('Invalid Information!');
        });
        //invalid index from array
        it('should throw error when index is smaller than 0', () => {
            expect(() => chooseYourCar.brandName(['test'], -2)).to.throw('Invalid Information!');
        });
        it('should throw error when index is equal to array length', () => {
            expect(() => chooseYourCar.brandName(['test'], 1)).to.throw('Invalid Information!');
        });
        it('should throw error when index is greater than array length', () => {
            expect(() => chooseYourCar.brandName(['test'], 7)).to.throw('Invalid Information!');
        });
        //valid
        it('should return output when input is valid', () => {
            let array = ['BMW', 'Tesla', 'Mercedes'];
            let index = 1;
            let expectedOutput = 'BMW, Mercedes';
            expect(chooseYourCar.brandName(array, index)).to.equal(expectedOutput);
        });
    });

    describe('carFuelConsumption function tests', () => {
        //invalid first input
        it('should throw error when first input is string', () => {
            expect(() => chooseYourCar.carFuelConsumption('test', 2)).to.throw('Invalid Information!');
        });
        it('should throw error when first input is array', () => {
            expect(() => chooseYourCar.carFuelConsumption([], 2)).to.throw('Invalid Information!');
        });
        it('should throw error when first input is object', () => {
            expect(() => chooseYourCar.carFuelConsumption({}, 2)).to.throw('Invalid Information!');
        });
        it('should throw error when first input is null', () => {
            expect(() => chooseYourCar.carFuelConsumption(null, 2)).to.throw('Invalid Information!');
        });
        it('should throw error when first input is undefined', () => {
            expect(() => chooseYourCar.carFuelConsumption(undefined, 2)).to.throw('Invalid Information!');
        });
        it('should throw error when first input is negative number', () => {
            expect(() => chooseYourCar.carFuelConsumption(-2, 2)).to.throw('Invalid Information!');
        });
        it('should throw error when first input is zero', () => {
            expect(() => chooseYourCar.carFuelConsumption(0, 2)).to.throw('Invalid Information!');
        });
        //invalid second input
        it('should throw error when second input is string', () => {
            expect(() => chooseYourCar.carFuelConsumption(2, 'test')).to.throw('Invalid Information!');
        });
        it('should throw error when second input is array', () => {
            expect(() => chooseYourCar.carFuelConsumption(2, [])).to.throw('Invalid Information!');
        });
        it('should throw error when second input is object', () => {
            expect(() => chooseYourCar.carFuelConsumption(2, {})).to.throw('Invalid Information!');
        });
        it('should throw error when second input is null', () => {
            expect(() => chooseYourCar.carFuelConsumption(2, null)).to.throw('Invalid Information!');
        });
        it('should throw error when second input is undefined', () => {
            expect(() => chooseYourCar.carFuelConsumption(2, undefined)).to.throw('Invalid Information!');
        });
        it('should throw error when second input is negative number', () => {
            expect(() => chooseYourCar.carFuelConsumption(2, -4)).to.throw('Invalid Information!');
        });
        it('should throw error when second input is zero', () => {
            expect(() => chooseYourCar.carFuelConsumption(2, 0)).to.throw('Invalid Information!');
        });
        //valid
        it('should return output when result is equal to 7', () => {
            let distance = 200;
            let consumption = 14;
            let expectedResult = 'The car is efficient enough, it burns 7.00 liters/100 km.';
            expect(chooseYourCar.carFuelConsumption(distance, consumption)).to.equal(expectedResult);
        });
        it('should return output when result is smaller than 7', () => {
            let distance = 200;
            let consumption = 10;
            let expectedResult = 'The car is efficient enough, it burns 5.00 liters/100 km.';
            expect(chooseYourCar.carFuelConsumption(distance, consumption)).to.equal(expectedResult);
        });
        it('should return output when result is greater than 7', () => {
            let distance = 200;
            let consumption = 15;
            let expectedResult = 'The car burns too much fuel - 7.50 liters!';
            expect(chooseYourCar.carFuelConsumption(distance, consumption)).to.equal(expectedResult);
        });
    });
});