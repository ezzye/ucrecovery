"use strict";

describe('showing staff profile pages ',function() {

  var addNewStaffProfileButton, createProfileButton;
  var staffContact, staffRole, staffTeam, staffName;

  describe('Staff profile page',function() {

    beforeEach(function() {
      browser.get('/#/side-menu21/staffProfiles');
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
      browser.get('/#/side-menu21/addStaff');
      createProfileButton = element(by.id('addNewStaff-button112'));
      staffContact = element(by.model('staff.contact'));
      staffRole = element(by.model('staff.role'));
      staffTeam = element(by.model('staff.team'));
      staffName = element(by.model('staff.name'));
    });

    it('add a staff record', function(){
      staffName.sendKeys('James Brown');
      staffRole.$('[value="Doctor"]').click();
      staffTeam.$('[value="Example Team 1"]').click();
      staffContact.sendKeys('111 999');
      createProfileButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/staffProfiles');
        expect(element.all(by.repeater('staff in staffmems')).count()).toEqual(3);
      });
    });

    it('should show pop up if all fields not filled in',function() {
      staffName.sendKeys('');
      staffRole.$('[value="Doctor"]').click();
      staffTeam.$('[value="Example Team 1"]').click();
      staffContact.sendKeys('');
      createProfileButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addStaff');
        var popup = element(by.css('.popup-container.popup-showing.active'));
        expect(popup.isDisplayed()).toBeTruthy();
      });
    });
  });


});
