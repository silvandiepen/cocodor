angular.module('cocodor')
	.controller('HomeController', ['$scope', 'colors', '$localStorage', '$sessionStorage', function($scope, colors, $localStorage, $sessionStorage) {
		'use strict';

		var self = this;
		self.hello = 'hello';

		angular.extend($scope, {
			color: {
				hex: '',
				cmyk: [],
				rgb: []
			},
			input: {
				code: '',
				type: ''
			},
			saved: [],
			$storage: $localStorage
		});

		self.initSaved = function initSaved() {
			if ($localStorage.saved.length > 0) {
				$scope.saved = $localStorage.saved;
				$scope.$applyAsync();
			}
		};
		self.initSaved();

		$scope.$watch('saved', function() {
			$localStorage.saved = $scope.saved;
		});

		$scope.$watch('input.code', function() {
			var input = $scope.input.code;
			if (self.checkType(input, 'hex') || self.checkType(input, 'rgb') || self.checkType(input, 'cmyk')) {
				$scope.input.valid = true;
			} else {
				$scope.input.type = '';
				$scope.bg = '';
				$scope.input.valid = false;
			}
		});


		self.checkType = function checkType(input, type) {
			switch (type) {
				case 'hex':
					if (colors.isHex(input)) {
						$scope.input.type = 'hex';
						self.setColor(input, 'hex');
						return true;
					}
					break;
				case 'rgb':
					if (colors.isRgb(input)) {
						$scope.input.type = 'rgb';
						self.setColor(input, 'rgb');
						return true;
					}
					break;
				case 'cmyk':
					if (colors.isCmyk(input)) {
						$scope.input.type = 'cmyk';
						self.setColor(input, 'cmyk');
						return true;
					}
					break;
			}
		};

		self.setColor = function setColor(input, type) {
			var value;
			switch (type) {
				case 'hex':
					value = input;
					break;
				case 'rgb':
					value = colors.rgbToHex(colors.returnRgb(input));
					break;
				case 'cmyk':
					value = colors.cmykToHex(colors.returnCmyk(input));
					break;
				default:
					value = input;
					break;
			}

			$scope.bg = colors.returnHex(value);
			$scope.color.hex = colors.returnHex(value);
			$scope.color.cmyk = colors.hexToCmyk(value);
			$scope.color.rgb = colors.hexToRgb(value);
			$scope.$applyAsync();
			console.log($scope.bg);
		};

		$scope.saveColor = function saveColor() {
			if ($scope.color.hex.length > 0) {
				$scope.saved.push($scope.color.hex);
			}
		};

		//	localStorageService.bind($scope.saved, 'colors');

	}]).filter('commify', [function(commify) {
		Object.size = function(obj) {
			var size = 0,
				key;
			for (key in obj) {
				if (obj.hasOwnProperty(key)) size++;
			}
			return size;
		};

		function commifyer(input) {
			var list = '';
			i = 0;
			angular.forEach(input, function(a, b) {
				i++;
				if (a === undefined) {
					return;
				}
				if (i < Object.size(input)) {
					list += a + ', ';
				} else {
					list += a;
				}
			});
			return list;
		}
		return commifyer;
	}]);
