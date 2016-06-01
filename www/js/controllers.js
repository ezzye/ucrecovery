"use strict";

angular.module('app.controllers', [])

.controller('summaryCtrl', function($scope) {

})

.controller('teamProfilesCtrl', function($scope,$cordovaSQLite,formData) {
  $scope.teams = formData.getTeams();
  $scope.environment = formData.getEnvironment();
})

.controller('patientDataCtrl', function($scope) {

})

.controller('patientChartsCtrl', function($scope) {

})

.controller('patientProfilesCtrl', function($scope,formData) {
  $scope.patients = formData.getPatients();
})

.controller('andyAppleCtrl', function($scope) {

})

.controller('andyApple2Ctrl', function($scope) {

})

.controller('andyApple3Ctrl', function($scope) {

})

.controller('addNewPatientCtrl', function($scope,$state,$ionicPopup,formData) {
  $scope.patient = {};
  $scope.submitForm = function(patient) {
    if(patient.patientName && patient.HospitalNumber && patient.NHSNumber && patient.patientHeight && patient.PreOpWeight) {
      $scope.patients = formData.addPatient(patient);
      $state.go('uCrecovery.patientProfiles');
    } else {
      $ionicPopup.alert({
        title: 'Fill in all the boxes',
        template: 'Needs name, DOB, Hospital No., height and weight'
      });
    }
  };
})

.controller('staffProfilesCtrl', function($scope,formData) {
  $scope.staffmems = formData.getStaff();
  $scope.roles = formData.getRoles();
})

.controller('addNewStaffCtrl', function($scope,$state,$ionicPopup,formData) {
  $scope.staff = {};
  $scope.roles = formData.getRoles();
  $scope.teams = formData.getTeams();
  $scope.submitForm = function(staff) {
    $scope.staffmems = formData.addStaff(staff);
    if(staff.name && staff.contact) {
      $state.go('uCrecovery.staffProfiles');
    } else {
      $ionicPopup.alert({
        title: 'Fill in all the boxes',
        template: 'Needs name, role, contact and team'
      });
    }
  };
})

.controller('uploadPhotoCtrl', function($scope) {
  
})

.controller('addNewTeamCtrl', function($scope,$state,$ionicPopup,formData) {
  $scope.team = {};
  $scope.submitForm = function(team) {
    if(team.name && team.location) {
      $scope.teams = formData.addTeam(team);
      $state.go('uCrecovery.teamProfiles');
    } else {
      $ionicPopup.alert({
        title: 'Fill in all boxes',
        template: 'Need both name and location'
      });
    }
  };

});
