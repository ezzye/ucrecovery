"use strict";

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var db = null;



var team ={};

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
    try {
        db = $cordovaSQLite.openDB({name:"nextflow.db",location:'default'});
    } catch (error) {
        console.log(error);
    }

    try {

      $cordovaSQLite.execute(db, 'CREATE TABLE IF NOT EXISTS Messages (id INTEGER PRIMARY KEY AUTOINCREMENT, message TEXT)');

      // $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS people (id integer primary key autoincrement, firstname text, lastname text)");

      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS teams (id integer primary key autoincrement, name text, location text)");

      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS staff (id integer primary key autoincrement, first_name text, last_name text, position text, team_id integer)");

      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS patientDetails (id integer primary key autoincrement, first_name text, last_name text,hospital_number text, NHS_number text, dob DATE, procedure text, in_date DATE, out_date DATE, op_date DATE)");

      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS patientTreatments (id integer primary key autoincrement, date DATETIME, treatment text, comment text, patient_id integer)");

      $cordovaSQLite.execute(db, "CREATE TABLE IF NOT EXISTS patientData (id integer primary key autoincrement, date DATETIME, measurement text, value NUMERIC, patient_id integer)");

    } catch (error) {
        console.log(error);
    }

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

  });
});
