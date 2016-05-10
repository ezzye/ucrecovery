"use strict";
// Add New team
// =================
// Submit form with team name and location if OK  don't show alert
// Add team to patient data and then
// Goto Team page


// To Do
// ====================
// check result from call submitForm on controller
    // mock state
    // check that mock to Have Been Called With parameter uCrecovery.teamProfiles

    // mock $ionicPopup
    // check that mock to Have Been Called

// check result from call addTeam on service
    // mock service
    // check that mock to Have Been Called With addTeam

describe('addNewTeamCtrl',function() {

  var formDataServiceMock,
      controller,
      stateMock,
      ionicPopupMock;

  var scope;

  var team ={};

  team.name = "test name";
  team.location = "London UCL";


  beforeEach(module('app'));

  beforeEach(inject(function($controller,$rootScope) {

    scope = $rootScope.$new();

    formDataServiceMock = jasmine.createSpyObj('formService spy',['addTeam']);

    stateMock = jasmine.createSpyObj('$state spy',['go']);

    ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy',['alert']);



    controller = $controller('addNewTeamCtrl',{
      $scope: scope,
      $state: stateMock,
      $ionicPopup: ionicPopupMock,
      formData: formDataServiceMock
    });

  }));

  beforeEach(inject(function() {

    scope.submitForm(team);

  }));



  describe('#submitForm', function() {

    it('call addTeam on formData service', function() {
      expect(formDataServiceMock.addTeam).toHaveBeenCalledWith(team);
    });

    describe('when form is submitted', function() {

      it('if successful it should change state to uCrecovery.teamProfiles', function() {
        expect(stateMock.go).toHaveBeenCalledWith('uCrecovery.teamProfiles');
      });

      it('if unsuccessful it should show a popup', function() {
        team.name = "";
        team.location = "";
        scope.submitForm(team);
        expect(ionicPopupMock.alert).toHaveBeenCalledWith({
        title: 'Fill in all boxes',
        template: 'Need both name and location'
      });
      });


    });
  });

});

