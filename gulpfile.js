const { series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');

function clean(cb){
    console.log("clean")
    cb()
}

function build(cb){
    console.log("build")
    cb()
}

exports.build = build;
exports.default = series(clean, build);
gulp.task('cache',function(){
    return gulp.src('./scss/a.scss',{cache:true}).pipe(gulp.dest('./dist/css'))
});


/**
 * overwrite
 * @link:https://github.com/gulpjs/gulp/issues/267
 * **/
gulp.src('./app/**/*.js', {base: './'}).pipe(gulp.dest('./'));
