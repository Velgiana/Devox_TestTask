
const gulp = require ('gulp');
const concat = require ('gulp-concat');
const autoprefixer = require ('gulp-autoprefixer');
const cleanCSS = require ('gulp-clean-css');
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

gulp.task('asyncImgCompress', done => {
    return gulp.src('./src/img/**')
  			.pipe(imagemin({
  				progressive: true
  			}))
  			.pipe(gulp.dest('./buid/img/'));
    done();
});

gulp.task('styles', styles);

