"use strict";

describe('Team profile pages',function() {

  var addTeamButton, createProfileButton;
  var teamName, teamLocation;

  describe('showing team profile pages',function() {

    beforeEach(function() {
      browser.get('/#/side-menu21/teamProfile');
      addTeamButton = element(by.linkText('Add New Team'));
    });

    it('should show team profiles on page',function() {
      expect(element.all(by.repeater('team in teams')).count()).toEqual(2);
    });

    it('it should show the add team new team page when add team button pressed',function() {
      addTeamButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addTeam');
      });
    });
  });

  describe('add Team page',function() {

    beforeEach(function() {
      browser.get('/#/side-menu21/addTeam');
      teamName = element(by.model('team.name'));
      teamLocation = element(by.model('team.location'));
      createProfileButton = element(by.css('.button.button-block.button-positive'));
    });

    it('should add a team profile',function() {
      teamName.sendKeys('First test team');
      teamLocation.sendKeys('Hospital ward A');
      createProfileButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/teamProfile');
        expect(element.all(by.repeater('team in teams')).count()).toEqual(3);
      });
    });

    it('should show pop up if all fields not filled in',function() {
      teamName.sendKeys('');
      teamLocation.sendKeys('');
      createProfileButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addTeam');
        var popup = element(by.css('.popup'));
        expect(popup.isDisplayed()).toBeTruthy();
      });
    });
  });
});