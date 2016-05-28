"use strict";

angular.module('app.services', [])

.factory('formData', [SqlData,function(SqlData){

  var staffmems = [{
      id: 0,
      name: "Mr Test",
      role: "0",
      contact: "12345",
      team: "ward 10",
      picture: "img/dP6h8dpQSY6tDxqMA7OF_Consultant.png"
      },
      {
      id: 1,
      name: "Ms Tester",
      role: "1",
      contact: "23456",
      team: "ward 10",
      picture: "img/ep8SJoL3RZ6EqXtn74g7_Junior1.png"
      },
      {
      id: 0,
      name: "Mr Test",
      role: "2",
      contact: "12345",
      team: "ward 10",
      picture: "img/dP6h8dpQSY6tDxqMA7OF_Consultant.png"
      },
      {
      id: 1,
      name: "Ms Tester",
      role: "2",
      contact: "23456",
      team: "ward 10",
      picture: "img/ep8SJoL3RZ6EqXtn74g7_Junior1.png"
      },
      {
      id: 0,
      name: "Mr Test",
      role: "0",
      contact: "12345",
      team: "ward 10",
      picture: "img/dP6h8dpQSY6tDxqMA7OF_Consultant.png"
      },
      {
      id: 1,
      name: "Ms Tester",
      role: "2",
      contact: "23456",
      team: "ward 10",
      picture: "img/ep8SJoL3RZ6EqXtn74g7_Junior1.png"
      }
    ];

  var teams = [{
      id: 0,
      name: "Ward Z",
      location: "UCL London",
      },
      {
      id: 1,
      name: "Ward 12",
      location: "Birmingham New Hospital",
      }
    ];

  var roles = [{
      id: 0,
      name: "Consultant"
      },
      {
      id: 1,
      name: "Doctor"
      },
      {
      id: 2,
      name: "Nurse"
      }
    ];

    // need to add id to objects

  var patients = [
    {
    id: 0,
    patientName: "Apple-Joe McFee",
    patientDOB: 19911119,
    HospitalNumber: "H129994G",
    NHSNumber: "QS 996GH",
    patientHeight: 153,
    BetaBlockers: false,
    Antibiotic: true,
    BloodTransfusion: true,
    Antihypertensive: true
    },
    {
    id: 1,
    patientName: "Beach-Joe McFee",
    patientDOB: 19999919,
    HospitalNumber: "H122224G",
    NHSNumber: "QS 777GH",
    patientHeight: 162,
    BetaBlockers: true,
    Antibiotic: false,
    BloodTransfusion: false,
    Antihypertensive: false
    }
  ];


  return {
    addTeam: function(team) {
      teams.push(team);
      return teams;
    },
    getTeams: function() {
      return teams;
    },
    getSqlTeams: function() {
      var Sqlteams = SqlData.getsqlTeams();
      return Sqlteams;
    },
    addStaff: function(staff) {
      staffmems.push(staff);
      return staffmems;
    },
    getStaff: function() {
      return staffmems;
    },
    getRoles: function() {
      return roles;
    },
    getPatients: function() {
      return patients;
    },
    addPatient: function(patient) {
      patients.push(patient);
      return patients;
    },
    getEnvironment: function() {
      var environment = isNotMobile ? "web" : "mobile";
      return environment;
    }
  };



    // should be service not fat controller but lets start here and test

  $scope.save = function(newMessage) {

    $cordovaSQLite.execute(db, 'INSERT INTO Messages (message) VALUES (?)', [newMessage])
        .then(function(result) {
            $scope.statusMessage = "Message saved successful, cheers!";
        }, function(error) {
            $scope.statusMessage = "Error on saving: " + error.message;
        });

  };

  $scope.load = function() {

    // Execute SELECT statement to load message from database.
    $cordovaSQLite.execute(db, 'SELECT * FROM Messages ORDER BY id DESC')
        .then(
            function(result) {

                if (result.rows.length > 0) {
                    $scope.newMessage = result.rows.item(0).message;
                    $scope.statusMessage = "Message loaded successful, cheers!  " + $scope.newMessage;
                }
            },
            function(error) {
                $scope.statusMessage = "Error on loading: " + error.message;
            }
        );
    };



}])

.service('BlankService', [function(){

}]);
