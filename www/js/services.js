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
    }
  }

}])

.service('BlankService', [function(){

}]);
