var gulp = require('gulp'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    del = require('del'),
    sequence = require('run-sequence'),
    jsPath = 'public/app',
    jsDist = 'public/dist',
    cssPath = 'public/assets/css',
    cssDist = 'public/assets/css/dist',
    libPath = 'public/lib',
    nodeModulesPath = 'node_modules';

gulp.task('sass', function() {
    gulp.src(cssPath + '/*.scss')
        .pipe(plumber())
        .pipe(sass({ errLogToConsole: true }))
        .pipe(csso())
        .pipe(gulp.dest(cssDist));
});

gulp.task('clean', function () {
  return del(libPath + '/**/*', { force: true });
});

gulp.task('copy:libs', function (done) {
    sequence('clean', 'copy:vendor', 'copy:rxjs', 'copy:angular', 'copy:bootstrap', done);
});

gulp.task('copy:vendor', function() {
  return gulp.src([
      nodeModulesPath + '/core-js/client/**/*',
      nodeModulesPath + '/zone.js/dist/zone.js',
      nodeModulesPath + '/reflect-metadata/**/*',
      nodeModulesPath + '/systemjs/dist/system-polyfills.js',
      nodeModulesPath + '/systemjs/dist/system.src.js'
    ])
    .pipe(gulp.dest(libPath));
});

gulp.task('copy:rxjs', function() {
  return gulp.src([
      nodeModulesPath + '/rxjs/**/*'
    ])
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

gulp.task('compressScripts', function() {
    gulp.src([
        jsPath + '/**/*.js'
    ])
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDist));
});

gulp.task('watch', function() {

    gulp.watch(cssPath + '/*.scss', ['sass']);

    gulp.watch([
        jsPath + '/**/*.js', ['compressScripts']
    ]);

});

gulp.task('default', ['sass', 'compressScripts', 'watch']);

