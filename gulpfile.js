const gulp = require ('gulp');
const concat = require ('gulp-concat');
const autoprefixer = require ('gulp-autoprefixer');
const cleanCSS = require ('gulp-clean-css');
const watch = require ('gulp-watch');
const browserSync = require('browser-sync').create();
const cssFiles = [
				'./node_modules/normalize.css/normalize.css',
				'./src/css/media.css',
				'./src/css/style.css',
				'./src/img/*.png'
				];


function styles(){
	return gulp.src(cssFiles)
				.pipe(concat('all.css'))
				.pipe(autoprefixer({
		            overrideBrowserslist: ['> 0.1%'],
		            cascade: false
		        }))
		        .pipe(cleanCSS({
		        	level: 2
				}))
				.pipe(gulp.dest('./buid/css'));
				.pipe(browserSync.stream());

}

function watch(){
			browserSync.init({
	        server: {
	            baseDir: "./"
	        }
	    	});
	        gulp.watch('./src/css/style.css');
	        gulp.watch('./src/css/media.css');
			gulp.watch("./*.html").on('change', browserSync.reload);
}


gulp.task('styles', styles);
gulp.task('watch', watch);
gulp.task('watch', watch);

