"use strict";

describe('patientProfilesCtrl specific call to #getPatients',function() {
  var formDataServiceMock,
      controller;

  var scope;

  beforeEach(module('app'));

  beforeEach(inject(function($controller,$rootScope) {
    scope = $rootScope.$new();
    formDataServiceMock = jasmine.createSpyObj('formData spy',['getPatients']);
    controller = $controller('patientProfilesCtrl',{
      $scope: scope,
      formData: formDataServiceMock
    });
  }));


  beforeEach(inject(function() {
    formDataServiceMock.getPatients();
  }));

  //Currently no fuctions in staffProfilesCtrl so just testing forData called!

  describe('call getPatients on formData service',function() {

    it('should return patient profiles',function() {
      expect(formDataServiceMock.getPatients).toHaveBeenCalledWith();
    });
  });
});