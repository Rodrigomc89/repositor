const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
imagemin = require('gulp-imagemin'),
uglify = require('gulp-uglify'),
cssmin = require('gulp-cssmin'),
rename = require('gulp-rename');

//SCSS-CSS
  gulp.task('sass', () =>
   gulp.src('./scss/*.scss')
   .pipe(sass({
     outputStyle:'compressed',
     sourceComments:true
   }))
   .pipe(autoprefixer({
     versions:['last 2 browsers']
   }))
   .pipe(gulp.dest('./css'))
);
//COMPRIMIR IMAGEM
  gulp.task('image', () =>
   gulp.src('./img/*')
   .pipe(imagemin())
   .pipe(gulp.dest('./img'))
);
//UGLIFY
  gulp.task('uglify', () =>
   gulp.src('./js/*.js')
   .pipe(uglify())
   .pipe(gulp.dest('./js'))
);
//CSSMIN
gulp.task('cssmin', function () {
    gulp.src('./css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./css'));
});
gulp.task('default', () => {
  gulp.watch('./scss/*.scss', ['sass']);
  gulp.watch('./css/*.css', ['cssmin']);
  gulp.watch('./js/*.js', ['uglify']);
  gulp.watch('./img/*', ['image']);
});
