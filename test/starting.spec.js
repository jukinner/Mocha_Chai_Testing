var assert = require('assert');
var should = require('chai').should();

describe('Basic Mocha test', function(){
  it('should not throw errors', function(){
    var obj = {name: 'Jon', gender: 'Male'};
    var objB = {name: 'Jon', gender: 'Male'};

    obj.should.deep.equal(objB);


    });
  it('should allow testing nulls', function() {
    var iAmNull = null;
    should.not.exist(iAmNull);
  })
});

// describe('Basic Mocha test', function(){
//   it('should throw errors', function(){
//     try {
//       assert.equal(2,3);
//     } catch (e){
//       console.log(e);
//     }
//   })
// })

// describe('Basic Mocha test', function(){
//   it('should throw errors', function(){
//     throw({message:error});
//   })
// })


