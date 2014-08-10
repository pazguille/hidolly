var hidolly = require('../');
var assert = require('better-assert');

var toTest = {
  'name': 'test',
  'age': 1,
  'foo': [1,2,3]
};

describe('hidolly', function () {
  it('should be defined', function () {
    assert(typeof hidolly === 'function');
  });

  it('should return a cloned object', function () {

    var copied = hidolly(toTest);

    assert(copied !== toTest);
    assert(copied.foo !== toTest.foo);

    assert(copied.age === toTest.age);
    assert(copied.foo[0] === toTest.foo[0]);

    copied.age = 2;
    assert(copied.age !== toTest.age);

  });
});