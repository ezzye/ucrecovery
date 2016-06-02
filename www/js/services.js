"use strict";

angular.module('app.services', [])

.factory('formData', ['objectData','sqlData',function(objectData,sqlData){
  console.log(isNotMobile);
  if(isNotMobile) {
    console.log(isNotMobile);
    return objectData;
  } else {
    return sqlData;
  }
}])

.factory('objectData', [function(){
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
    addTeam: function(team,callbackFn) {
      teams.push(team);
      callbackFn(teams);
    },
    getTeams: function(callbackFn) {
      callbackFn(teams);
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
      var environment = "web";
      return environment;
    }
  };
}])

.factory('sqlData', [function(){

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

  var teams = [];

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

  var getTeams = function(callbackFn) {
    teams = [];
    db.transaction(function(tx) {
    var team;
      tx.executeSql('SELECT * FROM teams',[],function (tx,resultSet) {
        for(var x = 0; x < resultSet.rows.length; x++) {
          team = {};
          team.id = resultSet.rows.item(x).id;
          team.name = resultSet.rows.item(x).name;
          team.location = resultSet.rows.item(x).location;
          teams.push(team);
        }
      },
      function (error) {
          console.log('SELECT error: ' + error.message);
      });

    }, function(error) {
      console.log('Open database ERROR: ' + JSON.stringify(error));
    }, function() {
      console.log('transaction ok');
      callbackFn(teams);
    });
  };

  var addTeam = function(team,callbackFn) {
      db.transaction(function(tx) {
        var id = mobileCount;
        var name = team.name;
        var location = team.location;
        var tempteam;
        tx.executeSql('INSERT INTO teams VALUES (?,?,?)',[id, name, location],function (tx,resultSet) {
            console.log('resultSet.insertId: ' + resultSet.insertId);
            console.log('resultSet.rowsAffected: ' + resultSet.rowsAffected);
        },
        function (error) {
            console.log('INSERT error: ' + error.message);
        });

        tx.executeSql('SELECT * FROM teams',[],function (tx,resultSet) {
          teams.length = 0;
          console.log('SELECT in add team value of teas is: ' + teams);


          for(var x = 0; x < resultSet.rows.length; x++) {
            tempteam = {};
            tempteam.id = resultSet.rows.item(x).id;
            tempteam.name = resultSet.rows.item(x).name;
            tempteam.location = resultSet.rows.item(x).location;
            teams.push(tempteam);
          }
        },
        function (error) {
            console.log('SELECT error: ' + error.message);
        });

      }, function(error) {
        console.log('Open database ERROR: ' + JSON.stringify(error));
      }, function() {
        console.log('transaction ok');
        mobileCount++;
        callbackFn(teams);
      });
    };


  return {

    getTeams: getTeams,
    addTeam: addTeam,
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
      var environment = "mobile";
      return environment;
    }
  };
}])



.service('BlankService', [function(){

}]);




