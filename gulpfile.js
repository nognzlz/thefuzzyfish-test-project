var gulp = require('gulp');
var dest = require('gulp-dest');
var minify = require('gulp-minify');

gulp.task('compress', function() {
	gulp.src('angular_components/*.js')
		.pipe(minify({
        	ext:{
           		src:'-debug.js',
           		min:'.js'
        	},
        	ignoreFiles: ['.combo.js', '-min.js']
    	}))
    	.pipe(gulp.dest('public'))
})

gulp.task('default', function() {
  // place code for your default task here
});