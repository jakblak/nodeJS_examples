var gulp = require('gulp'),
    del = require('del'),
    sequence = require('run-sequence'),
    libPath = 'public/lib',
    nodeModulesPath = 'node_modules';

gulp.task('clean', function () {
  return del(libPath + '/**/*', { force: true });
});

gulp.task('copy:libs', function (done) {
    sequence('clean', 'copy:vendor', 'copy:rxjs', 'copy:angular', 'copy:bootstrap', 'copy:socketIO', done);
});

gulp.task('copy:vendor', function() {
  return gulp
    .src([
      nodeModulesPath + '/core-js/client/**/*',
      nodeModulesPath + '/zone.js/dist/zone.js',
      nodeModulesPath + '/reflect-metadata/**/*',
      nodeModulesPath + '/systemjs/dist/system-polyfills.js',
      nodeModulesPath + '/systemjs/dist/system.src.js'])
    .pipe(gulp.dest(libPath));
});

gulp.task('copy:rxjs', function() {
  return gulp
    .src([nodeModulesPath + '/rxjs/**/*'])
    .pipe(gulp.dest(libPath + '/rxjs'));
});

gulp.task('copy:angular', function() {
    return gulp
       .src([nodeModulesPath + '/@angular/**/*'])
       .pipe(gulp.dest(libPath + '/@angular'));
});

gulp.task('copy:bootstrap', function() {
    return gulp
      .src([nodeModulesPath + '/bootstrap/**/*'])
      .pipe(gulp.dest(libPath + '/bootstrap'));
});

gulp.task('copy:socketIO', function() {
    return gulp
       .src([nodeModulesPath + '/socket.io-client/**/*'])
       .pipe(gulp.dest(libPath + '/socket.io-client'));
});

gulp.task('default', ['copy:libs']);