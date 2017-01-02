module.exports = {
	scripts: {
		src: [
			'<%= config.src.app %>cocodor.js',				// Core module
			'<%= config.src.app %>cocodor-controller.js',	// Core controller
			'<%= config.src.app %>**/*.js',				// Module parts
			'!<%= config.src.app %>**/*.spec.js'		// Exclude Jasmine specs
		],
		dest: '<%= config.dist.root %>cocodor.js'
	},
	dist: {
		src: [
			'<%= config.src.vendor %>modernizr.js',
			'<%= config.src.vendor %>jquery.js',
			'<%= config.src.vendor %>angular.js',
			'<%= config.src.vendor %>angular-ui-router.js',
			'<%= config.src.vendor %>angulartics.js',
      '<%= config.src.vendor %>angulartics-ga.js',
      '<%= config.src.vendor %>ngStorage.js',
      '<%= config.src.vendor %>colors.js'
		],
		dest: '<%= config.dist.root %>vendor.js'
	}
};
