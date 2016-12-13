var gulp = require('gulp'),
    minifyCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

gulp.task('browserSync', function(){
    browserSync.init({
        server:{
            baseDir: './',
        },  
        port: 8080
    })
});

gulp.task('sass', function(){
    gulp.src('*.sass')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('html', function(){
    gulp.src("*.html")
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', function(){
    gulp.watch('*.sass', ['sass'])
    gulp.watch('*.html', ['html'])
    
});

gulp.task('default', ['browserSync', 'sass', 'html', 'watch']);