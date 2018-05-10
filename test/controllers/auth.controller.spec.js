var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe('AuthController', function(){
  beforeEach(function settingUpRoles() {
    console.log('running before each');
    authController.setRoles(['user']);
  });
  // beforeEach('this function is erroring intentionally', function erroringFunction(){
  //   throw ({ error: 'error' })
  // });

  describe('isAuthorized', function(){

    it('Should return false if not authorized', function(){
      var isAuth = authController.isAuthorized('admin');
      // authController.setRoles(['user']);
      assert.equal(false, isAuth);
      expect(isAuth).to.be.false;
    })
    it('Should return true if the user is authorized', function(){
      authController.setRoles(['user', 'admin']);
      var isAuth = authController.isAuthorized('admin');
      isAuth.should.be.true;
      // assert.equal(true, authController.isAuthorized('admin'));
    })
    it('should not allowa get if not authorized');
    it('should allow get if authorized');
  })
  describe('isAuthorizedAsync', function(){
    it('Should return false if not authorized', function(done){
      authController.setRoles(['user']);
        authController.isAuthorizedAsync('admin',
        function(isAuth){
          assert.equal(false, isAuth);
          done();
        });
    
    })
  })

  describe('isAuthorizedPromise', function(){
    it('Should return false if not authorized', function(){
      return authController.isAuthorizedPromise('admin').should.eventually.be.false;
    });

  })
});