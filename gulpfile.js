
const gulp = require ('gulp');
const concat = require ('gulp-concat');
const autoprefixer = require ('gulp-autoprefixer');
const cleanCSS = require ('gulp-clean-css');
var watch = require ('gulp-watch');
const browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var imgCompress = require('imagemin-optipng');
const cssFiles = [
				'./node_modules/normalize.css/normalize.css',
				'./src/css/style.css',
				'./src/css/media.css'
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
				.pipe(gulp.dest('./buid/css'))
				.pipe(browserSync.stream());

}


function watch(){
			browserSync.init({
	        server: {
	            baseDir: "./"
	        }
	    	});

	    	gulp.watch('./src/img/**');
	        gulp.watch('./src/css/style.css', styles);
	        gulp.watch('./src/css/media.css');
			gulp.watch('./*.html').on('change', browserSync.reload);
}


gulp.task('asyncImgCompress', done => {
    return gulp.src('./src/img/**')
  			.pipe(imagemin({
  				progressive: true
  			}))
  			.pipe(gulp.dest('./buid/img/'));
    done();
});

gulp.task('styles', styles);
// gulp.task('watch', watch);

