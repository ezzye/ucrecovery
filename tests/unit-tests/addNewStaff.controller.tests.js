"use strict";

describe('addNewStaffCtrl', function() {

  var formDataServiceMock,
      controller,
      stateMock,
      ionicPopupMock;

  var scope;

  var staff = {};

  staff.name = "TestName";
  staff.role = "TestRole";
  staff.contact = "012345234567";
  staff.team = "TestTeam";

  beforeEach(module('app'));

  beforeEach(inject(function($controller, $rootScope) {

    scope = $rootScope.$new();

    formDataServiceMock = jasmine.createSpyObj('formService spy',['addStaff']);

    stateMock = jasmine.createSpyObj("$state spy", ['go']);

    ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['alert']);

    controller = $controller('addNewStaffCtrl', {
      $scope: scope,
      $state: stateMock,
      $ionicPopup: ionicPopupMock,
      formData: formDataServiceMock
    });

  }));

  beforeEach(inject(function() {
    scope.submitForm(staff);
  }));

  describe('#submitForm', function() {

    it('calls addStaff on formData service', function() {
      expect(formDataServiceMock.addStaff).toHaveBeenCalledWith(staff);
    });

    it('if successful it should change state to uCrecovery.staffProfiles', function() {
      expect(stateMock.go).toHaveBeenCalledWith('uCrecovery.staffProfiles');
    });

  })

})
