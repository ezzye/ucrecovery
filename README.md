UC recovery
=====================

The app's objective is to reduce recovery times so that patients can get out of hospital and get on with their lives quicker, hospitals can save money on unexpectedly long stays, and other patients can be brought in for their urgent operations as soon as possible.

As such, our app intends to work towards generating a new best practice for data collection.  We are all passionate about technology and really think it can make a difference!

The longer term aim is to eventually use the aggregated data over time, as a way of looking for correlations between certain care protocols and average recovery times.

For example, over time we would like to be able to use the data collected using the app to analyse the effect of simple interventions – for example ensuring patients drink a certain amount of water each day – and recovery time.

The first version of our app will aim to streamline, simplify and standardize the data collection process for patients who have just had major surgery, and present it graphically for the purposes of simple and quick-to-access analysis for Doctors.


Working on Project
====================

Click on this [link](https://waffle.io/ezzye/ucrecovery/join) to access waffle board and see how backlog is progressing.

See here to understand how to specify issue number in branch name and Pull Request (PR) see [here](https://github.com/waffleio/waffle.io/wiki/Recommended-Workflow-Using-Pull-Requests-&-Automatic-Work-Tracking).

See below for [links](https://github.com/ezzye/ucrecovery/blob/master/README.md#ionic-app-base) regarding using ionic.


Project Epics (Milestones) and link to Backlog
===============================================
Project backlog can be found [here](https://docs.google.com/spreadsheets/d/1JBJZh0rqHdKCJ0kOZyJKGXRBXD-W6ChtmF9LF81ZT-4/edit?usp=sharing)

The milestones are:

1. CRUD for medical team
2. CRUD for doctors
3. CRUD for patient
4. CRUD for patient daily data
5. Patient charts based on data
6. Set reminder
7. Notify per reminder
8. Setup Local Database
D1. App look and feel
F1. Setup dev environment
F2. Package for IOS
F3. Package for Android

At the very least each milestone should have own branch.  Branches then merged into main using pull requests.

Testing
====================


Before running end-to-end testing protractor needs to be installed and webdriver updated:
```
$ npm install -g protractor
$ webdriver-manager update
```
To run e2e tests:
```
protractor tests/e2e-tests.conf.js
```

To run unit tests:
```
karma start tests/unit-tests.conf.js
```

Add SQLite Database
=====================

Example database added to app.js

Example use in 'Fat Controller' teamProfilesCtrl

see [example](http://nextflow.in.th/en/2015/easy-way-to-work-with-sqlite-database-in-ionic-framework/)

Add cordova-SQLite plugin:

```
cordova plugin add https://github.com/brodysoft/Cordova-SQLitePlugin.git
```

SQLite plugin only works in ios emulator or in real device.


Ionic App Base
=====================

A starting project for Ionic that optionally supports using custom SCSS.

## Using this project

We recommend using the [Ionic CLI](https://github.com/driftyco/ionic-cli) to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
$ npm install -g ionic
```

Then run:

```bash
$ ionic start myProject tabs
```

More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/getting-started) page and the [Ionic CLI](https://github.com/driftyco/ionic-cli) repo.

## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/submit-issue/) to the main Ionic repository.
