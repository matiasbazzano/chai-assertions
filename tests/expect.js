import DataTests from '../data/data.js';
import chai from 'chai';
const expect = chai.expect();

expect(DataTests.number1).to.equal(DataTests.number2);
expect(DataTests.number1).to.not.equal(DataTests.number3);

expect(DataTests.obj1).to.deep.equal(DataTests.obj2);
expect(DataTests.obj1).to.not.deep.equal(DataTests.obj3);

expect(DataTests.value1).to.be.a('number');
expect(DataTests.value2).to.be.a('string');
expect(DataTests.value2).to.not.be.a('number');

expect(DataTests.str).to.include('assurance');
expect(DataTests.str).to.not.include('testing');
expect(DataTests.numbers).to.include.members([3, 4, 5]);