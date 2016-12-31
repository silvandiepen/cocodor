module.exports = {
	dev: {
		options: {
			append: true,
			module: 'cocodor'
		},
		cwd: '<%= config.src.app %>',
		src: [
			'**/*.html',
			'!*.html'
		],
		dest: '<%= config.dist.root %>cocodor.js'
	},
	dist: {
		options: {
			append: true,
			module: 'cocodor',
			htmlmin: {
				removeComments: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true
			}
		},
		cwd: '<%= config.src.app %>',
		src: [
			'**/*.html',
			'!*.html'
		],
		dest: '<%= config.dist.root %>cocodor.js'
	}
};
