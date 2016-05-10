"use strict";

angular.module('app.controllers', [])

.controller('summaryCtrl', function($scope) {

})

.controller('teamProfilesCtrl', function($scope) {

})

.controller('patientDataCtrl', function($scope) {

})

.controller('patientChartsCtrl', function($scope) {

})

.controller('patientProfilesCtrl', function($scope) {

})

.controller('andyAppleCtrl', function($scope) {

})

.controller('andyApple2Ctrl', function($scope) {

})

.controller('andyApple3Ctrl', function($scope) {

})

.controller('addNewPatientCtrl', function($scope) {

})

.controller('staffProfilesCtrl', function($scope) {

})

.controller('addNewStaffCtrl', function($scope) {

})

.controller('addNewTeamCtrl', function($scope,$state,$ionicPopup,formData) {

  //set up team object to hold team data
  //add 'name' and 'location' to hold team data
  //e.g. viewmodel team.name and team.location


  $scope.team = {};
  //Called when submit button clicked using 'ng-submit'
  $scope.submitForm = function(team) {
    if(team.name && team.location) {
      formData.addTeam(team);
      $state.go('uCrecovery.teamProfiles');
    } else {
      $ionicPopup.alert({
        title: 'Fill in all boxes',
        template: 'Need both name and location'
      });
    }
  };

});
