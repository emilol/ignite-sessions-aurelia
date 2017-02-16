import gulp from 'gulp';
import merge from 'merge-stream';
import project from '../aurelia.json';
import path from 'path';

export default function prepareMaterialize() {

  let source = 'node_modules/materialize-css/dist';
  let sourceStyle = path.join(source, 'css');
  let sourceFonts = path.join(source, 'fonts/roboto');

  let taskCss = gulp.src(path.join(sourceStyle, 'materialize.min.css'), { base: sourceStyle })
    .pipe(gulp.dest('scripts/css'));

  let taskFonts = gulp.src(path.join(sourceFonts, '*'), { base: sourceFonts })
    .pipe(gulp.dest('scripts/fonts/roboto'));

  return merge(taskCss, taskFonts);
}
