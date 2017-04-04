const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('default',['assets'], () => {
  console.log('Gulp default is working!');
});

gulp.task('assets', () => {
  //js files
  gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/tether/dist/js/tether.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.min.js',
    './node_modules/jquery/dist/jquery.min.js'
    ])
  .pipe(concat('assets.js'))
  .pipe(gulp.dest('./src/assets/js'));
  //css files
  gulp.src(['./node_modules/bootstrap/dist/css/bootstrap.min.css'])
  .pipe(concat('assets.css'))
  .pipe(gulp.dest('./src/assets/css'));
});