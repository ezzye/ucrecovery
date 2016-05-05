angular.module('app.services', [])

.factory('formData', [function(formData){
  return {
    form: {},
    getForm: function() {
      return this.form;
    },
    updateForm: function(form) {
      this.form = form;
    }
  }

}])

.service('BlankService', [function(){

}]);

