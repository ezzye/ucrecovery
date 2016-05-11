angular.module('app.services', [])

.factory('formData', [function(formData){
  return {
    addTeam: function(team) {
      console.log(team);
      return team;
    }
  }

}])

.service('BlankService', [function(){

}]);

