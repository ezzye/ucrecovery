"use strict";

describe('uploadPhotoCtrl', function(){

	var scope;

	var controller;

	var galleryButtonClicked,
	    cameraButtonClicked,
	    cordovaFileMock,
	    ionicActionSheetMock,
	    imageServiceSpy,
	    fileServiceSpy,
	    formDataServiceMock;

	beforeEach(module('app'));

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();
		galleryButtonClicked = 0;
		cameraButtonClicked = 1;
		imageServiceSpy = {handleMediaDialogue: function() {} };
		spyOn(imageServiceSpy, "handleMediaDialogue").and.returnValue(true);
		fileServiceSpy = {avatar: function() {} };
		spyOn(fileServiceSpy, "avatar").and.returnValue('img/jstdrtinycat.jpg');
		cordovaFileMock = jasmine.createSpyObj('cordovaFile spy',['dataDirectory']);
		formDataServiceMock = jasmine.createSpyObj('formService spy',['addStaff', 'getRoles', 'getTeams', 'getidStaff', 'setPicture']);

		controller = $controller('uploadPhotoCtrl', {
			$scope: scope,
			ImageService: imageServiceSpy,
			formData: formDataServiceMock
		});
	}));

	it('has an upload function', function(){
		expect(scope.upload).toBeDefined();
	});

	it('has an avatar function', function(){
		expect(scope.avatar).toBeDefined();
	});

	it('has a getImage function', function(){
		expect(scope.getImage).toBeDefined();
	});

	describe('getImage', function(){
		it('calls handleMediaDialogue on Image service', function(){
			scope.getImage(galleryButtonClicked);
			expect(imageServiceSpy.handleMediaDialogue).toHaveBeenCalled();
		});
	});
});