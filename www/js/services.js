angular.module('app.services', [])

.factory('formData', [function(formData){
  return {
    addTeam: function(team) {
      console.log(team);
      // Add new name and location to team table
      return team;
    }
  }

}])

.service('BlankService', [function(){

}]);

