"use strict";

describe('Patient profile pages',function() {

  var addNewPatientButton,
      createProfileButton;

  var patientName,
      patientDOB,
      HospitalNumber,
      NHSNumber,
      patientHeight,
      PreOpWeight;

  var BetaBlockers,
      Antibiotic,
      BloodTransfusion,
      Antihypertensive;


  describe('showing patient profile pages',function() {

    beforeEach(function() {
      browser.get('/#/side-menu21/patientProfiles');
      addNewPatientButton = element(by.linkText('Add New Patient'));
    });

    it('should show patient profiles on page',function() {
      expect(element.all(by.repeater('patient in patients')).count()).toEqual(2);
    });

    it('it should show the add patient, new patient page when add patient button pressed',function() {
      addNewPatientButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addPatient');
      });
    });
  });

  describe('add Patient page',function() {

    beforeEach(function() {
      browser.get('/#/side-menu21/addPatient');
      createProfileButton = element.all(by.id('addNewPatient-button95'));
      patientName = element(by.model('patient.patientName'));
      patientDOB = element(by.model('patient.patientDOB'));
      HospitalNumber = element(by.model('patient.HospitalNumber'));
      NHSNumber = element(by.model('patient.NHSNumber'));
      patientHeight = element(by.model('patient.patientHeight'));
      PreOpWeight = element(by.model('patient.PreOpWeight'));
      BetaBlockers = element(by.model('patient.BetaBlockers'));
      Antibiotic = element(by.model('patient.Antibiotic'));
      BloodTransfusion = element(by.model('patient.BloodTransfusion'));
      Antihypertensive = element(by.model('patient.Antihypertensive'));
    });


    it('should add a patient profile',function() {

      patientName.sendKeys('Gary Norton');
      patientDOB.sendKeys('19031994');
      HospitalNumber.sendKeys('H0923477');
      NHSNumber.sendKeys('PSQ H345');
      patientHeight.sendKeys('180');
      PreOpWeight.sendKeys('85');

      element.all(by.id('addNewPatient-button95')).get(0).click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/patientProfiles');
        expect(element.all(by.repeater('patient in patients')).count()).toEqual(3);
      });
    });

    it('should toggle on form and save new record',function() {

      patientName.sendKeys('Barry Bishbash');
      patientDOB.sendKeys('01071991');
      HospitalNumber.sendKeys('Z0000009');
      NHSNumber.sendKeys('AAA PZ98');
      patientHeight.sendKeys('111');
      PreOpWeight.sendKeys('50');

      it('should check both checkBoxes', function() {
        expect(element(by.id('addNewPatient-toggle38')).getAttribute('checked')).toBeFalsy();
        expect(element(by.id('addNewPatient-toggle39')).getAttribute('checked')).toBeFalsy();
        expect(element(by.id('addNewPatient-toggle40')).getAttribute('checked')).toBeFalsy();
        expect(element(by.id('addNewPatient-toggle41')).getAttribute('checked')).toBeFalsy();
        element(by.model('BetaBlockers')).click();
        element(by.model('Antibiotic')).click();
        element(by.model('BloodTransfusion')).click();
        element(by.model('Antihypertensive')).click();
        expect(element(by.id('addNewPatient-toggle38')).getAttribute('checked')).toBeTruthy();
        expect(element(by.id('addNewPatient-toggle39')).getAttribute('checked')).toBeTruthy();
        expect(element(by.id('addNewPatient-toggle40')).getAttribute('checked')).toBeTruthy();
        expect(element(by.id('addNewPatient-toggle41')).getAttribute('checked')).toBeTruthy();

        element.all(by.id('addNewPatient-button95')).get(0).click().then(function() {
          expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/patientProfiles');
          expect(element.all(by.repeater('patient in patients')).count()).toEqual(3);
        });
      });

    });

    it('should show pop up if all fields not filled in',function() {
      patientName.sendKeys('');
      HospitalNumber.sendKeys('');
      NHSNumber.sendKeys('');
      patientHeight.sendKeys('');
      PreOpWeight.sendKeys('');
      createProfileButton.get(0).click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addPatient');
        var popup = element(by.css('.popup'));
        expect(popup.isDisplayed()).toBeTruthy();
      });

    });
  });
});