module.exports = {
	dev: {
		dest: '<%= config.src.vendor %>',
		options: {
			keepExpandedHierarchy: false,
			ignorePackages: [
				'what-input'
			],
			packageSpecific: {
				'angular': {
					files: [
						'angular.js'
					]
				},
				'angular-ui-router': {
					files: [
						'release/angular-ui-router.js'
					]
				},
				'jquery': {
					files: [
						'dist/jquery.js'
					]
				},
				'ngstorage': {
					files: [
						'ngStorage.js'
					]
				},
				'modernizr': {
					files: [
						'modernizr.js'
					]
				}
			}
		}
	}
};
