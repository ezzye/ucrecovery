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
      team: "0",
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
      id: 2,
      name: "Mr Test",
      role: "2",
      contact: "12345",
      team: "ward 10",
      picture: "img/dP6h8dpQSY6tDxqMA7OF_Consultant.png"
      },
      {
      id: 3,
      name: "Ms Tester",
      role: "2",
      contact: "23456",
      team: "ward 10",
      picture: "img/ep8SJoL3RZ6EqXtn74g7_Junior1.png"
      },
      {
      id: 4,
      name: "Mr Test",
      role: "0",
      contact: "12345",
      team: "ward 10",
      picture: "img/dP6h8dpQSY6tDxqMA7OF_Consultant.png"
      },
      {
      id: 5,
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
    getidTeam: function() {
      return idCount.team;
    },
    getidStaff: function() {
      return idCount.staff;
    },
    getidPatient: function() {
      return idCount.patient;
    },
    addTeam: function(team,callbackFn) {
      teams.push(team);
      callbackFn(teams);
    },
    getTeams: function(callbackFn) {
      callbackFn(teams);
    },
    addStaff: function(staff,callbackFn) {
      staffmems.push(staff);
      callbackFn(staffmems);
    },
    getStaff: function(callbackFn) {
      callbackFn(staffmems);
    },
    getRoles: function() {
      return roles;
    },
    getPatients: function(callbackFn) {
      callbackFn(patients);
    },
    addPatient: function(patient,callbackFn) {
      patients.push(patient);
      callbackFn(patients);
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
        var id = team.id;
        var name = team.name;
        var location = team.location;
        var tempteam;
        tx.executeSql('INSERT INTO teams VALUES (?,?,?)',[id, name, location],function (tx,resultSet) {
            console.log('team resultSet.insertId: ' + resultSet.insertId);
            console.log('team resultSet.rowsAffected: ' + resultSet.rowsAffected);
        },
        function (error) {
            console.log('INSERT error: ' + error.message);
        });

        tx.executeSql('SELECT * FROM teams',[],function (tx,resultSet) {
          teams.length = 0;
          console.log('SELECT in add team value of teams is: ' + teams);


          for(var x = 0; x < resultSet.rows.length; x++) {
            tempteam = {};
            tempteam.id = resultSet.rows.item(x).id;
            tempteam.name = resultSet.rows.item(x).name;
            tempteam.location = resultSet.rows.item(x).location;
            console.log(tempteam);
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
        console.log(teams);
        callbackFn(teams);
      });
    };

    var addStaff = function(staff,callbackFn) {
      db.transaction(function(tx) {
        var id = staff.id;
        var name = staff.name;
        var role = staff.role;
        var team = staff.team;
        var contact = staff.contact;
        var picture = "img/dP6h8dpQSY6tDxqMA7OF_Consultant.png";
        var tempstaff;
        console.log(id);
        console.log(name);
        console.log(role);
        console.log(team);
        console.log(contact);
        console.log(picture);
        tx.executeSql('INSERT INTO staffmems VALUES (?,?,?,?,?,?)',[id, name, role, contact, team, picture],function (tx,resultSet) {
            console.log('staff resultSet.insertId: ' + resultSet.insertId);
            console.log('staff resultSet.rowsAffected: ' + resultSet.rowsAffected);
        },
        function (error) {
            console.log('INSERT error: ' + error.message);
        });

        tx.executeSql('SELECT * FROM staffmems',[],function (tx,resultSet) {
          staffmems.length = 0;
          console.log('SELECT in add staff value of staffmems is: ' + staffmems);


          for(var x = 0; x < resultSet.rows.length; x++) {
            tempstaff = {};
            tempstaff.id = resultSet.rows.item(x).id;
            tempstaff.name = resultSet.rows.item(x).name;
            tempstaff.role = resultSet.rows.item(x).role;
            tempstaff.team = resultSet.rows.item(x).team;
            tempstaff.contact = resultSet.rows.item(x).contact;
            tempstaff.picture = resultSet.rows.item(x).picture;
            console.log(tempstaff);
            staffmems.push(tempstaff);
          }
        },
        function (error) {
            console.log('SELECT error: ' + error.message);
        });

      }, function(error) {
        console.log('Open database ERROR: ' + JSON.stringify(error));
      }, function() {
        console.log('transaction ok');
        console.log(staffmems);
        callbackFn(staffmems);
      });
    };


  return {

    getTeams: getTeams,
    addTeam: addTeam,
    addStaff: addStaff,
    // addStaff: function(staff) {
    //   staffmems.push(staff);
    //   return staffmems;
    // },
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
    getidTeam: function() {
      return idCount.team;
    },
    getidStaff: function() {
      return idCount.staff;
    },
    getidPatient: function() {
      return idCount.patient;
    },
    getEnvironment: function() {
      var environment = "mobile";
      return environment;
    }
  };
}])



.service('BlankService', [function(){

}]);




