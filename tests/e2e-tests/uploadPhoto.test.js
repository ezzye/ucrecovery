"use strict";

describe('uploading a photo', function(){

	var uploadButton, selectFromGalleryButton, takeWithCameraButton;

	beforeEach(function(){
		browser.get('/#/side-menu21/uploadPhoto');
		uploadButton = element(by.id('upload'));
		selectFromGalleryButton = element(by.id('gallery'));
		takeWithCameraButton = element(by.id('camera'));
	});

	it('should have a button to select a photo stored on the device', function(){
		expect(selectFromGalleryButton).toBeDefined();
	});

	it('should have a button to take a photo with the device camera', function(){
		expect(takeWithCameraButton).toBeDefined();
	});
});