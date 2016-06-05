"use strict";

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var isNotMobile = false;

var db;

var idCount = {
      team: 2,
      staff: 6,
      patient: 2
};

angular.module('app', ['ionic', 'ngCordova', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])
.run(function($ionicPlatform, $cordovaSQLite) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // Important!!
    //
    // Instantiate database file/connection after ionic platform is ready.
    //
    // try {
    //     db = $cordovaSQLite.openDB("my.db");
    // } catch (error) {
    //     console.log(error);
    // }

    try {

      // window.sqlitePlugin.deleteDatabase({name: 'my.db', location: 'default'}, function() {console.log("delete success");}, function(err) {console.log("delete error" + JSON.stringify(err));});

      db = window.sqlitePlugin.openDatabase({ name: 'my.db', location: 'default' }, function () {

        db.sqlBatch([
          'CREATE TABLE IF NOT EXISTS teams (id integer, name text,location text)',
          'CREATE TABLE IF NOT EXISTS staffmems (id integer, name text, role integer, contact text, team integer, picture text)',
          'CREATE TABLE IF NOT EXISTS patients (id integer, patientName text, patientDOB integer, HospitalNumber text, NHSNumber text, patientHeight integer, BetaBlockers integer, Antibiotic integer, BloodTransfusion integer, Antihypertensive integer )'
          // ,[ 'INSERT INTO teams VALUES (?,?,?)', [0,'test team xxx','UCL test ward'] ],
        ],
        function() {

          console.log('Find the idCount for team ****************');
          db.executeSql('SELECT MAX(id) AS idmax FROM teams;', [], function (resultSet) {
            console.log('----Sample column value for team: ' + resultSet.rows.item(0).idmax);
            idCount.team = resultSet.rows.item(0).idmax ? 1 +resultSet.rows.item(0).idmax : 0;
            console.log("Next team id is: " + idCount.team);
          });

          console.log('Find the idCount for staff ****************');
          db.executeSql('SELECT MAX(id) AS idmax FROM staffmems;', [], function (resultSet) {
            console.log('----Sample column value for staffmems: ' + resultSet.rows.item(0).idmax);
            idCount.staff = resultSet.rows.item(0).idmax ? 1 +resultSet.rows.item(0).idmax : 0;
            console.log("Next staff id is: " + idCount.staff);
          });

          console.log('Find the idCount for patient ****************');
          db.executeSql('SELECT MAX(id) AS idmax FROM patients;', [], function (resultSet) {
            console.log('----Sample column value for patients: ' + resultSet.rows.item(0).idmax);
            idCount.patient = resultSet.rows.item(0).idmax ? 1 +resultSet.rows.item(0).idmax : 0;
            console.log("Next staff id is: " + idCount.patient);
          });

        }, function(error) {
          console.log('Populate table ezzy error: ' + error.message);
        });

      }, function (error) {
          console.log('Open database ezzy ERROR: ' + JSON.stringify(error));
      });

    } catch (error) {
        isNotMobile = true;
        console.log("catch error for ezzy" + error);
    }

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

  });
});


