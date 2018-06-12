var gulp = require('gulp');
var watch = require('gulp-watch')

gulp.task('default', function() {
  console.log("Hooray!")
})

gulp.task('html', function() {
  console.log('html')
})

gulp.task('styles', function() {
  console.log("styles!")
})

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html')
  })
  watch('./app/assets/styles/styles.css', function() {
    gulp.start('styles')
  })
})
