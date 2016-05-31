"use strict";

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var isNotMobile = null;
var db;

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

      window.sqlitePlugin.deleteDatabase({name: 'my.db', location: 'default'}, function() {console.log("delete success");}, function(err) {console.log("delete success" + JSON.stringify(err));});

      db = window.sqlitePlugin.openDatabase({ name: 'my.db', location: 'default' }, function () {

        db.sqlBatch([
          'DROP TABLE IF EXISTS teams',
          'CREATE TABLE teams (id,name,location)',
          [ 'INSERT INTO teams VALUES (?,?,?)', [0,'test team xxx','UCL test ward'] ],
        ], function() {
          db.executeSql('SELECT * FROM teams', [], function (resultSet) {
            console.log('Sample column value: ' + resultSet.rows.item(0).name);
          });
        }, function(error) {
          console.log('Populate table error: ' + error.message);
        });

      }, function (error) {
          console.log('Open database ERROR: ' + JSON.stringify(error));
      });

      // window.sqlitePlugin.echoTest(function() {
      //   console.log('transaction ok -- echo Test');
      // }, function(err) {
      //     console.log('echo Test ERROR: ' + JSON.stringify(err));
      // });

      // window.sqlitePlugin.selfTest(function() {
      //   console.log(' ***************************** transaction ok --- self Test *****************************');
      // }, function(err) {
      //   console.log('***************************** self Test ERROR: ' + JSON.stringify(err));
      // });

      // db = window.sqlitePlugin.openDatabase({ name: 'my.db', location: 'default' }, function () {
      //   db.transaction(function (tx) {
      //       tx.executeSql('CREATE TABLE teams (id,name,location)');
      //   }, function (error) {
      //       console.log('transaction error: ' + error.message);
      //   }, function () {
      //       console.log('transaction ok');
      //   });
      // }, function (error) {
      //   console.log('Open database ERROR: ' + JSON.stringify(error));
      // });

      // $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT)');

      // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key autoincrement, firstname text, lastname text)");

      // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS teams (id integer primary key autoincrement, name text, location text)");

      // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS staff (id integer primary key autoincrement, first_name text, last_name text, position text, team_id integer)");

      // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS patientDetails (id integer primary key autoincrement, first_name text, last_name text,hospital_number text, NHS_number text, dob DATE, procedure text, in_date DATE, out_date DATE, op_date DATE)");

      // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS patientTreatments (id integer primary key autoincrement, date DATETIME, treatment text, comment text, patient_id integer)");

      // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS patientData (id integer primary key autoincrement, date DATETIME, measurement text, value NUMERIC, patient_id integer)");

    } catch (error) {
        isNotMobile = true;
        console.log(error);
    }

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

  });
});
