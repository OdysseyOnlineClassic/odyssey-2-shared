const gulp = require('gulp');
const mocha = require('gulp-mocha');

gulp.task('default', gulp.series(test));

function test() {
  return gulp.src(['test/**/*.spec.ts'], { read: false })
    .pipe(mocha({
      require: 'ts-node/register'
    }));
}
