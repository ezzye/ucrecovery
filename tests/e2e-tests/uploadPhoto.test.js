"use strict";

describe('uploading a photo', function(){
	beforeEach(function(){
		browser.get('/#/side-menu21/uploadPhoto');
		uploadButton = element(by.id('upload'));
		selectFromGalleryButton = element(by.id('gallery'));
	});

	it('should have a button to select a photo stored on the device', function(){
		expect(selectFromGalleryButton).toBeDefined();
	});
});