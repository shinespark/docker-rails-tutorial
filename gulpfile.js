'use strict';

var HAML_SRC  = './sample_app/app/views/**/*.haml';
var SCSS_SRC  = './sample_app/app/assets/stylesheets/**/*.scss';

var gulp = require('gulp');
var scsslint = require('gulp-scss-lint');
var bs = require('browser-sync').create();

// browser-sync
gulp.task('bs', function(){
  var bsOptions = {};
  bsOptions.files = [HAML_SRC, SCSS_SRC];
  bsOptions.proxy = 'localhost';
  bsOptions.port  = 3001;
  bs.init(bsOptions);
});


// scss-lint
gulp.task('scss-lint', function(){
  return gulp.src(SCSS_SRC)
    .pipe(scsslint());
});


// scss-watch
gulp.task('scss:watch', function(){
  var watcher = gulp.watch(SCSS_SRC, ['scss-lint']);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  });
});

gulp.task('default', ['bs', 'scss:watch']);
