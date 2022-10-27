const chooseYourCar = require('./demo');
const {expect} = require('chai');

describe('chooseYourCar tests', () =>{

    describe('choosingType tests', () => {
        it('invalid year - smaller', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'blue', 1800)).to.throw();
        })
    });

    describe('test', () => {
        it('1 to equal 1', () => {
            expect(1).to.equal(1);
        })
    })
});

describe('chooseYourCar tests', () => {
 
    describe('choosingType tests', () => {
        it('should throw error if year is less than 1900', () => {
            expect(() => chooseYourCar.choosingType('BMW', 'Red', 1800)).to.throw(`Invalid Year!`);
        });
 
        it('should throws if year is over 2022', () => {
            expect(() => chooseYourCar.choosingType('BMW', 'Red', 2200)).to.throw(`Invalid Year!`);
        });
 
        it('Should throws if type is diffent than sedan', () => {
            expect(() => chooseYourCar.choosingType('Combi', 'Red', 2015)).to.throw(`This type of car is not what you are looking for.`);
        });
 
        it('Should return positive if year is more than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2015)).to.equal(`This Red Sedan meets the requirements, that you have.`);
        });
 
        it('Should return negative feedback if car year is less than 2010', () => {
            expect(chooseYourCar.choosingType('Sedan', 'Red', 2005)).to.equal(`This Sedan is too old for you, especially with that Red color.`);
        });

        // year is equal to 2010!
    });
 
    describe('brandName tests', () => {
        it('Should throw error if inpu brands is not an array', () => {
            expect(() => chooseYourCar.brandName(15, 3)).to.throw("Invalid Information!");
        });
 
        it('Should throw error if brandIndex is not a number', () => {
            expect(() => chooseYourCar.brandName(['asd'], 'blyat')).to.throw("Invalid Information!");
        });
 
        it('Should throw error if index is less than 0', () => {
            expect(() => chooseYourCar.brandName(['asd'], -1)).to.throw("Invalid Information!");
        });
 
        it('Should throw error if index is greater than brands array length', () => {
            expect(() => chooseYourCar.brandName(['asd','dsa'], 5)).to.throw("Invalid Information!");
        });
 
        it('Should return array join with all brand excluding the one chosen by index', () => {
            expect('BMW, Audi, Honda').to.equal(chooseYourCar.brandName(['BMW', 'Audi', 'Mercedes', 'Honda'], 2));
        });
    });
 
    describe('carFuelConsumption tests', () => {
        it('Should throw error if distance is not a number', () => {
            expect(() => chooseYourCar.carFuelConsumption('asd', 15)).to.throw("Invalid Information!");
        });
 
        it('Should throw error if distance is less than zero', () => {
            expect(() => chooseYourCar.carFuelConsumption(-1, 15)).to.throw("Invalid Information!");
        });
 
        it('Should throw error if consumption is not a number', () => {
            expect(() => chooseYourCar.carFuelConsumption(5, 'asd')).to.throw("Invalid Information!");
        });
 
        it('Should throw error if consumption is less than zero', () => {
            expect(() => chooseYourCar.carFuelConsumption(5, -1)).to.throw("Invalid Information!");
        });
 
        it('should return positive string if consumption per 100 km is less or equal to 7', () => {
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal(`The car is efficient enough, it burns 5.00 liters/100 km.`);
        });
 
        it('should return negative string if consumption per 100 km is higher than 7', () => {
            expect(chooseYourCar.carFuelConsumption(100, 10)).to.equal(`The car burns too much fuel - 10.00 liters!`);
        });
    });
});