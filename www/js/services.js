"use strict";

angular.module('app.services', [])

.factory('formData', [function(formData){
  return {
    addTeam: function(team) {
      console.log(team);
      // Add new name and location to team table
      return team;
    },
    addStaff: function(staff) {
      console.log(staff);
      return staff;
    },
    getStaff: function() {

      var staff = [{
                name: "Mr Test",
                role: "Doctor",
                contact: "12345",
                team: "ward 10"
                },
                {
                name: "Ms Tester",
                role: "Doctor B",
                contact: "23456",
                team: "ward 10"
                }
              ];

      return staff;
    }
  };

}])

.service('BlankService', [function(){

}]);
