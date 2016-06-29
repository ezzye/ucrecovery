"use strict";

describe('uploadPhotoCtrl', function(){

	var scope;

	var controller;

	beforeEach(module('app'));

	beforeEach(inject(function($controller, $rootScope){
		scope = $rootScope.$new();

		controller = $controller('uploadPhotoCtrl', {
			$scope: scope
		});
	}));

	it('has an upload function', function(){
		expect(controller.upload).toBeAFunction;
	});
});