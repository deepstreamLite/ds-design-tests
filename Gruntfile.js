module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			tasks: [ 'build' ],
			files: [ './index.html', './less/**' ],
			options: { livereload: 5051 },
		},
		clean: {
			css: {
				src: './css/*'
			}
		},
		less: {
			dev: {
				files: {
					'./css/screen.css': './less/main.less'
				}
			}
		},
		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                    	'./index.html',
                        './css/*.css'
                    ]
                },
                options: {
                    watchTask: true,
                    proxy: 'local.dev'
                }
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask( 'build', [ 'less:dev' ] );
	grunt.registerTask( 'default', [ 'build', 'browserSync', 'watch' ] );

};