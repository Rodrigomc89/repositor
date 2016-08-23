const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
imagemin = require('imagemin');
imageminJpegRecompress = require('imagemin-jpeg-recompress');

//CSS-SCSS
  gulp.task('sass', ()=>
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

gulp.task('default', () => {
  gulp.watch('./scss/*.scss', ['sass']);
});

//imgCompress
 gulp.task('imagemin', () =>
    gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./img'))
);
gulp.task('default', () => {
gulp.watch('./img/*', ['imagemin']);

});

imagemin(['img/*.jpg'], './img', {
    plugins: [
        imageminJpegRecompress()
    ]
}).then(() => {
    console.log('Images optimized');
});
