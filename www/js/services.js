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

  return {
    addTeam: function(team) {
      console.log(team);
      // Add new name and location to team table
      return team;
    },
    addStaff: function(staff) {
      staffmems.push(staff);
      return staffmems;
    },
    getStaff: function() {
      return staffmems;
    }
  };

}])

.service('BlankService', [function(){

}]);
