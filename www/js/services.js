"use strict";

angular.module('app.services', [])

.factory('formData', [function(){

  var staffmems = [{
      name: "Mr Test",
      role: "Doctor 1",
      contact: "12345",
      team: "ward 10",
      picture: "img/dP6h8dpQSY6tDxqMA7OF_Consultant.png"
      },
      {
      name: "Ms Tester",
      role: "Doctor 2",
      contact: "23456",
      team: "ward 10",
      picture: "img/ep8SJoL3RZ6EqXtn74g7_Junior1.png"
      }
    ];

  var teams = [{
      name: "Ward Z",
      location: "UCL London",
      },
      {
      name: "Ward 12",
      location: "Birmingham New Hospital",
      }
    ];

  var patients = [{
      name: "Ward Z",
      location: "UCL London",
      },
      {
      name: "Ward 12",
      location: "Birmingham New Hospital",
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
    addStaff: function(staff) {
      staffmems.push(staff);
      return staffmems;
    },
    getStaff: function() {
      return staffmems;
    },
    getPatients: function() {
      return patients;
    }
  };

}])

.service('BlankService', [function(){

}]);
