"use strict";
describe('addNewTeamCtrl',function() {

  var formDataServiceMock,
      controller,
      stateMock,
      ionicPopupMock;

  var scope;

  var team ={};

  team.name = "test name";
  team.location = "London UCL";

  var callbackfn = function() {};


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
      formData: formDataServiceMock,

    });

  }));

  beforeEach(inject(function() {
    scope.submitForm(team);
  }));


  describe('#submitForm', function() {

    it('call addTeam on formData service', function() {
      expect(formDataServiceMock.addTeam).toHaveBeenCalledWith(team,callbackfn);
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


[ Object({ name: 'test name', location: 'London UCL' }), Function ]
[ Object({ name: 'test name', location: 'London UCL' }), Function ]

