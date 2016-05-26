angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('uCrecovery.summary', {
    url: '/exceptions',
    views: {
      'side-menu21': {
        templateUrl: 'templates/summary.html',
        controller: 'summaryCtrl'
      }
    }
  })

  .state('uCrecovery.teamProfiles', {
    url: '/teamProfile',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teamProfiles.html',
        controller: 'teamProfilesCtrl'
      }
    }
  })

  .state('uCrecovery.patientData', {
    url: '/patientData',
    views: {
      'side-menu21': {
        templateUrl: 'templates/patientData.html',
        controller: 'patientDataCtrl'
      }
    }
  })

  .state('uCrecovery.patientCharts', {
    url: '/patientCharts',
    views: {
      'side-menu21': {
        templateUrl: 'templates/patientCharts.html',
        controller: 'patientChartsCtrl'
      }
    }
  })

  .state('uCrecovery.patientProfiles', {
    url: '/patientProfiles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/patientProfiles.html',
        controller: 'patientProfilesCtrl'
      }
    }
  })

  .state('uCrecovery.patientProfile', {
    url: '/patientProfile/:id',
    views: {
      'side-menu21': {
        templateUrl: 'templates/patientProfiles.html',
        controller: 'patientProfilesCtrl'
      }
    }
  })

  .state('uCrecovery', {
    url: '/side-menu21',
    templateUrl: 'templates/uCrecovery.html',
    abstract:true
  })

  .state('uCrecovery.andyApple', {
    url: '/patientDataPage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/andyApple.html',
        controller: 'andyAppleCtrl'
      }
    }
  })

  .state('uCrecovery.andyApple2', {
    url: '/patientChartPage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/andyApple2.html',
        controller: 'andyApple2Ctrl'
      }
    }
  })

  .state('uCrecovery.andyApple3', {
    url: '/patientInfoPage',
    views: {
      'side-menu21': {
        templateUrl: 'templates/andyApple3.html',
        controller: 'andyApple3Ctrl'
      }
    }
  })

  .state('uCrecovery.addNewPatient', {
    url: '/addPatient',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewPatient.html',
        controller: 'addNewPatientCtrl'
      }
    }
  })

  .state('uCrecovery.staffProfiles', {
    url: '/staffProfiles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/staffProfiles.html',
        controller: 'staffProfilesCtrl'
      }
    }
  })

  .state('uCrecovery.addNewStaff', {
    url: '/addStaff',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewStaff.html',
        controller: 'addNewStaffCtrl'
      }
    }
  })

  .state('uCrecovery.addNewTeam', {
    url: '/addTeam',
    views: {
      'side-menu21': {
        templateUrl: 'templates/addNewTeam.html',
        controller: 'addNewTeamCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/exceptions')



});