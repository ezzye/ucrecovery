"use strict";

describe('showing staff profile page ',function() {

  var addNewStaffProfileButton;

  beforeEach(function() {
    browser.get('http://localhost:8100/#/side-menu21/staffProfiles');

    addNewStaffProfileButton = element(by.linkText('Add New Staff Profile'));

    // set elemenets to parts of ng-repeat on page

  });

  it('should show staff profiles on page',function() {

    // expect elements to each specific items

    expect();


  });

  it('should show add new staff profile when add new staff button pressed',function() {
    addNewStaffProfileButton.click().then(function() {
      expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addStaff');
    });

  });

  it('show a staff record', function(){
    browser.get('http://localhost:8100/#/side-menu21/staffProfiles');
    var staffMember = element(by.repeater('staff in staffmems')).getText();
    // expect(staffMember).toEqual('Mr Test');
  });

});