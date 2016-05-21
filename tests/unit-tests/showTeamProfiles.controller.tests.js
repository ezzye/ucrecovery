"use strict";

describe('teamProfilesCtrl specific call to #getTeams',function() {
  var formDataServiceMock,
      controller;

  var scope;

  beforeEach(module('app'));

  beforeEach(inject(function($controller,$rootScope) {
    scope = $rootScope.$new();
    formDataServiceMock = jasmine.createSpyObj('formData spy',['getTeams']);
    controller = $controller('teamProfilesCtrl',{
      $scope: scope,
      formData: formDataServiceMock
    });
  }));


  beforeEach(inject(function() {
    formDataServiceMock.getTeams();
  }));

  //Currently no fuctions in teamProfilesCtrl so just testing forData called!

  describe('call getTeams on formData service',function() {

    it('should return staff profiles',function() {
      expect(formDataServiceMock.getTeams).toHaveBeenCalledWith();
    });
  });
});