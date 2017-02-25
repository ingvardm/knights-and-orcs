const gulp = require('gulp');
const minifyCSS = require('gulp-csso');
const importCss = require('gulp-cssimport');
const concat = require('gulp-concat');
const mustache = require('gulp-mustache');
const exec = require('child_process').exec;
const http = require('http');
const express = require('express');
const ecstatic = require('ecstatic');
const fs = require('fs');

const dist = 'dist/';
const port = 80;
const getTimestamp = function(){return Date.now()};

gulp.task('serve', function(){
    let app = express();
    app.use(ecstatic({ root: __dirname + '/' + dist }));
    http.createServer(app).listen(port);

    console.log('Listening on :' + port);
});

gulp.task('servedev', function(){
    let app = express();
    app.use(ecstatic({ root: __dirname + '/src' }));
    http.createServer(app).listen(port);

    console.log('Listening on :' + port);
});

gulp.task('watch', function() {
    gulp.watch('src/css/*.css', ['css', 'html']);
    gulp.watch(['src/templates/*.html', 'strings.json'], ['html']);
    gulp.watch('src/js/*.js', ['scripts', 'html']);
});

gulp.task('scripts', function () {
    return gulp.src(['src/js/*.js'])
        .pipe(gulp.dest(dist + 'js'))
});

gulp.task('css', function () {
    return gulp.src('src/css/*.css')
        // .pipe(importCss())
        // .pipe(mustache({timestamp: getTimestamp()}))
        // .pipe(minifyCSS())
        .pipe(gulp.dest(dist + 'css'))
});

gulp.task('html', function () {
    let strings = JSON.parse(fs.readFileSync('./strings.json'));
    strings.timestamp = getTimestamp();
    return gulp.src([
        'src/templates/index.html'
    ])
    .pipe(concat('index.html'))
    .pipe(mustache(strings))
    .pipe(gulp.dest(dist));
});

gulp.task('build', ['html', 'css', 'scripts']);
// gulp.task('dev', ['build', 'serve', 'watch']);
gulp.task('dev', ['servedev']);

gulp.task('default', ['build']);