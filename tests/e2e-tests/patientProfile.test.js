"use strict";

describe('Patient profile pages',function() {

  var addNewPatientButton, createProfileButton;

  var patientName,
      patientDOB,
      HospitalNumber,
      NHSNumber,
      patientHeight,
      PreOpWeight,
      BetaBlockers,
      Antibiotic,
      BloodTransfusion,
      Antihypertensive;


  describe('showing patient profile pages',function() {

    beforeEach(function() {
      browser.get('/#/side-menu21/patientProfiles');
      addNewPatientButton = element(by.linkText('Add New Patient'));
    });

    it('should show patient profiles on page',function() {
      expect(element.all(by.repeater('patientRecord in patientRecords')).count()).toEqual(2);
    });

    it('it should show the add patient, new patient page when add patient button pressed',function() {
      addTeamButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addPatient');
      });
    });
  });

  describe('add Patient page',function() {

    beforeEach(function() {
      browser.get('/#/side-menu21/addPatient');

      patientName = element(by.model('patientRecord.patientName'));
      patientDOB = element(by.model('patientRecord.patientDOB'));
      HospitalNumber = element(by.model('patientRecord.HospitalNumber'));
      NHSNumber = element(by.model('patientRecord.NHSNumber'));
      patientHeight = element(by.model('patientRecord.patientHeight'));
      PreOpWeight = element(by.model('patientRecord.PreOpWeight'));
      BetaBlockers = element(by.model('patientRecord.BetaBlockers'));
      Antibiotic = element(by.model('patientRecord.Antibiotic'));
      BloodTransfusion = element(by.model('patientRecord.BloodTransfusion'));
      Antihypertensive = element(by.model('patientRecord.Antihypertensive'));

      createProfileButton = element(by.css('.button.button-assertive.button-block.icon.ion-ios-person'));
    });

    it('should add a patient profile',function() {

      patientName.sendKeys('Gary Norton');
      patientDOB.sendKeys('19950319');
      HospitalNumber.sendKeys('H0923477');
      NHSNumber.sendKeys('PSQ H345');
      patientHeight.sendKeys('180');
      PreOpWeight.sendKeys('85');
      BetaBlockers.sendKeys('Y');
      Antibiotic.sendKeys('N');
      BloodTransfusion.sendKeys('Y');
      Antihypertensive.sendKeys('N');

      createProfileButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/patientProfiles');
        expect(element.all(by.repeater('patientRecord in patientRecords')).count()).toEqual(3);
      });
    });

    it('should show pop up if all fields not filled in',function() {
      patientName.sendKeys('');
      patientDOB.sendKeys('');
      HospitalNumber.sendKeys('');
      NHSNumber.sendKeys('');
      patientHeight.sendKeys('');
      PreOpWeight.sendKeys('');
      createProfileButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addPatient');
        var popup = element(by.css('.popup-container.popup-showing.active'));
        expect(popup.isDisplayed()).toBeTruthy();
      });
    });
  });
});