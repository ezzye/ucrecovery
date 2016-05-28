"use strict";

describe('showing staff profile pages ',function() {

  var addNewStaffProfileButton, createProfileButton;
  var staffContact, staffRole, staffName;

  describe('Staff profile page',function() {

    beforeEach(function() {
      browser.get('http://localhost:8100/#/side-menu21/staffProfiles');
      addNewStaffProfileButton = element(by.linkText('Add New Staff Profile'));
    });

    it('should show staff profiles on page',function() {
      expect(element.all(by.repeater('staff in staffmems')).count()).toEqual(2);
    });

    it('should show add new staff profile when add new staff button pressed',function() {
      addNewStaffProfileButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addStaff');
      });
    });
  });

  describe('Add staff page',function() {

    beforeEach(function() {
      browser.get('http://localhost:8100/#/side-menu21/addStaff');
      createProfileButton = element(by.css('.button.button-assertive.button-block.icon.ion-ios-person-outline'));
      staffContact = element(by.model('staff.contact'));
      staffRole = element(by.model('staff.role'));
      staffName = element(by.model('staff.name'));
      addPhotoButton = element(by.css("staffProfiles-button110"));
    });

    it('add a staff record', function(){
      staffName.sendKeys('James Brown');
      staffRole.sendKeys('Doctor');
      staffContact.sendKeys('111 999');
      createProfileButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/staffProfiles');
        expect(element.all(by.repeater('staff in staffmems')).count()).toEqual(3);
      });
    });

    it('should show pop up if all fields not filled in',function() {
      staffName.sendKeys('');
      staffRole.sendKeys('');
      staffContact.sendKeys('');
      createProfileButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addStaff');
        var popup = element(by.css('.popup-container.popup-showing.active'));
        expect(popup.isDisplayed()).toBeTruthy();
      });
    });

    it('should have a button to add a photo', function(){
      expect(addPhotoButton).toBeDefined;
    });
  });


});