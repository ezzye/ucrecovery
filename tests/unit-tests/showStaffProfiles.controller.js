"use strict";

describe('staffProfilesCtrl specificall #getStaff',function() {
  var formDataServiceMock,
      controller;


  var scope;

  beforeEach(module('app'));

  beforeEach(inject(function($controller,$rootScope) {
    scope = $rootScope.$new();

    formDataServiceMock = jasmine.createSpyObj('formService spy',['getStaff']);

    controller = $controller('staffProfilesCtrl',{
      $scope: scope,
      formData: formDataServiceMock
    });

  }));


  beforeEach(function() {
    scope.getStaff();
  });

  describe('call getStaff on formData service',function() {

    it('should return staff profiles',function() {
      expect(formDataServiceMock.getStaff).toHaveBeenCalledWith();
    });

  });




});