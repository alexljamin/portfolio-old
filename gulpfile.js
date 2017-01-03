var gulp = require('gulp'),
    minifyCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename')
    browserSync = require('browser-sync').create();
    del = require('del');

gulp.task('clean:dist', function(){
    del.sync('./dist/*.*')
})

gulp.task('browserSync', function(){
    browserSync.init({
        server:{
            baseDir: './dist',
        },  
        port: 8080
    })
});

gulp.task('sass', function(){
    gulp.src('./src/*.sass')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('copy-files', function(){
    gulp.src("./src/*.html")
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
    gulp.src("./src/assets/*.*")
        .pipe(gulp.dest('./dist/assets'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', function(){
    gulp.watch('./src/*.sass', ['sass'])
    gulp.watch('./src/*.html', ['copy-files'])
});

gulp.task('default', ['clean:dist','browserSync', 'sass', 'copy-files', 'watch']);