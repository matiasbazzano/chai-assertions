import DataTests from '../data/data.js';
import chai from 'chai';
const should = chai.should();

DataTests.number1.should.equal(DataTests.number2);
DataTests.number1.should.not.equal(DataTests.number3);

DataTests.obj1.should.deep.equal(DataTests.obj2);
DataTests.obj1.should.not.deep.equal(DataTests.obj3);

DataTests.value1.should.be.a('number');
DataTests.value2.should.not.be.a('number');

DataTests.str.should.include('quality');
DataTests.str.should.not.include('testing');

DataTests.numbers.should.include.members([3, 4, 5]);