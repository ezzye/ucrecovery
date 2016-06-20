"use strict";

angular.module('app.controllers', [])

.controller('summaryCtrl', function($scope) {

})

.controller('teamProfilesCtrl', function($scope,$cordovaSQLite,formData) {
  formData.getTeams(function(teams) {
    $scope.teams = teams;
    console.log($scope.teams);
  });
  $scope.environment = formData.getEnvironment();
})

.controller('patientDataCtrl', function($scope) {

})

.controller('patientChartsCtrl', function($scope) {

})

.controller('patientProfilesCtrl', function($scope,formData) {
  formData.getPatients(function(patients) {
    $scope.patients = patients;
    console.log($scope.patients);
  });
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
      $scope.patient.id = formData.getidPatient();
      formData.addPatient(patient,function(patients) {
      $scope.patients = patients;
      idCount.patient++;
    });
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
  formData.getStaff(function(staffmems) {
    $scope.staffmems = staffmems;
    console.log($scope.staffmems);
  });
  $scope.roles = formData.getRoles();
})

.controller('addNewStaffCtrl', function($scope,$state,$ionicPopup,formData) {
  $scope.staff = {};
  $scope.roles = formData.getRoles();
  formData.getTeams(function(teams) {
    $scope.teams = teams;
    console.log($scope.teams);
  });
  $scope.submitForm = function(staff) {
    if(staff.name && staff.contact && staff.team && staff.role) {
      $scope.staff.id = formData.getidStaff();
      formData.addStaff(staff,function(staffmems) {
      $scope.staffmems = staffmems;
      idCount.staff++;
    });
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
  $scope.upload = function() {
    var options = {};
  };
})

.controller('addNewTeamCtrl', function($scope,$state,$ionicPopup,formData) {
  $scope.team = {};
  $scope.submitForm = function(team) {
    if(team.name && team.location) {
      $scope.team.id = formData.getidTeam();
      formData.addTeam(team,function(teams) {
      $scope.teams = teams;
      idCount.team++;
    });
      $state.go('uCrecovery.teamProfiles');
    } else {
      $ionicPopup.alert({
        title: 'Fill in all boxes',
        template: 'Need both name and location'
      });
    }
  };
});
