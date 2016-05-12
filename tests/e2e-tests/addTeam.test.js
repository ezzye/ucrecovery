"use strict";

describe('clicking on add team button ',function() {

  var addTeamButton;

  beforeEach(function() {
    browser.get('/#/side-menu21/teamProfile');
    addTeamButton = element(by.linkText('Add New Team'));
  });

  it('it should show the add team new team page when add team button pressed',function() {

  });

});

describe('clicking on the create profile button',function() {

  var createProfileButton, teamName, teamLoction;

  beforeEach(function() {
    browser.get('/#/side-menu21/addTeam');
    teamName = element(by.model('team.name'));
    teamLoction = element(by.model('team.location'));
    createProfileButton = element(by.css('.button.button-block.button-positive'));
  });

  it('should validate all fields filled in and display team profile',function() {
    teamName.sendKeys('First test team');
    teamLoction.sendKeys('Hospital ward A');

    createProfileButton.click().then(function() {
      expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/teamProfile');
    });

    //should test content of team profile page

  });

  it('should show pop up if all fields not filled in',function() {
    teamName.sendKeys('');
    teamLoction.sendKeys('');

    createProfileButton.click().then(function() {
      expect(browser.getLocationAbsUrl()).toMatch('/side-menu21/addTeam');

      var popup = element(by.css('.popup-container.popup-showing.active'));
      expect(popup.isDisplayed()).toBeTruthy();

    });

  });

});