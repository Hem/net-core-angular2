/// <binding AfterBuild='on-post-build' Clean='on-clean' />
var gulp = require('gulp');
var runSeq = require('run-sequence');
var del = require('del');
var buildConfig = require('./gulp.config.js');



gulp.task('default', function () {
    // place code for your default task here
});



gulp.task('on-post-build', function (done) {
    runSeq( 'copy-app',
            'copy-vendor-js-to-wwwroot',
            'copy-styles',
            done);
});

gulp.task('on-clean', function (done) {
    runSeq( 'clean-vendor-js-in-root',
            'clean-vendor-css-in-root',
            'clean-app-in-root',
            done);
});




gulp.task('clean-vendor-js-in-root', function (done) {
    del(buildConfig.rootJsFolder, { force: true }).then(function () {
        done();
    });
});

gulp.task('clean-vendor-css-in-root', function (done) {
    del(buildConfig.rootCssFolder, { force: true }).then(function () {
        done();
    });
});

gulp.task('clean-app-in-root', function (done) {
    del(buildConfig.rootAppFolder, { force: true }).then(function () {
        done();
    });
});


// copy *.html, js, css to aap directory
gulp.task('copy-app', function () {
    return gulp.src([
        './angular2app/**/*.js',
        './angular2app/**/*.html',
        './angular2app/**/*.css',
    ]).pipe(gulp.dest(buildConfig.rootAppFolder));
});


gulp.task('copy-vendor-js-to-wwwroot', function (done) {
    runSeq(
        'copy-angular',
        'copy-rxjs',
        'copy-allOther',
        done);
});

gulp.task('copy-angular', function () {
    return gulp.src(buildConfig.sources.angularRC)
        .pipe(gulp.dest(buildConfig.rootJsFolder + '@angular/'));
});
gulp.task('copy-rxjs', function () {
    return gulp.src(buildConfig.sources.Rxjs)
        .pipe(gulp.dest(buildConfig.rootJsFolder + 'rxjs/'));
});
gulp.task('copy-allOther', function () {
    return gulp.src(buildConfig.sources.jsFilesInclSourcePaths)
        .pipe(gulp.dest(buildConfig.rootJsFolder));
});

gulp.task('copy-styles', function (done) {
    runSeq('copy-bootstrap', done);
});

gulp.task('copy-bootstrap', function () {
    return gulp.src(buildConfig.sources.bootstrap)
        .pipe(gulp.dest(buildConfig.rootCssFolder + "bootstrap/"));
});


// watch for changes and then copy the files over!!!
gulp.task('start-watch', function () {
    gulp.watch([
       './angular2app/**/*.js',
       './angular2app/**/*.html',
       './angular2app/**/*.css',
    ], ['copy-app']);
});