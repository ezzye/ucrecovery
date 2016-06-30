"use strict";

describe('uploading a photo', function(){

	var uploadButton, selectFromGalleryButton, takeWithCameraButton, staffAvatar;

	beforeEach(function(){
		browser.get('/#/side-menu21/uploadPhoto');
		uploadButton = element(by.id('upload'));
		selectFromGalleryButton = element(by.id('gallery'));
		takeWithCameraButton = element(by.id('camera'));
		staffAvatar = element(by.id('avatar'));
	});

	it('should have a button to select a photo stored on the device', function(){
		expect(selectFromGalleryButton).toBeDefined();
	});

	it('should have a button to take a photo with the device camera', function(){
		expect(takeWithCameraButton).toBeDefined();
	});

	it('should display a photo when one is selected from the "Photo Gallery"', function(){
		var drtinycat = 'img/jstdrtinycat.jpg';
		selectFromGalleryButton.click().then(function(){	
			expect(staffAvatar).toMatch(drtinycat);
		});
	});
});