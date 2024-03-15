import DataTests from '../data/data.js';
import chai from 'chai';
const assert = chai.assert;

assert.equal(DataTests.number1, DataTests.number2, "number1 y number2 no son iguales");
assert.notEqual(DataTests.number1, DataTests.number3, "number1 y number3 son iguales");

assert.deepEqual(DataTests.obj1, DataTests.obj2, "obj1 y obj2 no son iguales");
assert.notDeepEqual(DataTests.obj1, DataTests.obj3, "obj1 y obj3 son iguales");

assert.typeOf(DataTests.value1, 'number', "value1 no es un número");
assert.notTypeOf(DataTests.value2, 'number', "value2 es un número");

assert.include(DataTests.str, 'quality', "str no incluye 'quality'");
assert.notInclude(DataTests.str, 'testing', "str incluye 'testing'");

assert.includeMembers(DataTests.numbers, [3, 4, 5], "numbers no incluye todos los elementos [3, 4, 5]");
