"use strict";

describe('staffProfilesCtrl specific call to #getStaff',function() {
  var formDataServiceMock,
      controller;

  var scope;

  beforeEach(module('app'));

  beforeEach(inject(function($controller,$rootScope) {
    scope = $rootScope.$new();
    formDataServiceMock = jasmine.createSpyObj('formData spy',['getStaff']);
    controller = $controller('staffProfilesCtrl',{
      $scope: scope,
      formData: formDataServiceMock
    });
  }));


  beforeEach(inject(function() {
    formDataServiceMock.getStaff();
  }));

  //Currently no fuctions in staffProfilesCtrl so just testing forData called!

  describe('call getStaff on formData service',function() {

    it('should return staff profiles',function() {
      expect(formDataServiceMock.getStaff).toHaveBeenCalledWith();
    });
  });
});