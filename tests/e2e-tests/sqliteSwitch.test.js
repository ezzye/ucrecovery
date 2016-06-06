"use strict";

describe('SQLite environment switch',function() {
  //arrange
  beforeEach(function(){
    browser.get('/#/side-menu21/teamProfile');
  });

  it('environment should be web', function() {
    //act and assert
    expect(element(by.tagName('p')).isPresent()).toBe(true);
      element(by.tagName('p')).getText().then(function(name){
        expect(name).toBe('web');
    });
  });
});
